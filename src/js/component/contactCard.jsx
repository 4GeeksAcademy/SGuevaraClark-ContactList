import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {

const {store, actions} = useContext(Context);
const {id, name, address, email, phone} = props.contact

    return(
        <article className="card">
            <div className="d-flex">
            <figure>
                <img 
                    className="rounded img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg8keaWuTWemET3-1mWqZae05N8W6SLGgGg&s"
                    alt={name} 
                    width={'200px'}
                    height={'200px'}
                    />
            </figure>
            <div className="container">
                <p className="fs-4">
                    {name}
                </p>
                <p>
                    {address}
                </p>
                <p>
                    {email}
                </p>
                <p>
                    {phone}
                </p>
            <div>
                <Link onClick={() => actions.selectContact(props.contact)} to={"/contact/"+ id}>Edit</Link>
                <button onClick={()=> actions.deleteContact(id)} >Delete</button>
            </div>
            </div>
            </div>
        </article>

    );
}