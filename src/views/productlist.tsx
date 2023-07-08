import React from 'react' 

import Productcard from '@/components/ui/productcard'
import { products } from '@/Utils/mock'
import { StaticImageData } from 'next/image'
 

const Productlist = () => {
const Productchecks=products.slice(0,3);   

  return (
    <div className='flex justify-evenly mt-16 py-10'>
   {
    Productchecks.map((product)=>(
<Productcard
key={product.id} 
title={product.name}
 price={product.price} 
 img={product.image as StaticImageData}
 category={product.category}
 id={product.id}
 />

    ))}
       </div>
  );
};

export default Productlist;