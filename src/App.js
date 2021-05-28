import React from "react";
import { Player } from "./components/Player";
import './Global.scss'
import {Sidebar} from "./components/Sidebar";
import {SongsScreen} from "./components/SongsScreen";

export const App = () => {
  return (
    <>
      <Sidebar/>
        <SongsScreen/>
      <Player />
    </>
  );
};
