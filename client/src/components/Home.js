import React, { useState, useEffect } from 'react'
import mern from '../images/Mern.jpg'

const Home = () => {
    const [userName, setUserName] = useState('');

    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);
           
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <h2> {show ? 'Happy, to see you back' : 'Welcome to the world of MERN Development'}</h2> <br></br>
                    <img src={mern} alt="Suspended" width="400" height="400" />
                </div>
            </div>

        </>
    )
}

export default Home
