import s from "./App.module.css";
import Profile from '../Profile/Profile'
import FriendList from "../FriendList/FriendList";
import userData from '../../assets/userData.json';
import friends from '../../assets/friends.json'

console.log(s);
const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
