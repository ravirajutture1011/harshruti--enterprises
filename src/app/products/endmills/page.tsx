import ProductCard from "@/components/ProductCard";
import React from "react";

const Page = () => {
  const cardData = [
    {
      id: "1",
      title: "Solid Carbide Endmill",
      paragraph_text: "Designed for high-precision cutting with strength. Ensures smoothness in metal machining.",
      src: "/images/Endmills/Solid-Carbide-Endmill.png",
    },
     {
      id: "2",
      title: "Ball Nose Endmill 4 Flute",
      paragraph_text: "Engineered for smooth contouring with precision. Provides efficiency in complex shapes.",
      src: "/images/Endmills/Ball-Nose-Endmill-4-Flute.png",
    },
     {
      id: "3",
      title: "Solid Carbide Hole Mill",
      paragraph_text: "Designed for accurate hole cutting with durability. Ensures efficiency in machining tasks.",
      src: "/images/Endmills/Solid-Carbide-Hole-Mill.png",
    },
     {
      id: "4",
      title: "Dovetail Cutter",
      paragraph_text: "Engineered for precise angled cuts with strength. Provides accuracy in joint making.",
      src: "/images/Endmills/Dovetail-Cutter.png",
    },
     {
      id: "5",
      title: "Ball Nose Endmill 2 Flute",
      paragraph_text: "Designed for smooth curved cutting with precision. Ensures control in intricate shapes.",
      src: "/images/Endmills/Ball-Nose-Endmill-2-Flute.png",
    },
     {
      id: "6",
      title: "Thread Mill ",
      paragraph_text: "Engineered for accurate thread cutting with strength. Provides consistency in internal threads.",
      src: "/images/Endmills/Thread-Mill-Tools.png",
    },
     {
      id: "7",
      title: "Solid Carbide Rougher Endmill",
      paragraph_text: "Designed for heavy material removal with strength. Ensures efficiency in rough machining.",
      src: "/images/Endmills/Solid-Carbide-Rougher-Endmill.png",
    },
     {
      id: "8",
      title: "Single Flute Endmill",
      paragraph_text: "Engineered for high-speed cutting with precision. Provides smooth finishes in soft materials.",
      src: "/images/Endmills/Single-flute-Endmill.png",
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
