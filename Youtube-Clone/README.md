# YouTube Clone

A YouTube-style video browsing app built with React. It loads popular videos by category, shows video details and comments, and lets you play videos and browse recommendations.

## Features

- Browse popular videos and filter them by category.
- Toggle the sidebar and scroll its contents independently.
- Play videos in an embedded YouTube player.
- View video statistics, channel details, and comments.
- Browse recommended videos.

## Built with

- React 19 and Vite
- React Router for page routing
- Tailwind CSS for styling
- Moment.js for relative dates
- YouTube Data API v3 for video, channel, and comment data

## Requirements

- Node.js and npm
- A Google API key with YouTube Data API v3 enabled

## Setup

1. Clone or download the repository and open a terminal in the `Youtube-Clone` folder:

   ```bash
   cd Youtube-Clone
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create an API key in Google Cloud Console. Enable **YouTube Data API v3** for the Google Cloud project, then create an API key.

4. In the `Youtube-Clone` folder (the same folder as `package.json`), create a file named **`data2.js`**. Add your own key in this format:

   ```js
   export const API_KEY = "YOUR_YOUTUBE_API_KEY";
   ```

   Replace `YOUR_YOUTUBE_API_KEY` with your key. This file is listed in `.gitignore`, so it stays local and is not included in Git commits. Do not remove the export or rename `API_KEY`; the app imports it in the feed, video player, and recommendations.

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite in your terminal.

## Other commands

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## API key safety

This app calls YouTube Data API v3 directly from the browser, so the key can be seen by users of the site. Treat it as a restricted browser key, not as a private secret: restrict it to the YouTube Data API v3 and, when deployed, to your website's allowed referrers. Keep your personal key out of source control. If a key has already been committed or exposed, revoke or rotate it in Google Cloud Console.

## Troubleshooting

- **The app reports that `data2.js` cannot be found:** create `Youtube-Clone/data2.js` as described above.
- **The API returns an authorization or quota error:** check that YouTube Data API v3 is enabled, the key is valid, and its restrictions allow requests from your app.
- **The video player is blank:** check that the selected YouTube video allows embedding.
