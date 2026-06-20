# Angular Profile CV Style Portfolio

This Angular portfolio template is designed similar to a professional CV/resume website:

- Hero banner with profile photo, name, role, badges, social links, resume and cover letter buttons
- Professional summary with experience cards
- Right sidebar with technical skills, certifications, basic information, achievements, education, languages and hobbies
- Major projects with screenshot cards
- Professional experience timeline
- Floating WhatsApp contact button
- GitHub Pages workflow included

## Run locally

```bash
npm install
npm start
```

## Edit your details

Open:

```text
src/app/app.component.ts
```

Update these values:

```ts
profile
socialLinks
stats
summaryPoints
skills
certifications
achievements
education
languages
projects
experiences
```

## Replace images

Replace these files with your own images if needed:

```text
src/assets/profile-placeholder.svg
src/assets/certificate-placeholder.svg
src/assets/project-government-services.svg
src/assets/project-workflow.svg
src/assets/project-ai-search.svg
src/assets/badge-azure.svg
src/assets/badge-pmp.svg
```

For your own photo, keep the file name same or update this line in `app.component.ts`:

```ts
photo: 'assets/profile-placeholder.svg'
```

## Build

```bash
npm run build
```

## Publish to GitHub Pages

1. Push this project to GitHub.
2. Open repository Settings.
3. Go to Pages.
4. Select Source: GitHub Actions.
5. Push to the main branch.

The included workflow will publish automatically.
