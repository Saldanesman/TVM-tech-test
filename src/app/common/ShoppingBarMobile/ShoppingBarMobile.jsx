import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { formatPrice } from '../formatPrice';
import close from '../../../assets/images/close.svg';
import './ShoppingBarMobile.css';

const ShoppingBarMobile = ({ isOpen, onChange }) => {
	const [productsLenght, setProductsLength] = useState(0);
	const { cartItems } = useContext(CartContext);

	useEffect(() => {
		setProductsLength(cartItems.reduce((prev, curr) => prev + curr.amount, 0));
	}, [cartItems]);

	const total = cartItems.reduce(
		(prev, curr) => prev + curr.amount * curr.price.replace('.', ''),
		0
	);

	return (
		<div className={`shopping-bar-mobile__wrapper ${isOpen && 'open'}`}>
			<div className={'shopping-bar-mobile__close'} onClick={() => onChange(false)}>
				<img className={'shopping-bar-mobile__close-icon'} src={close} />
			</div>
			<h1 className={'shopping-bar-mobile__num-products'}> Products: {productsLenght} </h1>
			{cartItems && (
				<div className={'shopping-bar-mobile__wrapper-list'}>
					{cartItems.length === 0 ? (
						<p className={'shopping-bar-mobile__cart-empty'}> The cart is empty </p>
					) : (
						<div className={'shopping-bar-mobile__list-products'}>
							{cartItems.map((item, i) => (
								<ItemCart key={i} item={item} />
							))}
						</div>
					)}
				</div>
			)}
			<div className={'shopping-bar-mobile__total__wrapper'}>
				<h1 className={'shopping-bar-mobile__total__price'}> Total: {formatPrice(total)}</h1>
			</div>
		</div>
	);
};

export default ShoppingBarMobile;
