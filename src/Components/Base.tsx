import React from 'react';
import '../App.css';
import {useSelector} from 'react-redux';
const Base:React.FC=() =>{
const chatMessages = useSelector((state:any) => state.chat);

  console.log('the messages from the chat are',chatMessages)  ;

return(<div className = 'base'style = {{backgroundColor:'lightblue'}}>
 {chatMessages && <div style = {{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>{chatMessages.map((messages,index) => {

return (<div className = 'messageBox'key= {index} style = {{whiteSpace:'normal',wordWrap:'break-word', overflowWrap:'break-word', maxWidth:'300px', textAlign:'left'}}>
{messages}
</div>
)
 })}
 </div>}
  </div>
  )

}

export default Base;
