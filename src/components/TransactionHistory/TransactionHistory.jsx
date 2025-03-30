import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.headTable}>
          <th className={s.headTableItem}>Type</th>
          <th className={s.headTableItem}>Amount</th>
          <th className={s.headTableItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={s.bodyTableItem}>{item.type}</td>
              <td className={s.bodyTableItem}>{item.amount}</td>
              <td className={s.bodyTableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
