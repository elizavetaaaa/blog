// import {Route, Switch} from "react-router-dom";
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Posts from "../pages/Posts";
import Post from "../components/Post";


export default function Ways() {
    return (
        <Routes>
            <Route matches path="/" element={<Posts/>}/>
            <Route matches path="/post" element={<Post/>}/>
        </Routes>
    )
}
