import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import SearchFormComponent from './Components/SearchFormComponent';
import TableComponentWrapper from './Components/ResultTableComponent';
import { useState } from 'react';


function App(){
    const [queryOrganism, setQueryOrganism] = useState("");
    const [organismDb, setOrganismDb] = useState("");
    const [queryGenes, setQueryGenes] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [showTable, setShowTable] = useState(false);

    return(
        <div className='App'>
            <HeaderComponent/>
            <SearchFormComponent 
                queryOrganism={queryOrganism}
                setQueryOrganism={setQueryOrganism}
                organismDb={organismDb}
                setOrganismDb={setOrganismDb}
                queryGenes={queryGenes}
                setQueryGenes={setQueryGenes}
                setTableRows={setTableRows}
                setShowTable={setShowTable}
            />
            <TableComponentWrapper showTable={showTable} tableRows={tableRows}/>
        </div>
    )
}

export default App;
