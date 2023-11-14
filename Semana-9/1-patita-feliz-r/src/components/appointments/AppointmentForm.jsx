// sfc

const AppointmentsForm = () => {
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
                    />
                <label for="mascota">Nombre de la mascota</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="propietario" 
                    placeholder="Nombre de propietario" 
                    />
                <label for="propietario">Nombre de propietario</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="date" 
                    className="form-control" 
                    id="fecha" 
                    placeholder="Fecha" 
                    />
                <label for="fecha">Fecha</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="hora" 
                    placeholder="Hora" 
                    />
                <label for="hora">Hora</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="sintomas" 
                    placeholder="Sintomas" 
                    />
                <label for="sintomas">Sintomas</label>
                </div>
                <button className="btn btn-info w-100 fw-bold">Crear</button>
            </form>
        </div>
    );
}

export default AppointmentsForm;