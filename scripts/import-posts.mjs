// Import published LinkedIn posts into the Astro blog collection.
//
// Reads ../LinkedIn Writer/posts/published/*.md (the PRIVATE content repo, local only),
// strips frontmatter, splits the EN body and the Spanish recap on the "— — —" divider,
// and writes one clean markdown entry per post to src/content/blog/<slug>.md.
//
// These posts are already public on LinkedIn, so republishing is safe. Run locally
// whenever new posts publish:  node scripts/import-posts.mjs
//
// Override the source dir with: POSTS_DIR="/abs/path/to/posts/published" node scripts/import-posts.mjs

import { readdir, readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const outDir = path.join(repoRoot, 'src', 'content', 'blog');
const publicBlogDir = path.join(repoRoot, 'public', 'blog');

const SRC =
  process.env.POSTS_DIR ||
  path.resolve(repoRoot, '..', 'LinkedIn Writer', 'posts', 'published');

// Where the post media renders live (sibling of posts/published in the content repo).
const rendersDir = path.resolve(SRC, '..', '..', 'assets', 'renders');

// --- tiny frontmatter parser (no deps) ---------------------------------------
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    let [, key, val] = kv;
    val = val.trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      data[key] = val.replace(/^["']|["']$/g, '');
    }
  }
  return { data, body: m[2] };
}

// strip trailing hashtag block + leading emoji for the excerpt
function makeExcerpt(enBody) {
  const firstPara =
    enBody
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith('#')) || '';
  const clean = firstPara
    .replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/u, '')
    .replace(/\s+/g, ' ')
    .trim();
  return clean.length > 200 ? clean.slice(0, 197).trimEnd() + '…' : clean;
}

// turn "• item" lines into markdown list items; keep everything else
function tidy(body) {
  return body
    .split(/\r?\n/)
    .map((l) => l.replace(/^\s*[•▪]\s+/, '- '))
    .join('\n')
    .trim();
}

function esc(s) {
  return String(s).replace(/"/g, '\\"');
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(`✖ Source posts dir not found: ${SRC}`);
    console.error('  Set POSTS_DIR to the path of your posts/published folder.');
    process.exit(1);
  }
  await mkdir(outDir, { recursive: true });
  await mkdir(publicBlogDir, { recursive: true });

  const files = (await readdir(SRC)).filter((f) => f.endsWith('.md'));
  let written = 0;

  for (const file of files) {
    const raw = await readFile(path.join(SRC, file), 'utf8');
    const { data, body: fullBody } = parseFrontmatter(raw);

    // Drop internal editor notes. LinkedIn post bodies never use Markdown
    // headings, so the first "## …" (e.g. "## Media options" / "## Why this works")
    // marks where the publishable text ends.
    const noteIdx = fullBody.search(/\n#{2,}\s+\S/);
    const body = noteIdx === -1 ? fullBody : fullBody.slice(0, noteIdx);

    // split EN vs ES recap on the divider (— — — or ---like dividers)
    const parts = body.split(/\n[—\-]\s?[—\-]\s?[—\-][^\n]*\n/);
    const en = tidy(parts[0] || body);
    const es = parts[1] ? tidy(parts[1]) : '';

    const slug = data.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
    const title = data.title || slug;
    const date = data.date || file.slice(0, 10);
    const tags = Array.isArray(data.topic_tags) ? data.topic_tags : [];
    const excerpt = makeExcerpt(en);

    // Cover image: prefer `media:` frontmatter, else the first renders/*.png in the body.
    let coverField = null;
    const mediaRef = data.media || (fullBody.match(/assets\/renders\/[\w-]+\.png/) || [])[0];
    if (mediaRef) {
      const srcImg = path.join(rendersDir, path.basename(mediaRef));
      if (existsSync(srcImg)) {
        await copyFile(srcImg, path.join(publicBlogDir, `${slug}.png`));
        coverField = `/blog/${slug}.png`;
      }
    }

    const front = [
      '---',
      `title: "${esc(title)}"`,
      `date: "${date}"`,
      `excerpt: "${esc(excerpt)}"`,
      ...(coverField ? [`cover: "${coverField}"`] : []),
      `tags: [${tags.map((t) => `"${esc(t)}"`).join(', ')}]`,
      '---',
      '',
    ].join('\n');

    const content =
      front +
      en +
      (es ? `\n\n---\n\n### En español\n\n${es}\n` : '\n');

    await writeFile(path.join(outDir, `${slug}.md`), content, 'utf8');
    written++;
    console.log(`✓ ${slug}.md`);
  }

  console.log(`\nDone — ${written} post(s) imported to src/content/blog/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
