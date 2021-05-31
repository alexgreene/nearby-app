import '../App.css';

function ResultItem(props) {
  return (
    <div className="ResultItem">
    	<strong>{props.name}</strong>
    	<i>{props.address}</i>
    	{props.rating}
	</div>
  );
}

export default ResultItem;
