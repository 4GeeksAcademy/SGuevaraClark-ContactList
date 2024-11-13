import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";

export const Home = () => { 


	return( 
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<ContactCard fullName={"Sebastian"} email={"sebgc23"} address={"Madrid"} phone={"88664708"}/>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
}