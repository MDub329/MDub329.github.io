import React from "react";
import logo from '../logo.svg';
import '../App.css';

function About() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (

        <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <p>{!data ? "Loading..." : data}</p>

            </header>
        </div>
    );
}

export default About;