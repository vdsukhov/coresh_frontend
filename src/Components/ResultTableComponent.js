import React from 'react';
import { Divider, Table, Typography } from 'antd';
import "../css_styles/antd_styles.css";
import { CSVLink, CSVDownload } from 'react-csv';

const RANK_WIDTH = 70;
const LOGP_WIDTH = 120;
const GSE_WIDTH = 150;


const columns = [
    {
        title: <>Rank</>,
        dataIndex: 'rank',
        key: 'rank',
        width: RANK_WIDTH
    },
    {
        title: <>Title</>,
        dataIndex: 'ttl',
        key: 'ttl',
        ellipsis: true
        // render: (_, record) => (
        //     <Typography.Text ellipsis={true} style={{width: TITLE_WIDTH}}>{record.ttl}</Typography.Text>
        // )
    },
    {
        title: <>-Log<sub>10</sub> P<sub>adj</sub></>,
        dataIndex: 'logp',
        key: 'logp',
        sorter: (a, b) => a.logp - b.logp,
        width: LOGP_WIDTH,
        align: "center"
    },
    {
        title: <>GSE</>,
        dataIndex: 'gse',
        key: 'gse',
        width: GSE_WIDTH,
        render: (text) => <a href={`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=${text}`} target='_blank'>{text}</a>
    },
    
]


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




const ResultTableComponent = (props) => {
    if (props.showTable){
        // console.log(props.tableRows);
        const rows = configureRows(props.tableRows);
        // console.log(rows);
        return (
            <div className='container pu'>
                <Divider />
                <div className='row pb-3'></div>
                <Table dataSource={rows} columns={columns} expandable={{
                    expandedRowRender: (record) => (
                        <div className='row justify-content-center px-2'>
                            <p style={{margin: 0,}}>{record.ttl}</p>
                        </div>
                    ),
                    // rowExpandable: (record) => console.log(record),
                }}/>
                <div className='col-md-2' align="left">
                    <CSVLink data={configureCsvOutput(rows)} filename='coresh_result_table.csv' className='btn btn-primary' target='_blank'>Download CSV</CSVLink>
                </div>
            </div>
        );    
    } else {
        return(
            <div></div>
        )
    }
}

export default ResultTableComponent;
   