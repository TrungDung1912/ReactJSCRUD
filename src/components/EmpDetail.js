import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './EmpDetail.css'

const EmpDetail = () => {
    const { empid } = useParams();
    const person = JSON.parse(localStorage.getItem("person"));
    const [persons, setPersons] = useState(person);

    return (
        <div>
            <div className='table'>
                <div className='box-shadow'>
                    <div className="card-title">
                        <h2>Employee Detail</h2>
                    </div>
                    <div>
                        <h1>The Employee name is: {persons.name}</h1>
                        <h1>The Employee email is: {persons.email}</h1>
                        <h1>The Employee phone is: {persons.phone}</h1>
                    </div>
                    <Link to='/'><button >Back</button></Link>
                </div>
            </div>
        </div>
    );
}

export default EmpDetail