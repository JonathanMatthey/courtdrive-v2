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
      <th style={{ width: "auto" }}>Date Filed </th>
      <th style={{ width: "auto" }}> #</th>
      <th className="d-none d-md-table-cell" style={{ width: "80%" }}>
      Docket Text
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>04/30/2020</td>
      <td >
        <a href="#">182</a>
      </td>
      <td>Notice of Appearance filed by Philip Biegler on behalf of Ad Hoc First Lien Committee. (Biegler, Philip)</td>
    </tr>
    <tr>
      <td>04/30/2020</td>
      <td >
        <a href="#">181</a>
      </td>
      <td>Order signed on 4/30/2020 Granting Leib M. Lerner Admission to Practice Pro Hac Vice (Related Doc # [165]). (Rai, Narotam)</td>
    </tr>
    <tr>
      <td>04/30/2020</td>
      <td >
        <a href="#">180</a>
      </td>
      <td>Order signed on 4/30/2020 Granting Lucian B. Murley Admission to Practice Pro Hac Vice (Related Doc # [166]). (Rai, Narotam)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">179</a>
      </td>
      <td>Order signed on 4/29/2020 Granting Jason M. Katz Admission to Practice Pro Hac Vice (Related Doc #  <span class="docket_ref">157</span>). (Rai, Narotam) (Entered: 04/29/2020)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">178</a>
      </td>
      <td>Order signed on 4/29/2020 Granting Michael P. Menton Admission to Practice Pro Hac Vice (Related Doc #  <span class="docket_ref">51</span>). (Rai, Narotam) (Entered: 04/29/2020)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">177</a>
      </td>
      <td>Notice of Appearance filed by Devin Lawton Palmer on behalf of City of Canandaigua. (Palmer, Devin) (Entered: 04/29/2020)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">176</a>
      </td>
      <td>Order signed on 4/29/2020 Granting Nathan H. Trunnell Admission to Practice Pro Hac Vice (Related Doc #  <span class="docket_ref">154</span>). (Rai, Narotam) (Entered: 04/29/2020)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">175</a>
      </td>
      <td>Order signed on 4/29/2020 Granting Matthew G. Jones Admission to Practice Pro Hac Vice (Related Doc #  <span class="docket_ref">153</span>). (Rai, Narotam) (Entered: 04/29/2020)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">174</a>
      </td>
      <td>Notice of Appearance filed by Robert Gayda on behalf of Merritt 7 Venture L.L.C.. (Gayda, Robert) (Entered: 04/29/2020)</td>
    </tr>
    <tr>
      <td>04/29/2020</td>
      <td >
        <a href="#">173</a>
      </td>
      <td>Application for Pro Hac Vice Admission filed by Michael S Bonnano on behalf of Groton Utilities, Bozrah Light &amp; Power. (Bonnano, Michael) (Entered: 04/29/2020)</td>
    </tr>
  </tbody>
</Table>
);

const DailyDigest = () => (
  <Container fluid className="p-0">
    <Row className="mb-3">
      <Col lg="5" className="">
        Show latest docket entries since: 
        <Input type="text" className="ml-2" placeholder="4/12/2020" 
          style={{
            "width": "100px",
            "display": "inline-block"
          }}
        />
        <Button color="primary" className="ml-2" outline>
          Search
        </Button>
      </Col>
      <Col lg="5"/>
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

export default DailyDigest;
