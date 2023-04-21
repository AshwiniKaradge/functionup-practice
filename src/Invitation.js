import React from 'react';

function Invitation(props){
    const {subject, to, name, party, friends, location, from} = props;

    return(
        <div>
            <h3>Subject:{subject}</h3>
            <p>To: {to}</p>
            <p>Hi, {name}</p>
            <p>
                I am having a {party} next Friday at my home. Would you like to come? It will be fun. Lots of people from my school are coming. you know some of them - {friends}.

            </p>
            <p>my house is behind ou school, near {location}.</p>
            <p>I hope you will come and see you soon.</p>
            <p>From,
                {from}
            </p>
        </div>
    );
}

export default Invitation;
