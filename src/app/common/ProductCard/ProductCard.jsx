import './ProductCard.css';

const ProductCard = ({ title, year, price, image }) => {
	return (
		<div className={'bike-card__body'}>
			<div className='bike-card__wrapper'>
				<h1>{title}</h1>
			</div>
		</div>
	);
};

export default ProductCard;

{
	/* <div className={'bike-card__body'}>
      <div className="bike-card__wrapper">
        <img className={'bike-card__image'} src={image} alt=''/>
      </div>
    </div> */
}
