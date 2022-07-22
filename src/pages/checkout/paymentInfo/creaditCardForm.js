import React from 'react';
import { Controller } from 'react-hook-form';
import BasicInput from 'components/basicInput/basicInput';
import NumberFormat from 'react-number-format';

const CreditCardForm = ({ register, control, errors }) => {
    return (
        <section className='aem-Grid aem-Grid--12 credit-card-details'>
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
                    <BasicInput
                        label="Name on Card"
                        type="text"
                        isRequired={true}
                        error={errors.name?.message}
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'This is a required field.'
                            }
                        })}
                    />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
                    <div className='venia-form-input'>
                        <label>Credit Card Number</label>
                        <Controller
                            control={control}
                            name="creditCardNumber"
                            rules={{ required: {
                                value: true,
                                message: "This is a required field."
                            } }}
                            render={({ field: { onChange, name, value } }) => (
                                <NumberFormat
                                    format="#### #### #### ####"
                                    name={name}
                                    className={errors.creditCardNumber?.message && 'is-danger'}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.creditCardNumber?.message && <div className='is-danger'>This is a required field.</div>}
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--8 expiration-date'>
                    <BasicInput
                        label="Expiration Date"
                        type="date"
                        isRequired={true}
                        error={errors.expirationDate?.message}
                        {...register('expirationDate', {
                            required: {
                                value: true,
                                message: 'This is a required field.'
                            }
                        })}
                    />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--4'>
                    <div className='venia-form-input'>
                        <label>CVV</label>
                        <Controller
                            control={control}
                            name="cvv"
                            rules={{ required: {
                                value: true,
                                message: "This is a required field."
                            } }}
                            render={({ field: { onChange, name, value } }) => (
                                <NumberFormat
                                    format="###"
                                    name={name}
                                    onChange={onChange}
                                    className={errors.cvv?.message && 'is-danger'}
                                    value={value}                                    
                                />
                            )}
                        />
                        {errors.cvv?.message && <div className='is-danger'>This is a required field.</div>}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default CreditCardForm;