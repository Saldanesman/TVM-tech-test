import { useEffect, useState } from 'react';
import bikes from '../../../api/db.json';
import { CartProvider } from '../../../context/CartContext';
import NavBar from '../../common/NavBar/NavBar';
import ProductCard from '../../common/ProductCard/ProductCard';
import ShoppingBar from '../../common/ShoppingBar/ShoppingBar';
import './Bikes.css';

const Bikes = () => {
	const [bike, setBike] = useState([]);

	useEffect(() => {
		setBike(bikes.products);
	}, []);

	return (
		<CartProvider>
			<div className={'bikes-page__wrapper'}>
				<div className={'bike-page__container'}>
					<NavBar />
					{bike &&
						bike.map((bike) => {
							return <ProductCard key={bike.id} {...bike} />;
						})}
				</div>
				<div className={'shopping-cart__container'}>
					<ShoppingBar />
				</div>
			</div>
		</CartProvider>
	);
};

export default Bikes;
