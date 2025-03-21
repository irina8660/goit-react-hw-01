import s from "./Profile.module.css";
import clsx from 'clsx';


const Profile = ({ username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png", stats:{ followers, views, likes } }) => {
    return (
<div className={s.profile}>
    <div className={s.profile__info}>
        <img
            src={avatar}
            alt="User avatar"
            className={s.profile__avatar}
        />
        <p className={s.profile__username}>{username}</p>
        <p className={s.profile__tag}>@{tag}</p>
        <p className={s.profile__location}>{location}</p>
    </div>

    <ul className={s.profile__stats}>
        <li className={s.profile__stats_item}>
            <span className={s.profile__stats_title}>Followers</span>
            <span className={s.profile__stats_value}>{followers}</span>
        </li>
        <li className={s.profile__stats_item}>
            <span className={s.profile__stats_title}>Views</span>
            <span className={s.profile__stats_value}>{views}</span>
        </li>
        <li className={s.profile__stats_item}>
            <span className={s.profile__stats_title}>Likes</span>
            <span className={s.profile__stats_value}>{likes}</span>
        </li>
    </ul>
</div>
    );
};
export default Profile;