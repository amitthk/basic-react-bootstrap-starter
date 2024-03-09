import React, { useState } from 'react';
import { db } from '../firebase/app'; // Adjust this import based on your file structure
import { collection, addDoc } from 'firebase/firestore';

function MainContent() {
    // State for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textarea, setTextarea] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneArea, setPhoneArea] = useState('');
    const [phoneLocal, setPhoneLocal] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneExt, setPhoneExt] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');

    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "default"), {
                email,
                password, // Be mindful of security considerations regarding password storage
                textarea,
                firstName,
                lastName,
                phone: { area: phoneArea, local: phoneLocal, number: phoneNumber, ext: phoneExt },
                options: { option1, option2 }
            });
            console.log("Document written with ID: ", docRef.id);
            // Reset form or provide feedback here
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="row">
            <div className="col">
                <div className="container">
                    <h2>Responsive Mixed Form <p className="lead">with horizontal and inline fields</p></h2>
                    <form role="form" className="form" onSubmit={handleSubmit}>
                        <div className="row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputEmail1">Email</label>
                            <div className="col-sm-5">
                                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="inputEmail1" placeholder="Email" type="email" />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputPassword1">Password</label>
                            <div className="col-sm-10">
                                <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="inputPassword1" placeholder="Password" type="password" />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-12 col-form-label" htmlFor="TextArea">Textarea</label>
                            <div className="col-sm-12">
                                <textarea value={textarea} onChange={e => setTextarea(e.target.value)} className="form-control" id="TextArea"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-form-label">
                                <label>First name</label>
                                <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="First" type="text" />
                            </div>
                            <div className="col-sm-6 col-form-label">
                                <label>Last name</label>
                                <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" placeholder="Last" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-12 col-form-label">Phone number</label>
                            <div className="col-sm-3">
                                <input value={phoneArea} onChange={e => setPhoneArea(e.target.value)} className="form-control" placeholder="000" type="text" />
                                <div className="help">area</div>
                            </div>
                            <div className="col-sm-3">
                                <input value={phoneLocal} onChange={e => setPhoneLocal(e.target.value)} className="form-control" placeholder="000" type="text" />
                                <div className="help">local</div>
                            </div>
                            <div className="col-sm-3">
                                <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control" placeholder="1111" type="text" />
                                <div className="help">number</div>
                            </div>
                            <div className="col-sm-3">
                                <input value={phoneExt} onChange={e => setPhoneExt(e.target.value)} className="form-control" placeholder="123" type="text" />
                                <div className="help">ext</div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label">Options</label>
                            <div className="col-sm-4">
                                <input value={option1} onChange={e => setOption1(e.target.value)} className="form-control" placeholder="Option 1" type="text" />
                            </div>
                            <div className="col-sm-6">
                                <input value={option2} onChange={e => setOption2(e.target.value)} className="form-control" placeholder="Option 2" type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">&nbsp;</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 clearfix">
                                <button type="submit" className="btn btn-info float-end">Submit</button>
                            </div>
                        </div>
                    </form>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
