import { forwardRef } from 'react';
import 'components/basicInput/basicInput.scss';


const BasicInput = forwardRef(({label, type, error, isRequired, ...rest}, ref) => {
    return (
        <div className='venia-form-input'>
            <div className='label-section'>
                <label>{label}</label>
                {!isRequired && <span>Optional</span>}
            </div>            
            <input
                type={type}
                ref={ref}
                className={`input ${error && 'is-danger'}`}
                {...rest}
            />
        </div>
    );
})

export default BasicInput;
