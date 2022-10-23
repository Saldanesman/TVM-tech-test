import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import imageNotFound from '../../../assets/images/imageNotFound';
import './ProductCard.css';

const ProductCard = (props) => {
	const { addItemToCart } = useContext(CartContext);

	const getImageError = (e) => { 
		e.currentTarget.onerror = null;
		e.currentTarget.src = imageNotFound;
	}

	return (
		<div className={'bike-card__wrapper'}>
			<div className={'bike-card__image'}>
				<img className={'bike-card__src'} src={props.image} onError={getImageError}/>
			</div>
			<div className={'bike-card__content'}>
				{props.title && <h2 className={'bike-card__title'}> {props.title} </h2>}
				{props.price && <p className={'bike-card__price'}> {props.price} € </p>}
				<button className={'bike-card__add-btn'} onClick={() => addItemToCart(props)}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
