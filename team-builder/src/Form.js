import React, {useState} from "react";
import App from "./App";

const Form = (props) => {
    const [member, setMember] = useState({
        name:"",
        email:"",
        role:""
    });
const changeHandler = (event)=>{
    setMember({ ...member, [event.target.name]: event.target.value });
}
const submitEvent = (event) =>{
    event.preventDefault();
    props.addNewMember(member);
    setMember({
        name:"",
        email:"",
        role:""
    });
};
return(
    <div>
        <form onSubmit={submitEvent}>
            <input type="text" name="name" placeholder="First and Last name" onChange={changeHandler} value={member.name}/><br></br>
            <input type="text" name="email" placeholder="E-Mail" onChange={changeHandler} value={member.email}/><br></br>
            <input type="text" name="role" placeholder="Your role in the team" onChange={changeHandler} value={member.role}/><br></br>
            <button type="submit">Add to list</button>
        </form>

    </div>
)

}

export default Form;