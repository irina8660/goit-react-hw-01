import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';
import clsx from 'clsx';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friend__list}>
            {friends.map(friend => (
                <li key={friend.id} className={s.friend}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;