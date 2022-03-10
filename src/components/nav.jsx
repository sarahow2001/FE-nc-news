import  {getTopics,getAllArticles} from "../api"
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";

export default function NavBar (){

 const [topics,setTopics]= useState([]);

 
  useEffect(() => {

 getTopics().then((topics) => {
     setTopics(topics);
 })
 },[])
 return (
     <div> 
         <Link  to={`/articles`} >HOME</Link>
         <br />
     {topics.map((topic) => { 
         
         return (
             <Link key={topic.slug} to={`/articles/${topic.slug}`} >{topic.slug}</Link> 
             )
      })}
    </div>
 )

}