import React from 'react';
import '../App.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addChatMessage} from '../redux/slice/chatSlice.ts'


const InputField: React.FC = () =>{
const [shouldWrap, setShouldWrap ] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

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

    console.log(inputValue);
    dispatch(addChatMessage(inputValue));
  }

  return (
  <>
<span className = 'inputField'>
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
