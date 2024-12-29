import React, { useContext, useEffect } from 'react'
import { products } from '../assets/assets'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import { useState } from 'react'
import ProductItem from './ProductItem'
const BestSeller = () => {

    const {products} = useContext(ShopContext);

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
       const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }, [products]);


  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover the freshest designs and must-have stationery essentials!</p>
      </div>

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

{bestSeller.length > 0 ? (
  bestSeller.map((item, index) => (
    <ProductItem
      key={index}
      id={item._id}
      name={item.name}
      image={item.image}
      price={item.price}
    />
  ))
) : (
  <p className="text-center text-gray-500">No Best Sellers available.</p>
)}

</div>



    </div>
  )
}

export default BestSeller
