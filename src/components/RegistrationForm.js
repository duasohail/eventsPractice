import React, { Component ,useState } from 'react';


     const RegistrationForm = () => {
          const [fullname, setfullname] = useState({
               fname: '',
               lname: '',
               email: '',
               phone: ''

          });
         

     const inputEvent=(event)=>{
          console.log(event.target.value);
          // setname(event.target.value);
          const value= event.target.value;
          const name= event.target.name;

          setfullname((preValue)=>{
               // console.log(preValue);
               if(name==="fname"){
                    return{
                         fname: value,
                         lname: preValue.lname,
                         email: preValue.email,
                         phone: preValue.phone,
                    };

               }else if(name ==="lname"){
                    return{
                         fname: preValue.fname,
                         lname: value,
                         email: preValue.email,
                         phone: preValue.phone,
                    };

               }else if(name ==="email"){
                    return{
                         fname: preValue.fname,
                         lname: preValue.lname,
                         email: value,
                         phone: preValue.phone,
                    };

               }else if(name ==="phone"){
                    return{
                         fname: preValue.fname,
                         lname: preValue.lname,
                         email: preValue.email,
                         phone: value,
                    };

               }

          })
     }
     const onSubmits = (event) =>{
          // event.preventDefault();
          // setfullname(firstName +" "+ lastName);
     }
    return (   

     <div className="bg-dark shadow p-3">
          <h1 className="blue tc">Sign up</h1>
    <h1 className="blue tc">{fullname.fname}{fullname.lname}</h1>
    <h4 className="blue tc">{fullname.email}</h4>
    <h6 className="blue tc">{fullname.phone}</h6>
          <form onSubmit={onSubmits} className="tc">
               <input  className="form-control mt-1" 
                    type="text"
                     name="fname" 
                     value={fullname.fname}
                    placeholder="first name" 
                    onChange={inputEvent}
                />
               <input  className="form-control mt-1" 
                     type="text" 
                     name="lname" 
                     value={fullname.lname}
                     placeholder="last name" 
                     onChange={inputEvent}  
                />
               <input  className="form-control mt-1"
                     type="email" 
                     name="email" 
                     value={fullname.email}
                      placeholder="email" 
                      onChange={inputEvent}
               />
               <input  className="form-control mt-1"
                     type="number" 
                     name="phone" 
                     value={fullname.phone}
                      placeholder="phone"
                     onChange={inputEvent}
                />
               <input  className="btn btn-sm btn-primary mt-1"
                     type="submit"
                    value="Submit"
               />
          </form>

     </div>
     );
    }
 
export default RegistrationForm;