import React from 'react'
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { auth } from '../firebase';
const LogoutUser = () => {
    const navigate = useNavigate()
    const logout = () => {
        auth.signOut();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userDocumentID");
        navigate("/login");
    };

    return (
        <div>
            <Popup
                trigger={
                    <div className='d-flex justify-content-center'>
                        <i className="bi bi-power"></i><p className='ms-2 mb-0'>Logout</p>
                    </div>
                }
                position="bottom center"
            >
                {(close) => (
                    <div className="p-2" style={{ zIndex: "1000" }}>
                        <p className="body-large-black fw-bold text-center mb-1">
                            Are you sure ?
                        </p>
                        <div className="d-flex justify-content-center">
                            <button className="confirmClosebtn mx-1">Close</button>
                            <button
                                className="delBtn mx-1"
                                onClick={() => {
                                    logout()
                                    close();
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );


}

export default LogoutUser