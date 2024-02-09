import { Link } from 'react-router-dom';
import logo from '../assets/Image/logo_boikoi.png';
const Header = () => {
    return (
    <header className="p-4 dark:bg-red-600 dark:text-gray-100">
	<div className="container flex justify-between h-14 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			
            <img className="h-14 w-34" src={logo} alt=""/>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
			</li>
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Publications</Link>
			</li>
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Orders</Link>
			</li>
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Statistics</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;