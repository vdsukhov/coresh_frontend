import React from 'react';


const RadioGroupComponent = (props) => {
	return(
		<div className='row'>
			<div className={"col-sm-2"} align="right">
				<p>{props.val}</p>
			</div>
			<div className={"col-sm-6"} align="left">
				{props.options.map((arg) => {
					return(
					<div className={"form-check form-check-inline"}>
						<input className={"form-check-input"}
								type={"radio"}
								name={props.inp_type}
								value={arg}
								id={props.inp_type.concat("_", arg)}
								required={true}
						/>
						<label className={"form-check-label"} htmlFor={props.inp_type.concat("_", arg)}>{arg}</label>
					</div>
					)
				})}
			</div>
		</div>
	)
}

export default RadioGroupComponent;
