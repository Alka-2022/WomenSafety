/* eslint-disable react/prop-types */
import React from 'react';
import AddButton from '../components/AddButton';
import SOSButton from '../components/SOSButton';
import  './homescreen.css';

export default function HomeScreen(props)
{
    const addGroupHandler=()=>{
        props.history.push("/profile");
    };
    return (
    <div>
        <AddButton handleCick={addGroupHandler}/>
        <SOSButton />
        <div className="container">
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src="https://picsum.photos/200/500" alt="" />
            </div>
            <div className="card__content">
                <h2 className="card__title">GRP NAME</h2>
                <p className="card__subtitle">GRP CREATOR</p>
                <p className="card__description">Members</p>
            </div>
        </div>
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src="https://picsum.photos/200/500" alt="" />
            </div>
            <div className="card__content">
                <h2 className="card__title">GRP NAME</h2>
                <p className="card__subtitle">GRP CREATOR</p>
                <p className="card__description">Members</p>
            </div>
        </div>
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src="https://picsum.photos/200/500" alt="" />
            </div>
            <div className="card__content">
                <h2 className="card__title">GRP NAME</h2>
                <p className="card__subtitle">GRP CREATOR</p>
                <p className="card__description">Members</p>
            </div>
        </div>
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src="https://picsum.photos/200/500" alt="" />
            </div>
            <div className="card__content">
                <h2 className="card__title">GRP NAME</h2>
                <p className="card__subtitle">GRP CREATOR</p>
                <p className="card__description">Members</p>
            </div>
        </div>
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src="https://picsum.photos/200/500" alt="" />
            </div>
            <div className="card__content">
                <h2 className="card__title">GRP NAME</h2>
                <p className="card__subtitle">GRP CREATOR</p>
                <p className="card__description">Members</p>
            </div>
        </div>
    </div>
    </div>
    
    );
}