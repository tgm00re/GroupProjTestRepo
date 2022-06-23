import axios from "axios";
import React, { useEffect, useState, createElement } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../components/Login";
import Register from "../components/Register";


const Home = (props) => {
    const [dbtest, setDbtest] = useState({ assignment: "none", port: 0 });
    const [form, setForm] = useState({
        pirateName: "",
        imageUrl: "",
        numChests: 0,
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    });
    const [fromDb, setFromDb] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState({ name: {} });
    const history = useHistory();
    // history.push(`/${category}/${detail}`);

    useEffect(() => {
        console.log("Running useEffect");

        axios
            .get("http://localhost:3000/users")
            // .get("localhost:3000/users")
            .then((res) => {
                console.log(res.data);
                setFromDb(res.data);
            })
            .catch((err) => console.log(err));
        // .catch((err) => console.log(err.response.data.err.errors));

        setLoaded(false);
    }, []);

    return (
        <div className="container">  
            <div>
                <h1>facebook</h1>
                <h5>Connect with friends and the world around you on Facebook</h5>
            </div>
            <div>
                <Login/>
            </div>
            {fromDb.map((item, i) => {
                return <p key={i}>{item.username} {item.password}</p>;
            })}
        </div>
    );
};

export default Home;
