import React from 'react'
import PageNotFound from "../../img/404.png";
import "./404.css";

export default function NoMatch() {
    return (
        <>
            <div className='container'>
                <img className='img' src={PageNotFound} />
                <div className='middle'>
                    <a className='link' href="https://storyset.com/web">Web illustrations by Storyset</a>
                    <h2 className='heading'>Page Not Found</h2>
                </div>
            </div>
        </>
    )
}
