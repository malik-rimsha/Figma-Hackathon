import Link from "next/link";
import { Input } from "./ui/input";
import { BaggageClaim, BaggageClaimIcon, Heart, LucideShoppingBag, Menu, Search, ShoppingBag, ShoppingBagIcon, ShoppingBasketIcon, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sheet } from "./ui/sheet";

export default function Navbar() {
    return (
        <nav className=" w-full border-b-2 bg-[#FFFFFF] p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <img className="h-10 w-10 ml-9" src="2logo.png" alt="Logo" />

                <div className=" hidden md:flex gap-4 font-bold ">
                    <Link href={'/'} className=" text-sm font-normal">Main</Link>
                    <Link href={'new-featured'} className=" text-sm font-normal">New and Featured</Link>
                    <Link href={'men'} className=" text-sm font-normal">Men</Link>
                    <Link href={'women'} className=" text-sm font-normal">Women</Link>
                    <Link href={'Join'} className=" text-sm font-normal">Join Us</Link>
                    <Link href={'/'} className=" text-sm font-normal">Kids</Link>
                    <Link href={'/'} className=" text-sm font-normal">SNKRS</Link>

                </div>
                <div className="hidden md:flex gap-4">
                    <div className="relative">
                        <Input placeholder="search" className="bg-[#f5f5f5] rounded-full" />
                        <Search className="absolute right-2 top-2" />
                    </div>
                    <Button variant={"outline"} size={"icon"} className="rounded-full">
                        <Heart />
                    </Button>
                    <Button variant={"outline"} size={"icon"} className="rounded-full">
                        <ShoppingBagIcon />
                    </Button>
                </div>
                <Sheet>
                    <SheetTrigger>
                        <Button variant={"outline"} size={"icon"} className="rounded-full">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <img className="h-8 w-8 ml-10" src="2logo.png" alt="Logo" />
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6 mt-6">
                            <Link href={'/'} className=" text-sm font-normal">Main</Link>
                            <Link href={'new-featured'} className=" text-sm font-normal">New and Featured</Link>
                            <Link href={'men'} className=" text-sm font-normal">Men</Link>
                            <Link href={'/women'} className=" text-sm font-normal">Women</Link>
                            <Link href={'Join'} className=" text-sm font-normal">Join Us</Link>
                            <Link href={'/'} className=" text-sm font-normal">Sale</Link>
                            <Link href={'/'} className=" text-sm font-normal">SNKRS</Link>
                        </div>
                        <div className="mt-4">
                            <div className="relative">
                                <Input placeholder="search" className="bg-[#f5f5f5] rounded-full" />
                                <Search className="absolute right-2 top-2" />
                            </div>
                        </div>
                        <div className="mt-4 space-x-2">
                            <Button variant={"outline"} size={"icon"} className="rounded-2xl">
                                <Heart />
                            </Button>
                            <Button variant={"outline"} size={"icon"} className="rounded-full">
                                <ShoppingBagIcon />
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}