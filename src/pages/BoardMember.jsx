import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";


import axios from "axios";


const BoardMember=()=>{
    
    const assetUrl = "https://cruxcreativedemo2.com/isgf";
    
    const API_URL = "https://cruxcreativedemo2.com/isgf/public/api/boardGovernor";

    // const [loading, setLoading] = useState(false);
    
    const [getMember, setMember] = useState(null);
    useEffect(()=>{
        // setLoading(true);
        axios.get(API_URL).then((response) => {
            setMember(response.data);
            console.log(response.data)
            // setLoading(false);
        });
    },[])

 
    return(<>
 
        <Container className="my-5">
            <Row className="g-4">
                {(getMember) && getMember.map((data, index)=>
                <Col md={3}>
                    <Card key={data.id}>
                        <div className="ms-3 mt-3">
                            <img width="100px" src={assetUrl + "/public/forum_img/" + data.image} alt="pic"/>
                        </div>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                            {data.designation}
                            </Card.Text>
                            <Button variant="primary"><a style={{"color" : "white"}} href={data.linked_in}><FaTwitter/></a></Button> &nbsp;
                             <Button variant="primary"><a style={{"color" : "white"}} href={data.twitter}><FaLinkedinIn/></a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                )}
            </Row>
        </Container>
        </>
    )
}
export default BoardMember;