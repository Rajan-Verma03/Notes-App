import React, { useState } from "react";
import MaterialTable from "material-table";
import "./css/Subject.css";
import { NavLink } from "react-router-dom";

const Subject = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <MaterialTable
        title="SUBJECTS"
        columns={[
          {
            title: "Name",
            field: "name",
            validate: (rowData) =>
              rowData.name === "" ? "Name cannot be empty" : "",
          },
          {
            title: "Chapters",
            field: "chapters",
            type: "numeric",
            validate: (rowData) =>
              rowData.chapters < 1
                ? "Please add atleast one Chapter/Topic"
                : "",
          },
        ]}
        data={data}
        detailPanel={[
          {
            tooltip: "",
            render: (rowData) => {
              return (
                <div className="list-Item">
                  <ol>
                    <li>
                      <NavLink to="/chapters">Chapters</NavLink>
                    </li>
                    <li>
                      <NavLink to="/mind-maps">Mind Maps</NavLink>
                    </li>
                    <li>
                      <NavLink to="/practice-">Questions</NavLink>
                    </li>
                  </ol>
                </div>
              );
            },
          },
          // {
          //   icon: "favorite_border",
          //   openIcon: "favorite",
          //   tooltip: "Add Favourite",
          //   render: (rowData) => {
          //     return <p> hello</p>;
          //   },
          // },
        ]}
        options={{
          // selection: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          paging: false,
        }}
        // actions={[
        //   {
        //     tooltip: "Remove All Selected Rows",
        //     icon: "delete",
        //     onClick: (evt, delData) => {
        //       alert("You want to delete " + delData.length + " rows");
        //     },
        //   },
        // ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setData([...data, newData]);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setTimeout(() => setData(dataUpdate), 1000);
              resolve();
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve();
            }),
        }}
      />
    </>
  );
};

export default Subject;
