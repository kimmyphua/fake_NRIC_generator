import React from "react";
import { Table } from "antd";

function Display({ currentNRIC }) {
  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      align: 'center'
    },
    {
      title: "NRIC",
      dataIndex: "nric",
      key: "nric",
      align: 'center',
    
    },
  ];


  return (
    <div>
      
      {currentNRIC.length ?
      <Table
        columns={columns}
        dataSource={currentNRIC}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "30", "100"],
        }} 
      />
        :
        <h1>Please Click "Generate NRIC" To Start</h1>
    }
      
    </div>
  );
}

export default Display;
