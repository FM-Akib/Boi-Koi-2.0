import { Link } from 'react-router-dom';
import logo from '../assets/Image/logo_booikoi.png';
import './Header.css';
import { useContext, useState } from 'react';
import { UserContext } from '../Layout/Layout';
const Header = () => {

	const [color,setcolor]= useState(false);
	const ChangeColor=()=>{
		if(window.scrollY>=90){
			setcolor(true);
		}
		else {
			setcolor(false);
		}
	}

	window.addEventListener('scroll',ChangeColor);



	const [user,setUser]=useContext(UserContext);
	console.log(user);


    return (
    <header className={color? 'header-bg  header-container':'header-container'}>
	<div className="container flex items-center justify-between h-14 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			
            <img className="h-14 w-34" src={logo} alt=""/>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to="/" className="flex items-center px-4 -mb-1  dark:border-transparent ">Home</Link>
			</li>
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Publications</Link>
			</li>
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Orders</Link>
			</li>
			<li className="flex">
				<Link to="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Statistics</Link>
			</li>
		</ul>
		{
			user ? <img className="flex items-center w-10 h-10 border rounded-full object-cover" src={user.photoURL}/> :
			<div className="items-center flex-shrink-0 hidden lg:flex">

		<Link to="/login"><button className="self-center px-8 py-3 rounded">Sign in</button></Link>	

			<Link to="/signup"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>
		</div>
		}
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