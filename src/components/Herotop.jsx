
import banner from "../assets/images/profile-banner1.jpg"


function Herotop(){

    
    return(
        <div className="md:h-screen flex flex-col justify-center items-center text-center p-6">
            {/* Section Title */}
            <h1 className="text-xl md:text-4xl font-bold text-red-600 mb-4"> Celebrate Your Good Times </h1>

            <div className="md:flex items-center w-full  max-w-6xl">
                {/* Left Section - Text Content */}
                <div className="p-4 md:w-1/2">
                    <h2 className="md:text-2xl text-xl py-1 text-red-600 font-bold md:text-left">
                    Hello
                    </h2>
                    <p className="text-justify md:text-left md:text-lg md:py-4 py-2">
                    Welcome to Arun Icecreams, where every scoop is crafted to perfection! Indulge in our creamy, handcrafted ice creams made with the finest ingredients.Order online or visit our store to experience pure frozen bliss. Taste the magic, one scoop at a time!
                    </p>
                    {/* Order Button */}
                    <div className="mt-4 md:text-left">
                        <button className="bg-white text-black font-bold px-4 py-2 rounded-md shadow-md hover:bg-red-600 hover:text-white active:scale-95 transition-all duration-150 border border-black hover:border-none">
                            Order
                        </button>
                    </div>
                </div>
                {/* Right Section - Image */}
                <div className="m-4 md:w-1/2 flex justify-center">
                    <img className="md:w-[600px] w-full rounde  md-lg" src={banner} alt="banner-image" />
                </div>
            </div>
        </div>  
    )

}

export default Herotop