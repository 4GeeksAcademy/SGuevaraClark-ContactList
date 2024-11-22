import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";



export const ContactForm = () => {
    const {store, actions} = useContext(Context)
    const {id} = useParams()

    const [formData, setFormData] = useState({
        name: store.selected?.name || '', 
        email: store.selected?.email || '', 
        address: store.selected?.address || '', 
        phone: store.selected?.phone || '' 
    });


    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    


    const handleSubmit = e => {
        e.preventDefault();
        store.selected? actions.updateContact(id, formData):
        actions.createContact(formData)
    }



    return(

        <div className="container mt-4">
            <h2 className="mb-4 text-center">Add a new contact</h2>

        <form className="form-control" onSubmit={handleSubmit}>
            <label className="form-label">Full Name</label>
            <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required className="form-control" 
            type="text" 
            placeholder="Full Name" />

            <label className="form-label">Email</label>
            <input 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required className="form-control" 
            type="email" 
            placeholder="Email" />

            <label className="form-label">Phone</label>
            <input 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required className="form-control" 
            type="number" 
            placeholder="Phone Number" />
       
            <label className="form-label">Address</label>
            <input 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required className="form-control" 
            type="text" 
            placeholder="Address" />
           
            {store.selected? <input className="btn btn-primary w-100" type="submit" value={"Edit"}/> : <input className="btn btn-primary w-100" type="submit" value={"Create"} />}

       </form>

<Link className="btn btn-danger" to={'/'}>
    Back to home

       </Link>
       </div>
    );
} 