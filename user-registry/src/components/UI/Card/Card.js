import "./Card.css";

const Card = (props) => {
  return <div className="card cardStyle">{props.children}</div>;
};

export default Card;
