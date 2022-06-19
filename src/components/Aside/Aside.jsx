import React from "react"
import './aside.css'
import Selectmenu from "./Selectmenu"

export default function Aside(){
    return (
<>
<div className="aside" >
<img className="logoo" src="logoo.jpg" style={{marginTop:'1%'}}/>
<input type="text" placeholder="Quick access" className="inputAside" 

 />

<p className="spanAside">
    <img src="dashboard.jpg" style={{width:'30px'}}/> Dashboard</p>
    <br></br>
    <p className="pAside">SETTINGS</p>
    <div className="container">

     <Selectmenu title='ATM Settings'></Selectmenu>
<Selectmenu title='Bussiness Setup'></Selectmenu>
<Selectmenu title='User Management'></Selectmenu> 

    </div>
    <br></br> <br></br>
    <p className="spanAside">
     Lisence Management </p>
   
</div>
</>
    )
}