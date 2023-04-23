import React from "react";

function Article({title, date =  "January 1, 1970", preview, minutes}) {

    let emojis = '';

    if (minutes < 30) {
    const coffeeCount = Math.ceil(minutes / 5);
    emojis = '☕️'.repeat(coffeeCount);
    } else {
    const bentoCount = Math.ceil(minutes / 10);
    emojis = '🍱'.repeat(bentoCount);
    }

    const displayText = `${emojis} ${minutes} min read`;
    // console.log(displayText);

    return(

        <article>
            <h3>{title}</h3>
            <small>{date}. {displayText}</small>
            <p>{preview}</p>
        </article>
       
    )
}

export default Article;