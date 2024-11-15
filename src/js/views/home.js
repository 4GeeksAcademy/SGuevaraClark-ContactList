import React from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Home = () => { 
	const {store, actions} = useContext(Context);

	return( 

	<div className="text-center mt-5">
		<Link onClick={ ()=> actions.selectContact(null)} to={'/contact/new'}>Go to Form</Link>
		{
			store.contacts?.contacts?.map(el=>

				<ContactCard key={el.id} contact={el}/>
			)
		}
		
	</div>
);
}