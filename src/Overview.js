import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Table 
  } from 'reactstrap';
  import {FaCheck} from 'react-icons/fa/'

export class Overview extends Component {

render(){
    return( <Container className="overview">    
    <Container className="general-container panel-table-container">
    <Row>
      <Col><h6>OVERVIEW</h6></Col>
    </Row>
    <Row>
      <Col>
      <Table borderless className="hex-invoice-table">
    <tbody>
      <tr>
        <td>Status</td>
        <th scope="row" className="status-active"><FaCheck/> Active</th>
      </tr>
      <tr>
        <td>Method</td>
        <th scope="row">Multimodal</th>
      </tr>
      <tr>
        <td>Capacity</td>
        <th scope="row">LCL</th>
      </tr>
      <tr>
      <td>Drayage</td>
        <th scope="row">Pickup, Delivery</th>
      </tr>
    </tbody>
  </Table>  
      </Col>
      <Col>
      <Table borderless className="hex-invoice-table">
    
    <tbody>
      <tr>
        <td>Incoterms</td>
        <th>FOB</th>
      </tr>
      <tr>
        <td>Service Options</td>
        <th scope="row">Deconsolidation. Customs Clearance</th>
      </tr>
      <tr>
        <td>Hazardous or forbidden commodities</td>
        <th scope="row">Lithium Batteries, Hazmat, Other</th>
      </tr>      
    </tbody>
  </Table>  
      </Col>
    </Row>
    </Container>
  </Container>);
}    

}