import logo from '../../../assets/images/logo.svg';
import cart from '../../../assets/images/cart.svg';
import { useState } from 'react';
import ShoppingBarDesktop from '../ShoppingBarDesktop/ShoppingBarDesktop';
import ShoppingBarMobile from '../ShoppingBarMobile/ShoppingBarMobile';
import useViewport from '../../../hooks/useViewport';
import './NavBar.css';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { width } = useViewport();
	const breakpoint = 640;

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={'header__wrapper'}>
			<img className={'header__logo'} src={logo} />
			{width > breakpoint ? (
				<ShoppingBarDesktop />
			) : (
				<>
					<img className={'header__cart'} src={cart} onClick={() => handleOpen()} />
					<ShoppingBarMobile isOpen={isOpen} onChange={setIsOpen} />
				</>
			)}
		</header>
	);
};

export default NavBar;
