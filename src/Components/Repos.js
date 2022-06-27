import React,{useState,useEffect}  from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import Axios from 'axios';
const Repos = function({repos_url}){

        const [repos,setRepos] = useState([]);

        const fetchRepos = async function(){
           try{
                const response = await Axios.get(repos_url);
                setRepos(response.data);
                console.log(repos);
           }
           catch(e){
               
           }
        }

        /*useEffect(()=>{
            fetchRepos();
        },[repos]);*/

        useEffect(()=>{
            fetchRepos();
        });

        return(
           <ListGroup>
               {repos.map((repo)=>(
                   <ListGroupItem key={repo.id}>
                       <div>{repo.name}</div>
                       <div>{repo.full_name}</div>
                       <div>{repo.node_id}</div>
                   </ListGroupItem>
               ))}
           </ListGroup>
        );

}

export default Repos;