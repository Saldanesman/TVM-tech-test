import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './ShoppingBar.css';

const ShoppingBar = () => {
	const [productsLenght, setProductsLength] = useState(0);
	const { cartItems } = useContext(CartContext);

	useEffect(() => {
		setProductsLength(cartItems.reduce((previous, current) => previous + current.amount, 0));
	}, [cartItems]);

	cartItems.map((item) => console.log(item.title));
	// const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);
	return (
		<div className={'shopping-bar__wrapper'}>
			<h1 className={'shopping-bar__title'}> Shopping Cart </h1>
			{cartItems && (
				<div>
					{cartItems.length === 0 ? (
						<p className={'shopping-bar__cart-empty'}> The cart is empty </p>
					) : (
						<div className={'productsContainer'}>
							{cartItems.map((item, i) => (
								<ItemCart key={i} item={item} />
							))}
						</div>
					)}
				</div>
			)}
			<div className={'shopping-bar__total__wrapper'}>
				<h1 className={'shopping-bar__total__title'}> Total: {productsLenght} </h1>
			</div>
		</div>
	);
};

export default ShoppingBar;

// https://www.youtube.com/watch?v=ywvsztMU_oM&ab_channel=Mauro
