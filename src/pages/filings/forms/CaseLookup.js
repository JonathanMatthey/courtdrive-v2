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

const FormRow = () => (
  <Card>
    <CardBody>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Address</Label>
          <Input type="text" name="address" placeholder="1234 Main St" />
        </FormGroup>
        <FormGroup>
          <Label>Address 2</Label>
          <Input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>City</Label>
              <Input type="text" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>State</Label>
              <Input type="select" name="state">
                <option />
                <option>...</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Zip</Label>
              <Input type="text" name="zip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <CustomInput
            type="checkbox"
            id="checkbox"
            label="Check me out"
            disabled
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </CardBody>
  </Card>
);

const Layouts = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg="12">
        <FormRow />
      </Col>
    </Row>
  </Container>
);

export default Layouts;
