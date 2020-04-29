import React from "react";
import { Col, Row, Card, CardBody, CardHeader, CardTitle, Container, Media, Input } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { tableData, tableColumns } from "./data.js";

const FirmCaseFolders = () => {
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#f8f9fa"
  };

  return (
    <div>
      <Row>
        <Col lg="10"></Col>
        <Col lg="2">
          <Media className="align-items-center">
            <Media body>
              <Input type="text" className="my-3" placeholder="Search..." />
            </Media>
          </Media>
        </Col>
      </Row>
      <BootstrapTable
        bootstrap4
        bordered={false}
        keyField="name"
        data={tableData}
        columns={tableColumns}
        selectRow={selectRow}
        pagination={paginationFactory({
          sizePerPage: 5,
          sizePerPageList: [5, 10, 25, 50]
        })}
      />
    </div>
  );
};

export default FirmCaseFolders;
