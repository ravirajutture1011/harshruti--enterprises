import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold  text-center px-4 mb-1">
        Welcome to Our Company
      </h1>
      
      {/* Full-screen carousel container */}
      <div className="relative w-full  z-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-0 w-full">
                <Card className="border-0 rounded-none shadow-none">
                  <CardContent className="flex h-[70vh] items-center justify-center p-0 bg-gradient-to-r from-blue-600 to-purple-600">
                    <span className="text-6xl font-bold text-white">
                      {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
      </div>

    
    </div>
  );
};

export default Home;
