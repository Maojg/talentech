import { useEffect, useState } from "react";
import { getCitiesCo } from "../../../api/getCitiesCo";
import "./SignUpUser.css";
import  getSpeciality  from "../../../api/getSpeciality";

const SignUpUser = () => {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [explorerRole, setExplorerRole] = useState(false);
  const [entrepeneurRole, setEntrepeneurRole] = useState(false);
  const [speciality, setSpeciality] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await getCitiesCo();
      setCity(res);
      const resp = await getSpeciality();
      setSpeciality(resp);
    };

    loadData();
  }, []);

  console.log(city);

  
  console.log("------speciality---------");
  console.log(speciality);

  const handleSpecialityChange = (e) => {
    setSelectedSpeciality(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const TogleExplorerRole = () => {
    setExplorerRole(!explorerRole);
    setEntrepeneurRole(false);
  };
  const TogleEntrepeneurRole = () => {
    setEntrepeneurRole(!entrepeneurRole);
    setExplorerRole(false);
  };

  return (
    <article className="signup__container">
      <div>
        <h3>Formulario de Inscripción</h3>
      </div>

      <div className="toggle-buttons">
        <div>
          <button
            type="button"
            onClick={TogleExplorerRole}
            className={`toggle-button ${explorerRole ? "active" : ""}`}
          >
            EXPLORADOR
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={TogleEntrepeneurRole}
            className={`toggle-button ${entrepeneurRole ? "active" : ""}`}
          >
            EMPRENDEDOR
          </button>
        </div>
      </div>

      {/* FORM depending on ROLE */}
      <form>
        {explorerRole && (
          <section>
          <div className="inputGroup">
             <input className="inputGroupInput" type="text" id="userName" name="userName" required />
             <label className="inputGroupLabel" htmlFor="userName">Nombre de Usuario</label>
           </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="password" id="password" name="password" required />
              <label className="inputGroupLabel" htmlFor="password">Contraseña</label>
            </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="email" id="email" name="email" required />
              <label className="inputGroupLabel" htmlFor="email">Correo Electronico</label>
            </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="text" id="contact" name="contact" required />
              <label className="inputGroupLabel" htmlFor="contact">Numero de contacto</label>
            </div>
            <div className="inputGroup">
                <input className="inputGroupInput" type="text" id="fullName" name="fullName" required />
                <label className="inputGroupLabel" htmlFor="fullName">Nombre completo</label>
            </div>
            <div className="inputGroup">
              <select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Seleccione una ciudad</option>
                {city.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="inputGroupLabel" htmlFor="city">Ciudad</label>
            </div>
            <button type="submit">Registrarme</button>
          </section>
        )}
      </form>

        <form >
          {entrepeneurRole && (
          <section>
          <div className="inputGroup">
             <input className="inputGroupInput" type="text" id="userName" name="userName" required />
             <label className="inputGroupLabel" htmlFor="userName">Nombre de Usuario:</label>
           </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="password" id="password" name="password" required />
              <label className="inputGroupLabel" htmlFor="password">Contraseña:</label>
            </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="email" id="email" name="email" required />
              <label className="inputGroupLabel" htmlFor="email">Correo Electronico:</label>
            </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="text" id="contact" name="contact" required />
              <label className="inputGroupLabel" htmlFor="contact">Numero de contacto:</label>
            </div>
            <div className="inputGroup">
              <input className="inputGroupInput" type="text" id="fullName" name="fullName" required />
              <label className="inputGroupLabel" htmlFor="fullName">Nombre completo:</label>
            </div>
            <div className="inputGroup">
              <select
                id="speciality"
                value={selectedSpeciality}
                onChange={handleSpecialityChange}
              >
                <option value="">Seleccione una especialidad</option>
                {speciality.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="inputGroupLabel" htmlFor="city">Especialidad:</label>
            </div>
            <div className="inputGroup">
              <select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Seleccione una ciudad</option>
                {city.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="inputGroupLabel" htmlFor="city">Ciudad:</label>
            </div>
            <div className="inputGroup">
             <textarea className="xp" name="htmlFor" id="htmlFor" rows="4" cols="50" placeholder="Cuentanos tu experiencia previa..." required></textarea>
              <label className="inputGroupLabel" htmlFor="experience">Experiencia previa:</label>
            </div>

            <button type="submit">Registrarme</button>
          </section>
        )}
      </form>

    </article>
  );
};

export default SignUpUser;
