import React,{useContext,useState} from 'react';
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from 'reactstrap';

import firebase from 'firebase/app';
import {toast} from 'react-toastify';
import UserContext from '../Context/context';
import {Redirect} from 'react-router-dom';

const Signup = () =>{
    
    const context =  useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSignUp = function(){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(res =>{
                console.log(res);
                //console.log("Success");
                // toast("Success",{
                //     type:"success"
                // });
                (async function(){
                    toast('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                   });
                }());
                    

                context.setUser({
                    email:res.user.email,
                    uid:res.user.uid
                })
            })
            .catch(function(error){
                console.log(error);
                toast("Error occured",{
                    type:"error"
                });
            });
            console.log(context.user?.uid);
            console.log(context.user?.email);
    }

    const handleFormSubmit = function(e){
            e.preventDefault();
            handleSignUp();
    }

   if(context.user?.uid){
        return <Redirect to="/" />
   }

   else{
    console.log(context.user?.uid);
    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleFormSubmit}>
							<CardHeader className=''>SignUp here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign Up
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
   }
}

export default Signup;