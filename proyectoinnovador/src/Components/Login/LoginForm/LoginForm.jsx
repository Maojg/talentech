import { useId, useState } from "react";
import "./LoginForm.css";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";


const LoginForm = ({onLogin}) => {
  const nameId = useId();
  const passwordId = useId();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({email:"", password: ""})

  //Logica para que el input almacene los datos enviados atraves del formulario

  const handleChange = (e) => {
    const {name, value} = e.target;

    const newFormData = {...formData, [name]: value}
    setFormData(newFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!formData.email || !formData.password) return

    onLogin(formData)
    e.target.reset()
    setFormData({email:"", password: ""})
  }

  // Logica para mostrar y desmostrar la contrasena del usuario

  const logicPassword = isPasswordVisible ? 'text' : 'password'

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="container-fluid form-class">
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <input className="inputGroupInput" type="email" id={nameId} name="email" required value={formData.email} onChange={handleChange}/>
          <label className="inputGroupLabel" htmlFor={nameId}>Email</label>
        </div>
        <div className="inputGroup">
          <input className="inputGroupInput" type={logicPassword} id={passwordId} name="password" required value={formData.password} onChange={handleChange} />
          <label className="inputGroupLabel" htmlFor={passwordId}>Password</label>
        </div>
        <button type="button" onClick={showPassword}>
          <FaEye />
        </button>
        <button type="submit">Login</button>
        <div>
          <Link to="/signup" >Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
