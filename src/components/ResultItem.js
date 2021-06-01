import '../App.css';

function ResultItem(props) {

	let ratingsBarWidth = props.rating / 5 * 300

	return (
	<div className="resultItem">
		<div className="count">{props.index}</div>

		<div>
	    	<div className="itemHeader wrap-stack">
	    		<div className="title">{props.name}</div>
	    	</div>
	    	<div className="address">{props.address}</div>
	    	<div className="detailsContainer">
	    		<div className="price">$$$</div>
		    	<div className="categories">Coffee & Tea</div>
		    	
			</div>
			<div className="ratingsContainer">
		    	<div className="rating">{props.rating}</div>
				<div className="ratingsBar" style={{width: ratingsBarWidth + "px"}}></div>
			</div>
		</div>
	</div>
	);
}

export default ResultItem;
