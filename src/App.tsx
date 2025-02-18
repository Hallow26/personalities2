import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { musicArtistList } from './Data.tsx';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < musicArtistList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : musicArtistList.length - 1);
  }

  let musicArtist = musicArtistList[index];


  return (
    <>
      
      <Typography variant="h5" align="center" sx={{ mt: 2 }}>
        Lawrence Manuel M. Baluyut C-PEITEL3
      </Typography>
      <Card sx={{ maxWidth: 345, margin: 'auto', mt: 4 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: blue[600] }}>{musicArtist.artist[0]}</Avatar>}
        title={musicArtist.artist}
        subheader={musicArtist.genre}
      />
      <CardMedia
        component="img"
        height="194"
        image={musicArtist.url}
        alt={musicArtist.alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {musicArtist.description.substring(0, 200)}
        </Typography>
      </CardContent>
      <CardActions>
          <IconButton onClick={handlePrevClick} aria-label="previous" sx={{ color: 'white' }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography>({index + 1} of {musicArtistList.length})</Typography>
          <IconButton onClick={handleNextClick} aria-label="next" sx={{ color: 'white' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}