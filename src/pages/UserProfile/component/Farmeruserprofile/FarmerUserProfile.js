import React from 'react';

function profileF(){
    return(
        <div>
            <h1>FARMER USER-PROFILE</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Profile Image</p>
                        <input type="file" accept="image" multiple="fales" />
                    </label>
                    <label>
                        <p>First name</p>
                        <input name="firstname" />
                    </label>
                    <label>
                        <p>Last name</p>
                        <input name="last name" />
                    </label>
                    <label>
                        <p>Contact</p>
                        <input contact="contact" />
                    </label>
                    <label>
                        <p>Email</p>
                        <input email="email" />
                    </label>
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
