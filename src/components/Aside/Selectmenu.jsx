import React,{useState} from "react"
import './aside.css'
export default function Selectmenu (props){
    const [isActive, setIsActive] = useState(false);
    let changeBackGround=()=>{
        setIsActive(!isActive);
    };
    return (
<div className="btn-group" >
 
  <select class="form-select" aria-label="Default select example"
 
  style={{
    backgroundColor: isActive ? 'green' : 'rgba(5,14,45,255)',
    color: isActive ? 'white' : 'rgb(179, 179, 187)',
    width:'100%',
    textAlign:'left',
    marginTop:'1%',
    border:'none'
  }}
  onClick={changeBackGround}
   
   >
  <option selected disabled className="options"
    style={{
      backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
       color: isActive ? 'green' : 'white',
     
    }}
    onClick={changeBackGround}
     
   
  >{props.title}</option>
  <option value="1" className="options"
   style={{
    backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
    color: isActive ? 'green' : 'white',
   
  }}
  onClick={changeBackGround}
  >Users</option>
  <option value="2" className="options"
   style={{
    backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
    color: isActive ? 'green' : 'white',
   
  }}
  
  >Profile</option>
  <option value="3" className="options"
   style={{
    backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
    color: isActive ? 'green' : 'white',
   
  }}
  onClick={changeBackGround}
  >Groups</option>
</select>
</div>
    )}

