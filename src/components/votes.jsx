import React,{useState} from 'react';
import { updateVote } from '../api';

 
 export default function Votes({votes,id}){
    const [incVotes , setIncVotes]=useState(0);

    const handleIncVotes = (incVote)=>{

        setIncVotes((currentIncVotes)=>{
         return currentIncVotes + incVote ;
     });
     updateVote(id,incVote).catch(()=>{
         setIncVotes((currentIncVotes)=>{
             return currentIncVotes - incVote;
         });
     });
    };

    return (
        <section>
     <p>{votes + incVotes}</p> 
    <button disabled ={incVotes > 0}onClick={()=>handleIncVotes(1)}> 👍🏻 </button>
    <button disabled ={incVotes < 0}onClick={()=>handleIncVotes(-1)}> 👎🏻 </button>
        </section>
 )
  
}


