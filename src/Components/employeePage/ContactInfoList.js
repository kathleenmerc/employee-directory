import ContactInfoBody from "./ContactInfoBody";
import data from "../../data"

export default function ContactInfoList(props) {
  let employee = null
  data.map((foundName) => {
    const joinedName = foundName.name.split(" ").join("")
    const path = window.location.pathname
    if (`/employee/${joinedName}` === path) {
      employee = foundName
      return employee
    }
  })

  return (
    <div className="contactInfoList">
      <ContactInfoBody label="Call Office" labelInfo={employee.office} />
      <ContactInfoBody label="Call Mobile" labelInfo={employee.mobile} />
      <ContactInfoBody label="SMS" labelInfo={employee.sms} />
      <ContactInfoBody label="Email" labelInfo={employee.email} />
    </div>
  );
}
