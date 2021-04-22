import React, { Component } from 'react';
import data from "../pages/data.json"; 
import './Rooftop.css';

class RooftopExample1 extends Component {
	render() {
		return (
			<div className='roof'>
            	<div className='rooftop'>
                {
					data.Rooftop1.map((rooftop, i) => {
						return (
							<div key={i}>
								<div className='rooftopinfo'>
										<img src={rooftop.icon} className='img-rooftop1'/>
									<div>
											{rooftop.roles.map(function (role, i) { 
												return <div key={i}>
													<h5>{role.title}</h5>
													<p>{role.description}</p>
													<button class="button is-medium is-fullwidth">Velg by</button>
													<a href={role.similarurl1}>
														<img src={role.similaricon1} className='similaricon'/>
													</a>
													<a href={role.similarurl2}>
														<img src={role.similaricon2} className='similaricon'/>
													</a>
													<p className='city'>{role.city}</p>
												</div>
											})}
											<div className='options'>
												<div className="tilpass">
													<button class="button is-medium is-light is-fullwidth">Tilpass</button>
													</div>
													  <button class="button is-medium is-dark is-fullwidth">
          											Legg til i prosjekt<i class="fas fa-chevron-right"/></button>	  
											</div>
									</div>
									
								</div>
							</div>
						);
					})
				}
            	</div>
			{
					data.Rooftop1.map((rooftopfunc, i) => {
						return (
							<div key={i}>
								<div className='rooftopinfo'>
									<div>
											{rooftopfunc.roles.map(function (role, i) { 
												return <div key={i}>
													<h5>{role.title}</h5>
													<p>{role.description}</p>
													
													<p className='city'>{role.city}</p>
												</div>
											})}
									</div>
									
								</div>
							</div>
						);
					})
			}
			</div>
        );
    }
} 
export default RooftopExample1;