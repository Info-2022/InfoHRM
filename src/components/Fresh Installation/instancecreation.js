import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';

import countrydata from './country.json';
import timezone from './timezone.json';
import { useState } from 'react';


const Instancecreation = () => {

    const history = useNavigate();
    const [orgname, setOrgname] = useState('');
    const [country, setCountry] = useState();

    const btnClick = (e) => {
        e.preventDefault();
        if (e.currentTarget.value === "back") {
            history('/Systemcheck');
        }
        else if (e.currentTarget.value === "next") {
            e.preventDefault();
            if (orgname !== '' && country > 0) {
                history('/Adminusercreation');
            }

        }
    }
    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
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
                            <span className='count countActive'>5</span>
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

                        <div>
                            <h4 className="head">Instance Creation</h4>
                            <p>Fill in your organization details here. Details entered in this section will be captured to create your InfoHRM Instance</p>

                            <form>
                                <div>
                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Organization Name*</dt>
                                        <dd><input type="text" onChange={(event) => setOrgname(event.target.value)} id="orgname" className='host' placeholder='InfoHRM' required /></dd>
                                    </dl>


                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Country*</dt>
                                        <dd><select className='host' onChange={(event) => setCountry(event.target.selectedIndex)} id="country" >
                                            <option index={0}>--Select--</option>
                                            {
                                                countrydata.map((getcon) => (
                                                    <option value={getcon.country_id}> {getcon.country_name}</option>
                                                ))
                                            }

                                        </select>
                                        </dd>
                                    </dl>


                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Language</dt>
                                        <dd>
                                            <select className='host' >
                                                <option>--Select--</option>
                                                <option>Chinese(Simplified,China)</option>
                                                <option>Chinese(Traditinal,Taiwan)</option>
                                                <option>Dutch - Nederlands</option>
                                                <option>English (United States)</option>
                                                <option>French - Francais</option>
                                                <option>German - Deutsch</option>
                                                <option>Spanish - Espanol</option>
                                                <option>Spanish (Costa Rica)-Espanol (Costa Rica)</option>
                                            </select>
                                        </dd>
                                    </dl>


                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Timezone</dt>
                                        <dd >
                                            <select className='host datta '>
                                                <option className="timezonediv">--Select--</option>
                                                {

                                                    timezone.sort(GetSortOrder('name'))
                                                        .map((gettime, index) => (
                                                            <option key={index}> {gettime.name}</option>
                                                        ))
                                                }

                                            </select>
                                        </dd>
                                    </dl>

                                    <p>* Required</p>
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
export default Instancecreation;