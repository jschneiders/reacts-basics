import React from "react";

export class Home extends React.Component {
    render() {
        let content = "";
        if (true) {
            content = "Hello";
        }
        return(
            <div>
                <p>{ content }</p>
            </div>
        );
    }
}11