import React,{useState} from "react"
import Form from "../Form/Form";
import './dashboard.css'
import {Modal} from "react-bootstrap";
export default function Dashboard (){
    var arr=[
        {name:"HishamHaggag",userName:"hisham.haggag",email:"Hisham.Haggag@like.com",group:"Managers",userstatus:"",createdin:"Oct 20,2011"},
         {name:"Khaled Adam",userName:"khaled.adam",email:"khaled.adam@like.com",group:"Office",userstatus:"",createdin:"Oct 15,2021"},
         {name:"Ramy Mohsen",userName:"ramy.mohsen",email:"ramy.mohsen@google.com",group:"Office",userstatus:"",createdin:"Dec 10,2020"},
         {name:"كريم فاروق",userName:"kareem.farouk",email:"kareem.farouk@nuvb.net",group:"Office",userstatus:"",createdin:"Oct 15,2018"}
     
        ]
    var [searchString,setSearchString]=useState(" ");
    let handleChange =(e) => {
   
       setSearchString(e.target.value)
    }
  
    searchString =searchString.trim().toLowerCase();
    console.log(searchString);
 if (searchString.length > 0) {
 
   arr = arr.filter(function(i) {
     return i.name.toLowerCase().match( searchString );
   });
  }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isActive, setIsActive] = useState(false);
  
    let changecolor=()=>{
         setIsActive(!isActive);
       
    }
    return (
<>

<div className="container homepage">
<span className="title">User Management</span>
<button className="btnn" onClick={handleShow}>+ Add New User</button>

</div>


<Modal show={show} onHide={handleShow}>
        <Modal.Body><Form/></Modal.Body>
       
</Modal>

<div className="contTable" >
    <div className="firstrow">
   
    <input type="text" placeholder="search..." value={searchString} onChange={handleChange}  id="firstinput"/>
      <input type="text" placeholder="User Name"/>
      <div className="wrapinput2"> 
        <select>
         <option selected disabled>Any</option>
         <option>item 1</option>
         <option>item 2</option>
         <option>item 3</option>
     </select>
     <label className="lbl2">User Status</label>
     </div>
    
    <div className="wrapinput2">
    <input type="date" value="allTime"/>
<label>Creation Date</label>
    </div>
      <a href="#">AllFilters </a>
    </div>
    <div className="secondrow">
    <span>1 selected  | </span>
    <button className="links">
        <img src="update.png" width={20}></img>
    </button>
    <button className="links">
        <img src="circle.png" width={20}></img>
    </button>
    <button className="links">
        <img src="password.png" width={20}></img>
    </button>
    <button className="linksbtn">
        Assign to Profile
    </button>
    <button className="linksbtn ">
    Assign to Group
    </button>
    <button className="links">
        <img src="points.png" width={25}></img>
    </button>
   <a href="#">Unselect all</a>
  <button id="download">
    <img src="download.png" width={30} alt="" />
  </button>
    </div>
<table className="table"  style={{boderColor:'lightgray'}}>
 
<tbody>
                  <tr className="theader">
                    <td>
                      <input className="checkk" type="checkbox" />
                    </td>
                    <td>Name</td>
                    <td>User Name</td>
                    <td>Email Address</td>
                    <td>Group</td>
                    <td>Status</td>
                    <td>Created on</td>
                  </tr>
                  {arr &&
                    arr.map((user, index) => {
                      return (
                        <>
                          <tr
                            className="trow"
                            style={{
                              backgroundColor: isActive
                                ? "rgba(249,250,252,255)"
                                : "white",
                            }}
                          >
                            <td>
                              <input
                                className="checkk"
                                type="checkbox"
                                value={isActive}
                                onClick={(event) => changecolor(event)}
                              />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.group}</td>
                            <td>
                              <select style={{ border: "none" }}>
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Locked</option>
                              </select>
                            </td>
                            <td> {user.createdin}</td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
</table>



</div>




</>)}