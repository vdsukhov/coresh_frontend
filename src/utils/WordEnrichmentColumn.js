const RANK_WIDTH = 70;
const LOGP_WIDTH = 150;
const LOGPADJ_WIDTH = 150;

const formatNumber = (value) => {
    return value < 1e-4 ? value.toExponential(1) : value.toPrecision(2);
};

export default [
    {
        title: <>Word</>,
        dataIndex: 'word',
        key: 'word',
        ellipsis: true,
        align: 'center',
    },
    {
        title: <>Freq</>,
        dataIndex: 'freq',
        key: 'freq',
        width: LOGP_WIDTH,
        align: "center",
    },
    {
        title: <>FreqInTop</>,
        dataIndex: 'freqInTop',
        key: 'freqInTop',
        width: LOGP_WIDTH,
        align: "center",
    },
    {
        title: <>P-value</>,
        dataIndex: 'pval',
        key: 'pval',
        width: LOGP_WIDTH,
        align: "center",
        render: (value) => formatNumber(value),
    },
    {
        title: <>P-adjust</>,
        dataIndex: 'padj',
        key: 'padj',
        width: LOGP_WIDTH,
        align: "center",
        render: (value) => formatNumber(value),
    },
];