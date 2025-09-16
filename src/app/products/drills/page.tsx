import ProductCard from '@/components/ProductCard';
import React from 'react'



const Page = () => {
    const cardData = [
  {
    id: "1",
    title: "Solid Carbide Step Drill",
    paragraph_text : "High-precision step drilling in one pass. Built from premium carbide for durability & accuracy.",
    src: "/images/Drills/Solid-Carbide-Step-Drill1.png",
  },
  {
    id: "2",
    title: "Micro Drill",
    src: "/images/Drills/Micro-Drills.png",
    paragraph_text : "Designed for ultra-fine drilling with precision. Delivers accuracy in delicate components.",
  },
  {
    id: "3",
    title: "Solid Carbide Tch Double Margin Long Drills",
    src: "/images/Drills/Solid-Carbide-Tch-Double-Margin-Long-Drills.png",
    paragraph_text : "Engineered for deep hole drilling with strength. Ensures reliability in tough materials.",
  },
  {
    id: "4",
    title: "Taper Step Subland Drill",
    src: "/images/Drills/Taper-Step-Subland-Drill-1.png",
    paragraph_text : "Designed for stepped drilling with precision. Provides stability in challenging workpieces.",
  },
  {
    id: "5",
    title: "Solid Carbide Tch Double Margin Drills",
    src: "/images/Drills/Solid-Carbide-Tch-Double-Margin-Drills.png",
    paragraph_text : "Built for high-precision drilling with strength. Ensures efficiency in demanding applications.",
  },
  {
    id: "6",
    title: "Carbide Center Drill",
    src: "/images/Drills/Carbide-Center-Drill.png",
    paragraph_text : "Designed for accurate centering with durability. Provides stability in starter holes.",
  },
  {
    id: "7",
    title: "Ratio Drills",
    src: "/images/Drills/Ratio-Drills.png",
    paragraph_text : "Engineered for precise hole sizing with efficiency. Ensures consistency in varied applications.",
  },
  {
    id: "8",
    title: "Bearing Cage Pocketing Drill",
    src: "/images/Drills/Bearing-Cage-Pocketing-Drill.png",
    paragraph_text : "Designed for precise pocketing with stability. Provides accuracy in bearing assembly tasks.",
  },
];
  return (
    <div className="p-6 max-w-7xl mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
       {
         cardData.map((tool)=>(
            <ProductCard key={tool.id} title={tool.title} paragraph_text={tool.paragraph_text} src={tool.src}/>
        ))
       }
    </div>
    </div>
  )
}

export default Page
