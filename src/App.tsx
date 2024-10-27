import "./App.css";
import { Box, Button } from "@mui/material";
function App() {
	return (
		<Box sx={{ height: "100vh", width: "100%" }}>
			<Box>
				<Button>click here for music</Button>
				<Box sx={{ width: "90%", backgroundColor: "grey" }}>
					<p>hello</p>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
