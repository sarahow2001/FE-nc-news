
import {useEffect,useState} from "react"
import {getAllArticles} from "../api"
import ArticleCard from "./articleCard"
import Title from "./Title"
import {useParams} from "react-router-dom"

export default function ArticleList(){
    const [articles,setArticles]=useState([])
    const {topic} = useParams();
   
useEffect(() => {
getAllArticles(topic).then((allArticles)=>{
  
    setArticles(allArticles)
})
},[topic])

  return (
      <section>
      <Title></Title>

{articles.map(article => {
    return(

     <li key={article.article_id}>
        <ArticleCard article={article} ></ArticleCard>
    </li>
)})}
</section>
 )

}