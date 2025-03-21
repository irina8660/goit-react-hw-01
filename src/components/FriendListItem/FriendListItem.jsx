import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <img
                src={avatar}
                alt="Avatar"
                width="48"
                className={s.friend__avatar}
            />
            <p className={s.friend__name}>{name}</p>
            <p className={clsx(
                s.friend__status,
                isOnline ? s.friend__status_online : s.friend__status_offline
            )}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </>);
};

export default FriendListItem;