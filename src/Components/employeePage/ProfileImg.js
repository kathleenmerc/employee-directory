// import data from "../../data"

// export default function ProfileImg(props) {
//   let employee = null
//   data.map((foundName) => {
//     const joinedName = foundName.name.split(" ").join("")
//     const path = window.location.pathname
//     if (`/employee/${joinedName}` === path) {
//       employee = foundName
//       return employee
//     }
//   })

//   return (
//     <div className="profileImgBorder">
//       <img className="profileImg" src={employee.img} alt="image" />
//     </div>
//   );
// }



import data from "../../data"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProfileImg(props) {
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
      <div className="profileImgBorder">
        <img className="profileImg" src={info.img} alt="image" />
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



