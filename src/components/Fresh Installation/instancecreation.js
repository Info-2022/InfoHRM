import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';
import countrydata from './country.json';
import timezone from './timezone.json';
import language from './language.json';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Instancecreation = () => {

    const history = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [orgname, setOrgname] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [country, setCountry] = useState();
    // eslint-disable-next-line no-unused-vars
    const [time, setTime] = useState();
    // eslint-disable-next-line no-unused-vars
    const [lang, setLang] = useState();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const backClick = () => {
        history('/Systemcheck');
    }
    const onSubmit = () => {
        history('/Adminusercreation');
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
                            <h1 className='activehead'>Instance Creation</h1>
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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Organization Name*</dt>
                                        <dd><input type="text" id="orgname"  {...register("name", { required: "Required" }, { onChange: (e) => { setOrgname(e.target.value) } })} style={{ border: errors.name?.message ? '2px solid red' : '' }} className='host' placeholder='InfoHRM' /></dd>
                                        {errors.name && <p id="error" role="alert">{errors.name?.message}</p>}
                                    </dl>

                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Country*</dt>
                                        <dd><select className='host' id="country" {...register("coun", { required: "Required" }, { onChange: (e) => { setCountry(e.target.value) } })} style={{ border: errors.coun?.message ? '2px solid red' : '' }}>
                                            <option value=''>--Select--</option>
                                            {
                                                countrydata.map((getcon) => (
                                                    <option value={getcon.country_id}> {getcon.country_name}</option>
                                                ))
                                            }
                                        </select>
                                            {errors.coun && <p id="error" role="alert">{errors.coun?.message}</p>}
                                        </dd>
                                    </dl>

                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Language</dt>
                                        <dd>
                                            <select className='host' {...register("lang", { onChange: (e) => { setLang(e.target.value) } })}>
                                                <option>--Select--</option>
                                                {
                                                    language.map((getcon) => (
                                                        <option value={getcon.id}> {getcon.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </dd>
                                    </dl>

                                    <dl className='instancedl'>
                                        <dt className='dataterm'>Timezone</dt>
                                        <dd >
                                            <select className='host' {...register("time", { onChange: (e) => { setTime(e.target.value) } })}>
                                                <option>--Select--</option>
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
                                        <button onClick={backClick} className="btn btn-outline-danger licenceback">Back</button>
                                        <button className="btn btn-primary licencenext">Next</button>
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
