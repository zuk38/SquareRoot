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
								<div className='requirements'>
											<h5>{rooftop.city}</h5>
											<div className="func">
											<h4 className="h4">{rooftop.func}</h4>
											<h4 className="h4">{rooftop.main}</h4>
											<div className="func_info">
											{rooftop.functions.map(function (func, i) { 
												return ( <div key={i}>
														<div className='req_info'>
															<img src={func.icon} className='func_icon'/>
															{func.name}
														</div>
												</div>
											)})}
											</div>
											<div className="main_info">
											{rooftop.maintenance.map(function (main, i) { 
												return ( <div key={i}>
													<div className="req_box">
														<div className='req_info'>
															<img src={main.icon} className='func_icon'/>
															{main.name}
														</div>
														
													</div>
													
												</div>
											)})}
											</div>
											</div>
								</div>
								<div className='description'>
											{rooftop.description.map(function (desc, i) { 
												return ( <div key={i}>
														<div className='desc'>
															<h4 className="h4">{desc.name}</h4>
															<div className="desc_info">{desc.info}
															</div>
														</div>
												</div>
											)})}
								</div>
								<div className="plantlist">
								<button class="button is-medium is-light is-fullwidth">Se hele plantelisten <i class="fas fa-chevron-right"/></button>
								</div>
							</div>
						);
					})
				}
            	</div>
			</div>
        );
    }
} 
export default RooftopExample1;