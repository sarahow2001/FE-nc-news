import {useEffect,useState} from 'reacr'
import {getTopics} from "../api"
import ArticleCard from "./articleCard"

export default function Topics(){

  const [topics , setTopics]=useState([])


useEffect(() =>{
     getTopics().then((allTopics)=>{
         setTopics(allTopics)
         
     })
 },[])
  

 return (


    <ul>
{topics.map(topic => {
   
    return(

         <li key={topics}>
           <ArticleCard topic={topics} ></ArticleCard>
        </li>
    )
    
})}
    </ul>
 )
}