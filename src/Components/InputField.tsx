import React from 'react';
import '../App.css';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addChatMessage} from '../redux/slice/chatSlice.ts'


const InputField: React.FC = () =>{
const [shouldWrap, setShouldWrap ] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [socket, setSocket] = useState<WebSocket | null >(null);
  const dispatch = useDispatch();

 useEffect(() => {

   const newSocket = new WebSocket('ws://localhost:3000');
    newSocket.onopen = () => {
      console.log('WebSocket connection established');
      setSocket(newSocket);
    }
    if(newSocket){
     newSocket.onmessage =(message =>{
     
console.log("the received message is",message.data);
      dispatch(addChatMessage(message.data));
    })
    }
    return () => {
      if(socket){
        console.log('the socket is holds value and is not closing',socket)
    socket.close();
    }
    }
  }, []);


  const handleInputChange = (event) =>  {

    const {value} = event.target;
   console.log('the value is', value);
    if(value.length>24)
    {
      console.log('the value is greater than 24');
      setShouldWrap(true);
    }

    setInputValue(value);

  }

  const handleInputSubmit = (event) =>  {
  
    event.preventDefault();
    // const [name, value] = event.target;
    if(inputValue && socket){ 

      socket.send(inputValue)};

   setInputValue('');
   // console.log(inputValue);
    //dispatch(addChatMessage(inputValue));
  }

 const handleEnter = (event) =>{
    window.prompt('the event is triggered',event.key)
    event.preventDefault();
  //event.stopPropagation();

  if(event.key === 'Enter' && inputValue.trim() !== ''){
    if(socket) {
      socket.send(inputValue);
      setInputValue('');
    }
      else {
        return;
      }
  }
  }

  return (
  <>
<span className = 'inputField' onKeyDown = {(event)=> event.key === 'Enter' ? handleEnter(event) : null}>
        <textarea type = 'text' id = 
        "input" placeholder = 'Enter text here' name = 'input' value = {inputValue} 
            onChange = {handleInputChange}
          style = {{paddingLeft:'3.5px'}}/>
        <button type = 'submit' onClick = {handleInputSubmit}>Submit</button>

      </span>
    </>
  )
}

export default InputField
