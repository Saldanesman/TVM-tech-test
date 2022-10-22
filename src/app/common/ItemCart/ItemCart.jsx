import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { formatPrice } from '../formatPrice';
import './ItemCart.css';

const ItemCart = ({ item }) => {
	const { addItemToCart, deleteItemToCart } = useContext(CartContext);

	const total = formatPrice(item.amount * item.price.replace(".", ""));
	return (
		<div className={'items-cart__wrapper'}>
			<div className={'items-cart__top'}>
				<div className={'items-cart__amount'}>
					<h1 className={'items-cart__amount-num'}>{item.amount}</h1>
				</div>
				<div className={'items-cart__tooltip'}>
					{item.title}
					<span className={'items-cart__tooltip-text'}>{item.title}</span>
				</div>
			</div>
			<div className={'items-cart__bottom'}>
				<div className={'items-cart__buttons'}>
						<button className={'items-cart__button'} onClick={() => addItemToCart(item)}>
							+
						</button>
						<button className={'items-cart__button'} onClick={() => deleteItemToCart(item)}>
							-
						</button>
					</div>
				<p className={'items-cart__total'}> {total}  </p>
			</div>
		</div>
	);
};

export default ItemCart;
