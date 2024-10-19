import  { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Slider, 
  List, 
  ListItem, 
  ListItemText,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  styled
} from '@mui/material';
import { 
  PlayArrow, 
  Pause, 
  SkipPrevious, 
  SkipNext, 
  QueueMusic,
  Close
} from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const songs = [
  { title: "Canción 1", artist: "Artista 1", cover: "/placeholder.svg?height=300&width=300" },
  { title: "Canción 2", artist: "Artista 2", cover: "/placeholder.svg?height=300&width=300" },
  { title: "Canción 3", artist: "Artista 3", cover: "/placeholder.svg?height=300&width=300" },
  { title: "Canción 4", artist: "Artista 4", cover: "/placeholder.svg?height=300&width=300" },
  { title: "Canción 5", artist: "Artista 5", cover: "/placeholder.svg?height=300&width=300" },
];

const VisualizerContainer = styled(Box)(({ }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  overflow: 'hidden',
  zIndex: 0,
}));

const VisualizerBar = styled(Box)(({ theme }) => ({
  width: '3%',
  backgroundColor: theme.palette.primary.main,
  opacity: 0.7,
  transition: 'height 0.5s ease',
}));

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [visualizerHeights, setVisualizerHeights] = useState(Array(20).fill(0));

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev > 0 ? prev - 1 : songs.length - 1));
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev < songs.length - 1 ? prev + 1 : 0));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisualizerHeights(prevHeights => 
        prevHeights.map(() => Math.random() * 100)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          height: '100vh', 
          width: '100vw', 
          maxWidth: '600px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu" 
              onClick={toggleDrawer}
            >
              <QueueMusic />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Mi Reproductor
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, position: 'relative' }}>
          <VisualizerContainer>
            {visualizerHeights.map((height, index) => (
              <VisualizerBar key={index} sx={{ height: `${height}%` }} />
            ))}
          </VisualizerContainer>
          <Paper 
            elevation={3} 
            sx={{ 
              width: '40%', 
              paddingTop: '40%', 
              position: 'relative', 
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <img 
              src={songs[currentSong].cover} 
              alt={`Carátula de ${songs[currentSong].title}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Paper>
        </Box>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            {songs[currentSong].title}
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
            {songs[currentSong].artist}
          </Typography>
          <Slider 
            size="small" 
            defaultValue={30} 
            sx={{ width: '100%', mb: 2 }} 
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <IconButton aria-label="previous song" onClick={handlePrevious}>
              <SkipPrevious />
            </IconButton>
            <IconButton aria-label="play/pause" onClick={handlePlayPause}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton aria-label="next song" onClick={handleNext}>
              <SkipNext />
            </IconButton>
          </Box>
        </Paper>
      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250, bgcolor: 'background.paper' }}
          role="presentation"
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <Typography variant="h6">Lista de reproducción</Typography>
            <IconButton onClick={toggleDrawer}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {songs.map((song, index) => (
              <ListItem 
                key={index}  
				sx={{
					backgroundColor: index === currentSong ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
					'&:hover': {
					  backgroundColor: 'rgba(0, 0, 0, 0.2)',
					},
				  }}
                onClick={() => {
                  setCurrentSong(index);
                  setIsDrawerOpen(false);
                }}
              >
                <ListItemText 
                  primary={song.title} 
                  secondary={song.artist} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}