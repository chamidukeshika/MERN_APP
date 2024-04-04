import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormContainer = ({ children }) => {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row className='justify-content-md-center mt-2 formlog'>
                    <Col xs={12} md={6} className='card p-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' ,color: 'white'}}>
                        {children}
                    </Col>
                    <Col style={{ justifyContent: 'center', marginTop:'200px' }}>
                        <Row className="justify-content-md-center mt-2">
                            <Col xs={12} md={6} className="text-center">
                            <Link to="/admin/equipments/add">
                                    <Button variant="primary" size="lg" block style={{ width: '400px', height: '100px', fontSize: '32px', color:'white'}}>Add Equipment</Button>
                          </Link>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mt-2">
                            <Col xs={12} md={6} className="text-center">
                            <Link to="/admin/equipments">
                                <Button variant="primary" size="lg" block style={{ width: '400px', height: '100px', fontSize: '32px', marginTop:'50px'}}>Items Inventory</Button>
                            </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormContainer;
