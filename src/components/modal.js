import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
    const [accept, setAccept] = useState(false);
    const history = useNavigate();

    const handlechecked = (event) => {
        setAccept(event.target.checked);
    }
    const continueClick = () => {
        history('/Database');
    }
    return (
        <>
            <div className="modalcontainer">
                <div className="modalbackground">
                    <div className="btnclose"> <button onClick={() => { closeModal(false); document.querySelector(".App1").style.filter = "none" }}>×</button></div>
                    <div className="modalheader">
                        <h6 className=""> Warning</h6>
                        <hr />
                    </div>
                    <div className="modalbody">
                        <p className="">
                            The following features and add-ons are not supported by InfoHRM Starter version 5.3. You may continue to upgrade your system to version 5.3, but please note that any data used in these features will be inaccessible.
                        </p>

                        <div className="features">
                            <div>
                                <h5>Features</h5>
                                <p>- Social Media Authentication</p>
                            </div>
                            <div>
                                <h5> Add-ons</h5>
                                <p>- Claim</p>
                                <p> - Toggle</p>
                            </div>
                            <div>
                                <h5>Other</h5>
                                <p> - Marketplace</p>
                                <p>- Mobile App</p>
                            </div>
                        </div>

                        <p>
                            <input type="checkbox" className="largecheckbox" onClick={handlechecked} />
                            &nbsp; I want to continue upgrading the InfoHRM system to version 5.3 and I am aware that by doing so, any gathered data in incomplete features/add-ons will be inaccessible.
                        </p>

                        <hr />
                    </div>
                    <div className="modalfooter">
                        <div>
                            <button onClick={() => { closeModal(false); document.querySelector(".App1").style.filter = "none" }} type="button" className="btn btn-outline-danger licenceback">Cancel</button>
                            <button disabled={!accept} className="btn btn-primary licencenext" type="submit" onClick={continueClick}>Continue</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Modal;