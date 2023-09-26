import styles from './Profile.module.css';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt={username} className={styles.avatar} />
          <p className={styles.username}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.list}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={styles.list}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={styles.list}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
