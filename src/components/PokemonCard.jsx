
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import styles from '../scss/pokemonCard.module.scss'

export default function PokemonCard({item, darkMode}) {
    const [detailsVisibility, setDetailsVisibility ] = useState(false)

    const toggleDetailsVisibility = () => {
        setDetailsVisibility(!detailsVisibility)
    }
    return (
        <Card sx={{ maxWidth: '100%', borderRadius: '15px' }} className={darkMode === 'true' ? styles.darkCard : styles.regularCard}>
        <CardMedia
            component="img"
            image={item.images.large}
            alt={`a pokemon named ${item.name}`}
            width="671"
            height="937"
        />
        <CardContent sx={{height: '100px', overflowY: 'auto'}}>
            <Typography gutterBottom variant="h5" component="div">
            {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.flavorText}
            </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex' ,justifyContent:"center"}}>
            <Button size="medium" variant="primary" onClick={toggleDetailsVisibility}>{!detailsVisibility ? 'Show details' : 'Hide details'}</Button>
        </CardActions>
        { detailsVisibility && (
            <CardContent>
                <List>
                    <ListItem disablePadding sx={{alignItems: 'flex-start'}}>
                        <ListItemText sx={{width: '50%'}} secondary="Name:" />
                        <ListItemText sx={{width: '50%'}} primary={item.name} />
                    </ListItem>
                    <ListItem disablePadding sx={{alignItems: 'flex-start'}}> 
                        <ListItemText sx={{width: '50%'}} secondary="HP:" />
                        <ListItemText sx={{width: '50%'}} primary={item.hp} />
                    </ListItem>
                    <ListItem disablePadding sx={{alignItems: 'flex-start'}}>
                        <ListItemText sx={{width: '50%'}} secondary="Types:" />
                        <Box sx={{width: '50%', margin: '4px 0'}}>
                            { item.types.map(type => <ListItemText key={type} sx={{margin: 0}} primary={type}/>) }
                        </Box>
                    </ListItem>
                    <ListItem disablePadding sx={{alignItems: 'flex-start'}}>
                        <ListItemText sx={{width: '50%'}} secondary="Weaknesses:" />
                        <Box sx={{width: '50%', margin: '4px 0'}}>
                            { item.weaknesses.map((weakness, idx) => <ListItemText key={weakness.type + weakness.value + idx} sx={{margin: 0}} primary={`${weakness.type} ${weakness.value}`} />) } 
                        </Box>
                    </ListItem>
                    <ListItem disablePadding sx={{alignItems: 'flex-start'}}>
                        <ListItemText sx={{width: '50%'}} secondary="Evolves From:" />
                        <ListItemText sx={{width: '50%'}} primary={item.evolvesFrom || 'nothing'} />
                    </ListItem>

                </List>
            </CardContent>
            )
        }
        </Card>
  );
}