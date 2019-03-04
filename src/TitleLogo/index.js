import React, { Component } from 'react'

class TitleLogo extends Component {

	render () {
		return (
				<div>
				  <img src="/EnclaveDataLogo.png" width="35px" alt="enclave logo" style={{margin: '2px 7px', verticalAlign: 'top'}}/>
				  <span style={{ fontSize: '1.75em', color: '#000', padding: '7px 0px'}}>&nbsp;Data Control Engine</span>
				</div>
				)
	}
}

export default TitleLogo;
