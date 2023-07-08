import { products } from "@/Utils/mock"
import Quantity from "@/components/Quantity";
import Productcard from "@/components/ui/productcard"
import AddtoCart from "@/views/AddtoCart";
import { StaticImageData } from "next/image"
import Image from "next/image";

const GetProductbydetail=(id:number | string)=>{
return products.filter((product)=> product.id == id)
};
const sizes=["XS" ,"S" ,"M" ,"L" ,"XL"];
export default function Page({ params }: { params: { id: string } }) {
  const result= GetProductbydetail(params.id);
return( 
       <div className='flex  flex-wrap py-10 mt-10'>



{
  
  result.map((product)=>(
    <div  key={product.id} className="flex justify-between gap-6">
    {/* left image */}
    <div> 
      <Image src={product.image} alt={product.name}/>
    </div>
     {/* right content */}
     <div>
     <div>
      <h1 className="text-2xl">{product.name}</h1>
      <h2 className="text-base text-gray-400 font-semibold">{product.tagline}</h2>
    </div>
    <div>
      <h3 className="text-xs mt-6 font-bold">SELECT SIZE</h3>
    </div>
    {/*sizes*/}
    <div className="flex gap-x-4 mt-3"> 
{
  sizes.map((item)=>{
    return ( <div className=" center h-6 w-6 duration-300 border  bg-gray-200   rounded-full
     mt-2  hover:shadow-xl">
     <span className="text-[10px] text-center font-bold border  text-gray-600 ">
      {item}
      </span>
   </div>
      );
  })}
    </div>
{/* Quantity */}
<div className="flex gap-x-2 mt-6 items-center">
<h3 className="text-[15px] font-semibold">Quantity:</h3>
<Quantity/>
</div>
<div className=" center gap-x-5 mt-6">
    {/* Add to Cart */}
    <AddtoCart/>
    
    <h3 className="text-2xl font-bold">${product.price.toFixed(2)}</h3>
</div>
     </div>
     </div>
    ))}
  </div>
  )};