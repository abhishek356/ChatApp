import Login from "./Login"
import { RiChatSmile3Fill, RiMenuLine } from "@remixicon/react"

export default function () {
    
    return (<>
    <div className = "main w-full h-screen bg-white font-['gilroy']" >
        {/* <div style = {{width:'20%', height:'20%', border: '2px solid black', display:'flex', flexDirection:'column',justifyContent:'space-around',gap:'20px',padding:'20px 0'}}>

<button>Signup</button>
<Login/>
            
        </div> */}
        <div className = "container relative h-screen mx-auto">
            <div className = "navbar w-4/5 mx-auto py-5 px-8 bg-white flex items-center justify-between">
            <h1 className = "text-2xl font-semibold">Chat App</h1>
            <div className="links hidden md:flex gap-4">
                <a className = "text-sm"href="#">Login</a>
                <a className = "text-sm"href="#">Signup</a>
                <a className = "text-sm"href="#">Contact Us</a>
                <a className = "text-sm"href="#">help</a>
            </div>
            <RiMenuLine size = {36}
            color = 'black'
            className = "lg:hidden"/>
            </div>
            <div className = "absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full flex flex-col  items-center mt-10">
                <div className = "image sm:w-20  md:w-40 h-40 lg: w-60   rounded-full mt-10 flex items-center justify-center ">
                    <RiChatSmile3Fill 
                    size = {900}
                    color = "black"
                    className = "smileLogo lg:w-80 lg:h-80"
                    />
                </div>
                <h3 className = "sm: mt-8 font-semibold text-xl tracking-tight lg:text-2xl">Hi, I'm ChatApp 👋</h3>
                <h1 className = "w-2/3 text-center text-4xl font-bold tracking-tighter leading-none mt-3 lg:text-5xl">
                Building digital products, brands and experiences.
                </h1>

                <p className = "text-center font-bold leading-none tracinkg-tighter mt-4 text-sm w-3/4 lg:opacity-50 lg:text-lg">Hi, I'm Abhishek 
                    Building digital
                    products, brands, and 
                    experience.
                    and Visual Development.
                </p>
                <button className = 'px-4 py-2 lg:px-6 lg:py-4 bg-black text-white font-semibold text-xs rounded-full mt-5 tracking-tighter lg:text-xl'>Connect with me</button>
            </div>
        </div>
    </div>
    </>)
}