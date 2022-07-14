import React, { useState } from 'react';
import Button from 'components/button/button';
import { useForm } from 'react-hook-form';
import { PAYMENT_TYPES_FIELDS, CREDIT_CARD } from './fields';
import Radio from 'components/radio/radio';
import { ReactComponent as EditIcon } from 'assets/edit-blue.svg';
import 'pages/checkout/paymentInfo/paymentInfo.scss';
import CreditCardForm from './creaditCardForm';
import { useDispatch } from 'react-redux';
import { updatePaymentInfo } from 'reducer/checkout';


const ReadonlySection = ({ data, toggleEditMode }) => {
    const method = PAYMENT_TYPES_FIELDS.filter(field => field.id === data.paymentType)[0];
    let ccNumber = [];
    if (data.paymentType === CREDIT_CARD) {
        ccNumber = data.creditCardNumber.split(' ');
    }
    return (
        <div className='payment-info-readonly'>
            <div className='header'>
                <span>
                    <b>Payment Information</b>
                </span>
                <span onClick={toggleEditMode}><EditIcon /></span>
            </div>
            <div className='aem-Grid aem-Grid--12 user-details-section'>
                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                    <div>{method.label}</div>
                    {data.paymentType === CREDIT_CARD && (
                        <div>
                            Visa ending in {ccNumber[3]}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


const PaymentInfo = (props) => {
    const [editMode, toggleEditMode] = useState(true);
    const [formData, setFormData] = useState({});
    const [selectedType, setSelectedType] = useState('');
    const { register, handleSubmit, control } = useForm({ shouldUnregister: false });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const method = PAYMENT_TYPES_FIELDS.filter(field => field.id === data.paymentType)[0];
        setFormData(data);
        toggleEditMode(false);
        dispatch(updatePaymentInfo({ ...data, label: method.label }));
    }

    const handleChange = (id) => {
        setSelectedType(id)
    }

    return (
        editMode ?
            <div className='border-bottom'>
                <h4>3. Payment Information</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        {PAYMENT_TYPES_FIELDS.map((field) => (
                            <Radio key={field.id}
                                label={field.label}
                                id={field.id}
                                handleChange={() => handleChange(field.id)}
                                {...register(field.name, {
                                    required: {
                                        value: true,
                                        message: 'This is a required field.'
                                    }
                                })}
                            >
                                {selectedType === CREDIT_CARD && field.id === CREDIT_CARD ? (
                                    <CreditCardForm register={register} control={control} />
                                ) : null}
                            </Radio>
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

export default PaymentInfo;