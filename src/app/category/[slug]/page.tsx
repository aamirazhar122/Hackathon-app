import { products } from "@/Utils/mock"
import Productcard from "@/components/ui/productcard"
import { StaticImageData } from "next/image"

const GetProductbyCategory=(category:string)=>{
return products.filter((product)=>product.category===category)
};




export default function Page({ params }: { params: { slug: string } }) {
  const result= GetProductbyCategory(params.slug);
  return<div className='flex justify-evenly flex-wrap py-8'mt-10>

{
  result.length>0 ? result.map((product)=>(
    <Productcard
    key={product.id} 
    title={product.name}
     price={product.price} 
     img={product.image as StaticImageData}
     category={product.category}
     id={product.id}
     />
    )) : <p>No Products Found </p>
    }
  
  </div>
  
};