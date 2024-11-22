import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {

const {store, actions} = useContext(Context);
const {id, name, address, email, phone} = props.contact

    return(
        <article className="card mb-3">
            <div className="d-flex align-items-center p-3">
            <figure className="mb-0- me-4">
                <img 
                    className="rounded img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg8keaWuTWemET3-1mWqZae05N8W6SLGgGg&s"
                    alt={name} 
                    width={'200px'}
                    height={'200px'}
                    />
            </figure>
            
            <div className="container flex-grow-1">
                    <h5 className="col-4 mb-3 fw-bold">{name}</h5>
                    <div className="row mb-2">
                        <div className="col-2 fw-bold">Address:</div>
                        <div className="col-3">{address}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-2 fw-bold">Email:</div>
                        <div className="col-3">{email}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-2 fw-bold">Phone:</div>
                        <div className="col-3">{phone}</div>
                    </div>

            <div className="col-5">
                <Link onClick={() => actions.selectContact(props.contact)} to={"/contact/"+ id} className="btn btn-secondary me-2">Edit</Link>
                <button onClick={()=> actions.deleteContact(id)} className="btn btn-danger">Delete</button>
            </div>
            </div>
            </div>
        </article>

    );
}