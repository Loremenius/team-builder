import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import MemberList from "./MemberList";

function App() {
  const [members, setMembers] = useState([]);
  const addNewMember = (member) =>{
    setMembers([...members,member]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <MemberList list={members}/>
    </div>
  );
}

export default App;
