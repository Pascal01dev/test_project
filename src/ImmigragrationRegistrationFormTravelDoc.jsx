import './App.css'

function TravelDoc(){
    return(
        <div className="TravelInfo">
            <form action="#" className='Travel-bio-form' >

                <h1>Travel Details</h1>
                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Passport Number<span>*</span></label>
                        <input type="text"  placeholder='Passport Number' required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Passport Type<span>*</span></label>
                        <select name="Passport-type" id="" required>
                            <option value="Passport-type" disabled>--Select</option>
                            <option value="Passport-type">Ordinary</option>
                            <option value="Passport-type">Diplomatic</option>
                            <option value="Passport-type">Official</option>
                        </select>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Issuing Country</label>
                        <input type="text"  placeholder='Issuing Country'/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Date of Issue<span>*</span></label>
                        <input type="date"   required/>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Date of Expiry<span>*</span></label>
                        <input type="date"   required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Place of Issue<span>*</span></label>
                        <input type="text"  placeholder='Place of Issue' required/>
                    </div>
                </div>

                <div className="Passport-copy" >
                    <div className="input-content">
                        <label htmlFor="#">Upload a copy of Passport<span>*</span></label>
                        <input type="file"  accept='.pdf' required/>
                    </div>
                </div>

                <div className="Travel-btn">
                    <button className='Travel-btn1'>Previous</button>
                    <button className='Travel-btn2'>Next</button>
                </div>                
            </form>
        </div>
    );
}

export default TravelDoc