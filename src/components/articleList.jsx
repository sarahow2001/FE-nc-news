import {useEffect,useState} from "react"
import {getAllArticles} from "../api"
import ArticleCard from "./articleCard"


export default function ArticleList(){
    const [articles,setArticles]=useState([])

useEffect(() => {
getAllArticles().then((allArticles)=>{
    setArticles(allArticles)
})
},[])


  return (
<ul>
{articles.map(article => {
    return <li key={article.article_id}>
        <ArticleCard article={article} ></ArticleCard>
    </li>
})}
</ul>
 )

}