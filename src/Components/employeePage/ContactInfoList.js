// import ContactInfoBody from "./ContactInfoBody";
// import data from "../../data"

// export default function ContactInfoList(props) {
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
//     <div className="contactInfoList">
//       <ContactInfoBody label="Call Office" labelInfo={employee.office} />
//       <ContactInfoBody label="Call Mobile" labelInfo={employee.mobile} />
//       <ContactInfoBody label="SMS" labelInfo={employee.sms} />
//       <ContactInfoBody label="Email" labelInfo={employee.email} />
//     </div>
//   );
// }





import ContactInfoBody from "./ContactInfoBody";
import data from "../../data"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ContactInfoList(props) {
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
      <div className="contactInfoList">
        <ContactInfoBody label="Call Office" labelInfo={info.office} />
        <ContactInfoBody label="Call Mobile" labelInfo={info.mobile} />
        <ContactInfoBody label="SMS" labelInfo={info.sms} />
        <ContactInfoBody label="Email" labelInfo={info.email} />
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