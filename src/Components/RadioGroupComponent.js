import React from 'react';
import { useEffect } from 'react';
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RadioGroupComponent = (props) => {

	useEffect(() => {
		// Initialize Bootstrap tooltips
		const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new Tooltip(tooltipTriggerEl)
		})
	}, []);

	return (
		<div className='row'>
			<div className={"col-sm-3"} align="left">
				<p>
					{props.val}
					<span
						className="ms-2"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						title={props.tooltipText}
					>
						<i className="bi bi-question-circle"></i> {/* Smaller Bootstrap icon */}
					</span>
				</p>
			</div>
			<div className={"col-sm-6"} align="left">
				{props.options.map((arg) => {
					return (
						<div className={"form-check form-check-inline"} key={arg}>
							<input className={"form-check-input"}
								type={"radio"}
								name={props.inp_type}
								value={arg}
								id={props.inp_type.concat("_", arg)}
								required={true}
								onChange={props.onChange}
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
