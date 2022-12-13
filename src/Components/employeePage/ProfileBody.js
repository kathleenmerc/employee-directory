import data from "../../data"

export default function ProfileBody(props) {
  let employee = null
  data.map((foundName) =>{
      const joinedName = foundName.name.split(" ").join("")
      const path = window.location.pathname
      if(`/employee/${joinedName}` === path){
          employee = foundName
          return employee
      }
  })  
  
  return (
      <div className="profileBody">
        <div className="profileName">{employee.name}</div>
        <div className="profilePosition">{employee.position}</div>
      </div>
    );
  }
  