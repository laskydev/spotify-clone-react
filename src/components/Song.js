import React from 'react';
import './Song.scss'
export const Song = () => {
    return (
        <div className={'song'}>
            <p>1</p>
            <div className={'song__data'}>
                <img src="https://i.scdn.co/image/ab67706f000000035452c514e272ed9431f2c428" alt=""/>
                <div className="song__data-text">
                    <h3>Song Title</h3>
                    <p>Authors</p>
                </div>
            </div>
            <p>Album</p>
            <p>Date Added</p>
            <p>Time</p>
        </div>
    );
};
