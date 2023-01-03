import React from "react";
import Confirmation from "./Confirmation";

class ConfirmationPage extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Confirmation btnLabel={'Browse'}>
                    <h1>You're good to go</h1>
                    <p>Dive into world of tasteful coffees</p>
                </Confirmation>
            </React.Fragment>
        );
    }
}
export default ConfirmationPage