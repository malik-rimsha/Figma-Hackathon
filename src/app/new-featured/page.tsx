import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";
export default function Featured() {
    return (
        <div className="featured">
            <div className="flex justify-between max-w-7xl">
                <p className="font-bold">New(500)</p>
                <div className="flex space-x-2 p-0">
                    <p className="font-normal"> Hide Filter </p> <HiOutlineAdjustmentsHorizontal />
                    <p className="font-normal">Sort By</p> <RiArrowDownSLine />
                </div>
            </div>
            <div className="flex w-full h-fit">

                {/* <!-- Left Side: Filters, Categories, Gender, Price with Left Border --> */}
                <div className="flex flex-col justify-start w-1/4 p-8 border-l border-gray-300">
                    {/* <!-- Categories Section --> */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Categories</h3>
                        <ul className="list-none pl-6">
                            <li>Shoes</li>
                            <li>Sports Bras</li>
                            <li>Tops & T-Shirts</li>
                            <li>Hoodies & Sweatshirts</li>
                            <li>Jackets</li>
                            <li>Trousers & Tights</li>
                            <li>Shorts</li>
                            <li>Tracksuits</li>
                            <li>Jumpsuits & Rompers</li>
                            <li>Skirts & Dresses</li>
                            <li>Socks</li>
                            <li>Accessories & Equipment</li>
                        </ul>
                    </div>

                    {/* <!-- Gender Section --> */}
                    <div className="mb-6">
                        < IoIosArrowUp /><h3 className="text-lg font-semibold">Gender</h3>
                        <ul className="list-none pl-6">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Unisex</li>
                            <li>Kids</li>
                            <li>Boys</li>
                            <li >Girls</li>
                        </ul>
                    </div>

                    {/* <!-- Price Range Section --> */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Shop By Price</h3><IoIosArrowUp />
                        <ul className="list-none pl-6">
                            <li>Under ₹ 2,500.00</li>
                            <li>₹ 2,501.00 - ₹ 7,500.00</li>
                            <li>₹ 7,501.00 - ₹ 15,000.00</li>
                            <li>Above ₹ 15,000.00</li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Right Side: Product Image --> */}
                <div className="flex justify-end items-end w-fit-75 h-fit p-8 border-b">
                    <div className="flax "><img src="hero.png" alt="hero" /></div>
                </div>
            </div>
            <div className=" flex justify-start items-start ml-60 mt-10"><h1 className="font-semibold">Related Categories</h1></div>
            <div className=" justify-start items-start ml-60 mt-8 gap-8 space-x-2">
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10">Best Selling Products</button>
                <button className="  outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10"> Best Shoes</button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10">New Basketball Shoes</button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10">New Football Shoes</button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10"> New Men's Shoes</button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10" >New Running Shoes</button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10" >New Jordan Shoes</button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10">New Women's Shoes </button>
                <button className=" outline-1 border-2 rounded-full bg-white p-2 text-[10px] text-xsm mb-10"> Best Trainning & Gym</button>
            </div>
        </div>
    )
}


