# React + Tailwind + Eslint/Prettier

This template provides a basic setup to work with React (Vite), tailwind and uses a rocketseat config for eslint (with prettier plugin)

Currently, two official plugins are available:

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