"use client";

import {
  Card,
} from "@/components/ui/card";
 
 


type ProductCardProps ={
  title :string,
  src : string,
  paragraph_text : string
}
const ProductCard =({title ,paragraph_text,src}:ProductCardProps)=>{
 return(
  <Card className="w-full border-black flex flex-col p-0 overflow-hidden gap-0 dark:bg-[#1E1E1E] bg-[#F5F5F5] transition-transform duration:300 hover:scale-105 cursor-pointer">
            <div className="bg-amber-500 px-6 py-4 rounded-t-md text-black  font-bold " >
              <h1>{title}</h1>
              <p className="font-normal min-h-16">{paragraph_text}</p>
            </div>

            <div className="flex-1 mt-0 ">
              <img
                src={src}
                alt={title}
                className="w-full h-full object-contain rounded-b-md"
                
              />
            </div>
          </Card>
 );
}
export default ProductCard