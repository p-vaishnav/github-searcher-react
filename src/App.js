import React,{useState} from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

//toastify
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//importing context
import UserContext from './Context/context';

//components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';

//layouts
import Footer from './Layout/Footer';
import Header from './Layout/Header';

//firebase configuration
import firebaseConfig from './config/firebaseconfig';

//importing Repos
import Repos from './Components/Repos';

//initalizing firebase
// console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const App = function(){
  
  const [user,setUser] = useState(null);
  
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value = {{user,setUser}} >
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="*" component={PageNotFound}/>
          </Switch> 
          <Footer />
      </UserContext.Provider>
    </Router>

    
    
  );
}

export default App;
