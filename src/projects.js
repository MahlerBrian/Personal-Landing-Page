// All project data lives here.
//
// To add a project: copy one of the objects below, paste it into the array,
// and edit the fields. The Projects section renders one entry per object
// automatically, so you never have to touch the JSX.
//
// Fields:
//   title       — project name (string)
//   description — 1–2 sentence summary (string)
//   tech        — list of technologies shown as tags (array of strings)
//   demo        — URL to a live demo, or "" to hide the Live demo link
//   source      — URL to the source code, or "" to hide the Source link

export const projects = [
  {
    title: '[PROJECT ONE]',
    description:
      'A short, plain-language description of what this project does and why it is interesting. Keep it to one or two sentences.',
    tech: ['React', 'Vite', 'CSS'],
    demo: 'https://example.com',
    source: 'https://github.com/[YOUR_USERNAME]/[REPO_ONE]',
  },
  {
    title: '[PROJECT TWO]',
    description:
      'Another concise description. Mention the problem it solves or the thing it demonstrates, not the implementation details.',
    tech: ['JavaScript', 'Node.js', 'API'],
    demo: 'https://example.com',
    source: 'https://github.com/[YOUR_USERNAME]/[REPO_TWO]',
  },
  {
    title: '[PROJECT THREE]',
    description:
      'A third example. Leave "demo" as an empty string ("") if a project has no live demo and the link will be hidden automatically.',
    tech: ['Python', 'CLI'],
    demo: '',
    source: 'https://github.com/[YOUR_USERNAME]/[REPO_THREE]',
  },
]
