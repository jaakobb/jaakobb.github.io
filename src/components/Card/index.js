import * as React from 'react';

import './Card.css';

import {StarRating} from '../../components/StarRating/index';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export function MediaCard(aProps) {
  const { data, category, height } = aProps;

  return (
    <div className="card-wrapper">
      <Card sx={{ maxWidth: 264 }}>
        <CardHeader
          title={data.title}
          titleTypographyProps={{variant: 'body2'}}
          subheader={data.subtitle}
        />
        <CardMedia
          component="img"
          height={height}
          image={data.image}
          alt={data.title}
        />
        <CardContent>
          <Chip className="card-date-chip" label={data.date} variant="outlined" />
          <Typography className="card-description" variant="body2" color="text.secondary">
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