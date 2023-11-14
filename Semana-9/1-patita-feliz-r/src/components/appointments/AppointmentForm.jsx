// sfc
import { useState } from "react";

const AppointmentsForm = () => {

    const [appointmentForm, setAppointmentForm] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleInput = (e) => {
        setAppointmentForm({
            ...appointmentForm,
            [e.target.id]: e.target.value

        })
    };

    return (
        <div className="d-flex flex-column gap-3">
            <h3 className="text-center m-0">🐶 Crear Cita 🐶</h3>
            <form className="text-dark">
                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="mascota" 
                    placeholder="Nombre de la mascota"
                    onInput={handleInput} 
                    />
                <label htmlFor="mascota">Nombre de la mascota</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="propietario" 
                    placeholder="Nombre de propietario" 
                    onInput={handleInput} 
                    />
                <label htmlFor="propietario">Nombre de propietario</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="date" 
                    className="form-control" 
                    id="fecha" 
                    placeholder="Fecha" 
                    onInput={handleInput} 
                    />
                <label htmlFor="fecha">Fecha</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="hora" 
                    placeholder="Hora" 
                    onInput={handleInput} 
                    />
                <label htmlFor="hora">Hora</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="sintomas" 
                    placeholder="Sintomas" 
                    onInput={handleInput} 
                    />
                <label htmlFor="sintomas">Sintomas</label>
                </div>
                <button className="btn btn-info w-100 fw-bold">Crear</button>
            </form>
            <ul>
                <li>{appointmentForm.mascota}</li>
                <li>{appointmentForm.propietario}</li>
                <li>{appointmentForm.fecha}</li>
                <li>{appointmentForm.hora}</li>
                <li>{appointmentForm.sintomas}</li>
            </ul>
        </div>
    );
}

export default AppointmentsForm;