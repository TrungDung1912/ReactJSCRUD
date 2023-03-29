import { useState, useRef } from "react";
import "./EmpListing.css";
import { Link, useNavigate } from "react-router-dom"


const EmpListing = () => {
    const listusers = JSON.parse(localStorage.getItem("users"));
    const [listPerson, setListPerson] = useState(listusers);
    const navigate = useNavigate();
    const refSearch = useRef();


    const HandleUpdate = (id) => {
        const personToEdit = listPerson.find(p => p.id === id);
        // Kiểm tra xem đối tượng person đã tìm được có tồn tại hay không
        if (!personToEdit) {
            console.error(`Cannot find person with id ${id}`);
            return;
        }
        // Hiển thị form để nhập thông tin mới
        const newName = prompt(`Enter new name for ${personToEdit.name}`);
        const newEmail = prompt(`Enter new email for ${personToEdit.email}`);
        const newPhone = prompt(`Enter new phone for ${personToEdit.phone}`);

        personToEdit.name = newName;
        personToEdit.email = newEmail;
        personToEdit.phone = newPhone;
        
        setListPerson([...listPerson]);
    }

    const LoadDetail = (id) => {
        const person = listPerson.find(person => person.id === id);
        localStorage.setItem("person", JSON.stringify(person));
        navigate('/employee/detail/' + id);
    }

    const HandleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const newListPerson = listPerson.filter((person) => person.id !== id);
            setListPerson(newListPerson);
        }
    }

    const searchEmployee = () => {
        const searchStudent = refSearch.current.value;
        let newStudent = listPerson;
        if (searchStudent.length > 0) {
            newStudent = listPerson.filter((student) =>
                student.name.toLowerCase().includes(searchStudent.toLowerCase())
            )
        }
        setListPerson(newStudent);
    }

    return (
        <div className="container">
            <div className="card" >
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="link-to">
                        <Link to="employee/create" className="link">Add new (+)</Link>
                    </div>
                    <div className="search-form">
                        <input type="text" id="nameSearch" ref={refSearch} placeholder="Enter a full Name to search..." />
                        <button onClick={() => searchEmployee()} >Search</button>
                    </div>
                    <h1> List of Students</h1>
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
                                        <button style={{ backgroundColor: "red" }} onClick={() => { HandleDelete(people.id) }}>Delete</button>
                                        <button style={{ backgroundColor: "green" }} onClick={() => { HandleUpdate(people.id) }}>Update</button>
                                        <button style={{ backgroundColor: "blue" }} onClick={() => { LoadDetail(people.id) }}>Detail</button>
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