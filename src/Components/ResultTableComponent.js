import React, { Component, useState } from 'react';
import { Divider, Table, Input } from 'antd';
import "../css_styles/antd_styles.css";
import { CSVLink } from 'react-csv';
import columns from '../utils/column_structure'
import { Button, Pagination } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';

const Search = Input.Search;


const configureRows = (rawRows) => {
    const res = [];
    for (let i = 0; i < rawRows.length; i++) {
        res.push({
            key: (i + 1).toString(),
            rank: (i + 1),
            ttl: rawRows[i].gseTitle,
            pctVar: rawRows[i].pctVar,
            logp: rawRows[i].log10Padj,
            gse: rawRows[i].gseId,
            summary: rawRows[i].gseSummary
        })
    }
    return (res);
}

const configureCsvOutput = (rows) => {
    const header = ["rank", "title", "pctVar", "-log10(padj)", "gse"];
    const res = [header];
    for (let i = 0; i < rows.length; i++) {
        const row_2_add = [Number(rows[i].rank), rows[i].ttl, Number(rows[i].pctVar), Number(rows[i].logp), rows[i].gse];
        res.push(row_2_add);
    }

    return (res);
}


const TableComponent = ({ props }) => {
    const rowsBuffer = configureRows(props.tableRows);
    // const [rowsBuffer, setRowsBuffer] = useState(configureRows(props.tableRows));
    const [rows, setRows] = useState(rowsBuffer);
    const [searchText, setSearchText] = useState("");

    const onSearch = e => {
        const reg = new RegExp(e.target.value, "gi");

        const filteredData = rowsBuffer.map(record => {

            const titleMatch = record["ttl"].match(reg);
            const gseMatch = record["gse"].match(reg);
            const summaryMatch = record["summary"].match(reg);
            if (!titleMatch && !gseMatch && !summaryMatch) {
                return null;
            }
            return record;
        }).filter(record => !!record);
        setSearchText(e.target.value);
        setRows(e.target.value ? filteredData : rowsBuffer);

    }

    // const [pageSize, setPageSize] = useState(500);
    const [currentPage, setCurrentPage] = useState(1);



    return (
        <div className='container pu'>
            <Divider />
            <div className='row pb-2'></div>
            <div className='row pb-2'>
                <Search
                    size="large"
                    placeholder='Search Records'
                    onChange={onSearch}
                    ref={elem => (setSearchText(searchText))}
                    value={searchText}
                    onPressEnter={onSearch}
                />
            </div>
            <Table dataSource={rows} columns={columns} expandable={{
                expandedRowRender: (record) => (
                    <div>
                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                                <span className='px-4'>{record.ttl}</span>
                                <a href={`https://artyomovlab.wustl.edu/phantasus/?geo=${record.gse}`} target='_blank'><img src="https://artyomovlab.wustl.edu/phantasus/favicon.ico" width='16' height='16' /></a>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-between align-items-center py-4 px-4'>
                                <p className='text-justify'>{record.summary}</p>
                            </div>
                        </div>
                    </div>

                ),
            }}
                pagination={{
                    defaultCurrent: currentPage, defaultPageSize: 500, pageSizeOptions: [50, 100, 250, 500, 1000],
                }}
            />
            <div className='col-md-2' align="left">
                <CSVLink data={configureCsvOutput(rows)} filename='coresh_result_table.csv' target='_blank'>
                    <Button type="primary" icon={<DownloadOutlined style={{ verticalAlign: 'middle', display: 'inline-block' }} />}
                        shape='circle' size='default'>
                    </Button>
                </CSVLink>


            </div>
        </div>
    )

}



const TableComponentWrapper = (props) => {
    if (props.showTable) {
        return (<TableComponent props={props}></TableComponent>);
    } else {
        return (<div></div>);
    }
}



export default TableComponentWrapper;
