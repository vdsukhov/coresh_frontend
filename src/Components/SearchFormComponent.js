import React from 'react';
import RadioGroupComponent from './RadioGroupComponent';


async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
    });
    return response.json()
}


const SearchFormComponent = (props) => {

	const submit = e => {
		e.preventDefault();

		getData("http://localhost:3001/posts").then(
			(res) => {
				props.setTableRows(res)
				props.setShowTable(true)
			}
		);

	}

	return (
		<div className="row justify-content-center px-2">
			<div className="col-lg-8">
				<form onSubmit={submit}>
					<RadioGroupComponent val="Query Species:" options={["Homo Sapiens", "Mus Musculus"]} inp_type="query"></RadioGroupComponent>
					<RadioGroupComponent val="Database Species:" options={["Homo Sapiens", "Mus Musculus"]} inp_type="db"></RadioGroupComponent>
					<div className="col-md-9 mx-auto mb-2 px-2">
						<textarea className="form-control z-depth-1" id="genes" rows="5" placeholder='Gene list (separated by newline/whitespace/tab)' required>
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
