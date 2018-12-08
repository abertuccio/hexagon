import React, { Component } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import { FaIndustry } from 'react-icons/fa/'

export class Location extends Component {
    constructor(props) {
        super(props);
        this.state = { oSelected: 1 };
    }


    handleChangeOptions = (option) => {
        this.setState({ oSelected: option })
    }

    render() {
        const stage =
            <div className="industry-container">
                <FaIndustry className="industry" />
            </div>;


        const stages = <div className="stages">{Array(7).fill(stage).reduce((a,c,i,oa)=>{
            a.push(c); 
                if(i!==oa.length -1){
                    a.push(<hr className="industry-separator"/>);
                }
            return a;
        },[])}</div>;

            const map = <div class="mapouter">
            <iframe title="Map" width="100%" height="396" id="gmap_canvas" src="https://maps.google.com/maps?q=buenos%20aires&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>;


        return (
            <Container className="location">
                <Row>
                    <Col xs="10">
                        <p>Text</p>
                    </Col>
                    <Col xs="2">
                        <ButtonGroup size="sm">
                            <Button color="light" onClick={() => this.handleChangeOptions(1)} active={this.state.oSelected === 1}>Diagram</Button>
                            <Button color="light" onClick={() => this.handleChangeOptions(2)} active={this.state.oSelected === 2}>Map</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Container className="general-container stages-container">
                    <Row>
                        <Col className="location-container">
                            {this.state.oSelected === 1 ? stages : map}
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }

}