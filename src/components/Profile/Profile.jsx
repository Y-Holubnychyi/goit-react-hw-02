import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={s.container}>
      <div>
        <img className={s.profileImg} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tagText}>@{tag}</p>
        <p className={s.locationText}>{location}</p>
      </div>

      <ul className={s.infoList}>
        <li className={s.infoListItem}>
          <span className={s.infoListItemTitle}>Followers</span>
          <span className={s.infoListItemData}>{followers}</span>
        </li>
        <li className={s.infoListItem}>
          <span className={s.infoListItemTitle}>Views</span>
          <span className={s.infoListItemData}>{views}</span>
        </li>
        <li className={s.infoListItem}>
          <span className={s.infoListItemTitle}>Likes</span>
          <span className={s.infoListItemData}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
