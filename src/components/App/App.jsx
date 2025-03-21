import s from "./App.module.css";
import Profile from '../Profile/Profile'
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from '../../assets/userData.json';
import friends from '../../assets/friends.json'
import transactions from '../../assets/transactions.json'


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
      <TransactionHistory items={transactions}/>
    </>
  );
};

export default App;
