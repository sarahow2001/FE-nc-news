import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"
import {getSingleArticle,updateVotes, getComments} from "../api.js"
import Votes from "./votes"
import ViewComment from "./comments.jsx";
// import ViewComment from "./comments.jsx";

export default function SingleArticle(){


     const {id} = useParams();
     const [article , setArticle]=useState();
     const [isLoading,setLoading]=useState(true)
     useEffect(() => {
         getSingleArticle(id).then((article)=>{
             setArticle(article);
             setLoading (false);
         })
     },[id])
   if (isLoading === true) {
       return (
           <p> Loading...</p>
       )
   }else{
    return (
        <section>
        <h1>{article.title}</h1>  
        <p>{article.topic}</p>
        <p>{article.body}</p>
        <br></br>
        
        <p>{article.author}</p>
        
        <Votes votes={article.votes} id={article.article_id}/>
        <ViewComment/>
        {/* 1) state for keeping the comments
        2) use effect to fetch the comment from the api 
        3) map over the comments to render them  */}
     
      </section>
    )
    
    
}
  
}