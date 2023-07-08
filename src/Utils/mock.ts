import { Product } from "./type"
import p1 from "/public/p1.webp"
import p2 from "/public/p2.webp"
import p3 from "/public/p3.webp"
import p5 from "/public/p5.webp"

export const products:Product []=[
    {
id:1,
name:"Product 1",
tagline:"Dress",
price:20,
category:"female",
image:p1,

},
{
    id:2,
    name:"Product 2",
    tagline:"Dress",
    price:30,
    category:"female",
    image:p2,
    },
    
        {
            id:4,
            name:"Product 4",
            tagline:"Dress",
            price:45,
            category:"male",
            image:p1,
            
            },
            {
                id:5,
                name:"Product 5",
                tagline:"Dress",
                price:50,
                category:"male",
                image:p3,
                
                },
                {
                    id:6,
                    name:"Product 6",
                    tagline:"Dress",
                    price:60,
                    category:"kids",
                    image:p5,
                    
                    },
                           
];
