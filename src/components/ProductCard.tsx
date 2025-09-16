"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardData = [
  {
    id: "1",
    title: "End Mill Tool",
    src: "/images/ball.jpg",
  },
  {
    id: "2",
    title: "Micro Drill",
    src: "/images/micro-drill.jpg",
  },
  {
    id: "3",
    title: "Gun Drill",
    src: "/images/tool1.png",
  },
  {
    id: "4",
    title: "Brazed Carbide Tool",
    src: "/images/tool2.png",
  },
  {
    id: "5",
    title: "Reamer",
    src: "/images/tool3.png",
  },
  {
    id: "6",
    title: "Taper Drill",
    src: "/images/tool4.png",
  },
  {
    id: "7",
    title: "Special Tool",
    src: "/images/tool5.png",
  },
  {
    id: "8",
    title: "Step Drill",
    src: "/images/tool6.png",
  },
  {
    id: "9",
    title: "Slot Drill",
    src: "/images/tool7.png",
  },
  {
    id: "10",
    title: "Solid Carbide Drill",
    src: "/images/tool8.png",
  },
];

// const ProductGrid = () => {
//   return (
//     <div className="p-6  max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
//         {cardData.map((tool) => (
//           <Card key={tool.id} className="w-full  border-black">
//             <CardHeader>
//               <CardTitle>{tool.title}</CardTitle>
//               <CardDescription>Top-quality cutting tool</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <img
//                 src={tool.src}
//                 alt={tool.title}
//                 className="w-full h-full object-contain rounded-md"
//               />
//             </CardContent>
//             {/* <CardFooter className="text-sm text-muted-foreground">
//               Available | Contact for price
//             </CardFooter> */}
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ProductGrid;

// const ProductGrid = () => {
//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
//         {cardData.map((tool) => (
//           <Card key={tool.id} className="w-full border-black flex flex-col p-0 overflow-hidden gap-0">
//             <div className="bg-amber-500 px-6 py-4 rounded-t-md text-black  font-bold ">
//               <h1>{tool.title}</h1>
//               <p>Top-quality cutting tool</p>
//             </div>

//             <div className="flex-1 mt-0 ">
//               <img
//                 src={tool.src}
//                 alt={tool.title}
//                 className="w-full h-full object-contain rounded-b-md"
//               />
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ProductGrid;


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