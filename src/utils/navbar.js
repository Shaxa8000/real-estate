import Home from '../pages/Home';
import Properties from '../pages/Properties';


export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element: <Home/>,
        private: false,
        hidden: false
    }, 
    {
        id: 2,
        title: 'Properties',
        path: '/properties',
        element: <Properties/>,
        private: false,
        hidden: false
    },
    {
        id: 3,
        title: 'Sign in',
        path: '/signin',
        element: <h1>Generic Sign in</h1>,
        private: false,
        hidden: true
    }
]