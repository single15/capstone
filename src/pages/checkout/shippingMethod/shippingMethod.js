import React, { useState } from 'react';
import Button from 'components/button/button';
import { useForm } from 'react-hook-form';
import { SHIPPING_METHOD_FIELDS } from './fields';
import Radio from 'components/radio/radio';
import { ReactComponent as EditIcon } from 'assets/edit-blue.svg';
import 'pages/checkout/shippingMethod/shippingMethod.scss';
import { updateShippingMethod } from 'reducer/checkout';
import { useDispatch } from 'react-redux';


const ReadonlySection = ({ data, toggleEditMode }) => {
    const method = SHIPPING_METHOD_FIELDS.filter(field => field.id === data.shippingMethod)[0];
    return (
        <div className='shipping-method-readonly'>
            <div className='header'>
                <span>
                    <b>Shipping Method</b>
                </span>
                <span onClick={toggleEditMode}>
                    <EditIcon />
                    <span className='edit-button'>Edit</span>
                </span>
            </div>
            <div className='aem-Grid aem-Grid--12 user-details-section'>
                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                    <div>{method.label}</div>
                    <div>Est. delivery in {method.description}</div>
                </div>
            </div>
        </div>
    )
}


const ShippingMethod = (props) => {
    const [editMode, toggleEditMode] = useState(true);
    const [formData, setFormData] = useState({});
    const { register, handleSubmit } = useForm({ shouldUnregister: false });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const method = SHIPPING_METHOD_FIELDS.filter(field => field.id === data.shippingMethod)[0];
        setFormData(data);
        toggleEditMode(false);
        props.clickContinue();
        dispatch(updateShippingMethod(method));
    }

    return (
        editMode ? 
        <div className='border-bottom'>
            <h4>2. Shipping Method</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    {SHIPPING_METHOD_FIELDS.map((field) => (
                        <Radio key={field.id} 
                            label={field.label}
                            description={field.description}
                            id={field.id}
                            {...register(field.name, {
                                required: {
                                    value: true,
                                    message: 'This is a required field.'
                                }
                            })}
                        />
                    ))}
                </section>
                <center>
                    <Button type='secondary' width={180}>CONTINUE</Button>
                </center>
            </form>
        </div>
        : <ReadonlySection data={formData} toggleEditMode={() => {
            toggleEditMode(!editMode);
            props.clickEditMode();
        }} />
    )
}

export default ShippingMethod;