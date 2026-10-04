import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './WeatherInfo.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export default function WeatherInfo({info}) {
    return(
    <div>
        <div className='WeatherInfo'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp>30? "https://www.broadmooroutfitters.com/wp-content/uploads/2023/08/photo-nic-xOigCUcFdA8-unsplash-1000x565.jpg": info.temp>20 ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-ecKxYPjuBKnqliGP5lpHMNHlZlpVr5ICh2xK2jK34DJHH71pz2OMKk&s=10": "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg" }
      />
      <CardContent style={{opacity: 0.7}}>
        <Typography gutterBottom variant="h5" component="div" >
          {info.city} {info.temp>30 ? <SunnyIcon/> : info.humidity>70 ? <UmbrellaIcon/> : <AcUnitIcon/> }
        </Typography>
        <div><p>Temprature = {info.temp}&deg;C</p></div>
        <div><p>Humidity = {info.humidity}</p></div>
        <div><p>Max temp = {info.temp_max}&deg;C</p></div>
        <div><p>Min temp = {info.temp_min}&deg;C</p></div>
        <div><p>Feels like = {info.feels_like}&deg;C</p></div>
        <div><p>The weather can be decsribed as <i>{info.description}</i> and feels like {info.feels_like}</p></div>
      </CardContent>
    </Card>
        </div>
    </div>
    );
}