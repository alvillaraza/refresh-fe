import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {login} from '../../views/private/actions/actions-user';
import {connect} from 'react-redux';
import Marketing from './Marketing'

function UserLogin(props) {

    //adjusted the 'mode' argument from the default value of 'onSubmit' for the useForm hook, in order to allow live error changes as user types
    const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

    //handle form submit
    const submitForm = (data, event) => {
        //event.preventDefault();

        //send data of user object with email/password through to login action
        const user = {
            email: data.email,
            password: data.password
        }

        props.login(user); 

       
    }

    return (
        <div className='log-in auth-container'>

            <Marketing />

            <div className='log-in-card'>

                <header className="cardheader">
                    <h2 className="cardheading">Sign In!</h2>
                </header> 
{/* 
                <usertype className='usertype'>
                    <h4>I am a...</h4>
                    
                    <fieldset className="cardfieldset user-type-buttons">  
                        <button className="user-button" type="submit">User</button>
                        <button className="admin-button" type="submit">Admin</button>
                    </fieldset>

                </usertype> */}



                <div className="cardbody">

                    <form onSubmit={handleSubmit(submitForm)}>

                        <fieldset className="cardfieldset">
                            <label for="email"></label>
                                <input
                                        className="cardinput"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        ref={register({required: "Email is required"})}
                                />
                                {errors.email && <p className='input-errors'>{errors.email.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset">
                            <label for="password"></label>
                            <input
                                className="cardinput"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                ref={register({required: "Password is required"})}
                            />
                            {errors.password && <p className='input-errors'>{errors.password.message}</p>}
                        </fieldset>

                        {/* <fieldset className="cardfieldset">
                            <label for="admin">Are you an administrator?</label>
                            <input
                                className="cardinput"
                                id="admin"
                                type="checkbox"
                                name="admin"
                                ref={register}
                            />
                        </fieldset>   */}

                    {/* {(props.error === null ? <p>{''}</p> : <p className='input-errors'>{(props.error.response.data.message)}</p>)} */}

                        <fieldset className="cardfieldset">  
                        <button className="card-button" type="submit">Log in</button>
                        </fieldset>

                        <fieldset className="cardfieldset">   
                        <a className="cardlink"><Link to="/sign-up">Don't have an account? <br/> Click here to sign up</Link></a>
                    </fieldset> 

                    </form>
                </div>
            </div>
            
            {/* <div className="cardwrapper">

                <header className="cardheader">
                    <h1 className="cardheading">Welcome to Refresh!</h1>
                </header> 

                <div className="cardbody">

                    <form onSubmit={handleSubmit(submitForm)}>

                        <fieldset className="cardfieldset">
                            <label for="email">Email: </label>
                                <input
                                        className="cardinput"
                                        id="email"
                                        type="email"
                                        name="email"
                                        ref={register({required: "Email is required to login"})}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset">
                            <label for="password">Password: </label>
                            <input
                                className="cardinput"
                                id="password"
                                type="password"
                                name="password"
                                ref={register({required: "Password is required to login"})}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset">
                            <label for="admin">Are you an administrator?</label>
                            <input
                                className="cardinput"
                                id="admin"
                                type="checkbox"
                                name="admin"
                                ref={register}
                            />
                        </fieldset>  

                        <p>{(props.error === null ? '' : (props.error.response.data.message))}</p>

                        <fieldset className="cardfieldset">  
                        <button className="card-button" type="submit">Log in</button>
                        </fieldset>

                        <fieldset className="cardfieldset">   
                        <a className="cardlink"><Link to="/sign-up">Don't have an account? <br/> Click here to sign up</Link></a>
                    </fieldset> 

                    </form>
                </div>
            </div> */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        error: state.userReducer.error
    }
}

export default connect(mapStateToProps, {login})(UserLogin)