import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Redirect } from "react-router-dom";
import  UserContext  from "../Context/context";
import { toast } from "react-toastify";

const Home = function(){
   
    const [query,setQuery] = useState('');
    const [user,setUser] = useState({});
    const context = useContext(UserContext);

    const fetchUserDetails = async function(){
        try{
            const response = await  Axios.get(`https://api.github.com/users/${query}`)
            console.log(response);
            setUser(response.data);
        }
        
        catch(e){
            toast("Error occure",{
                type:"error"
            });
        }
    }

    const fetchDetails = function(){
        fetchUserDetails();
        
    }
    if(!context.user?.uid){
        // return <h1>Success</h1>
        return  <Redirect to="/signin"/>
    }
    else{
     return(<Container>
            <Row className=" mt-3">
            <Col md="5">
            <InputGroup>
                <Input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please provide the username"
                />
                <InputGroupAddon addonType="append">
                <Button color="primary" onClick={fetchDetails}>Fetch User</Button>
                </InputGroupAddon>
            </InputGroup>
            </Col>
            <Col md="7">
               <Row>
                 <UserCard user={user}/>
                </Row>
                <Row>
                    {query? <Repos repos_url={user.repos_url}/> : "" }
                </Row>
            </Col>
        </Row>
        </Container>
        );
    }
  
}

export default Home;