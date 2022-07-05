import React from "react";
import 'components/button/button.scss';


const Button = (props) => {
    return(
        <button className={`btn btn-${props.type}`} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;