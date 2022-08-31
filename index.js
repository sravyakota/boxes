const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <p className={className}>{name}</p>;
};

const element = (
  <div className="boxesName">
    <h1 className="heading">Boxes</h1>
    <div className="boxesContainer">
      <Box className="box1" name="Small" />
      <Box className="box2" name="Medium" />
      <Box className="box3" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
