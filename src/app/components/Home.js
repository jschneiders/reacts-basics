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
                <ul>
                    {this.props.user.hobbies.map((hobbie, i) => <li key={i}>{hobbie}</li>)}
                </ul>
            </div>
        );
    }
}11