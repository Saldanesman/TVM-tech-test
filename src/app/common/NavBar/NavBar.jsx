import logo from '../../../assets/images/logo.svg';
import './NavBar.css';

const NavBar = () => {
	return (
		<header className={'header__wrapper'}>
			<img className={'header__logo'} src={logo} />
		</header>
	);
};

export default NavBar;
