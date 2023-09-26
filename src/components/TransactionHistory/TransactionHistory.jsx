import styles from './TransactionHistory.module.css';

const TransactionHistoryTbody = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.styledtabletd}>{type}</td>
      <td className={styles.styledtabletd}>{amount}</td>
      <td className={styles.styledtabletd}>{currency}</td>
    </tr>
  );
};

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionhistory}>
      <thead className={styles.styledtable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          item.amount = Number(item.amount);
          return (
            <TransactionHistoryTbody
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
