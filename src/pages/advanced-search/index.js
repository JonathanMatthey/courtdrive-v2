import React from "react";
import classnames from "classnames";

import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Form, 
  CustomInput,
  Card,
  CardHeader,
  ListGroupItem,
  ListGroup,
  CardTitle
} from "reactstrap";

import { Home, Settings, MessageSquare } from "react-feather";

import AdvancedSearchForm from "./AdvancedSearchForm";

class TabsWithTextLabel extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { name, className } = this.props;

    return (
      <div className={"tab " + className}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              All Courts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Petitions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Case Activity
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <AdvancedSearchForm/>
          </TabPane>
          <TabPane tabId="2">
            <AdvancedSearchForm/>
          </TabPane>
          <TabPane tabId="3">
            <AdvancedSearchForm/>
          </TabPane>
          <TabPane tabId="4">
            <AdvancedSearchForm/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const Filings = () => (
  <Container fluid className="p-0">
        <h1 className="h3 mb-3">Advanced Search</h1>
    <Row>
      <Col lg="8">
        <Form inline className="mb-4">
          <CustomInput
            type="radio"
            id="radio1"
            name="customRadio"
            label="All Courts"
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
        </Form>
        <TabsWithTextLabel />
      </Col>
      <Col lg="4">
        <Card>
          <CardHeader>
            <CardTitle tag="h5" className="mb-0">
              Recent Cases
            </CardTitle>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem><a>Lehman Brothers Holdings Inc.</a></ListGroupItem>
            <ListGroupItem><a>Frontier Communications Corporatio...</a></ListGroupItem>
            <ListGroupItem><a>Annie M. Griffin</a></ListGroupItem>
            <ListGroupItem><a>Anthony Lee Brinneman</a></ListGroupItem>
            <ListGroupItem><a>Alan D. Caporali and Joy L. Capora...</a></ListGroupItem>
            <ListGroupItem><a>COMMONWEALTH OF PUERTO RICO and PU...</a></ListGroupItem>
            <ListGroupItem><a>Riverbend Environmental Services, ...</a></ListGroupItem>
            <ListGroupItem><a>Federal-Mogul Global, Inc.,</a></ListGroupItem>
            <ListGroupItem><a>Jasvir Mand and Rajinder Kaur Rand...</a></ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Filings;
