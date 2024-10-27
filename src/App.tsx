import demoAudio from "./demo.mp3";
import { Box, Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Audio } from "ts-audio";
import { ThemeProvider } from "@mui/system";
import { mainTheme } from "./constant/theme";
import { useEffect, useState } from "react";
import vaporWaveVideo from "./vaporwave.webm";
function App() {
	const [isPlay, setIsPlay] = useState(false);

	const handlePlay = () => {
		setIsPlay(true);
	};

	const audio = Audio({
		file: demoAudio,
		loop: true,
		volume: 0.2,
	});

	useEffect(() => {
		if (isPlay) {
			audio.play();
		}
	}, [isPlay, audio]);
	const handleAudioPlay = async () => {
		handlePlay();
	};

	return (
		<ThemeProvider theme={mainTheme}>
			<Box
				sx={{
					width: "100%",
					height: "100vh",
					position: "absolute",
					backgroundColor: "#1A1D23",
					top: 0,
					left: 0,
				}}
				className="mainPage"
			>
				<Box
					sx={{
						display: "grid",
						height: "100%",
						gridTemplateRows: "20% 1fr 20%",
						justifyItems: "center",
					}}
				>
					<Box> primera fila navbar </Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							alignContent: "center",
							justifyContent: "center",
							justifyItems: "center",
							width: "100%",
							height: "100%",
						}}
					>
						{isPlay ? (
							<video
								loop
								autoPlay
								src={vaporWaveVideo}
								style={{
									borderRadius: "0.8rem",
									width: "80%",
									height: "80%",
									marginBottom: "4rem",
									opacity: 0.9,
								}}
							>
								<track kind="captions" srcLang="en" src="" />
							</video>
						) : (
							<></>
						)}
					</Box>
					<Box
						sx={{
							display: "flex",
							width: "90%",
							height: "30%",
							backgroundColor: "#2F343A",
							justifyItems: "center",
							justifyContent: "center",
							alignContent: "center",
							justifySelf: "center",
							alignItems: "center",
						}}
					>
						<Button
							onClick={handleAudioPlay}
							size="small"
							sx={{
								height: "1.8rem",
								backgroundColor: "#4CAF50",
								justifyItems: "center",
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
							}}
						>
							<PlayArrow htmlColor="orange" aria-label="play button" />
						</Button>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
