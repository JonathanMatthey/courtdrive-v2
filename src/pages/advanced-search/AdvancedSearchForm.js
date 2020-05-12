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

import Select from "react-select";

const AdvancedSearchForm = () => (
  <Container fluid className="p-0">
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Input type="text" name="city" placeholder="Enter keywords"/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={12}>
          <FormGroup inline>
            <Label>Search text of PDF documents</Label>
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
              <option value="0">Include</option>
              <option value="1">Exclude</option>
              <option value="2">Limit search to</option>
            </CustomInput>
            <Label className="ml-4">Limit search to </Label>
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
              <option value="0">All</option>
              <option value="1">My Casefolders</option>
              <option value="2">Form Casefolders</option>
            </CustomInput>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h5>Case Information</h5>
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <Row>
            <Col lg="5">
              <FormGroup>
                <Label>Region</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={regionOptions}
                  isMulti
                />
              </FormGroup>
            </Col>
            <Col lg="5">
              <FormGroup>
                <Label>Query</Label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={regionOptions}
                  isMulti
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="5">
              <Label>Case Titles</Label>
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="customSelect"
              >
                <option value="0">Include</option>
                <option value="1">Exclude</option>
                <option value="2">Limit search to</option>
              </CustomInput>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="mt-4">
          <h5>Date Filters</h5>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="pr-0">
          <FormGroup>
            <Label>Date filed from</Label>
            <Input type="text" name="city" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>through</Label>
            <Input type="text" name="zip" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pr-0">
          <FormGroup>
            <Label>Cases closed from:</Label>
            <Input type="text" name="city" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>through:</Label>
            <Input type="text" name="zip" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pr-0">
          <FormGroup>
            <Label>Cases dismissed from:</Label>
            <Input type="text" name="city" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>through:</Label>
            <Input type="text" name="zip" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pr-0">
          <FormGroup>
            <Label>Cases discharged from:</Label>
            <Input type="text" name="city" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>through:</Label>
            <Input type="text" name="zip" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pr-0">
          <FormGroup>
            <Label>Documents filed from:</Label>
            <Input type="text" name="city" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label>through:</Label>
            <Input type="text" name="zip" />
          </FormGroup>
        </Col>
      </Row>

      <Row form className="mt-2">
        <Col md={8}>
          <button 
            className="mr-1 mb-1 btn btn-primary"
          >Search</button>
          <button 
            className="mr-1 mb-1 btn btn-secondary"
          >Clear</button>
        </Col>
      </Row>
    </Form>
  </Container>
);

export default AdvancedSearchForm;

