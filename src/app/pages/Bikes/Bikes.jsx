import { useEffect, useState } from 'react';
import bikes from '../../../api/db.json';
import ProductCard from '../../common/ProductCard/ProductCard';

const Bikes = () => {
  const [bike, setBike] = useState([]);

  useEffect(() => {
    setBike(bikes.products);
  }, []);
 
  return (
    <div>
      {bike.map((bike) => (
        <ProductCard key={bike.id} title={bike.title} year={bike.year} price={bike.price} image={bike.image}/>
      ))}
    </div>
  );
};

export default Bikes;
