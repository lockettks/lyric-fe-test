# Lyric FE Test

React/Vite implementation of the Lyric Music take-home assignment. The app
renders a responsive band grid from local mock data, supports live search and
genre filtering, and includes a dismissible right-hand info panel.

## Requirements

- Node.js 20 or newer
- pnpm 10

This repo includes a `pnpm-lock.yaml` and declares the expected pnpm version in
`package.json`.

## Tech Stack

- React
- TypeScript
- Vite
- Styled Components
- React Icons

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Vite will print the local URL, usually:

```text
http://localhost:5173/
```

If that port is already in use, Vite will choose the next available port.

## Useful Commands

Run lint checks:

```bash
pnpm lint
```

Build the production bundle:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```


## Project Notes

- Band data is loaded from `mock_data/bands.json`.
- Individual band details are loaded from `mock_data/[id].json` when present.
- Band images are matched by ID from `sources/im[id].png`.
- Missing artwork falls back to `sources/default.png`.
- The right-hand info panel can be closed and reopened.
- Where the assignment requirements were ambiguous, reasonable implementation assumptions are documented below.
- The provided assets did not include a favicon, so I used the publicly available favicon from the Lyric website.

## Assumptions

A few aspects of the assignment were ambiguous. I reached out for clarification but did not receive a response before completing the exercise, so I made the following implementation decisions:

- Implemented the search bar and genre filters as functional, since the task description later specifies their expected behavior.
- Displayed the album name from `bands.json` and ignored the album field in the individual band detail files.
- Displayed each band's genre in place of a year because the mock data does not include dates, and the genre is useful for validating the filter behavior.
- Used the band's description from the individual detail JSON when available; otherwise the application displays "No description."
- Implemented the stretch goal by allowing the right-hand information panel to be dismissed and restored.


## Future Improvements

If this were a production application, the next areas I'd focus on would be:

- Automated unit and component tests.
- A shared design theme (colors, typography, spacing tokens).
- Improved accessibility (keyboard navigation and ARIA enhancements).

