import '../App.css';
import React, { useState } from "react";


function ResultItem(props) {

	const [expanded, setExpanded] = useState(false);

	let ratingsBarWidth = props.rating / 5 * 300

	function expand() {
		setExpanded(!expanded)
	}

	return (
	<div className="resultItem" >
		<div className="count">{props.index}</div>


		<div>
	    	<div className="itemHeader wrapStack" onClick={expand}>
	    		<div className="title">{props.name}</div>
	    		<div className="expander">
				  {expanded ? "▼" : "►"}
				</div>
	    	</div>
	    	<div className="addressContainer">
	    		<div className="distance">{Math.round(props.distance) + " meters away"}</div>
	    		{ expanded &&
	    			<div className="address">@ {props.address}</div>
	    		}
	    		{ expanded &&
	    			<div className="phone">{props.phone}</div>
	    		}
	    	</div>
	    	
	    	<div className="detailsContainer">
	    		{ props.price &&
		    		<div className="price">{props.price}</div>
		    	}
		    	<div className="categories">{props.categories.join(", ")}</div>
		    	
			</div>
			{ expanded &&
				<div className="ratingsContainer">
			    	<div className="rating">{props.rating}</div>
					<div className="ratingsBar" style={{width: ratingsBarWidth + "px"}}></div>
					{ props.rating >= 4.5 &&
			    		<div className="star">★</div>
			    	}
				</div>
			}

			{ expanded &&
				<img class="preview" src={props.image}></img>
			}
		</div>
	</div>
	);
}

export default ResultItem;
