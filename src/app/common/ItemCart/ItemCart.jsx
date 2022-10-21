import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { formatPrice } from '../formatPrice';
import './ItemCart.css';

const ItemCart = ({ item }) => {
	const { addItemToCart, deleteItemToCart } = useContext(CartContext);

	const total = formatPrice(item.amount * item.price.replace(".", ""));
	return (
		<div className={'cartItem'}>
			<div className={'dataContainer'}>
				<div className={'left'}>
					<div className={'tooltip'}>
						{item.title}
						<span className={'tooltip-text'}>{item.title}</span>
					</div>
					<div className={'buttons'}>
						<button className={'item-cart__button'} onClick={() => addItemToCart(item)}>
							+
						</button>
						<button className={'item-cart__button'} onClick={() => deleteItemToCart(item)}>
							-
						</button>
					</div>
				</div>
				<div className={'right'}>
					<div className={'amount'}>{item.amount}</div>
					<p className={'total'}> {total}  </p>
				</div>
			</div>
		</div>
	);
};

export default ItemCart;
