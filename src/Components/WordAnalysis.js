import React, { Children, useState } from 'react';
import { Tabs, Table } from 'antd';
import columns from '../utils/WordEnrichmentColumn'


const configureWordRows = (rawRows) => {
    const res = [];
    for (let i = 0; i < rawRows.length; i++) {
        res.push({
            key: (i + 1).toString(),
            word: rawRows[i].word,
            freq: rawRows[i].freq,
            freqInTop: rawRows[i].freqInTop,
            pval: rawRows[i].pval,
            padj: rawRows[i].padj,
        })
    }
    return (res);
}





const WordsTable = ({ enrichedWords }) => {
    const rowsBuffer = configureWordRows(enrichedWords);

    const [rows, setRows] = useState(rowsBuffer);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredRows = rows.filter(row => row.padj < 0.01);


    return (
        <div className='container pu'>
            <Table
                dataSource={filteredRows}
                columns={columns}
                pagination={{
                    defaultCurrent: currentPage,
                    defaultPageSize: 10,
                    pageSizeOptions: [10, 20, 30],
                }}
            />
        </div>
    );
};





export const WordTabs = (props) => {
    const items = [
        {
            key: '1',
            label: 'Enriched Words',
            children: <WordsTable enrichedWords={props.enrichedWords} />,
        },
    ];

    if (props.showTabs) {
        return (
            <div className="row justify-content-center px-2 py-4">
                <div className="row justify-content-center col-lg-11">
                    <div className="col-lg-8">
                        <Tabs type='card' defaultActiveKey="1" items={items} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default WordTabs;