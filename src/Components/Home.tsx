import Login from "./Login"
import { RiChatSmile3Fill, RiMenuLine } from "@remixicon/react"

export default function () {
    
    return (<>
    <div className = "main w-full h-screen bg-white font-['gilroy']" >
        {/* <div style = {{width:'20%', height:'20%', border: '2px solid black', display:'flex', flexDirection:'column',justifyContent:'space-around',gap:'20px',padding:'20px 0'}}>

<button>Signup</button>
<Login/>
            
        </div> */}
        <div className = "container mx-auto">
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
            <div className = "w-full flex flex-col items-center">
                <div className = "image w-60 h-60 rounded-full mt-10 flex items-center justify-center">
                    <RiChatSmile3Fill 
                    size = {900}
                    color = "black"
                    className = "smileLogo"
                    />
                </div>
            </div>
        </div>
    </div>
    </>)
}