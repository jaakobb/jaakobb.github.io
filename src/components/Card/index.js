import * as React from 'react';

import './Card.css';

import {StarRating} from '../../components/StarRating/index';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export function MediaCard(aProps) {
    const [expanded, setExpanded] = React.useState(false);
  
    const { children, data, category, imgProps} = aProps;

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <div className="card-wrapper">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{category}</Avatar>
          }
          title={data.title}
          subheader={data.date}
        />
        <CardMedia
          component="img"
          height="500"
          image={data.image}
          alt={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <StarRating rating={data.rating} />
        </CardActions>
      </Card>
      </div>
    );
  }