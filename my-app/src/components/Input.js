import "./Input.css";

const Input = ({ text, result }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1 className="result_area">{result}</h1>
      </div>

      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
