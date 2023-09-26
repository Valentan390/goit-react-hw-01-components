import styles from './Statistics.module.css';

const ItemData = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statlist}>
        {stats.map(stat => {
          return (
            <ItemData
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

// export default Statistics;
