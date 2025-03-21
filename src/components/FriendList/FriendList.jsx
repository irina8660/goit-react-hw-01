import s from './FriendList.module.css';
import clsx from 'clsx';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friend__list}>
            {friends.map(friend => (
                <li key={friend.id} className={s.friend}>
                    <img 
                        src={friend.avatar} 
                        alt="Avatar" 
                        width="48" 
                        className={s.friend__avatar} 
                    />
                    <p className={s.friend__name}>{friend.name}</p>
                    <p className={clsx(
                        s.friend__status,
                        friend.isOnline ? s.friend__status_online : s.friend__status_offline
                    )}>
                        {friend.isOnline ? "Online" : "Offline"}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default FriendList;