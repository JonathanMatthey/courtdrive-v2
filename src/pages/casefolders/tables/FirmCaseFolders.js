import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
  Media,
  Input,
  Button,
} from "reactstrap";

import { Edit2, Trash } from "react-feather";

const BasicTable = () => (
  <Table>
    <thead>
      <tr>
        <th>
          CaseFolder Name
        </th>
        <th>
          Case Name
        </th>
        <th>
          Case No
        </th>
        <th>
          Owner
        </th>
        <th>
          Date Started
        </th>
        <th>
          Updated
        </th>
        <th>
          Docket Alerts
        </th>
        <th>
          ECF Notices
        </th>
      </tr>
    </thead>
  <tbody>
    <tr>
      <td>
        <a href="">CaseFolder - 7:20-bk-22476 - Frontier Communications Corporation</a> 
      </td>
      <td>
        Frontier Communications Corporation 
      </td>
      <td>
        7:20-bk-22476 
      </td>
      <td>
        Jon Matthey 
      </td>
      <td>
        <span>04/29/20 02:16 PM</span> 
      </td>
      <td>
        04/29/20 06:16 PM 
      </td>
      <td>
        <a href="" data-casefolder-nid="7945050">
          <div></div>
        </a>
      </td>
      <td>
        <small>N/A</small> 
      </td>
    </tr>
    <tr>
      <td>
        <a href="">CaseFolder - 2:12-bk-23123 - Alan D. Caporali and Joy L. Caporali</a> 
      </td>
      <td>
        Alan D. Caporali and Joy L. Caporali 
      </td>
      <td>
        2:12-bk-23123 
      </td>
      <td>
        Jon Matthey 
      </td>
      <td>
        <span>04/22/20 06:30 AM</span> 
      </td>
      <td>
        04/22/20 10:30 AM 
      </td>
      <td>
        <a href="" data-casefolder-nid="7903686">
          <div></div>
        </a>
      </td>
      <td>
        <small>N/A</small> 
      </td>
    </tr>
  </tbody>
</Table>
);

const FirmCaseFolders = () => (
  <Container fluid className="p-0">
    <Row className="mb-3">
      <Col lg="10"/>
      <Col lg="2">
        <Media className="align-items-center">
          <Media body>
            <Input type="text" className="" placeholder="Search..." />
          </Media>
        </Media>
      </Col>
    </Row>

    <Row>
      <Col lg="12">
        <BasicTable />
      </Col>
    </Row>
  </Container>
);

export default FirmCaseFolders;
