import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { tableData, tableColumns } from "./data.js";

import {FormGroup, Label, FormText} from 'reactstrap';

var DatePicker = require("reactstrap-date-picker");

class CustomView extends React.Component {

  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      value: new Date().toISOString()
    };
  }

  componentDidMount() {
  }

  handleDateChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }

  render() {

    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#f8f9fa"
    };

    return (
      <div>
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
        <FormGroup>
          <Label>My Date Picker</Label>
        </FormGroup>
      </div>
    );
  }
};

export default CustomView;