const regionOptions = [
  {value: "1", label: "First Circuit"},
  {value: "2", label: "Second Circuit"},
  {value: "3", label: "Third Circuit"},
  {value: "4", label: "Fourth Circuit"},
  {value: "5", label: "Fifth Circuit"},
  {value: "6", label: "Sixth Circuit"},
  {value: "7", label: "Seventh Circuit"},
  {value: "8", label: "Eighth Circuit"},
  {value: "9", label: "Ninth Circuit"},
  {value: "10", label: "Tenth Circuit"},
  {value: "11", label: "Eleventh Circuit"},
  {value: "12", label: "Federal Circuit"},
  {value: "13", label: "Alabama Middle"},
  {value: "14", label: "Alabama Northern"},
  {value: "15", label: "Alabama Southern"},
  {value: "16", label: "Alaska"},
  {value: "17", label: "Arizona"},
  {value: "18", label: "Arkansas Eastern"},
  {value: "19", label: "Arkansas Western"},
  {value: "20", label: "California Central"},
  {value: "21", label: "California Eastern"},
  {value: "22", label: "California Northern"},
  {value: "23", label: "California Southern"},
  {value: "24", label: "Colorado"},
  {value: "25", label: "Connecticut"},
  {value: "26", label: "District of Columbia"},
  {value: "27", label: "Delaware"},
  {value: "28", label: "Florida Middle"},
  {value: "29", label: "Florida Northern"},
  {value: "30", label: "Florida Southern"},
  {value: "31", label: "Georgia Middle"},
  {value: "32", label: "Georgia Northern"},
  {value: "33", label: "Georgia Southern"},
  {value: "34", label: "Guam"},
  {value: "35", label: "Hawaii"},
  {value: "36", label: "Idaho"},
  {value: "37", label: "Illinois Central"},
  {value: "38", label: "Illinois Northern"},
  {value: "39", label: "Illinois Southern"},
  {value: "40", label: "Indiana Northern"},
  {value: "41", label: "Indiana Southern"},
  {value: "42", label: "Iowa Northern"},
  {value: "43", label: "Iowa Southern"},
  {value: "44", label: "Kansas"},
  {value: "45", label: "Kentucky Eastern"},
  {value: "46", label: "Kentucky Western"},
  {value: "47", label: "Louisiana Eastern"},
  {value: "48", label: "Louisiana Middle"},
  {value: "49", label: "Louisiana Western"},
  {value: "50", label: "Maine"},
  {value: "51", label: "Maryland"},
  {value: "52", label: "Massachusetts"},
  {value: "53", label: "Michigan Eastern"},
  {value: "54", label: "Michigan Western"},
  {value: "55", label: "Minnesota"},
  {value: "56", label: "Mississippi Northern"},
  {value: "57", label: "Mississippi Southern"},
  {value: "58", label: "Missouri Eastern"},
  {value: "59", label: "Missouri Western"},
  {value: "60", label: "Montana"},
  {value: "61", label: "Nebraska"},
  {value: "62", label: "Nevada"},
  {value: "63", label: "New Hampshire"},
  {value: "64", label: "New Jersey"},
  {value: "65", label: "New Mexico"},
  {value: "66", label: "New York Eastern"},
  {value: "67", label: "New York Northern"},
  {value: "68", label: "New York Southern"},
  {value: "69", label: "New York Western"},
  {value: "70", label: "North Carolina Eastern"},
  {value: "71", label: "North Carolina Middle"},
  {value: "72", label: "North Carolina Western"},
  {value: "73", label: "North Dakota"},
  {value: "74", label: "Northern Mariana Islands"},
  {value: "75", label: "Ohio Northern"},
  {value: "76", label: "Ohio Southern"},
  {value: "77", label: "Oklahoma Eastern"},
  {value: "78", label: "Oklahoma Northern"},
  {value: "79", label: "Oklahoma Western"},
  {value: "80", label: "Oregon"},
  {value: "81", label: "Pennsylvania Eastern"},
  {value: "82", label: "Pennsylvania Middle"},
  {value: "83", label: "Pennsylvania Western"},
  {value: "84", label: "Puerto Rico"},
  {value: "85", label: "Rhode Island"},
  {value: "86", label: "South Carolina"},
  {value: "87", label: "South Dakota"},
  {value: "88", label: "Tennessee Eastern"},
  {value: "89", label: "Tennessee Middle"},
  {value: "90", label: "Tennessee Western"},
  {value: "91", label: "Texas Eastern"},
  {value: "92", label: "Texas Northern"},
  {value: "93", label: "Texas Southern"},
  {value: "94", label: "Texas Western"},
  {value: "95", label: "Utah"},
  {value: "96", label: "Vermont"},
  {value: "97", label: "Virgin Islands"},
  {value: "98", label: "Virginia Eastern"},
  {value: "99", label: "Virginia Western"},
  {value: "100", label: "Washington Eastern"},
  {value: "101", label: "Washington Western"},
  {value: "102", label: "West Virginia Northern"},
  {value: "103", label: "West Virginia Southern"},
  {value: "104", label: "Wisconsin Eastern"},
  {value: "105", label: "Wisconsin Western"},
  {value: "106", label: "Wyoming"}
]