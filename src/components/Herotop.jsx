
import banner from "../assets/images/profile-banner1.jpg"



function Herotop(){

    

    return(
        <div className="md:h-screen md:flex justify-around items-center">
            <div className="p-6 md:w-1/2">
            <h1 className="text-2xl md:text-left text-center text-red-500 font-bold md:py-2">Hey, Welcome</h1>
            <p className=" md:text-left md:text-lg md:p-0 text-justify p-4 border-none rounded-sm ">
                to Arun Icecreams, where every scoop is crafted to perfection! Indulge in our creamy, handcrafted ice creams made with the finest ingredients. Join us for a delicious journey of unique flavors and delightful toppings. Order online or visit us to experience stores for pure frozen bliss. Taste the magic, one scoop at a time !
            </p>
            </div>
            <div className="m-4" >
                <img className="md:w-[700px]" src={banner} alt="" />
            </div>
        </div>
    )

}

export default Herotop