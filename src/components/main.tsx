

export default function Main() {
    return (
        <div className="">
            {/* First Section: Image and Title */}
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] ml-10 mr-10">
                    <img className="w-full h-auto" src="first.png" alt="Logo" />
                </div>
            </div>
            <h1 className="text-center text-black mt-10 font-medium">First Look</h1>
            <h2 className="text-center text-black font-extrabold text-3xl md:text-4xl lg:text-5xl">NIKE AIR MAX PULSE</h2>
            <p className="text-center text-black font-normal mx-10 mt-7 md:mx-20 lg:mx-40">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
            </p>
            <div className="flex justify-center items-center mt-8 space-x-2">
                <button className="bg-black text-white rounded-full flex justify-center items-center px-4 py-2 text-sm md:text-base">Notify Me</button>
                <button className="bg-black text-white rounded-full flex justify-center items-center px-4 py-2 text-sm md:text-base">Shop Air Max</button>
            </div>

            {/* Best Of Air Max Section */}
            <div className="flex justify-between items-center mt-10 mx-10 md:mx-20">
                <p className="font-semibold">Best Of Air Max</p>
                <p className="font-semibold">Shop</p>
            </div>

            {/* Shoe Images */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <img className="w-80 h-96 p-1" src="shoe1.png" alt="Shoe 1" />
                <img className="w-80 h-96 p-1" src="shoe2.png" alt="Shoe 2" />
                <img className="w-80 h-96 p-1" src="shoe3.png" alt="Shoe 3" />
            </div>

            {/* Featured Section */}
            <div className="flex justify-start mt-16 ml-10">
                <h1 className="font-semibold">Featured</h1>
            </div>

            {/* Featured Images */}
            <div className="flex justify-center mt-10">
                <img className="w-full md:w-134 h-auto p-1 mx-10" src="man1.png" alt="Man with Nike" />
            </div>
            <div className="flex justify-center mt-10">
                <img className="w-full md:w-134 h-auto p-1 mx-10" src="mens.png" alt="Mens collection" />
            </div>
            <div className="flex justify-center mt-10">
                <img className="w-full md:w-134 h-auto p-1 mx-10" src="mens2.png" alt="Mens 2 collection" />
            </div>
            <div className="flex justify-center mt-10">
                <img className="w-full md:w-134 h-auto p-1 mx-10" src="cloth.png" alt="Clothing" />
            </div>

            {/* Icons Section */}
            <div className="flex justify-around items-center gap-10 mt-20 p-10 flex-wrap">
                {/* Icons */}
                <div className="text-center w-full md:w-1/4">
                    <h1 className="text-lg font-semibold">Icons</h1>
                    <ul className="mt-2 list-none">
                        <li>Air Force 1</li>
                        <li>Huarache</li>
                        <li>Air Max 90</li>
                        <li>Air Max 95</li>
                    </ul>
                </div>

                {/* Shoes Section */}
                <div className="text-center w-full md:w-1/4">
                    <h2 className="text-lg font-semibold">Shoes</h2>
                    <ul className="mt-2 list-none">
                        <li>All Shoes</li>
                        <li>Custom Shoes</li>
                        <li>Jordan Shoes</li>
                        <li>Running Shoes</li>
                    </ul>
                </div>

                {/* Clothing Section */}
                <div className="text-center w-full md:w-1/4">
                    <h3 className="text-lg font-semibold">Clothing</h3>
                    <ul className="mt-2 list-none">
                        <li>All Clothing</li>
                        <li>Modest wear</li>
                        <li>Hoodies and Pullovers</li>
                        <li>Shirts and Tops</li>
                    </ul>
                </div>

                {/* Kid's Section */}
                <div className="text-center w-full md:w-1/4">
                    <h4 className="text-lg font-semibold">Kid's</h4>
                    <ul className="mt-2 list-none">
                        <li>Infant and Toddler Shoes</li>
                        <li>Kid's Shoes</li>
                        <li>Kid's Jordan Shoes</li>
                        <li>Kid's Basketball Shoes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
