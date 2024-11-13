import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { Link } from "react-router-dom";


export const Home = () => { 


	return( 

	<div className="text-center mt-5">
		<Link to={'/contact/new'}>Go to Form</Link>
		<h1>Hello Rigo!</h1>
		<ContactCard fullName={"sebas"} email={"sebgc23"} address={"Madrid"} phone={"88664708"}/>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
}