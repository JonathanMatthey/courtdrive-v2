const tableData = [
  {
    name: "Aldo Venegas-Moris",
    caseName: "Moris",
    owner: "orbke",
    caseNo: "3:12-bk-31231",
    docketAlerts: false,
    updated: "12/1/2010"
  },
  {
    name: "Alicia D. Townsend",
    caseName: "Townsend",
    owner: "ohsbke",
    caseNo: "3:12-bk-31232",
    docketAlerts: false,
    updated: "12/1/2010"
  }
];

const tableColumns = [
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: "caseName",
    text: "Case Name",
    sort: true
  },
  {
    dataField: "owner",
    text: "Owner",
    sort: true
  },
  {
    dataField: "caseNo",
    text: "Case No",
    sort: true
  },
  {
    dataField: "docketAlerts",
    text: "Docket Alerts",
    sort: true
  },
  {
    dataField: "updated",
    text: "Updated",
    sort: true
  }
];

export { tableData, tableColumns };
