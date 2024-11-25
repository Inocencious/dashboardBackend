import { useData } from "../context/DataContext";

const TransactionHistory = () => {
  const { data } = useData();
  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <table className="w-full h-full table-auto">
      <thead className="text-left text-black/50">
        <tr>
          <th className="py-4 pb-8">Date</th>
          <th className="py-4 pb-8">Type</th>
          <th className="py-4 pb-8 text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        {data?.transactions.length > 0 ? (
          data?.transactions.map((transaction, index) => (
            <tr key={index} className="border-b-2">
              <td className="font-medium py-2">
                <p className="text-black/50 text-sm">{transaction.date}</p>
              </td>
              <td className="font-medium py-2">{transaction.type}</td>
              <td
                className={`font-medium text-right py-2 align-bottom ${
                  transaction.isIncome ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.amount}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="text-center py-4">
              No transactions found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
