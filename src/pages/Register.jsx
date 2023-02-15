import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row, Alert, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NetworkService from "../services/NetworkService";
import { useNavigate } from "react-router-dom";

const Register=()=>{
    let navigate = useNavigate();
    const inputRef = useRef();
    
    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const [error, setError]= useState('')

    const changeHandler=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }
    // console.log(formData);

    const formHandler=()=>{
        setError('');
        const {name, email, password, confirmPassword} = formData;
        if(name!=='' && email!=='' && password!=='' && confirmPassword!==''){

            if(password === confirmPassword){
                
                NetworkService.post("register",{name,email,password})
                    .then(({ data }) => {
                    if(data.success){
                        window.alert("User registered successfuly");
                        navigate('/login');
                    }
                }).catch((err)=>{
                    setError(err.response.data.message);
                });

            }else{
                setError("Both password are not same")    
            }

        }else{
            setError("Incomplete form error")
        }
    }
    return(
        <Container>
            <Row className="justify-content-center my-4 inpForm">
                <Col md={5}>
                    <Card className="p-4 bg-light">
                        <h3 className="text-center mb-3 display-4">Register</h3>
                        <hr/>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={inputRef} onChange={changeHandler} value={formData.name} name="name" type="text" placeholder="Name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={changeHandler} value={formData.email} placeholder="Email Address"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={changeHandler} name="password" value={formData.password} placeholder="Password"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" onChange={changeHandler} value={formData.confirmPassword} placeholder="Confirm Password"/>
                        </Form.Group>


                        <div className="d-flex justify-content-between align-items-center">
                        <Button variant="primary me-3" onClick={formHandler} type="submit">
                            Register
                        </Button>
                            <div>Already user? <Link to="/login" className="link">Login Now</Link></div>
                        </div>
                        {error!=='' && <Alert variant={"danger mt-3 mb-0"}>
                            {error}
                        </Alert>}
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}
export default Register;

