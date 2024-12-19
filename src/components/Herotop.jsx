
import banner from "../assets/images/profile-banner1.jpg"



function Herotop(){

    

    return(
        <div className=" flex justify-around items-center">
            <div className="p-6 w-3/4">
            <h1 className="text-2xl font-bold py-2">Hey, Welcome</h1>
            <p className="  border-none rounded-sm ">
                to Arun Icecreams, where every scoop is crafted to perfection! Indulge in our creamy, handcrafted ice creams made with the finest ingredients. From classic vanilla to exotic mango passion, we have a flavor for every taste bud. Join us for a delicious journey of unique flavors and delightful toppings. Order online or visit us to experience pure frozen bliss. Taste the magic, one scoop at a time!
            </p>
            </div>
            <div className="" >
            <img className="h-1/2" src={banner} alt="banner" />
            </div>
           
        </div>
    )

}

export default Herotop