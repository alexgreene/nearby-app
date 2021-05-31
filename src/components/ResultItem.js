import '../App.css';

function ResultItem(props) {
  return (
    <div className="resultItem">
    	<div className="count">{props.index}</div>
    	<div className="title">{props.name}</div>
    	<div className="address">{props.address}</div>
	</div>
  );
}

export default ResultItem;
