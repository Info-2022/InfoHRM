import React, { useState } from 'react'
import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';


export default function Adminusercreation() {

    const history = useNavigate();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [contact, setContact] = useState();
    const [adminusername, setAdminusername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const btnClick = (e) => {
        e.preventDefault();
        if (e.currentTarget.value === "back") {
            history('/instancecreation');
        }
        else if (e.currentTarget.value === "next") {

            if (fname !== "" && lname !== "" && email !== "" && adminusername !== "" && password !== "" && cpassword !== "") {
                localStorage.setItem("adminusername", adminusername);
                if (password === cpassword) {
                    history('/confirmation');
                }
            }
        }
    }

    return (
        <>
            <div className="App">
                <div className='maindiv'>
                    <div className='navigation'>

                        <div className='menu'>
                            <h1>Welcome</h1>
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>License Acceptance</h1>
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>Database Configuration</h1>
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>System Check</h1>
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>Instance Creation</h1>
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>Admin User Creation</h1>
                            <span className='count countActive'>6</span>
                            <h1>Confirmation</h1>
                            <span className='count'>7</span>
                            <h1>Installation</h1>
                            <span className='count'>8</span>
                            <h1>Installation Complete</h1>
                            <span className='count'>9</span>
                        </div>
                        <div className='footer'>
                            <p >InfoHRM OS 5.3</p>
                            <p>© 2005 - 2023 InfoHRM, Inc. All rights reserved.</p>
                        </div>

                    </div>
                    <div className='content'>
                        <div className='logo'><img className='infoimage' src={pic} alt='logo' /></div>

                        <div >
                            <h4 className="head">Admin User Creation</h4>
                            <p>Select the name, email address, username and password to create the admin user for your InfoHRM Instance</p>
                            <>

                                <div className='datalists'>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Employee Name*</dt>
                                            <dd><input type="text" onChange={(event) => setFname(event.target.value)} className='host' id="fname" placeholder='First Name' required /> </dd>
                                        </dl>
                                        <dl>
                                            <dt>&nbsp;</dt>
                                            <dd><input type="text" onChange={(event) => setLname(event.target.value)} className='host' id="lname" placeholder='Last Name' required /> </dd>
                                        </dl>
                                    </div>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Email*</dt>
                                            <dd><input type="email" onChange={(event) => setEmail(event.target.value)} className='host'  required /> </dd>
                                        </dl>
                                        <dl>
                                            <dt>Contact Number</dt>
                                            <dd><input type="tel" onChange={(event) => setContact(event.target.value)} pattern="[0-9]{10}" className='host' id="mobilenumber" /> </dd>
                                        </dl>
                                    </div>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Admin Username*</dt>
                                            <dd><input type="text" onChange={(event) => setAdminusername(event.target.value)} className='host' id="adminusername" required /> </dd>
                                        </dl>
                                    </div>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Password*</dt>
                                            <dd><input type="password" onChange={(event) => setPassword(event.target.value)} className='host' id="password" required /> </dd>
                                        </dl>
                                        <dl>
                                            <dt>Confirm Password*</dt>
                                            <dd><input type="password" onChange={(event) => setCpassword(event.target.value)} className='host' id="cpassword" required /> </dd>
                                        </dl>
                                    </div>
                                    <div className='check'><input type="checkbox" className="largecheckbox" ></input> &nbsp;<span >Register your system with InfoHRM. By registering, You will be eligible for free support via emails, receive security alerts and news letters from InfoHRM</span></div>
                                </div>

                                <p><span><i class="bi bi-info-circle-fill"></i></span> &nbsp; Users who seek access to their data, or who seek to correct, amend, or delete the given information should direct their requests to data@infohrm.com</p>
                                <p>* Required</p>

                                <div className="licencebuttons">
                                    <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                                    <button value="next" onClick={btnClick} className="btn btn-primary licencenext">Next</button>
                                </div>
                            </>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
