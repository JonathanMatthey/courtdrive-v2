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
  Card,
  CardHeader,
  ListGroupItem,
  ListGroup,
  CardTitle
} from "reactstrap";

import { Home, Settings, MessageSquare } from "react-feather";

import CaseLookup from "./forms/CaseLookup";
import PacerSearch from "./forms/PacerSearch";

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
            Case Lookup
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
            Pacer Search
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
            Local Court Search
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
            Reports
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <CaseLookup/>
          </TabPane>
          <TabPane tabId="2">
            <PacerSearch/>
          </TabPane>
          <TabPane tabId="3">
          </TabPane>
          <TabPane tabId="4">
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


const Filings = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Search Court Records</h1>
    <p>Access bankruptcy, civil, and criminal cases across all districts nationwide</p>
    <Row>
      <Col lg="8">
        <TabsWithTextLabel name="Default" />
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
