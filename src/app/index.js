import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        let user = {
            name: "anna",
            hobbies: ['play', 'cards']
        };
        return (
            <div className="container">
                <Header />
                <Home user={user}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));