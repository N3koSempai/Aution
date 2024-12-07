import demoAudio from "./demo.mp3";
import {
  AppBar,
  Box,
  IconButton,
  LinearProgress,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";

import { Audio } from "ts-audio";
import { ThemeProvider } from "@mui/system";
import { mainTheme } from "./constant/theme";
import { useEffect, useState } from "react";
import vaporWaveVideo from "./vaporwave.webm";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
function App() {
  const audio = Audio({
    file: demoAudio,
    loop: false,
    volume: 0.3,
  });

  const [isPlay, setIsPlay] = useState(false);
  const [audioOnMemory] = useState(audio);
  const handlePlay = () => {
    setIsPlay(true);
    audioOnMemory.play();
  };

  // useEffect(() => {
  //   if (isPlay) {
  //     audio.play();
  //     console.log("here");
  //   } else {
  //     console.log("trigger pause audio");
  //     audio.toggle();
  //   }
  //   console.log(isPlay);
  // }, [isPlay, audio]);
  const handleAudioPlay = async () => {
    if (!isPlay) {
      handlePlay();
    } else {
      console.log("triggerAudio");
      setIsPlay(false);
      audioOnMemory.pause();
    }
  };
  const handleAudioPrev = async () => {
    const audioContext = new window.AudioContext();

    console.log(audioContext);
    console.log("Estado del AudioContext:", {
      state: audioContext.state, // running, suspended, closed
      currentTime: audioContext.currentTime, // Tiempo de contexto de audio
      sampleRate: audioContext.sampleRate, // Frecuencia de muestreo del contexto
    });
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          backgroundColor: "#101B23",
          top: 0,
          left: 0,
          gridTemplateColumns: "1fr",
          gridTemplateRows: "0.16fr 0.40fr 0.18fr 0.18fr",
        }}
      >
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar
            sx={{
              backgroundColor: "transparent",
              display: "grid",
              gridTemplateColumns: "0.16fr 0.68fr 0.16fr",
              gridTemplateRows: "1fr",
              color: "white",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className="NavBarIcon"
            >
              <QueueMusicIcon />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
              component="div"
              color="inherit"
              align="center"
            >
              Aution
            </Typography>

            <IconButton
              color="inherit"
              aria-label="notifications"
              className="NavBarIcon"
            >
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          className={"videoZona"}
          sx={{
            display: "flex",
            height: "16rem",
            width: "100%",

            paddingY: "2rem",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {isPlay && (
            <video
              loop
              autoPlay
              src={vaporWaveVideo}
              style={{
                borderRadius: "0.8rem",
                width: "86%",
                height: "auto",

                aspectRatio: "4/3",

                opacity: 0.9,
              }}
            >
              <track kind="captions" srcLang="en" src="" />
            </video>
          )}
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRow: "1fr 1fr 1fr",
            height: "20%",
            paddingY: "4%",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "start",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, color: "white" }}>
              name of the music
            </Typography>
            <Typography sx={{ fontWeight: 400, color: "white" }}>
              name of the artist
            </Typography>
          </Box>
          <Box sx={{ width: "80%", mt: "6%", color: "#1784E8" }}>
            <LinearProgress
              variant="determinate"
              value={40}
              color="inherit"
              sx={{ background: "#184274" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              mt: "0.8rem",
              height: "100%",
              flexDirection: "row",
              color: "#1784E8",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              size="large"
              onClick={handleAudioPrev}
            >
              <SkipPreviousIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{}}
            >
              <FastRewindIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={handleAudioPlay}
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{}}
            >
              {!isPlay ? (
                <PlayCircleIcon fontSize="large" />
              ) : (
                <PauseIcon fontSize="large" />
              )}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <FastForwardIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{}}
            >
              <SkipNextIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            height: "25%",
          }}
        >
          <ToggleButtonGroup exclusivearia-label="text alignment">
            <ToggleButton
              value="left"
              aria-label="left aligned"
              sx={{ color: "gray" }}
            >
              ADs
            </ToggleButton>
          </ToggleButtonGroup>
          <Box sx={{ backgroundColor: "gray", height: "90%" }}>
            <iframe
              referrerPolicy="no-referrer"
              sandbox="allow-scripts"
              allow="fullscreen; autoplay; encrypted-media"
              width="100%"
              height="100%"
              style={{ border: "none", backgroundColor: "violet" }}
              src="https://www.profitablecpmrate.com/k60ttz75nr?key=dea9d180eb8382488214b9d41b884753"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
