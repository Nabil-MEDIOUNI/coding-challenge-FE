<h1 align="center">
  Job Search
</h1>

Intro Description

# Essential rules

- Code must be linted and formatted
- Do not leave irrelevant trailing comments or commented code blocks
- Do not leave unused files or assets
- No inline style (except for less common instances when style linked to runtime logic)
- Image sizes must be web friendly (max 300kb unless rendered in a special vision mode)
- Don't use `eslint-disable` nor change config files for linting and formatting (except for rare agreed exceptions)
- Code must be pushed whenever possible, at least once every worked days
- Make sure code is tested both in dev and build mode before submitting to CI/CD `npm run serve`
- Make sure metadata is nice and sweet (favicon, SEO titles/desc, path names...etc.)
- Path names must be SEO friendly, sluggified localized when needed
- A website is considered incomplete as long as it's not W3C compliant (or almost compliant). Use the W3C validator.
- A website isn't considered efficient until at least Lighthouse says so (perf, SEO, image sizes...etc.).

# Setup

## Prerequisites

- Make sure you have an up-to-date NodeJS version (an LTS)
- Prefer Unix-based environments to Windows
- Preferably VSCode with recommended extensions supplied in `.vscode/extensions`

## Website setup

Start website in developer mode

```shell
cd website-repo-slug-name/
yarn start
```

**Important note** When adding dependencies or updating them, use `yarn` and not `npm`

# Generating conventional code templates

## Adding a component

### Page component

- `SomeComponent.tsx`: Standard component file
- `SomeComponent.css`: Standard `.css` style file for the component imported with the component implementation file
- `SomeComponent.stories.mdx`: MDX-based Storybook file for the component. Will be found in Storybook under the page group

### Shared component

- `SomeWidget.tsx`: Standard component file
- `SomeWidget.css`: Standard `.css` style file for the component imported with the component implementation file
- `SomeWidget.stories.mdx`: MDX-based Storybook file for the component. Will be found in Storybook under the **UIKit** group

# Folder structure

    .
    ├── public
    ├────── index.html
    .
    .
    .
    ├── src
    ├────── assets
    ├────── components
    ├── package.json => WARNING: You must inform project manager on the project group chat when installing extra-dependencies or updating ones
    ├──
    .
    .
    .
    ├──
    └── ...

# Linting and formatting

- Uses ESLint and Prettier working in pair together
- Linting and formatting are enforced (won't compile unless addressed)
- Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
- In fact, linting and formatting tasks are also
  installed as a pre-commit hook through Husky

# Solution

My machine is running on windows, and I'm facing a trouble running Docker so I couldn't use your API.

so I had to improvise and search for a GraphQL API similar to yours: `https://api.graphql.jobs/`.

I realize that filtering should be done with GraphQL inputs but the API I've found doesn't support that, it just filters countries. So I had to fetch all the data and filter on the client side.
