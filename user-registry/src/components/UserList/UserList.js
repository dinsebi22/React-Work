import Card from "../UI/Card/Card";
import UserItem from "../UserItem/UserItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <Card key={user.userId}>
          <UserItem key={user.userId} user={user}></UserItem>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
