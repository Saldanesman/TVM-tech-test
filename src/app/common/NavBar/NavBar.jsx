import logo from '../../../assets/images/logo.svg';
import cart from '../../../assets/images/cart.svg'
import { useState } from 'react';
import './NavBar.css';
import ShoppingBar from '../ShoppingBar/ShoppingBar';


const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	} 
	return (
		<header className={'header__wrapper'}>
			<img className={'header__logo'} src={logo} />
			<img className={'header__cart'} src={cart} onClick={() => handleOpen()}/>
			<ShoppingBar isOpen={isOpen} />
		</header>
	);
};

export default NavBar;
