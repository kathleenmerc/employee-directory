import data from "../../data"

export default function ProfileImg(props) {
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
    <div className="profileImgBorder">
      <img className="profileImg" src={employee.img} alt="image" />
    </div>
  );
}



