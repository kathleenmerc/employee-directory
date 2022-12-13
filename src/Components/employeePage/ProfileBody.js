// import data from "../../data"

// export default function ProfileBody(props) {
//   let employee = null
//   data.map((foundName) =>{
//       const joinedName = foundName.name.split(" ").join("")
//       const path = window.location.pathname
//       if(`/employee/${joinedName}` === path){
//           employee = foundName
//           return employee
//       }
//   })  

//   return (
//       <div className="profileBody">
//         <div className="profileName">{employee.name}</div>
//         <div className="profilePosition">{employee.position}</div>
//       </div>
//     );
//   }






import data from "../../data"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProfileBody(props) {
  const [info, setInfo] = useState(null)
  const { name } = useParams()
  
  const getInfo = async () => {
    try {
      const info = data.find(eachEmployee => eachEmployee.name === name)
      setInfo(info)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

  const loaded = () => {
    return (
      <div className="profileBody">
        <div className="profileName">{info.name}</div>
        <div className="profilePosition">{info.position}</div>
      </div>
    )
  }

  const loading = () => {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    info ? loaded() : loading()
  )
}
