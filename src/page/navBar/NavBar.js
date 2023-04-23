import { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [Show, SetShow] = useState(false);

  const DropDown = () => {
    console.log(!Show);
    SetShow(!Show);
  };

  return (
    <div>
      <div id="navbar_head">
        <div>
          <h1 id="Logo">EDYODA</h1>
        </div>

        <div id="navbar_user">
          <p id="User_Name">Hi Test Learner!</p>
          <img
            id="user_logo"
            src="https://cdn.pixabay.com/photo/2018/02/26/11/13/cat-3182830_960_720.png"
          />
        </div>
      </div>
      <div id="navbar_foot">
        <h3 style={{ paddingRight: "40px" }} onClick={DropDown}>
          DS10112
        </h3>
        <h2>Data Scientist Program</h2>
      </div>
      {Show && (
        <div id="dropdown">
          <p style={{ marginTop: "0px" }}>Select Program</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 className="Course_Code">ERDC</h3>
            <h3 className="Course_Code">FSWD101201</h3>
            <h3 className="Course_Code">DS584135</h3>
            <button className="Course_Code">DS10112</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
