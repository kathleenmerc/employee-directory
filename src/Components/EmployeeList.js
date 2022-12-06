import employeeInfoArray from "../data";
import EmployeeCard from "./EmployeeCard";

//map function with card image, name and position
const employeeInfo = employeeInfoArray.map((ele, idx) => {
  return <EmployeeCard key={idx} {...ele} />;
});

export default function EmployeeList() {
  return (
    <>
      <div className="employeeList">{employeeInfo}</div>
    </>
  );
}
