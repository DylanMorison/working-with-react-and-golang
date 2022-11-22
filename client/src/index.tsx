import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import EditMovie from "./components/EditMovie"
import { ErrorPage } from "./components/ErrorPage"
import Genres from "./components/Genre"
import GraphQL from "./components/Graphql"
import Home from "./components/Home"
import Login from "./components/Login"
import ManageCataloge from "./components/ManageCatalogue"
import Movies from "./components/Movies"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/movies", element: <Movies /> },
			{ path: "/genres", element: <Genres /> },
			{ path: "/admin/movie/0", element: <EditMovie /> },
			{ path: "/admin", element: <ManageCataloge /> },
			{ path: "/graphql", element: <GraphQL /> },
			{ path: "/login", element: <Login /> }
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
