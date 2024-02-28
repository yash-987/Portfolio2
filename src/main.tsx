import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AboutMe from './Pages/Aboutme/AboutMe.tsx';
import Home from './Pages/Home/Home.tsx';
import Projects from './Pages/Projects/Projects.tsx';
import SKill from './Pages/SKills/SKill.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './Pages/Contact/Contact.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element:<Home/>
		},
			{
				path: '/about',
				element: <AboutMe />,
			},
			{
				path: '/skills',
				element: <SKill />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
