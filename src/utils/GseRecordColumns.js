const RANK_WIDTH = 70;
const LOGP_WIDTH = 150;
const PCTVAR_WIDTH = 80;
const GSE_WIDTH = 150;
const SIZE_WIDTH = 85;

export default [
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
    },
    {
        title: <>size</>,
        dataIndex: "size",
        key: "size",
        width: SIZE_WIDTH,
        align: "center"
    },
    {
        title: <>pctVar</>,
        dataIndex: 'pctVar',
        key: 'pctVar',
        sorter: (a, b) => a.pctVar - b.pctVar,
        sortDirections: ['descend'],
        width: PCTVAR_WIDTH,
        align: "center",
        render: (value) => Math.round(value * 100) / 100
    },
    {
        title: <>log<sub>10</sub> P-adjust</>,
        dataIndex: 'logp',
        key: 'logp',
        sorter: (a, b) => a.logp - b.logp,
        width: LOGP_WIDTH,
        align: "center",
        render: (value) => Math.round(value * 100) / 100
    },
    {
        title: <>GSE</>,
        dataIndex: 'gse',
        key: 'gse',
        width: GSE_WIDTH,
        render: (text) => <a href={`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=${text}`} target='_blank'>{text}</a>
    },

];