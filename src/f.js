import React, { useState } from "react";
import "./style.css";
function Form(props) {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");

  const [nameerror, setnameerror] = useState(false);
  const [mobileerror, setmobileerror] = useState(false);
  const [emailerror, setemailerror] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setnameerror(fname.length === 0);

    setmobileerror(mobile.length === 0);
    setemailerror(email.length === 0);
  };
  return (
    <div className="app">
      <h1>hello {props.name}{props.children}</h1>
      <form action="" onSubmit={submit}>
      <div>
        <div>
          <label>first name:</label>
          
          <input
            style={{ borderColor: nameerror ? "red" : "green" }}
            onKeyDown={(e) => {setfname(e.target.value)
              console.log(e.target.value);

            }}
          ></input>
          <p>{nameerror ? "please enter the name" : ""}</p>
        </div>
        <div>
          <label>last name:</label>
          <input onChange={(e) => {
              setmobile(e.target.value);
              console.log(e.target.value);

            }}
          ></input>
        </div>
        <div>
          <label>mobile:</label>
          <input
            style={{ borderColor: mobileerror ? "red" : "green" }}
            onChange={(e) => {
              setmobile(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
          <p>{mobileerror ? "please enter the mobile" : ""}</p>
        </div>
        <div>
          <label>email:</label>
          <input
            style={{ borderColor: emailerror ? "red" : "green" }}
            onKeyUp={(e) => {
              setemail(e.target.value);
              console.log(e.target.value);

            }}
          ></input>
          <p>{emailerror ? "please enter the email" : ""}</p>
        </div>
        <button >submit</button>
      </div>
      </form >
    </div>
  );
}

export default Form;
