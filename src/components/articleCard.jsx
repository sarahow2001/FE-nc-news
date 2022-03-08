


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Title from './Title'

export default function ArticleCard ({article}){
    

    return (
        <Card sx={{ minWidth: 275 }}>
            <div>
      <CardContent>
        <Title></Title>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="h5" component="div">
       {article.topic}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </div>
    </Card>
    )
}
