import { useQuery } from '@tanstack/react-query'

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const { data, isFetched } = useQuery({
		queryKey: ['getTodo'],
		queryFn: () => {
			return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
				(response) => response.json(),
			)
		},
	})

	return (
		<div className="">
			<h1>Home</h1>
			{isFetched && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</div>
	)
}
