import React from "react";

function About ({img = 'https://via.placeholder.com/215', description}) {
    return (
        <aside>
            <img src = {img} alt = "blog logo"/>
            <p>{description}</p>
        </aside>
    )
}


export default About;