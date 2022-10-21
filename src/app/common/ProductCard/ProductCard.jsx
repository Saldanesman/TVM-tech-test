import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
// import camera from '../../../assets/images/camera.svg';
import './ProductCard.css';

const ProductCard = (props) => {
	const { addItemToCart } = useContext(CartContext);
	return (
		<div className={'cards'}>
			{/* <div className={'card'}>
				{props.image ? (
					<img className={'header__logo'} src={props.image} />
				) : (
					<img className={'header__logo'} src={camera} />
				)}
			</div> */}
			<div className={'text'}>
				{props.title && <h2 className={'bike-card__title'}> {props.title} </h2>}
				{props.price && <p className={'bike-card__price'}> {props.price} </p>}
				<button className={'bike-card__btn'} onClick={() => addItemToCart(props)}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;

// https://www.youtube.com/watch?v=9YhlGTC87tw&ab_channel=DevSense  <----- importatntisimo
// https://www.loginradius.com/blog/engineering/lazy-loading-in-react/
