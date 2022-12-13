import "react";
import Header from "../Components/homepage/Header";
import ContactEmployeeProfile from "../Components/employeePage/ContactEmployeeProfile";
import { Link } from "react-router-dom";

export default function EmployeePage() {
    return (
        <div className="employeePage">
            <Link to="/">
                <button className="backBtn">Back</button>
            </Link>
            <Header header="Employee Contact" />
            <ContactEmployeeProfile />
        </div>
    )
}



// return (

//     const { name } = useParams()
//     const url = `/employeePage/${name}`

//     const [employee, setEmployee] = useState("null")

//     const getEmployee = async () => {
//         try {
//             const response = await fetch(url)
//             const data = await response.json()
//             setEmployee(data)
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     useEffect(() => {
//         getEmployee()
//     }, [])

//     const loaded = () => {
//         <div className="employeePage">
//             <Link to="/">
//                 go back
//             </Link>
//             <Header header="Employee Contact" />
//             <ContactEmployeeProfile />
//         </div>
//     }

//     const loading = () => {
//         return <h1>Loading...</h1>
//     }

//     return (
//         employee ? loaded() : loading()
//     )

//   );