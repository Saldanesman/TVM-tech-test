import logo from '../../../assets/images/logo.svg';
import './Home.css';

const Home = () => {
	return (
		<div >
			<img className={'home-logo'} src={logo} />
			<div className={'home-card'}>
				<h1 className={'home-title'}>
					Welcome to the technical test of Rubén Saldaña. To access the application, press the
					button below:
				</h1>
				<div className={'home-button-wrapper'}>
					<a className={'home-button'} href={'/bikes'}>
						Go!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
