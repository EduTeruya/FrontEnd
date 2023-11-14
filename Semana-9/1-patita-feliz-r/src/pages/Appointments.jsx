import AppointmentsForm from "../components/appointments/AppointmentForm";

const Appointments = () => {
    return (
        <section className="py-5">
            <div className="container d-flex justify-content-between">
                <AppointmentsForm/>
            </div>
        </section>
    );
};

export default Appointments;