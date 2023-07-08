 import React from 'react'
import { products } from '@/Utils/mock'
import Productcard from '@/components/ui/productcard'
import { StaticImageData } from 'next/image'; 


const AllProducts = () => {
return(

    <div className='flex justify-evenly flex-wrap py-8 mt-10'>
        {products.map((product)=>(
        <Productcard
        key={product.id} 
        title={product.name}
         price={product.price} 
         img={product.image as StaticImageData}
         category={product.category}
         id={product.id}
         />
        ))};
    </div>
)

};

export default AllProducts;