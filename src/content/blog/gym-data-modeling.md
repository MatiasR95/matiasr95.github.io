---
title: "I learned data modeling by trying not to go broke"
date: "2026-06-10"
excerpt: "A bounced payment taught me more about data modeling than any textbook ever did."
cover: "/blog/gym-data-modeling.png"
tags: ["data-modeling", "sql", "data-warehouse", "career"]
---
💸📊 A bounced payment taught me more about data modeling than any textbook ever did.

It happened in my gym. A member I thought was active had actually cancelled two weeks earlier — but she only existed as "cancelled" in one of my three spreadsheets. The other two still had her as paying. 😬

When the charge didn't go through, I had three different versions of the truth. And no idea which one to trust.

That's when it clicked. I wasn't just bad at Google Sheets — I had a data architecture problem. 🏗️

The fix was simpler than I expected:

🗂️ One table for members — one row per person, one source of truth.
💳 One table for payments — tied to members by ID.
📋 One table for attendance — same link, same ID.

Three tables. Zero ambiguity. ✅ Any question I had could only have one answer.

The gym ran a lot smoother after that. 🙌 And honestly? That same principle now guides how I think about every data model I touch — whether it's a side project or a full warehouse. 💡

A good model isn't about being sophisticated.
It's about trust. 🤝 That your numbers tell the same story no matter where you pull them from.

👉 What's the "broken payment" moment that made data modeling finally click for you? Drop it below — I'd love to hear it! 🚀

---

### En español

💸📊 Un pago rechazado me enseñó más sobre modelado de datos que cualquier curso.

En el gimnasio que fundé, tenía a la misma persona registrada como "activa" en dos planillas y como "baja" en otra. Cuando llegó el cobro: rechazado. 😬 Tres planillas, tres versiones distintas de la verdad.

La solución fue más simple de lo que imaginaba: una sola tabla por entidad — socios, pagos, asistencias — todas vinculadas por ID. Tres tablas, cero ambigüedad. ✅

Ese principio lo aplico igual hoy en cualquier proyecto de datos: un buen modelo no es sobre complejidad, es sobre confianza. Que los números cuenten la misma historia sin importar desde dónde los mires. 💡

👉 ¿A vos cuándo te hizo clic esto? 🙌

#DataAnalytics #DataWarehouse #SQL #DataModeling #CareerGrowth #ContinuousLearning
