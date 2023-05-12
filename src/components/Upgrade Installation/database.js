import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Databaseconfig = () => {

    const [hostname, setHostname] = useState('');
    const [hostport, setHostport] = useState(3306);
    const [dbname, setDbname] = useState('');
    const [dbuname, setDbuname] = useState('');
    const [dbpassword, setDbpassword] = useState('');

    const history = useNavigate();

    const btnClick = (e) => {
        if (e.currentTarget.value === "back") {
            history("/");
        }
        else if (e.currentTarget.value === "next") {
            if (hostname !== '' && hostport !== '' && dbname !== '' && dbuname !== '' && dbpassword !== '') {
                history("/systemcheck2")
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
                            <h1>Database Information</h1>
                            <span className='count countActive'>2</span>
                            <h1>System Check</h1>
                            <span className='count'>3</span>
                            <h1>Version Details</h1>
                            <span className='count'>4</span>
                            <h1>Upgrade</h1>
                            <span className='count'>5</span>
                            <h1>Completion</h1>
                            <span className='count'>6</span>
                        </div>
                        <div className='footer'>
                            <p >InfoHRM OS 5.3</p>
                            <p>© 2005 - 2023 InfoHRM, Inc. All rights reserved.</p>
                        </div>

                    </div>
                    <div className='content'>
                        <div className='logo'><img className='infoimage' src={pic} alt='logo' /></div>


                        <div className=''>
                            <form className=''>
                                <h4 className='head'> Database Information </h4>
                                <p>
                                    Please provide the database information of the database you are going to upgrade.
                                </p>
                                <div className='note'>
                                    <h5 className=''><b>IMPORTANT</b></h5>
                                    <p >
                                        Make sure it's a copy of the database of your current InfoHRM installation and not the original database. It's highly discouraged to use the original database for upgrading since it won't be recoverable if an error occurred during the upgrade.
                                    </p>
                                </div>
                                <div className='note'>
                                    <h5 className=''><b>ENCRYPTION</b></h5>
                                    <p>
                                        If you have enabled data encryption in your current version, you need to copy the file 'lib/confs/cryptokeys/key.ohrm' from your current installation to corresponding location in the new version.
                                    </p>
                                </div>

                                <div className='datalists'>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Database Host Name *</dt>
                                            <dd><input type="text" onChange={(event) => setHostname(event.target.value)} className='host' id="hostname" required /> </dd>
                                        </dl>
                                        <dl>
                                            <dt>Database Host Port *</dt>
                                            <dd><input type="text" onChange={(event) => setHostport(event.target.value)} defaultValue={3306} className=' host hostport' id="hostport" required /> </dd>
                                        </dl>
                                    </div>
                                    <div className='datalists1'>
                                        <dl>
                                            <dt>Database Name *</dt>
                                            <dd><input type="text" onChange={(event) => setDbname(event.target.value)} className='host' id="dbname" required /> </dd>
                                        </dl>
                                    </div>
                                    <div className='datalists1'>

                                        <div>
                                            <dl>
                                                <dt>Database Username *</dt>
                                                <dd><input type="text" onChange={(event) => setDbuname(event.target.value)} className='host' id="dbuname" required /> </dd>
                                            </dl>
                                        </div>
                                        <div>
                                            <dl>
                                                <dt>Database Password</dt>
                                                <dd><input type="text" onChange={(event) => setDbpassword(event.target.value)} className='host' id="dbpassword" required /> </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className='check'><input type="checkbox" className="largecheckbox" ></input> &nbsp;<span >Enable Data Encryption</span></div>
                                    <p>Click <strong>Next</strong> to continue</p>
                                </div>

                                <div className='buttonclass'>
                                    <p>
                                        *Required
                                    </p>
                                    <div className="licencebuttons">
                                        <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                                        <button value="next" onClick={btnClick} className="btn btn-primary licencenext">Next</button>
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
export default Databaseconfig;
