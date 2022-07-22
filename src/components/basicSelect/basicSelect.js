import { forwardRef } from 'react';
import 'components/basicSelect/basicSelect.scss';


const BasicSelect = forwardRef(({ label, name, id, type, error, options, onChange, disabled, isRequired, ...rest }, ref) => {
    return (
        <div className='venia-form-select'>
            <div className='label-section'>
                <label>{label}</label>
                {!isRequired && <span>Optional</span>}
            </div>
            <select ref={ref} name={name} className={`input-select ${error && 'is-danger'}`} id={id} {...rest} onChange={onChange} disabled={disabled}>
                {options.map((item) => 
                    <option key={item.value} value={item.value}>{item.label}</option>
                )}
            </select>
            {error && isRequired && <div className='is-danger'>This is a required field.</div>}
        </div>
    );
})

export default BasicSelect;
