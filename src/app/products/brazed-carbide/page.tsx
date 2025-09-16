import ProductCard from "@/components/ProductCard";
import React from "react";

const Page = () => {
  const cardData = [
    {
      id: "1",
      title: "Brazed Carbide Cutter",
      paragraph_text: "Engineered for durable slot cutting with precision. Ensures efficiency in tool setups.",
      src: "/images/BrazedCarbideCutters/brazed-cutter.png",
    },
  ];
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          cardData.map((tool)=>(
            <ProductCard key={tool.id} title={tool.title} paragraph_text={tool.paragraph_text} src = {tool.src} />
          ))
        }
      </div>
    </div>
  );
};

export default Page;
