# Career Compass V6 — Working Vercel Build

Developer: Vineet Sharma

The previous build relied on colleges-api.onrender.com, whose repository is now marked discontinued/unmaintained. V6 removes that dependency.

V6 bundles a public 1,203-college dataset into data/colleges.json and searches it through the Vercel /api/colleges.js function. The dataset contains college name, city, state, type, UG fee estimate, average placement LPA, rating and NIRF rank.

The UI labels fee values as estimates and tells students to verify current fees, eligibility, courses and recognition on official institution websites.

Vercel setup:
- Framework: Other
- Build command: empty
- Output directory: empty
- Root directory: project root
- No API key required

The hero now has a visible Start Assessment button.
