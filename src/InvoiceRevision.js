import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Table 
  } from 'reactstrap';

  


export class InvoiceRevision extends Component {

render(){
    return(
        <Container className="invoice">
        <Row>
          <Col><h3>Invoice <span className="invoice-number">S03834754</span></h3> </Col>
        </Row>
        <Container className="general-container panel-table-container">
        <Row>
          <Col><h6>INVOICE - REVISION</h6></Col>
        </Row>
        <Row>
          <Col>
          <Table borderless className="hex-invoice-table">        
        <tbody>
          <tr>
            <td>Invoice #</td>
            <th>33-0092kk00</th>
          </tr>
          <tr>
            <td>Date</td>
            <th scope="row">7/31/18</th>
          </tr>
          <tr>
            <td>Due Date</td>
            <th scope="row">7/31/18</th>
          </tr>
          <tr>
          <td>Terms</td>
            <th scope="row">Net 0</th>
          </tr>
        </tbody>
      </Table>  
          </Col>
          <Col><p>Bill to</p></Col>
          <Col className="balance">
          <p>New balance upon Re-booking</p>
          <h5 className="amount">$452.45</h5>
          </Col>
        </Row>
        </Container>
      </Container>
    );
}    

}