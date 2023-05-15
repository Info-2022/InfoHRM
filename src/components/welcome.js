import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../images/infomerica.gif';
import Modal from './modal';

const Welcome = () => {

  const history = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [option1, setOption1] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    if (option1 === true) {
      history('/licence');
    } else {
      document.querySelector('.App1').style.filter = 'blur(2px)'
      setOpenModal(true);
    }

  }
  return (
    <>
      <div className="App1">
        <div className='maindiv'>
          <div className='navigation'>
            <div className='menu'>
              <h1>Welcome</h1>
              <span className='count countActive'>1</span>
            </div>

            <div className='footer'>
              <h2><a className='guide' href="#"><span><i class="bi bi-book-fill"></i></span>&nbsp; Installation Guide</a></h2>
              <p >InfoHRM OS 5.3</p>
              <p>© 2005 - 2023 InfoHRM, Inc. All rights reserved.</p>
            </div>

          </div>
          <div className='content'>
            <div className='logo'><img className='infoimage' src={pic} alt='logo' /></div>

            <div className="welcome">
              <h4 className="head">Welcome to InfoHRM Starter Version 5.3 Setup Wizard</h4>
              <p>This setup wizard will guide through the steps necessary to install/ upgrade InfoHRM Starter components and their dependencies.</p>
              <p>Select an installation type;</p>
              <form>
                <div>
                  <label className='radiohover'>
                    <input type="radio" onChange={() => setOption1(true)} className="radiolarge" id="option1" value="option1" name="option" defaultChecked />
                    &nbsp; Fresh Installation
                  </label>
                  <p>Choose this option if you are installing OrangeHRM Starter for the first time</p>
                </div>
                <div>
                  <label className='radiohover'>
                    <input type="radio" onChange={() => setOption1(false)} className="radiolarge" id="option2" value="option2" name="option" />
                    &nbsp; Upgrading an Existing Installation
                  </label>
                  <p>Choose this option if you are already using a prior version of InfoHRM Starter (version 4.0 onwards) and would like to upgrade to version 5.3</p>
                </div>
                <p>Click <strong>Next</strong> to continue</p>
                <div className='nextbtn1'><button onClick={handleClick} className='btn btn-primary licencenext'>Next</button></div>
              </form>

            </div>

          </div>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
}

export default Welcome;


