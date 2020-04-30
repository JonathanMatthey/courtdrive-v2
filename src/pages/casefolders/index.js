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
  TabPane
} from "reactstrap";

import { Home, Settings, MessageSquare } from "react-feather";

import MyCaseFolders from "./tables/MyCaseFolders";
import Archived from "./tables/Archived";
import FirmCaseFolders from "./tables/FirmCaseFolders";
import CustomView from "./tables/CustomView";
import DailyDigest from "./tables/DailyDigest";
import FirmDigest from "./tables/FirmDigest";

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
              My CaseFolders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
            Daily Digest
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
            Archived
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
            Firm CaseFolders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
            Firm Digest
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
            Custom View
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <MyCaseFolders/>
          </TabPane>
          <TabPane tabId="2">
            <DailyDigest/>
          </TabPane>
          <TabPane tabId="3">
            <Archived/>
          </TabPane>
          <TabPane tabId="4">
            <FirmCaseFolders/>
          </TabPane>
          <TabPane tabId="5">
            <FirmDigest/>
          </TabPane>
          <TabPane tabId="6">
            <CustomView/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


const Tabs = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">CaseFolders</h1>
    <Row>
      <Col lg="12">
        <TabsWithTextLabel name="Default" />
      </Col>
    </Row>
  </Container>
);

export default Tabs;
