import { useEffect, useState } from "react"
import "./employees.css"
import { getStaffUsers } from "../../services/userService.js"
import { User } from "../users/user.jsx"
import { Link } from "react-router-dom"

export const EmployeesList = () =>{
    const [employee, setEmployees] = useState([])

    useEffect(()=>{
        getStaffUsers().then((employeeArray) =>{
            setEmployees(employeeArray)
        })
    },[])


    return (
        <div className="employees">
            {employee.map((employeeObj)=>{
                return (
                <Link key={employeeObj.id} to={`/employees/${employeeObj.id}`}>
                    <User user={employeeObj} />
                </Link>
            )})}

        </div>
    )
}

