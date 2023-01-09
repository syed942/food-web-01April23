import "./Styles.css";
import Row from "./Row";

export default function SkeletonUser() {
  const numberOfRows = 5;

  const renderedRows = [...Array(numberOfRows)].map((e, i) => (
    <div>
      <Row />
    </div>
  ));

  return (
    <div className="App">
      {" "}
      <div className="row">
        <p>column 1</p>
        <p>column 2</p>
        <p>column 3</p>
        <p>column 4</p>
        <p>column 5</p>
      </div>
      {renderedRows}
    </div>
  );
}
