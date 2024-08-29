const COL_WIDTH_A = 100;
const COL_WIDTH_B = 2 * COL_WIDTH_A;

const formatNumber = (value) => {
    return value < 1e-4 ? value.toExponential(1) : value.toPrecision(2);
};

export default [
    {
        title: <>Word</>,
        dataIndex: 'word',
        key: 'word',
        ellipsis: true,
        width: COL_WIDTH_B,
        align: 'center',
    },
    {
        title: <>Freq</>,
        dataIndex: 'freq',
        key: 'freq',
        sorter: (a, b) => a.freq - b.freq,
        width: COL_WIDTH_A,
        align: "center",

    },
    {
        title: <>FreqInTop</>,
        dataIndex: 'freqInTop',
        key: 'freqInTop',
        sorter: (a, b) => a.freqInTop - b.freqInTop,
        width: COL_WIDTH_A,
        align: "center",

    },
    {
        title: <>P-value</>,
        dataIndex: 'pval',
        key: 'pval',
        sorter: (a, b) => b.pval - a.pval,
        width: COL_WIDTH_A,
        align: "center",
        render: (value) => formatNumber(value),
    },
    {
        title: <>P-adjust</>,
        dataIndex: 'padj',
        key: 'padj',
        width: COL_WIDTH_A,
        align: "center",
        sorter: (a, b) => b.padj - a.padj,
        render: (value) => formatNumber(value),
    },
];