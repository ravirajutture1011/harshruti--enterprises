import ProductCard from "@/components/ProductCard";
import React from "react";

const Page = () => {
  const cardData = [
    {
      id: "1",
      title: "Solid Carbide Reamer",
      paragraph_text: "Designed for precision hole finishing with strength. Ensures accuracy in tight tolerances.",
      src: "/images/Reamers/Solid-Carbide-Reamer.png",
    },
    {
      id: "2",
      title: "Solid Carbide Injector Bore Reamer",
      paragraph_text: "Engineered for precision bore finishing with durability. Ensures accuracy in injector components.",
      src: "/images/Reamers/Solid-Carbide-Injector-Bore-Reamer.png",
    },
    {
      id: "3",
      title: "Combination Reamer",
      paragraph_text: "Designed for versatile hole finishing with precision. Ensures accuracy across multiple operations.",
      src: "/images/Reamers/Combination-Reamer.png",
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
