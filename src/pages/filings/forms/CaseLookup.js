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

const CaseLookup = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg="12">
        <Form inline className="mb-4">
          <CustomInput
            type="radio"
            id="radio1"
            name="customRadio"
            label="All"
            className="mr-4"
            defaultChecked
          />
          <CustomInput
            type="radio"
            id="radio2"
            name="customRadio"
            label="Bankruptcy"
            className="mr-4"
          />
          <CustomInput
            type="radio"
            id="radio3"
            name="customRadio"
            label="Civil"
            className="mr-4"
          />
          <CustomInput
            type="radio"
            id="radio4"
            name="customRadio"
            label="Criminal"
            className="mr-4"
          />
          <CustomInput
            type="radio"
            id="radio5"
            name="customRadio"
            label="Appellate"
            className="mr-4"
          />
          <CustomInput
            type="radio"
            id="radio6"
            name="customRadio"
            label="National"
            className="mr-4"
          />
        </Form>

        <Form>
          <Row form>
            <Col md={12}>
              <FormGroup inline>
                <Label>Search by </Label>
                <CustomInput
                  type="select"
                  id="exampleCustomSelect"
                  name="customSelect"
                  className="ml-2"
                  style={{
                    "width": "auto",
                    "display": "inline-block"
                  }}
                >
                  <option value="0">Case Number</option>
                  <option value="1">Case Title or Party Name</option>
                </CustomInput>
                <Input
                  type="text"
                  name="address2"
                  placeholder="Case Number..."
                  className="ml-2"
                  style={{
                    "width": "auto",
                    "display": "inline-block"
                  }}
                />
              <Button 
                className="ml-2"
                color="primary"
              >Search</Button>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Filters ...</Label>
          </FormGroup>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label>Region:</Label>
                <Input type="select" name="state">
                  <option />
                  <option>...</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={1}>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Date filed from</Label>
                <Input type="text" name="city" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>through</Label>
                <Input type="text" name="zip" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default CaseLookup;
