import Login from "./Login"


export default function () {
    
    return (<>
    <div style = {{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'red',
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    width:'100%',
    height:'100%'
    }}>
        <div style = {{width:'20%', height:'20%', border: '2px solid black', display:'flex', flexDirection:'column',justifyContent:'space-around',gap:'20px',padding:'20px 0'}}>

<button>Signup</button>
<Login/>
            
        </div>
    </div>
    </>)
}