import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
	palette: {
		primary: {
			light: "#757ce8",
			main: "#1A1D23",
			dark: "#1A1D23",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#2F343A",
			dark: "#2F343A",
			contrastText: "#000",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				sx: {
					backgroundColor: "#2F343A",
				},
			},
		},
	},
});
