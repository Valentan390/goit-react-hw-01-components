import styles from './FriendList.module.css';

const FriendListItem = ({ srcImage, altImage, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.statusactiv : styles.statusinactive}
      ></span>
      <img className="avatar" src={srcImage} alt={altImage} width="128" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendlist}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            srcImage={friend.avatar}
            altImage={friend.name}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};
