import './App.css'

function RegistrationForm(){
    return(
        <div className="personalInfo">
            <form action="#" className='bio-form' >

                <h1>Registration Form</h1>
                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Firs Name<span>*</span></label>
                        <input type="text"  placeholder='First Name' required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Last Name<span>*</span></label>
                        <input type="text"  placeholder='First Name' required/>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Middle Name</label>
                        <input type="text"  placeholder='Middle Name'/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Geneder<span>*</span></label>
                        <select name="Gender" id="" required>
                            <option value="Gender" >--Select</option>
                            <option value="Gender">Male</option>
                            <option value="Gender">Female</option>
                        </select>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Date of Birth<span>*</span></label>
                        <input type="date"   required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Place of Birth<span>*</span></label>
                        <input type="text"  placeholder='Place of Birth' required/>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Nationality (Current)<span>*</span></label>
                        <input type="text"  placeholder='Nationality (Current)' required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Previous Nationality<span>*</span></label>
                        <input type="text"  placeholder='Previous Nationality' required/>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Previous Nationality<span>*</span></label>
                        <select name="Status" id="" required>
                            <option value="Status">--Select</option>
                            <option value="Status">Single</option>
                            <option value="Status">Married</option>
                            <option value="Status">Divorced</option>
                            <option value="Status">Widowed</option>
                        </select>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Passport Photo<span>*</span></label>
                        <input type="file"  placeholder='Nationality (Current)' required accept="image/*"/>
                    </div>
                </div>

                <button className='bio-btn'>Next</button>
                
            </form>
        </div>
    );
}

export default RegistrationForm