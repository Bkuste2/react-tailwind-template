import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/home'

/* v6 https://reactrouter.com/en/main/upgrading/v6-data */

export const router = createBrowserRouter([
	{ path: '/', Component: Home },
	/* ... all other routes */
])
