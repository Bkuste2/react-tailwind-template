# React + Tailwind + Eslint/Prettier

This template provides a basic setup to work with React (Vite), tailwind and uses a rocketseat config for eslint (with prettier plugin)

- [@vite](https://vitejs.dev/)
- [@tailwind](https://tailwindcss.com/docs/guides/vite)
- [@eslint](https://eslint.org/)
- [@prettier](https://prettier.io/)
- [@rocketseat-eslint-config](https://github.com/Rocketseat/eslint-config-rocketseat.git)

<br/>

## To use this template you need to follow the next steps

```bash
git clone https://github.com/Bkuste2/react-tailwind-template.git
cd react-tailwind-template
yarn install
yarn dev
```

<br/>

## Aliases

These aliases are pre-configured in the project to help you with development

- @
- @pages
- @components
- @services
- @contexts
-	@helpers
- @types

If you want to create any alias, just follow the example below:

- `vite.config.ts`

```javascript
export default defineConfig({
  /* rest of your defineConfig function */
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // example
      'your_alias': resolve(__dirname, 'folder_path'),
    },
  },

})
```

- `tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "your_alias/*": ["folder_path/*"]
    }
  }
}
```

<br/>

## Snippets

### fc

Create a simple functional component initial setup

```javascript
export interface FilenameProps {}

export const Filename: React.FC<FilenameProps> = () => {
  return (
   <div className="">
     <h1>Filename</h1>
   </div>
  )
}
```

<br/>

### cs

Create all useState structure

```javascript
const [$1, set${2:$1}] = useState<$3>($4)
```