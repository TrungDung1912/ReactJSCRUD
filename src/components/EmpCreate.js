import {Link, useNavigate} from 'react-router-dom'
import "./EmpCreate.css";
import {useState} from 'react'
 

const EmpCreate = () => {
    const listusers = JSON.parse(localStorage.getItem("users"));
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [active, activeChange] = useState(true);
    const navigation = useNavigate();
    const [users, setUsers] = useState(listusers);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            phone: phone,
            active: active,
          };
        if(active){
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Đăng ký thành công")
            return navigation("/");
        } else {
            alert("Try again");
            return navigation ("/employee/create")
        }
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" >
                            <div className="card-title">
                                <h2>Employee Creating</h2>
                            </div>
                            <div className="card-body" style={{textAlign: "left"}}>
                                <div className="row">
                                    <div className="form">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input value={name} onChange={e =>nameChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e =>emailChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e =>phoneChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="form-check">
                                            <label className="form-check-label">Is Active</label>
                                            <input style={{width: "10%"}} checked = {active} onChange={e =>activeChange(e.target.checked)} type= "checkbox" className="form-check-input"></input>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary"> Save </button>
                                            <Link to = "/"  className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpCreate