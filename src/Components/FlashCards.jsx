import React from "react";
import { useState } from "react";

const FlashCards = (props) => {
    const [flip, setFlip] = useState(true);
    return(
        <div onClick={() => setFlip(!flip)} className='card'>
            {flip ? props.question : props.answer}
        </div>
    )
}

export default FlashCards