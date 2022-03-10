


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function ArticleCard ({article}){
 

    return (
        <Card sx={{ minWidth: 275 }}>
            <div>
      <CardContent>
     
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="" component="div">
       {article.topic}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
        </Typography>
        <Typography variant="body2">
          votes:{article.votes}
          <br />
          {article.author}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to ={`/articles/article/${article.article_id}`}> <Button size="small" >View Article</Button></Link>
      </CardActions>
      </div>
    </Card>
    )
}

