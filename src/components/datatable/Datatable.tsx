import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import "./datatable.scss";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams<any, any, any>) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          className="link"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
