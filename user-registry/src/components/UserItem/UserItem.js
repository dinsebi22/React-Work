import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div>
      <h5>
        {props.user.username}
        {"  -  "}
        {props.user.age + " Years Old"}
      </h5>
    </div>
  );
};

export default UserItem;
