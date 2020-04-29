import React from "react";
import { Button, Row, Col, Media, Input, Card, CardBody, CardHeader, CardTitle, Container, CustomInput } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { tableData, tableColumns } from "./data.js";

const MyCaseFolders = () => {
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#f8f9fa"
  };

  return (
    <div>
      <Row>
        <Col lg="2" className="pr-0">
          <CustomInput
            type="select"
            id="exampleCustomSelect"
            name="customSelect"
            className="mt-3"

          >
            <option value="0">- Choose an operation -</option>
            <option value="ir_room_archive_archive_action">Archive CaseFolders</option>
            <option value="ir_room_archive_delete_action">Delete CaseFolders</option>
            <option value="ir_pdf_archive_download_pleadings_action">Download all pleadings</option>
            <option value="ir_room_archive_unarchive_action">Make CaseFolders Active</option>
          </CustomInput>
        </Col>
        <Col lg="1">
          <Button color="primary" className="mt-3" outline>
            Execute
          </Button>
        </Col>
        <Col lg="7"/>
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
          sizePerPage: 10,
          sizePerPageList: [10, 25, 50, 100]
        })}
      />
    </div>
  );
};

export default MyCaseFolders;
