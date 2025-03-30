import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, avatar, name, isOnline = false }) => (
        <li key={id} className={s.listItem}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
