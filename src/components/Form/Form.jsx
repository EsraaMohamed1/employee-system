
import React, { useState, useEffect } from "react";
import "./form.css";

export default function Form() {
  const initialValues = {fullname: "", username: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    var { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChange2 = (e) => {
    var fulln = e.target.value;
    setFormValues({ ...formValues, fulln});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regularr = /^[a-zA-Z]{4,15}$/;
    if (!values.fullname) {
        errors.fullname = "full name is required";
       } 
    else if (!regularr.match(values.fullname)) {
        errors.fullname = "invalid Full name";
      } 
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
 
    return errors;
  };

  return (
    <div className="containerr">
     
    
      <form >
      <div className="captionOfForm">
      <h5>Add New User</h5>
      </div>
      <div className="insideform">
      <div className="ui divider"></div>
        <div className="ui form">
        <div className="field">
            <label>Full Name</label> <br/>
            <input
              type="text"
              name="username"
              placeholder="Enter full name"
            //   value={formValues.fullname}
               onChange={handleChange2}
            />
          </div>
          {/* <p>{formErrors.fullname}</p> */}
          <div className="field">
            <label>User Name</label> <br/>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
               value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
        
          <div className="field">
            <label>Email Address</label> <br/>
            <input
              type="text"
              name="email"
              placeholder="Enter user email address"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>User Group</label> <br/>
            <select required>
         <option selected disabled placeholder="Choose User Group">Choose User Group</option>
         <option>item 1</option>
         <option>item 2</option>
         <option>item 3</option>
     </select>
            </div>
             <div className="field">
            <label id="ll">Choose Profile</label> <br/>
            <select required>
         <option selected disabled >Choose Profile</option>
         <option>item 1</option>
         <option>item 2</option>
         <option>item 3</option>
     </select>
            </div>
            <hr style={{marginTop:"6%"}} />
            <div className="formfoot">
                <div className="lestside">
                              <a href="#">Reset fields</a>
                </div>
      <div className="rightside">
          <button className="btn1">Cancel</button>
          <button className="btn2 " onClick={handleSubmit}>Add User</button>
      </div>
                
            </div>
        
        </div>
      </div>
        
      </form>
    </div>
  );
}


