import React, { Children, useState } from 'react';
import { Tabs, Table, Switch } from 'antd';
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
            children:
                <div className="d-flex justify-content-center">
                    <div className="col-lg-10">
                        <WordsTable enrichedWords={props.enrichedWords} />
                    </div>
                </div>,
        },
    ];

    const [toggleTabs, setToggleTabs] = useState(false);

    if (props.showTabs) {
        return (
            <div className="container px-2 py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-12 d-flex align-items-center">
                        <div className="d-flex align-items-center px-2 py-2">
                            <Switch checked={toggleTabs} size="medium" onChange={() => setToggleTabs(!toggleTabs)} />
                            <span style={{ marginLeft: '8px' }}>Show Word Analysis</span>
                        </div>
                    </div>
                </div>
                {toggleTabs && (
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <Tabs type="card" defaultActiveKey="1" items={items} />
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return null;
    }
};

export default WordTabs;