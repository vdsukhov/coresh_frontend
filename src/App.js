import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import SearchFormComponent from './Components/SearchFormComponent';
import TableComponentWrapper from './Components/ResultTableComponent';
import ProgressBar from './Components/ProgressBar';
import BioLab from './Components/bioLab';
import WordTabs from './Components/WordAnalysis';
import { useState } from 'react';


function App() {
    const [queryOrganism, setQueryOrganism] = useState("");
    const [organismDb, setOrganismDb] = useState("");
    const [queryGenes, setQueryGenes] = useState([]);

    const [showProgressBar, setShowProgressBar] = useState(false);
    const [progressPercent, setProgressPercent] = useState(0);
    const [showBioLab, setShowBioLab] = useState(false);

    const [showWordTabs, setShowWordTabs] = useState(false);
    const [enrichedWords, setEnrichedWords] = useState([]);

    const [tableRows, setTableRows] = useState([]);
    const [showTable, setShowTable] = useState(false);

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

                setEnrichedWords={setEnrichedWords}
                setShowWordTabs={setShowWordTabs}
            />
            <BioLab showBioLab={showBioLab}></BioLab>
            <ProgressBar showProgressBar={showProgressBar} progressPercent={progressPercent}></ProgressBar>
            <WordTabs showTabs={showWordTabs} enrichedWords={enrichedWords}></WordTabs>
            <TableComponentWrapper showTable={showTable} tableRows={tableRows} />
        </div>
    )
}

export default App;
