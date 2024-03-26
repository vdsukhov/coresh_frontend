import React from 'react';
import RadioGroupComponent from './RadioGroupComponent';
import configData from '../config.json'


let ORG2SHORT = {
	'Homo Sapiens': 'hsa',
	'Mus Musculus': 'mmu'
}


async function getRequest(url = ''){
	const response = await fetch(url, {
		method: 'GET',
	});
	return response.json();
}

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
    });
    return response.json()
}


async function submitGenes(url='', data={}){
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return response.json();
}

async function getJobStatus(url=''){
	const response = await fetch(url, {
		method: 'GET',
	});
	return response.json();
}

async function getFinalTable(url=''){
	const response = await fetch(url, {
		method: 'GET',
	});
	return response.json();
}


async function requestsWrapper(
	configData, data={}, 
	setShowProgressBar, 
	setProgressPercent,
	setShowTable,
	setTableRows){
	setShowTable(false);
	setShowProgressBar(true);
	setProgressPercent(0);
	let jobId = await submitGenes(configData.BACKEND_SUBMIT_GENES, data);
	console.log(jobId);
	jobId = jobId['ID'];

	let jobStatus = await getRequest(`${configData.BACKEND_CHECK_JOB}?jobid=${jobId}&organism=${data.dbType}`);
	let percent = Number(jobStatus['progress']);
	
	setProgressPercent(Math.round(percent));

	for (let i = 0; i < 1000; i++){
		jobStatus = await getRequest(`${configData.BACKEND_CHECK_JOB}?jobid=${jobId}&organism=${data.dbType}`);
		percent = Number(jobStatus['progress']);

		if (Math.round(percent) === 100){
			break;
		}
		
		setProgressPercent(Math.round(percent));
		await new Promise(r => setTimeout(r, 5000));
	}
	let finalTable = await getRequest(`${configData.BACKEND_GET_FINAL_TABLE}?jobid=${jobId}`)
	
	setProgressPercent(100);
	setShowTable(true);
	setTableRows(finalTable);
}


const SearchFormComponent = (props) => {

	const submit = e => {
		e.preventDefault();
		const dataToSend = {
			organism: props.queryOrganism,
			dbType: props.organismDb,
			genes: props.queryGenes
		}

		console.log(dataToSend);
		requestsWrapper(configData, dataToSend, props.setShowProgressBar, 
			props.setProgressPercent, props.setShowTable, props.setTableRows);
		
	}

	return (
		<div className="row justify-content-center px-2">
			<div className="col-lg-8">
				<form onSubmit={submit}>
					
					<RadioGroupComponent 
						val="Query Species:" options={["Homo Sapiens", "Mus Musculus"]} inp_type="query"
						onChange={event => props.setQueryOrganism(ORG2SHORT[event.target.value])}
					></RadioGroupComponent>
					<RadioGroupComponent 
						val="Database Species:" options={["Homo Sapiens", "Mus Musculus"]} inp_type="db"
						onChange={event => props.setOrganismDb(ORG2SHORT[event.target.value])}
					></RadioGroupComponent>
					
					<div className="col-md-12 mx-auto mb-2">
						<textarea className="form-control z-depth-1" id="genes" rows="5" placeholder='Gene list (separated by newline/whitespace/tab)' 
						required={true}
						onChange={e => props.setQueryGenes(e.target.value.split(/\s/).filter(elem => elem))}>
						</textarea>
					</div>

					<div className='row'>
						<div className='col-md-2' align="left">
							<div className='form-group inline-group' id='search-btn'>
								<input type='submit' value="Search" className='btn btn-primary'></input>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchFormComponent;
