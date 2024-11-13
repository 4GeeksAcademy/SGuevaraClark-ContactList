import React from "react";

export const ContactCard = ({fullName, address, email, phone}) => {

    return(
        <article className="card">
            <div className="d-flex">
            <figure>
                <img 
                    className="rounded img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg8keaWuTWemET3-1mWqZae05N8W6SLGgGg&s"
                    alt={fullName} 
                    width={'200px'}
                    height={'200px'}
                    />
            </figure>
            <div className="container">
                <p className="fs-4">
                    {fullName}
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
            </div>
            </div>
        </article>

    );
}