import { useEffect, useState } from 'react';
import bikes from '../../../api/db.json';
import NavBar from '../../common/NavBar/NavBar';
import ShoppingBar from '../../common/ShoppingBar/ShoppingBar';
import './Bikes.css';

const Bikes = () => {
	const [bike, setBike] = useState([]);

	useEffect(() => {
		setBike(bikes.products);
	}, []);

	return (
		<div className={'bikes-page__wrapper'}>
			<div className={'bike-page__container'}>
				<NavBar />
				{bike &&
					bike.map((bike) => {
						return (
							<main key={bike.id} className='page-content'>
								<div className='card'>
									<div className='content'>
										<h2 className='title'> {bike.title} </h2>
										<p className='copy'>Price: {bike.price} €</p>
										<button className='btn'>Add to cart</button>
									</div>
								</div>
							</main>
						);
					})}
			</div>
			<div className={'shopping-cart__container'}>
				<ShoppingBar />
			</div>
		</div>
	);
};

export default Bikes;

// {bike && bike.map((bike) => (
//   <ProductCard key={bike.id} title={bike.title} year={bike.year} price={bike.price} image={bike.image}/>
// ))}
