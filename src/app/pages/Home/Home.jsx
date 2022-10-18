import './Home.css';
import logo from '../../../assets/images/logo.svg';

const Home = () => {
  return (
    <div className={'home-wrapper'}>
      <div className={'home-card'}>
        <img className={'home-logo'} src={logo}/>
        <h1 className={'home-title'}> Welcome to the technical test of Rubén saldaña. To access the application, press the button below: </h1>
        <div className={'home-button-wrapper'}>
          <a className={'home-button'} href={'/bikes'}> Go! </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
