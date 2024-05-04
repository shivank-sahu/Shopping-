import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const title = "Register";
const socialTitle = " Login with social media";
const btnText = " Signup Now"

const SignUp = () => {
    const [errorMessage, seterrorMessage] = useState("");
    const { signUpWithGmail, createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || "/";
    const handleRegister = (event) => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message;
            seterrorMessage("Please provide valid email & password")
        })
    }
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            seterrorMessage("Password does not match")
        } else {
            seterrorMessage("");
            createUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Account created successfully done!!!");
                    
                navigate(from,{replace:true})
                }).catch((error) => {
                    alert(`${error.message}`)
                })
        }
    }
    return (
        <div>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">
                            {title}
                        </h3>
                        <form action="" className="account-form" onSubmit={handleSignup}>
                            <div className="form-group">
                                <input type="text" name='name' placeholder='Enter name' required />
                            </div>





                            <div className="form-group">
                                <input type="email" name='email' placeholder='Email address' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' id='password' placeholder='password' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name='confirmPassword' id='confirmPassword' placeholder='re-enter password' required />
                            </div>
                            <div>
                                {
                                    seterrorMessage && (
                                        <div className="error-message text-danger mb-1">
                                            {errorMessage}
                                        </div>
                                    )
                                }
                            </div>

                            <div className="form-group">
                                <button className="d-block lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>

                        <div className="account-bottom">
                            <span className="d-block cate pt-10">
                                Have an Account? <Link to="/login">Login</Link>
                            </span>
                            <span className="or">
                                <span>or</span>
                            </span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button className="github" onClick={handleRegister}><i className="icofont-github"></i></button>
                                </li>
                                <li>
                                    <a href='/' className="facebook"><i className="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href='/' className="twitter"><i className="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href='/' className="linkedin"><i className="icofont-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href='/' className="instagram"><i className="icofont-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp