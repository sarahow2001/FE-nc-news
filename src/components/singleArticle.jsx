import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"
import {getSingleArticle} from "../api.js"
export default function SingleArticle(){

 console.log("anything")

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
        <p>{article.votes}</p>
        <p>{article.author}</p>
      </section>
    )

   }
   
}