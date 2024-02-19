# Suroi Bot Next

The next generation of suroi bot

```sh
pnpm build # build to out.cjs
pnpm build --watch # build to out.cjs with file change watch
pnpm lint # lint and format

node out.cjs # run the bot
```

Make sure to add the token in your `src/config.ts`

```ts
export const CONFIG: Config = {
  token: "..."
}
// -- snip --
```