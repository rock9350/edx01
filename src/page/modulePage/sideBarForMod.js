import { useState } from "react";
import "./sideBarMod.css";
import { NavLink, Outlet } from "react-router-dom";
import topic from ".././../Icons/topic.svg";
import activeTopic from ".././../Icons/activeTopic.svg";
import quiz from ".././../Icons/moduleQuiz.svg"
import activeQuiz from ".././../Icons/activeModuleQuiz.svg"
import assignment from ".././../Icons/assignment.svg"
import activeAssignment from ".././../Icons/activeAssignment.svg"


const SideBarForMod = () => {

    const [Topic,setTopic] = useState(false)
    const [Quiz,setQuiz] = useState(false)
    const [Assignment,setAssignment] = useState(false)

    const ChangeColor = (e) =>{
         console.log(e.target.id);
         if(e.target.id=="topic"){
                setTopic(true)
                setQuiz(false)
                setAssignment(false)
         }else if(e.target.id=="quiz"){
            setTopic(false)
                  setQuiz(true)
                  setAssignment(false)
         }else if(e.target.id=="assignment"){
            setTopic(false)
            setQuiz(false)
            setAssignment(true)
         }
    }



    return (<div id="SideBarMod">
    <ul>
      <li style={Topic?{background:"white",color: "black"}:{}}>
        <img src={Topic?topic:activeTopic}/>
        <NavLink to="/Module/topic" className="sidebar_Mod"  id="topic" onClick={ChangeColor}>Python Loops</NavLink>
      </li>
      <li style={Quiz?{background:"white",color: "black"}:{}}>
        {" "}
        <img src={Quiz?quiz:activeQuiz}/>
        <NavLink to="/Module/quiz" className="sidebar_Mod" id="quiz"  onClick={ChangeColor}>Quiz-1: Data Types</NavLink>
      </li>
      <li style={Assignment?{background:"white",color: "black"}:{}} >
        <img src={Assignment?assignment:activeAssignment}/>
        <NavLink to="/Module/assignment" className="sidebar_Mod" id="assignment" onClick={ChangeColor}>Assignment-1: Operators | Loops</NavLink>
      </li>
    </ul>
    <Outlet/>
  </div>);
}
 
export default SideBarForMod;