import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService.js"
import "./employees.css"


export const EmployeeDetails = () =>{

    const [employee, setEmployees] = useState([])
    const { employeeId } = useParams()

    useEffect(()=>{
        getEmployeeByUserId(employeeId).then((data)=>{
            const employeeObj = data[0]
        console.log(employeeObj)
        setEmployees(employeeObj)
        })
    },[employeeId])

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email: {employee.user?.email}</span>
            </div>
            <div>
                <span className="employee-info">Specialty: {employee.specialty}</span>
            </div>
            <div>
                <span className="employee-info">Rate: {employee.rate}</span>
            </div>
        </section>
    )
}