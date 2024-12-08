import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
    return (
        <div className="w-full bg-[#F5F5F5] hidden md:flex items-center p-1 justify-between">
            <img className="h-8 w-8 ml-10" src="1logo.png" alt="Logo" />

            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <p className="text-black">
                    skip to main content!
                </p>
            </div>
            <ul className="text-black flex items-center gap-6 mr-9">
                <Link href={"/"}><li>Find a Store</li></Link>
                <Link href={"/"}><li>Help</li></Link>
                <Link href={"/"}><li>Join Us</li></Link>
                <Link href={"/"}><li>Sign In</li></Link>
            </ul>
        </div>
    )
}