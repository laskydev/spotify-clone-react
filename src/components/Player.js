import React from "react";
import abc from "../roic.mp3";
import { Bar } from "./Bar";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import "./Player.scss";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
export const Player = () => {
  const { duration, curTime, playing, setClickedTime, setPlaying } =
    useAudioPlayer();

  const handlePlayButton = () => {
    if(playing){
        setPlaying(false)
    } else {
        setPlaying(true)
    }
  };

  const handleNextButton = () =>{
      console.log('Next song')
  }

  const handlePreviousButton = () =>{
      console.log('Previous song')
  }
  return (
    <div className={"player"}>
      <h2>Song name</h2>
      <audio id={"audio"} controls={false}>
        <source type="audio/mp3" src={abc} />
      </audio>
      <div className={"player__buttons"}>
          <li onClick={handlePreviousButton} className={'player__button'} >
              <SkipPreviousIcon style={{ fontSize: "2rem" }}/>
          </li>
          <li onClick={handlePlayButton}  className={'player__button'}>
              {playing ? (
                  <PauseCircleFilledIcon style={{ fontSize: "3rem" }} />
              ) : (
                  <PlayCircleFilledWhiteIcon style={{ fontSize: "3rem" }} />
              )}
          </li>
          <li onClick={handleNextButton} className={'player__button'} >
            <SkipNextIcon style={{ fontSize: "2rem" }}/>
          </li>
      </div>
      <div className="play__bar-wrapper">
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
};
