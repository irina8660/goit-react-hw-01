import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
    <table className={s.transaction__table}>
        <thead className={s.transaction__table_head}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody className={s.transaction__table_body}>
            {items.map((item) => (
                <tr key={item.id}>
                    <td className={s.transaction__table_row}>{item.type}</td>
                    <td className={s.transaction__table_row}>{item.amount}</td>
                    <td className={s.transaction__table_row}>{item.currency}</td>
                </tr>
            ))}
    </tbody>
</table>
)
};

export default TransactionHistory;