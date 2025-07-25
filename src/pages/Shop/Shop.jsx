import { lazy, useEffect, useState } from 'react';
import './Shop.css';
const Carousel = lazy(() => import('../../components/Shop/Carousel/Carousel'));
const ProductCategory = lazy(() => import('../../components/Shop/ProductCategory/ProductCategory'));
const Product = lazy(() => import('../../components/Shop/Product/Product'));
const Marquee = lazy(() => import('../../components/Shop/Marquee/Marquee'));
import Loader from "../../components/Loader/Loader"

const Shop = () => {
  const [isActive, setActive] = useState("all_collection");

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds delay

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div className='shop'>
      <div className="advertisement">
      </div>
      <ProductCategory isActive={isActive} setActive={setActive} />
      <Product isActive={isActive} setActive={setActive} />
      <Marquee className="custom-scroll-text" />
      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={3000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
    </div>
  )
}

export default Shop