import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import SearchFormComponent from './Components/SearchFormComponent';
import TableComponentWrapper from './Components/ResultTableComponent';
import ProgressBar from './Components/ProgressBar';
import BioLab from './Components/bioLab';
import { useState } from 'react';


function App() {
    const [queryOrganism, setQueryOrganism] = useState("");
    const [organismDb, setOrganismDb] = useState("");
    const [queryGenes, setQueryGenes] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [progressPercent, setProgressPercent] = useState(0);
    const [showBioLab, setShowBioLab] = useState(false);

    return (
        <div className='App'>
            <HeaderComponent />
            <SearchFormComponent
                queryOrganism={queryOrganism}
                setQueryOrganism={setQueryOrganism}
                organismDb={organismDb}
                setOrganismDb={setOrganismDb}
                queryGenes={queryGenes}
                setQueryGenes={setQueryGenes}
                setTableRows={setTableRows}
                setShowTable={setShowTable}
                setShowProgressBar={setShowProgressBar}
                setProgressPercent={setProgressPercent}
                setShowBioLab={setShowBioLab}
            />
            <BioLab showBioLab={showBioLab}></BioLab>
            <ProgressBar showProgressBar={showProgressBar} progressPercent={progressPercent}></ProgressBar>
            <TableComponentWrapper showTable={showTable} tableRows={tableRows} />
        </div>
    )
}

export default App;
