import "./style.scss";
export const Spinner = ({ text = "", size = "5em" }) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className="spinner" data-testid="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
};
