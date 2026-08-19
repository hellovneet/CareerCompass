# Career Compass V5 
Developer: Vineet Sharma

## The Vercel error shown in the screenshot

The previous package contained this configuration:

`vercel.json -> functions -> api/colleges.js`

Vercel was rejecting that function pattern during build with:
"The pattern api/colleges.js defined in functions doesn't match any Serverless Functions..."

For this simple project, that configuration is unnecessary. Vercel automatically detects a function placed in the root `/api` directory, so the fixed package uses an empty `vercel.json` and keeps the function at:

`/api/colleges.js`

This directly addresses the build error.

## Deploy

1. Extract/upload this folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Other (or leave Vercel's detected setting).
4. Root Directory: the project root containing `index.html` and `api/`.
5. Build command: leave empty.
6. Output directory: leave empty.
7. Deploy.

The college endpoint becomes:
`https://YOUR-DOMAIN.vercel.app/api/colleges?state=Uttar%20Pradesh&limit=30`

## Important data note

The public college directory used by this no-key prototype is AISHE-derived and lists college names/locations, but it does NOT provide reliable current fee information for each institution. Therefore the UI must not claim an exact "low fee" amount from this source. Fees should be verified on official college websites.

The upstream repository also says its hosted RDS is discontinued/unmaintained. It is therefore suitable as a no-key prototype, not as the final production data source. The proxy makes it easy to replace later.

## Why this is safer

- No API key exposed in frontend.
- No `functions` pattern that causes the current build error.
- No invented fee figures.
- Graceful error if the public upstream is unavailable.
