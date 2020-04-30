import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  CustomInput,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row
} from "reactstrap";

const PacerSearch = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg="8">
        <Form inline className="mb-4">
          <CustomInput
            type="radio"
            id="radio1"
            name="customRadio"
            label="Bankruptcy"
            className="mr-4"
            defaultChecked
          />
          <CustomInput
            type="radio"
            id="radio2"
            name="customRadio"
            label=" Civil"
            className="mr-4"
          />
          <CustomInput
            type="radio"
            id="radio3"
            name="customRadio"
            label=" Criminal"
            className="mr-4"
          />
          <CustomInput
            type="radio"
            id="radio4"
            name="customRadio"
            label=" Appellate"
            className="mr-4"
          />
        </Form>

        <Form>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label>Region:</Label>
                <Input type="select" name="state">
                  <option>All Courts</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Chapters:</Label>
                <Input type="select" name="state">
                  <option>Select...</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Case Number:</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Case Title:</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
          </Row>
          <p><b>Data Filters</b></p>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label>Last / Business Name</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Middle Name</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Four Digit SSN:</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>SSN/TIN:</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
          </Row>
          <Row form className="mt-2">
            <Col md={8}>
              <button 
                className="mr-1 mb-1 btn btn-success"
              >Pacer Search</button>
              <button 
                className="mr-1 mb-1 btn btn-primary"
              >Local Court Search</button>
              <button 
                className="mr-1 mb-1 btn btn-secondary"
              >Clear</button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col lg="4">
      <br/>
      <br/>
      <h5>Using Local Court Search</h5>
      <p>1. Select a single bankruptcy court (not a general area or circuit court).</p>
      <p>2. Enter at least one of the following: case number, or party name, SSN, or date filter (you cannot search by case title).</p>
      <p>3. Local Court Search, (unlike Pacer Search), is NOT subject to the 30-page limit so be careful to select criteria that is not too broad or general.</p>
      </Col>
    </Row>
  </Container>
);

export default PacerSearch;
