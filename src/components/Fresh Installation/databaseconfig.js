import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Databaseconfig = () => {

    const history = useNavigate();
    const [visible, setVisible] = useState(true);
    const [accept, setAccept] = useState(false);
    const [encrypt, setEncrypt] = useState(false);
    const [hostname, setHostname] = useState('');
    const [hostport, setHostport] = useState(3306);
    const [dbname, setDbname] = useState('');
    const [dbuname, setDbuname] = useState('');
    const [dbpassword, setDbpassword] = useState('');
    const [orangeuname, setOrangeuname] = useState('');
    const [orangepassword, setOrangepassword] = useState('');
    const [option1, setOption1] = useState(true);

    const formSubmit = (e) => {
        e.preventDefault();
    }
    const btnClick = (e) => {
        if (e.currentTarget.value === "back") {
            history('/Licence');
        }
        else if (e.currentTarget.value === "next") {
            const err = document.getElementById("err");
            if (encrypt === true) {
                localStorage.setItem("encrypt", true);
            } else {
                localStorage.setItem("encrypt", false);
            }

            if (hostname !== '' && hostport !== '' && dbname !== '') {
                localStorage.setItem("hostname", hostname);
                localStorage.setItem("hostport", hostport);
                localStorage.setItem("dbname", dbname);

                if (option1 === true) {

                    if (dbuname !== '' && dbpassword !== '') {
                        if (accept === true) {
                            history('/Systemcheck');
                        } else {
                            if (orangeuname !== '') {
                                localStorage.setItem("dbuname", dbuname);
                                history('/Systemcheck');
                            }
                        }

                    } else if (dbuname !== '' && dbpassword === '') {
                        err.innerHTML = 'Access denied for `Privileged Database User`. Please check `Privileged Database Username` and `Privileged Database User Password` Correct.';
                    }
                } else {
                    if (orangepassword !== '') {
                        history('/Systemcheck');
                    } else {
                        err.innerHTML = 'Access denied for `Privileged Database User`. Please check `Privileged Database Username` and `Privileged Database User Password` Correct.';
                    }
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
                            <h1 className='activehead'>Database Configuration</h1>
                            <span className='count countActive'>3</span>
                            <h1>System Check</h1>
                            <span className='count'>4</span>
                            <h1>Instance Creation</h1>
                            <span className='count'>5</span>
                            <h1>Admin User Creation</h1>
                            <span className='count'>6</span>
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
                            <h4 className="head">Database Configuration</h4>
                            <p>Please enter your database configuration information below. If you are unsure of what to fill in, we suggest that you use the default values.</p>
                            <p>Select Database to Use</p>

                            <form onSubmit={formSubmit}>
                                <div className="radio">
                                    <input type="radio" onClick={() => { setVisible(true); setOption1(true) }} className="radiolarge" id="option1" value="option1" name="option" defaultChecked />&nbsp; New Database
                                </div>
                                <div className="radio">
                                    <input type="radio" onClick={() => { setVisible(false); setOption1(false) }} className="radiolarge" id="option2" value="option2" name="option" />&nbsp; Existing Empty Database
                                </div>

                                <div className='datalists'>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Database Host Name *</dt>
                                            <dd><input type="text" className='host' id="hostname" onChange={(event) => setHostname(event.target.value)} required /> </dd>
                                        </dl>
                                        <dl>
                                            <dt>Database Host Port *</dt>
                                            <dd><input type="text" value={hostport} className='hostport' id="hostport" onChange={(event) => setHostport(event.target.value)} required /> </dd>
                                        </dl>
                                    </div>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Database Name *</dt>
                                            <dd><input type="text" className='host' id="dbname" onChange={(event) => setDbname(event.target.value)} required /> </dd>
                                        </dl>
                                        {visible &&
                                            <>
                                                <div className='check'><input type="checkbox" className="largecheckbox" onClick={(event) => setAccept(event.target.checked)} ></input> &nbsp;<span>Use the same Database User for InfoHRM</span></div>
                                            </>
                                        }

                                    </div>
                                    <div className='datalists1'>
                                        {visible &&
                                            <>
                                                <div>
                                                    <dl>
                                                        <dt>Privileged Database Username *<span className='infocircle'><i class="bi bi-info-circle-fill" title="Privileged Database User should have the rights to create databases, create tables, insert data into table, alter table structure and to create database users."></i></span></dt>
                                                        <dd><input type="text" className='host' id="dbuname" onChange={(event) => setDbuname(event.target.value)} required /> </dd>
                                                    </dl>
                                                </div>
                                                <div>
                                                    <dl>
                                                        <dt>Privileged Database User Password</dt>
                                                        <dd><input type="password" className='host' id="dbpassword" onChange={(event) => setDbpassword(event.target.value)} /> </dd>
                                                    </dl>
                                                </div>
                                            </>
                                        }
                                        <div>
                                            <dl>
                                                <dt>InfoHRM Database Username *<span className='infocircle'><i class="bi bi-info-circle-fill" title="InfoHRM database user should have the rights to insert data into table, update data in a table, delete data in a table."></i></span></dt>
                                                <dd><input type="text" className='host' onChange={(event) => setOrangeuname(event.target.value)} disabled={accept} required /> </dd>
                                            </dl>
                                        </div>
                                        <div>
                                            <dl>
                                                <dt>InfoHRM Database User Password</dt>
                                                <dd><input type="password" onChange={(event) => setOrangepassword(event.target.value)} disabled={accept} className='host' id="orangepassword" /> </dd>
                                            </dl>
                                        </div>

                                    </div>
                                    <div className='check'><input type="checkbox" onChange={() => setEncrypt(true)} className="largecheckbox" id='encrypt'></input> &nbsp;<span >Enable Data Encryption</span></div>
                                    <p>Click <strong>Next</strong> to continue</p>
                                    <p id='err'></p>
                                </div>

                                <p>* Required</p>

                                <div className="licencebuttons">
                                    <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                                    <button value="next" onClick={btnClick} className="btn btn-primary licencenext">Next</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Databaseconfig;
