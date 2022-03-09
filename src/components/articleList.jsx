import {useEffect,useState} from "react"
import {getAllArticles} from "../api"
import ArticleCard from "./articleCard"
import Title from "./Title"

export default function ArticleList(){
    const [articles,setArticles]=useState([])

useEffect(() => {
getAllArticles().then((allArticles)=>{
    setArticles(allArticles)
})
},[])


  return (
      <section>
      <Title></Title>
<ul>
{articles.map(article => {
    return(

     <li key={article.article_id}>
        <ArticleCard article={article} ></ArticleCard>
    </li>
)})}
</ul>
</section>
 )

}