# fsd-lessons

![](https://img.shields.io/badge/architecture-%20Feature--Sliced%20Design-000000?style=flat)

A collection of examples that show how you can build applications with [Feature-Sliced Design](https://feature-sliced.design/).

Examples are build on _react_, _vite_, _typescript_, _tailwind_, _wouter_, _redux toolkit_, _redux toolkit query_ (_rtkq_), _reatom@v1000_, _radix ui_ and so on.

## Install

```bash
pnpm i --frozen-lockfile
```

## List

- **[packages/react-with-layouts](./packages/react-with-layouts)**
- **[packages/react-with-theme-toggler](./packages/react-with-theme-toggler)**
- **[packages/react-with-feature-flags](./packages/react-with-feature-flags)**
- **[packages/react-with-dialog-manager](./packages/react-with-dialog-manager)**
- **[packages/react-with-api](./packages/react-with-api)**
- **[packages/react-with-user-session](./packages/react-with-user-session)**

## Roadmap

- [ ] react-with-redux
- [ ] react-with-redux-toolkit-query
- [ ] react-with-i18n
- [ ] nextjs-app-router

(custom)

- [ ] custom-fractal-sub-slices
- [ ] custom-infrastructure-entities-layer
- [ ] custom-abstarct-widgets-layer
- [ ] custom-page-modals-layer
- [ ] custom-domains

(idk about this examples)

- [ ] react-with-zustand
- [ ] react-with-entities-@x
- [ ] react-with-render-slot
- [ ] react-with-page-sliced
- [ ] react-with-store-composition-root
- [ ] react-with-pub-sub-for-shared
- [ ] react-with-store-di

## Visualise dependencies with dependency-cruiser

```bash
pnpm add -D dependency-cruiser --filter {PACKAGE}
pnpm exec depcruise --init  
pnpm exec depcruise src --include-only "^src" --output-type dot | dot -T svg > dependency-graph.svg
```

## License

Licensed under the MIT license.
