import React, { useRef, useState } from 'react';
import img from "../img/me.jpg";

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    return (
        <>
            <div className="main-content text-light">
                <main>
                    <div className="container-fluid py-4">
                        <div className="row">
                            <div className="col-md-4" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <img src={selectedImage || img} alt="Profile" className='mb-4' style={{ width: "80%", height: "60%", objectFit: "cover", cursor: "pointer", borderRadius: "50%", }} />
                                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} ref={fileInputRef} />
                                <button type="button" className="btn btn-primary mb-3" onClick={handleButtonClick}>Change Image</button>
                                <h3>Priya Donga</h3>
                                <h5 className='my-2'>Frontend Developer</h5>
                            </div>
                            <div className="col-md-8" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div className='data'>
                                    <h1 className='mb-5'>Information :- </h1>
                                    <h4 className="mb-4">Full Name :- Donga Priya Atulbhai</h4>
                                    <h4 className="mb-4">Age :- 18</h4>
                                    <h4 className="mb-4">Gender :- Female</h4>
                                    <h4 className="mb-4">E-mail :- priyadonga@gmail.com</h4>
                                    <h4 className="mb-4">Mobile Number :- +91 xxxxxxxxxx</h4>
                                    <h4 className="mb-4">Profession :- Web Developer</h4>
                                    <h4 className="mb-4">Admin Name :- priya</h4>
                                    <h4 className="mb-4">Password :- 123</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >

            </div >
        </>
    );
};

export default Profile;
