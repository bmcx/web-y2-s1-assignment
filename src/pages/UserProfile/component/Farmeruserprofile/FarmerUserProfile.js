import React from 'react';

function profileF(){
    return(
        <div>
            <h1>FARMER USER-PROFILE</h1>
            <form>
                <fieldset>
                    <lable>
                        <p>Profile Image</p>
                        <input type="file" accept="image" multiple="fales" />
                    </lable>
                    <lable>
                        <p>First name</p>
                        <input name="firstname" />
                    </lable>
                    <label>
                        <p>Last name</p>
                        <input name="last name" />
                    </label>
                    <label>
                        <p>Contact</p>
                        <input contact="contact" />
                    </label>
                    <lable>
                        <p>Email</p>
                        <input email="email" />
                    </lable>
                    <label>
                        <p>ID</p>
                        <input id="id" />
                    </label>
                </fieldset>
                <button type="submit">OK</button>
                <button type="reset">Cancle</button>
            </form>
        </div>
    )
}
export default profileF;
