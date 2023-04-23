import { useState } from "react";
import "./sideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {

    const [HomeColors,setHomeColor] = useState(false)
    const [ModuleColors,setModuleColor] = useState(false)
    const [InstructorColors,setInstructorColor] = useState(false)

    const ChangeColor = (e) =>{
         console.log(e.target.id);
         if(e.target.id=="Home"){
                setHomeColor(true)
                setModuleColor(false)
                setInstructorColor(false)
         }else if(e.target.id=="Module"){
            setHomeColor(false)
                  setModuleColor(true)
                  setInstructorColor(false)
         }else if(e.target.id=="Instructor"){
            setHomeColor(false)
            setModuleColor(false)
            setInstructorColor(true)
         }
    }

    
  return (
    <div id="SideBar">
      <ul>
        <li>
          <NavLink to="/" className="sidebar_meun" style={HomeColors?{background:"white",color: "black"}:{}} id="Home" onClick={ChangeColor}>Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/Module" className="sidebar_meun" id="Module" style={ModuleColors?{background:"white",color: "black"}:{}} onClick={ChangeColor}>Module</NavLink>
        </li>
        <li>
          <NavLink to="/Instructor" className="sidebar_meun" id="Instructor" style={InstructorColors?{background:"white",color: "black"}:{}} onClick={ChangeColor}>Instructor</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
