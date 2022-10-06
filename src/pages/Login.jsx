// import { Container } from 'postcss'
import React, { useState } from 'react'
import BackgroundImage from "../components/BackgroundImage";
import Header from '../components/Header';
import styled from 'styled-components';
import { firebaseAuth } from "../utils/firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })


    const handleLogin = async () => {
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate('/netflix')
    })

    return (
        <Container >
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="j-center form flex column a-center">
                        <h3>Login</h3>
                        <div className="container flex column">
                            <input type="email" placeholder="Email" name="email" id=""
                                value={
                                    formValues.email
                                }
                                onChange={(e) => setFormValues({
                                    ...formValues, [e.target.name]: e.target.value
                                })}
                            />
                            <input type="password" name="password" id="" placeholder="password "
                                value={
                                    formValues.password
                                }
                                onChange={(e) => setFormValues({
                                    ...formValues, [e.target.name]: e.target.value
                                })}

                            />
                            <button onClick={handleLogin}>Login</button>


                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  .content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .form-container{
        gap:2rem;
        height:85vh;
        .form{
            padding:2rem;
            background-color:#000000b0;
            gap:2rem;
            width:25vw;
            color:white;
            .container{
                gap:2rem;
                input{
                    padding:0.5rem 1rem;
                    width:15rem; 
                }
                button{
                    padding:0.5rem 1rem;
                    background-color:#e50914;
                    border:none;
                    cursur:pointer;
                    border-radius:0.2rem;
                    font-weight:bolder;
                    font-size:1.05rem;
                    color:white;
                }
       }
    }
    
    }
   
 }
     
`;

