import React from "react";
import App from "./App";

const MemberList=(props) =>{

    return(
    <div className="note-list">
      {props.list.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h2>{member.name}</h2>
            <h2>{member.email}</h2>
            <h2>{member.role}</h2>
          </div>
        );
      })}
    </div>
    )
}
export default MemberList;