# Career Compass V5 — Vercel Deploy

Developer: Vineet Sharma

## What changed
- Career assessment
- Top 3 broad career directions
- State selection
- Budget-friendly preference
- Live college directory search through a Vercel serverless proxy
- No API key required by this project
- No fake college fees: current fees must be verified from official college sources

## Deploy
1. Upload this folder/repository to GitHub.
2. Import the repository into Vercel.
3. Deploy with the default settings.
4. The `/api/colleges` serverless function proxies the public college directory, so the browser does not directly call the external service.

Vercel's Hobby plan is currently free and includes Vercel Functions within its usage limits.

## Data caveat
The proxy currently uses the public `colleges-api.onrender.com` service, whose repository says its data is sourced from the Government of India's AISHE dataset. That project also states its hosted RDS was discontinued and the repository is not maintained, so this is a practical no-key prototype rather than a guaranteed permanent data source.

For production, replace the proxy upstream with a maintained official/open dataset and add verified course/fee sources.
