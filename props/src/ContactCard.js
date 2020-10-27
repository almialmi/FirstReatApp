import React from 'react';

function ContactCard(props){
    return(
        <div>
            <img src={props.contact.imgUrl} alt="img" />
            <h3>{props.contact.name}</h3>
            <p>Phone:{props.contact.phone}</p>
            <p>Email:{props.contact.email}</p>

        </div>
    )
}

export default ContactCard;