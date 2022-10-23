import './NoMatch.css';

const NoMatch = () => {
	const link = 'https://c.tenor.com/0tv0M1mz0KUAAAAC/bike-fail.gif';
	return (
		<div className={'error-404__wrapper'}>
			<div className={'error-404__card'}>
				<img className={'error-404__gif'} src={link} alt='bike fail' />
				<h1 className={'error-404__title'}> Page 404 </h1>
				<div className={'error-404__button-wrapper'}>
					<a className={'error-404__button'} href={'/bikes'}>
						{' '}
						Go to Bikes page{' '}
					</a>
				</div>
			</div>
		</div>
	);
};

export default NoMatch;

// https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
