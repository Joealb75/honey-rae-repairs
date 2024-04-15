import { useEffect, useState } from "react"
import "./employees.css"
import { getStaffUsers } from "../services/userService.js"
import { User } from "../users/user.jsx"

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
                return <User user={employeeObj} key={employeeObj}/>
            })}

        </div>
    )
}

