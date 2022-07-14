import React, { forwardRef } from 'react';
import 'components/radio/radio.scss';

const Radio = forwardRef(({ name, label, id, description, handleChange, children, ...rest }, ref,) => {
    return (
        <>
            <div className='venia-form-radio' onClick={handleChange}>
                <input ref={ref} type="radio" id={id} value={id} name={name} {...rest} />
                <label htmlFor={id}>
                    <b>{label}</b>&nbsp;&nbsp;
                    {description ? description : ''}
                </label>
            </div>
            {children}
        </>
    )
});


export default Radio;