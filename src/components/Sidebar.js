import React from 'react';
import './sidebar.scss'
export const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <h2>Playlists</h2>
            <ul className={'sidebar__playlist'}>
                <li>Playlist 1</li>
                <li>Playlist 2</li>
                <li>Playlist 3</li>
            </ul>
        </div>
    );
};
