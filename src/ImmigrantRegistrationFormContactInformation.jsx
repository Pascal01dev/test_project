

function ContactInformation(){
    return(
        <div className="ContactInfo">
            <form action="#" className='Contact-Details-form' >

                <h1>Contact Information</h1>
                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Current Resident Address<span>*</span></label>
                        <input type="text"  placeholder='Street, City, Country, Postal code' required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Permanebt Address(If Different)</label>
                        <input type="text"  placeholder='Street, City, Country, Postal code'/>
                    </div>
                </div>

                <div className="inputs">
                    <div className="input-content">
                        <label htmlFor="#">Phone Number<span>*</span></label>
                        <input type="text"  placeholder='E.g 256123456789' required/>
                    </div>

                    <div className="input-content">
                        <label htmlFor="#">Email Address<span>*</span></label>
                        <input type="email"   placeholder="Email" required/>
                    </div>
                </div>


                <div className="Emergency-contact" >
                    <div className="imergency-input">
                        <label htmlFor="#">Emergency Contact<span>*</span></label>
                        <input type="text"  placeholder="Name, Relationship, Phone, Address" required/>
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

export default ContactInformation