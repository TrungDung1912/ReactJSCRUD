import { useEffect, useState } from "react";
import data from "../db.json";
import "./EmpListing.css";
import {Link} from "react-router-dom"


const EmpListing = () => {
    const {persons, setPerson} = useState(data);
    const [listPerson, setListPerson] = useState(data);

    return (
        <div className="container">
            <div className="card" >
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="link-to">
                        <Link to = "employee/create" className="link">Add new (+)</Link>
                    </div>
                    <table>
                        <thead >
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listPerson.map((people) => (
                                <tr key={people.id}>
                                    <td>{people.name}</td>
                                    <td>{people.email}</td>
                                    <td>{people.phone}</td>
                                    <td>
                                        <button style={{backgroundColor: "red"}}>Delete</button>
                                        <button style={{backgroundColor: "green"}}>Update</button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing