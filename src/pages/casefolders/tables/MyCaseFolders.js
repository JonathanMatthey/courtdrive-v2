import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

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
  );
};

export default MyCaseFolders;
