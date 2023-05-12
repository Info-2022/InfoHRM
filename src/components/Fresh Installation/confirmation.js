import React, { useState, useEffect } from 'react'
import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';


export default function Confirmation() {

    const history = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("encrypt") === "true") {
            setVisible(true);
        }
    }, [])

    const btnClick = (e) => {
        e.preventDefault();
        if (e.currentTarget.value === "back") {
            history('/adminusercreation');
        }
        else if (e.currentTarget.value === "next") {
            history('/installation');
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
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>Confirmation</h1>
                            <span className='count countActive'>7</span>
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

                        <div>
                            <h4 className="head">Confirmation</h4>
                            <p>All the information required for InfoHRM installation collected in the earlier steps are given below. On confirmation the installer will create the database, database users, configuration file, etc</p>
                            <h5>Details</h5>
                            <form>
                                <div>
                                    <div className='datalists'>
                                        <div className='datalists1'>
                                            <dl>
                                                <dt>Host Name</dt>
                                                <dd>{localStorage.getItem("hostname")}</dd>

                                                <dt>Database Host Port</dt>
                                                <dd>{localStorage.getItem("hostport")}</dd>

                                                <dt>Database Name</dt>
                                                <dd>{localStorage.getItem("dbname")}</dd>

                                                <dt>Privileged Database Username</dt>
                                                <dd>{localStorage.getItem("dbuname")}</dd>

                                                <dt>InfoHRM Admin Username</dt>
                                                <dd>{localStorage.getItem("adminusername")}</dd>
                                                {
                                                    visible &&
                                                    <>
                                                        <dt>Data Encryption</dt>
                                                        <dd><p>Data Encryption Is On. Employee Social Security Number, Employee Basic Salary, LDAP Bind User Password Will Be Encrypted.
                                                            Please backup encryption key located at lib/confs/cryptokeys/key.ohrm</p>
                                                        </dd>
                                                    </>
                                                }

                                            </dl>
                                        </div>
                                    </div>
                                    <p>Click <strong>Install</strong> to continue</p>
                                    <div className="licencebuttons">
                                        <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                                        <button value="next" onClick={btnClick} className="btn btn-primary licencenext">Install</button>
                                    </div>
                                </div>




                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
