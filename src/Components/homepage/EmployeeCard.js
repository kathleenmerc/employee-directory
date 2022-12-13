import CardImg from "./CardImg";
import CardBody from "./CardBody";
import { Link } from "react-router-dom"

export default function EmployeeCard({ img, name, position }) {

  const joinedName = name.split(" ").join("")

  return (
    <Link to={`/employee/${joinedName}`} style={{textDecoration:"none"}}>

      <div className="employeeCard">
        <CardImg img={img} />
        <CardBody name={name} position={position} />
      </div>
      
    </Link>
  );
}
