import React from 'react';

function Profilek(){
    return(
        <div>
            <h1>KEELS USER-PROFILE</h1>
            <form>
                <fieldset>
                    <lable>
                        <p>Profile Image</p>
                        <input type="file" accept="image/*" multiple="fales" />
                    </lable>
                    <label>
                        <p>First Name</p>
                        <input name="firstname"/>
                    </label>
                    <lable>
                        <p>Last Name</p>
                        <input name="lastname"/>
                    </lable>
                    <lable>
                        <p>Contact Number</p>
                        <input contact="contact" />
                    </lable>
                    <lable>
                        <p>Email</p>
                        <input email="email" />
                    </lable>
                    <label>
                        <p>ID</p>
                        <input id="id" />
                    </label>
                    <label>
                        <p>POSITION</p>
                        <input position="position" />
                    </label>
                    <label>
                        <p>BRANCH</p>
                        <input branch="branch" />
                    </label>
                 </fieldset>
                <button type="submit">Submit</button>
                <button type="reset">reset</button>
                </form> 
        </div>
    );
}
export default Profilek;