import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
export default function () {

    const [isLoggedin, setIsLoggedin] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleClick = () =>{
        const callbackUrl = 'http://localhost:5173/secure';
        const googleClientId = "144028178879-3cc2ijmflu2ftpsdmu47ap3n97rh5b8v.apps.googleusercontent.com";
         const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl; 

    console.log('the value of targetUrl',targetUrl)
    }


    useEffect(()=>{
           const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      console.log('the value of access token is',accessToken)
      localStorage.setItem('gauthcookie',accessToken)
      Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
    },[])

      useEffect(() => {
    if (isLoggedin) {
    //   navigate("/secure");
    }
  }, [isLoggedin, navigate]);

    return <>
    <button onClick = {handleClick}>Login with Google</button>
    </>
}