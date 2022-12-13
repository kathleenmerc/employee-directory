import "react";
import Header from "../Components/homepage/Header";
import SearchBar from "../Components/homepage/SearchBar";
import EmployeeList from "../Components/homepage/EmployeeList";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
