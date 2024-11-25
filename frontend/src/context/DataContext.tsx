import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

interface Data {
  data: { totalBalance: number; totalSavings: number; totalExpense: number};
  monthlyData: { month: string; saving: number; expense: number; cumulativeSaving: number }[];
  savingGoals: { name: string; percent: number; fill: string }[];
  transactions: { date: string; type: string; amount: number; isIncome: boolean }[];
}

interface DataContextProps {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        if (!email) {
          console.error('No email found in localStorage');
          return;
        }

        const response = await axios.get(`http://localhost:4000/api/data/${email}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [localStorage.getItem('userEmail')]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
