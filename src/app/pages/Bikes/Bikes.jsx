import { useEffect, useState } from 'react';
import bikes from '../../../api/db.json';
import { CartProvider } from '../../../context/CartContext';
import NavBarMobile from '../../common/NavBar/NavBar';
import ProductCard from '../../common/ProductCard/ProductCard';
import { FixedSizeList as List } from "react-window";
import './Bikes.css';

const Row = ({ index, style }) => (
  <div style={style}>
    <ProductCard key={bikes.products[index].id} {...bikes.products[index]} />
  </div>
);

const Bikes = () => {
	const [bike, setBike] = useState([]);

	useEffect(() => {
		setBike(bikes.products);
	}, []);

	return (
		<CartProvider>
			<div className={'bikes-page__wrapper'}>
				<div className={'bike-page__navbar'}>
					<NavBarMobile />
				</div>
				<div className={'bike-page__content'} data-testid={'bike-list'}>
					<List
						className="List"
						height={window.innerHeight}
						itemCount={bike.length}
						itemSize={500}
						width={window.innerWidth}
					>
						{Row}
					</List>
				</div>
			</div>
		</CartProvider>
	);
};

export default Bikes;
