"use client";
import { DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";

// "use client"
import * as React from "react";
// import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const Navbar = () => {
  const[open,setOpen] = useState(false);
  return (
    <nav className="w-full border-b px-4 py-2 flex items-center justify-between sticky top-0 z-50  dark:bg-black bg-gray-50">
      <div className="text-xl font-bold ml-1">Logo</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/home">Home</Link>

        <NavigationMenu className="flex items-center list-none">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="z-[100] shadow-lg">
              <ul className="grid w-[250px]">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/products/drills"
                      className="block px-3  rounded hover:bg-gray-100 hover:text-black transition-colors"
                    >
                      Drills
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/products/endmills"
                      className="block px-3  rounded hover:bg-gray-100 hover:text-black"
                    > 
                      Endmills
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/products/reamers"
                      className="block px-3  rounded hover:bg-gray-100 hover:text-black"
                    >
                      Reamers
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/products/brazed-carbide"
                      className="block px-3  rounded hover:bg-gray-100 hover:text-black"
                    >
                      Brazed Carbide Tools
                    </Link>
                  </NavigationMenuLink>
                </li>

              </ul>

            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/contactUS">Contact</Link>
        <ToggleButton />
      </div>

      {/* Mobile Menu Button using Sheet */}
      <div className="md:hidden">
        <ToggleButton />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col gap-4 pt-10 z-[100] pl-5 cursor:pointer"
          >
            <DialogTitle className="text-lg font-bold">Menu</DialogTitle>

            <Link href="/" onClick={()=>setOpen(false)}  className="hover:text-black">
              Home
            </Link>

            {/* Products collapsible */}
            <details className="group">
              <summary className="cursor-pointer text-sm font-medium hover:text-black">
                Products
              </summary>
              <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <Link
                    href="/products/drills"
                    onClick={()=>setOpen(false)}
                    className="block hover:text-black"
                  >
                    Drills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/endmills"
                    onClick={()=>setOpen(false)}
                    className="block hover:text-black"
                  >
                    Endmills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/reamers"
                    onClick={()=>setOpen(false)}
                    className="block hover:text-black"
                  >
                    Reamers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/brazed-carbide"
                    className="block hover:text-black"
                    onClick={()=>setOpen(false)}
                  >
                    Brazed Carbide Tools
                  </Link>
                </li>
              </ul>
            </details>

             
            <Link href="/aboutUs" onClick={()=>setOpen(false)} className="hover:text-black">
              About Us
            </Link>
            <Link href="/contactUS" onClick={()=>setOpen(false)} className="hover:text-black">
              Contact
            </Link>

   git config --global user.name       </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
