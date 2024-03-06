# Welcome to Remix + Vite + React Native Web!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

This app is a demonstration for the following features:
- Remix Vite integration with React Native Web with SSR support
  - Allows importing from react-native, e.g. import { View } from 'react-native'
  - Implements Platform extensions (.web.ts/.web.tsx over .ts/.tsx)
  - Implements SSR
    - const styles = StyleSheet.create({root: { height: '100%' }}) works without hydration mismatches or FOC
  - Demo of mobile-first SSR approach
    - useResponsive() hook returns mobile dimensions on SSR, then gets swapped to the correct one on hydration
      - RNW doesn't have built-in media queries (responsive layouts).
        - You can integrate nativewind/tamagui/react-strict-dom etc for SSR-safe responsive styling but this allows easier incremental adoption from SPA apps.
      - Inspired by https://tkdodo.eu/blog/avoiding-hydration-mismatches-with-use-sync-external-store

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
