import React from 'react';
import './SongScreen.scss'
import {Song} from "./Song";
export const SongsScreen = () => {
    return (
        <main className={'song__screen'}>
            <header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="Imagen de muestra"/>
                <div className="header__text">
                    <p className={'song__header-title'}>Playlist Title</p>
                    <p className={'song__header-description'}>Playlist Description</p>
                </div>
            </header>
            <div className="songs__grid">
                <Song/>
                <Song/>
                <Song/>
                <Song/>
            </div>
        </main>
    );
};
