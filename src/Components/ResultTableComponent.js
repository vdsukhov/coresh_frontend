import React, { useState } from 'react';
import { Divider, Table, Input} from 'antd';
import "../css_styles/antd_styles.css";
import { CSVLink } from 'react-csv';
import columns from '../utils/column_structure'

const Search = Input.Search;


const configureRows = (rawRows) => {
    const res = [];
    for (let i = 0; i < rawRows.length; i++){
        res.push({
            key: (i + 1).toString(),
            rank: (i + 1),
            ttl: rawRows[i].gseTitle,
            logp: rawRows[i].log10Padj,
            gse: rawRows[i].gseId
        })
    }
    return(res);
}

const configureCsvOutput = (rows) => {
    const header = ["rank", "title", "-log10(padj)", "gse"];
    const res = [header];
    for (let i = 0; i < rows.length; i++){
        const row_2_add = [rows[i].rank, rows[i].ttl, rows[i].logp, rows[i].gse];
        res.push(row_2_add);
    }

    return(res);
}


const TableComponent =  ({props}) => {
    const [rowsBuffer, setRowsBuffer] = useState(configureRows(props.tableRows));
    const [rows, setRows] = useState(rowsBuffer);
    const [searchText, setSearchText] = useState("");

    const onSearch = e => {
        const reg = new RegExp(e.target.value, "gi");
        
        const filteredData = rowsBuffer.map(record => {
        
            const titleMatch = record["ttl"].match(reg);
            const gseMatch = record["gse"].match(reg);
            if (!titleMatch && !gseMatch){
                return null;
            }
            return record;
        }).filter(record => !!record);
        setSearchText(e.target.value);        
        setRows(e.target.value ? filteredData : rowsBuffer);
        
    }



    return (
        <div className='container pu'>
            <Divider />
            <div className='row pb-2'></div>
            <div className='row pb-2'>
                <Search
                    size="large"
                    placeholder='Search Records'
                    onChange={onSearch}
                    ref = {elem => (setSearchText(searchText))}
                    value = {searchText}
                    onPressEnter={onSearch}
                />
            </div>
            <Table dataSource={rows} columns={columns} expandable={{
                expandedRowRender: (record) => (
                    <div className='row justify-content-center px-2'>
                        <p style={{margin: 0,}}>{record.ttl}</p>
                    </div>
                ),
            }}
            />
            <div className='col-md-2' align="left">
                <CSVLink data={configureCsvOutput(rows)} filename='coresh_result_table.csv' className='btn btn-primary' target='_blank'>Download CSV</CSVLink>
            </div>
        </div>
    )

}



const TableComponentWrapper = (props) => {
    if (props.showTable){
        return(<TableComponent props={props}></TableComponent>);
    } else {
        return(<div></div>);
    }
}



export default TableComponentWrapper;
   