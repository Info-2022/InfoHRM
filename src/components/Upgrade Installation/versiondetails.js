import React, { useState } from 'react'
import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';
import versionnumber from './version.json';

export default function Versiondetails() {
    const history = useNavigate();
    const [version, setVersion] = useState();

    const btnClick = (e) => {
        e.preventDefault();
        if(e.currentTarget.value === "back"){
            history('/systemcheck2');
        }
        else{
            if (version > 0) {
                history('/upgrade')
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
                    <span className='count countSuccess'><i class="bi bi-check"></i></span>
                    <h1>System Check</h1>
                    <span className='count countSuccess'><i class="bi bi-check"></i></span>
                    <h1>Version Details</h1>
                    <span className='count countActive'>4</span>
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
                    <h4 className="head">Current Version Details</h4>
                    <p>Select your current InfoHRM version here. You can find the version at the bottom of the InfoHRM login page. InfoHRM Upgrader only supports versions listed in the dropdown. Selecting a different version would lead to an upgrade failure and a database corruption.</p>
                    <div className='datalists'>
                        <div className='datalists1'>
                        <dl className='instancedl'>
                                        <dt className='dataterm'>Version *</dt>
                                        <dd><select className='host' onChange={(event) => setVersion(event.target.selectedIndex)} id="version" >
                                            <option>--Select--</option>
                                            {
                                                versionnumber.map((getcon) => (
                                                    <option> {getcon.Version}</option>
                                                ))
                                            }

                                        </select>
                                        </dd>
                                    </dl>
                        </div>
                    </div>
                    <p>Click <strong>Next</strong> to commence upgrading your instance</p>
                    <p>* Required</p>
                    <div className="licencebuttons">
                        <button value="back" onClick={btnClick} className="btn btn-outline-danger licenceback">Back</button>
                        <button value="next" onClick={btnClick} className="btn btn-primary licencenext">Next</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}
