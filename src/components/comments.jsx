import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import {getComments} from "../api"


export default function ViewComment(){

    const {id} = useParams();
    const [comments ,setComments]=useState();
    const [isLoading ,setIsLoading]=useState(true);

    useEffect(() => {
    getComments(id).then((comments)=>{
        setComments(comments);
        setIsLoading(false);
    })
 },[id])

 if (isLoading === true){

    return (
        <p>Loading...</p>
    )
 }else {

     return (
          <section>
              <h1> comments</h1>
    
     {comments.map(comment => {
         console.log(comment)
         return (
         <div>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.created_at}</p>
       </div>
       )})}
    
        </section>
    
    )
 }
     

} 