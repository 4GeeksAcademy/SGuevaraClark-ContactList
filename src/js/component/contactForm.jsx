import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const ContactForm = () => {
    const {store, actions} = useContext(Context)

    const [formData, setFormData] = useState({
        fullName: store.selected?.fullName || '', 
        email: store.selected?.email || '', 
        address: store.selected?.address || '', 
        phone: store.selected?.phone || '' 
    });


    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    


    const handleSubmit = e => {
        e.preventDefault();
    }



    return(

        <>

        <form className="form-control" onSubmit={handleSubmit}>
            <input name="fullName" value={formData.fullName} onChange={handleChange} required className="form-control" type="text" placeholder="Full Name" />
            <input name="email" value={formData.email} onChange={handleChange} required className="form-control" type="email" placeholder="Email" />
            <input name="address" value={formData.address} onChange={handleChange} required className="form-control" type="text" placeholder="Address" />
            <input name="phone" value={formData.phone} onChange={handleChange} required className="form-control" type="number" placeholder="Phone Number" />
       
            {store.selected? <input type="submit" value={"Editar"}/> : <input type="submit" value={"Crear"} />}

       </form>

<Link className="btn btn-danger" to={'/'}>
    Back to home

       </Link>
       </>
    );
} 