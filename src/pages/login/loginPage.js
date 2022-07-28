import React from 'react';
import BasicInput from 'components/basicInput/basicInput';
import { useForm } from 'react-hook-form';
import 'pages/login/loginPage.scss';
import Button from 'components/button/button';
import HorizontalBar from 'components/horizontalbar/horizontalbar';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ shouldUnregister: false });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate('/capstone');
    }

    return (
        <section className='login-page-section'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='aem-Grid aem-Grid--12'>
                    <div className='section-header'>
                        <center>
                            <span className='display-l-36-'>
                                Login to Venia
                            </span>
                            <HorizontalBar />
                        </center>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--12'>
                        <BasicInput
                            label="Email"
                            type="email"
                            error={errors.userName?.message}
                            placeholder="Enter Email"
                            isRequired={true}
                            {...register('userName', {
                                required: {
                                    value: true,
                                    message: 'This is a required field.'
                                }
                            })}
                        />
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--12'>
                        <BasicInput
                            label="Password"
                            type="password"
                            error={errors.userPassword?.message}
                            placeholder="Enter Password"
                            isRequired={true}
                            {...register('userPassword', {
                                required: {
                                    value: true,
                                    message: 'This is a required field.'
                                },
                                pattern: {
                                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                    message: 'Enter valid password'
                                }
                            })}
                        />
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--12'>
                        <center>
                            <Button type="secondary" width={180}>Login</Button>
                        </center>
                    </div>
                </div>
            </form>

        </section>
    )
}


export default LoginPage;