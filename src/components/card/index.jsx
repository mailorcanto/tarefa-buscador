import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardRepositorio = ({ title, content, image, link }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '17.5px', border: '2px solid black', borderColor: 'darkgrey', borderRadius: 4, textAlign: 'center', display: 'block' }}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt={title}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h7">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content} <br></br>clique para acessar
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardRepositorio;
