import React from 'react'
import pic from '../../images/infomerica.gif';
import { useNavigate } from 'react-router-dom';

export default function Upgrade() {
    const history = useNavigate();


    const btnClick = (e) => {
        e.preventDefault();
        if(e.currentTarget.value === "back"){
            history('/versiondetails');
        }
        else{
            history('/completion')
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
                    <span className='count countSuccess'><i class="bi bi-check"></i></span>
                    <h1>Upgrade</h1>
                    <span className='count countActive'>5</span>
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
                    <h4 className="head">Upgrading InfoHRM</h4>
                    <p>This may take some time. Please do not close the window till progress becomes 100%</p>
                    <div className='installationdiv'>
                        <div> <h6>Checking database permissions </h6><span className='installok'><i class="bi bi-check"></i></span></div>
                        <div> <h6>Applying database changes </h6><span><i class="bi bi-dash-circle-fill"></i></span></div>
                        <div> <h6>Creating configuration files </h6><span><i class="bi bi-dash-circle-fill"></i></span></div>
                    </div>
                    <div className='percentage'>
                        <h3>25%</h3>
                    </div>
                    <div class="progress" style={{ height: "25px" }}>
                        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
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
