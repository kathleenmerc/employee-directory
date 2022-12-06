import CardImg from "./CardImg";
import CardBody from "./CardBody";

export default function EmployeeCard({ img, name, position }) {
  return (
    <div className="employeeCard">
      <CardImg img={img} />
      <CardBody name={name} position={position} />
    </div>
  );
}
