import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';


const Systemcheck2 = () => {
    const history = useNavigate();


    const btnClick = (e) => {
        e.preventDefault();
        if(e.currentTarget.value === "back"){
            history('/database');
        }
        else{
            history('/versiondetails')
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
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>System Check</h1>
                            <span className='count countActive'>3</span>
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

                        <div >
                            <h4 className="head">System Check</h4>
                            <p>In order for your InfoHRM installation to function properly, please ensure that all of the system check items listed below are green. If any are red, please take the necessary steps to fix them.</p>
                            <h5>Environment</h5>
                            <hr />
                            <div className='syscheck'>
                                <p>PHP version <span>OK (ver 8.2.4)</span></p>
                                <p>MYSQL Client<span>OK</span></p>
                                <p>MYSQL Server<span>OK (5.7.41-log)</span></p>
                                <p>MYSQL InnoDB Support<span>Default</span></p>
                                <p>Web Server<span>OK(ver Apache/2.4.56 (Win64) OpenSSL/1.1.1t PHP/8.2.4)</span></p>
                            </div>
                            <h5>Permissions</h5>
                            <hr />
                            <div className='syscheck'>
                                <p>Write Permissions for “lib/confs” <span>Writeable</span></p>
                                <p>Write Permissions for “src/cache”<span>Writeable</span></p>
                                <p>Write Permissions for “src/log”<span>Writeable</span></p>
                            </div>
                            <h5>Extensions</h5>
                            <hr />
                            <div className='syscheck'>
                                <p>Maximum Session idle time before timeout <span>Good(24 minutes and 0 seconds)</span></p>
                                <p>Register Global turned-off<span>OK</span></p>
                                <p>Memory Allocated for PHP script<span>OK</span></p>
                                <p>cURL Status<span>Enabled</span></p>
                                <p>SimpleXML status<span>Enabled</span></p>
                                <p>Zip extension status<span>Enabled</span></p>
                                <p>Intl extension status<span className='warn'>Disabled</span></p>
                                <p>GD extension status<span className='warn'>Disabled</span></p>
                                <p>LDAP extension status<span className='disable'>Disabled</span></p>
                            </div>
                            <div className="licencebuttons">
                                <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                                <button className="btn btn-outline-success recheck">Re-Check</button>
                                <button value="next" onClick={btnClick} className="btn btn-primary licencenext">Next</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Systemcheck2;
