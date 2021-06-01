import '../App.css';

function ErrorMessage(props) {

  return (
    <div className="errorMessage">Sorry! {props.msg}</div>
  );
}

export default ErrorMessage;