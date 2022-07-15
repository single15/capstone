import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import BasicInput from 'components/basicInput/basicInput';
import NumberFormat from "react-number-format";
import Button from 'components/button/button';
import { SHIPPING_INFORMATION_FIELDS } from 'pages/checkout/shippingInfo/fields';
import { ReactComponent as EditIcon } from 'assets/edit-blue.svg';
import { useDispatch } from 'react-redux';
import { updateShippingInfo } from 'reducer/checkout';
import BasicSelect from 'components/basicSelect/basicSelect';
import 'pages/checkout/shippingInfo/shippingInfo.scss';


const ReadonlySection = ({ data, toggleEditMode }) => (
    <div className='shipping-info-readonly'>
        <div className='header'>
            <b>Shipping Information</b>
            <span onClick={toggleEditMode}>
                <EditIcon />
                <span className='edit-button'>Edit</span>
            </span>
        </div>
        <div className='aem-Grid aem-Grid--12 user-details-section'>
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 user-contact-section'>
                <div>{data.email}</div>
                <div>{data.phoneNumber}</div>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                <div>{`${data.firstName} ${data.lastName}`}</div>
                <div>{`${data.streetAddress} ${data.streetAddress2}`}</div>
                <div>{`${data.city}, ${data.state} ${data.zip}`}</div>
                <div>{`${data.country}`}</div>
            </div>
        </div>
    </div>
)


const ShippingInfo = (props) => {
    const [editMode, toggleEditMode] = useState(true);
    const [formData, setFormData] = useState({});
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const { register, handleSubmit, control } = useForm({ shouldUnregister: false });

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        setFormData(data);
        toggleEditMode(false);
        props.clickContinue();
        dispatch(updateShippingInfo(data));
    }

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/states")
            .then(response => response.json())
            .then(result => {
                const data = result.data;
                const c = [];
                data.forEach(co => {
                    c.push({
                        value: co.iso3+co.iso2,
                        label: co.name,
                        ...co
                    })
                })

                setCountries(c);
            })
            .catch(error => console.log('error', error));
    }, []);

    const handleChange = (e) => {
        const countryCode = e.target.value;
        let s = countries.filter(co => co.value === countryCode)[0].states;
        setStates(s.map(st => ({
            value: st.state_code,
            label: st.name
        })));
    }

    return (
        editMode ?
            <div className='border-bottom'>
                <h4 className='margin-0'>Contact Information</h4>
                <p>
                    We'll use there details to keep you informed on your delivery.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <BasicInput
                                label="Email"
                                type="text"
                                placeholder="Enter Email"
                                isRequired={true}
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'This is a required field.'
                                    }
                                })}
                            />
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <div className='venia-form-input'>
                                <label>Phone Number</label>
                                <Controller
                                    control={control}
                                    name="phoneNumber"
                                    render={({ field: { onChange, name, value } }) => (
                                        <NumberFormat
                                            format="(###) ###-####"
                                            name={name}
                                            value={value}
                                            onChange={onChange}
                                            placeholder="(123) 123-1234"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <section className='aem-Grid aem-Grid--12'>
                        <h4>1. Shipping Information</h4>
                        {SHIPPING_INFORMATION_FIELDS.map((field) =>
                            field.name === 'country' ?
                                <div className='aem-Grid aem-Grid--12' key={field.name}>
                                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                        <BasicSelect
                                            label={field.label}
                                            name={field.name}
                                            id={field.id}
                                            isRequired={field.isRequired}
                                            options={countries}
                                            {...register(field.name, {
                                                required: {
                                                    value: field.isRequired,
                                                    message: field.isRequired && 'This is a required field.'
                                                },
                                                onChange: handleChange
                                            })}
                                        />
                                    </div>
                                </div>
                                : field.name === 'state' ?
                                    <div className={`aem-GridColumn aem-GridColumn--default--${field.size} aem-GridColumn--tablet--6 aem-GridColumn--phone--12`} key={field.name}>
                                        <BasicSelect
                                            label={field.label}
                                            name={field.name}
                                            id={field.id}
                                            isRequired={field.isRequired}
                                            options={states}
                                            disabled={states.length === 0}
                                            {...register(field.name, {
                                                required: {
                                                    value: field.isRequired,
                                                    message: field.isRequired && 'This is a required field.'
                                                }
                                            })}
                                        />
                                    </div>
                                    :
                                    <div className={`aem-GridColumn aem-GridColumn--default--${field.size} aem-GridColumn--tablet--6 aem-GridColumn--phone--12`} key={field.name}>
                                        <BasicInput
                                            label={field.label}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            isRequired={field.isRequired}
                                            {...register(field.name, {
                                                required: {
                                                    value: field.isRequired,
                                                    message: field.isRequired && 'This is a required field.'
                                                }
                                            })}
                                        />
                                    </div>
                        )}
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


export default ShippingInfo;