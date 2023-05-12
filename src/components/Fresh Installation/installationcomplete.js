import React from 'react'
import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';


export default function Installationcomplete() {

    const history = useNavigate();

    const launchClick = (e) => {
        e.preventDefault();
        history('/');
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
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>Installation</h1>
                            <span className='count countSuccess'><i class="bi bi-check"></i></span>
                            <h1>Installation Complete</h1>
                            <span className='count countActive'>9</span>
                        </div>
                        <div className='footer'>
                            <p >InfoHRM OS 5.3</p>
                            <p>© 2005 - 2023 InfoHRM, Inc. All rights reserved.</p>
                        </div>

                    </div>
                    <div className='content'>
                        <div className='logo'><img className='infoimage' src={pic} alt='logo' /></div>

                        <div >
                            <h4 className="head">Installation Complete</h4>
                            <p>InfoHRM Starter Version 5.0 has been successfully installed.</p>

                            <button onClick={launchClick} className="btn btn-primary licencenext launchBtn">Launch InfoHRM</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}