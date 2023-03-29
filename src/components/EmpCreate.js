import {Link, useNavigate} from 'react-router-dom'
import "./EmpCreate.css";
import {useState} from 'react'
import axios from 'axios';
 

const EmpCreate = () => {
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [active, activeChange] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Gửi yêu cầu HTTP đến API để thêm thông tin
          await axios.post('http://localhost:3000/', {
            name,
            email,
            phone,
            active
          });
          // Chuyển hướng về trang chủ
          navigate('/');
        } catch (error) {
          console.error(error);
          // Xử lý lỗi nếu có
        }
      };

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
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
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
                                            <input checked = {active} onChange={e =>activeChange(e.target.checked)} type= "checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
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