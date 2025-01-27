const userData: Record<string, {data: object; monthlyData: object[], savingGoals: object[], transactions: object[]}> = {
    'morleyc@gmail.com': {
      data:
        { totalBalance: 30700, totalSavings: 19300, totalExpense: 900 },
      monthlyData: [
        { month: 'Jan', saving: 0, expense: 0, cumulativeSaving: 0 },
        { month: 'Feb', saving: 500, expense: 700, cumulativeSaving: 500 },
        { month: 'Mar', saving: 600, expense: 600, cumulativeSaving: 1100 },
        { month: 'Apr', saving: 1400, expense: 750, cumulativeSaving: 2500 },
        { month: 'May', saving: 1500, expense: 650, cumulativeSaving: 4000 },
        { month: 'Jun', saving: 1600, expense: 500, cumulativeSaving: 5600 },
        { month: 'Jul', saving: 1500, expense: 550, cumulativeSaving: 7100 },
        { month: 'Aug', saving: 1900, expense: 700, cumulativeSaving: 9000 },
        { month: 'Sep', saving: 2000, expense: 600, cumulativeSaving: 11000 },
        { month: 'Oct', saving: 2400, expense: 650, cumulativeSaving: 13400 },
        { month: 'Nov', saving: 2800, expense: 800, cumulativeSaving: 16200 },
        { month: 'Dec', saving: 3100, expense: 900, cumulativeSaving: 19300 },
      ],
      savingGoals: [
        { name: 'Car', percent: 100, fill: '#8884d8' },
        { name: 'House', percent: 75, fill: '#83a6ed' },
        { name: 'Phone', percent: 50, fill: '#8dd1e1' },
        { name: 'Accessories', percent: 25, fill: '#82ca9d' },
      ],
      transactions: [
        { date: '2024-03-30', type: 'Salary', amount: 3200, isIncome: true },
        { date: '2024-03-30', type: 'Groceries', amount: 250, isIncome: false },
        { date: '2024-03-28', type: 'Freelance', amount: 650, isIncome: true },
        { date: '2024-03-25', type: 'Rent', amount: 1300, isIncome: false },
        { date: '2024-03-24', type: 'Utilities', amount: 180, isIncome: false },
        { date: '2024-03-22', type: 'Freelance', amount: 550, isIncome: true },
        { date: '2024-03-20', type: 'Groceries', amount: 300, isIncome: false },
        { date: '2024-03-18', type: 'Salary', amount: 3000, isIncome: true },
        { date: '2024-03-15', type: 'Entertainment', amount: 120, isIncome: false },
        { date: '2024-03-12', type: 'Bonus', amount: 600, isIncome: true },
        { date: '2024-03-10', type: 'Medical', amount: 250, isIncome: false },
        { date: '2024-03-05', type: 'Groceries', amount: 180, isIncome: false },
      ],
    },
    'contact.kinocencio@gmail.com': {
      data: 
        { totalBalance: 42450, totalSavings: 25000, totalExpense: 1200 },
      monthlyData: [
        { month: 'Jan', saving: 100, expense: 50, cumulativeSaving: 100 },
        { month: 'Feb', saving: 600, expense: 300, cumulativeSaving: 700 },
        { month: 'Mar', saving: 800, expense: 200, cumulativeSaving: 1500 },
        { month: 'Apr', saving: 1300, expense: 400, cumulativeSaving: 2800 },
        { month: 'May', saving: 1800, expense: 500, cumulativeSaving: 4600 },
        { month: 'Jun', saving: 2000, expense: 700, cumulativeSaving: 6600 },
        { month: 'Jul', saving: 2400, expense: 800, cumulativeSaving: 9000 },
        { month: 'Aug', saving: 2500, expense: 1000, cumulativeSaving: 11500 },
        { month: 'Sep', saving: 2900, expense: 900, cumulativeSaving: 14400 },
        { month: 'Oct', saving: 3100, expense: 1100, cumulativeSaving: 17500 },
        { month: 'Nov', saving: 3500, expense: 1000, cumulativeSaving: 21000 },
        { month: 'Dec', saving: 4000, expense: 1200, cumulativeSaving: 25000 },
      ],
      savingGoals: [
        { name: 'Vacation', percent: 10, fill: '#ffc658' },
        { name: 'Emergency Fund', percent: 30, fill: '#d0ed57' },
        { name: 'Education', percent: 50, fill: '#a4de6c' },
        { name: 'Laptop', percent: 100, fill: '#82ca9d' },
      ],
      transactions: [
        { date: '2024-03-30', type: 'Salary', amount: 3000, isIncome: true },
        { date: '2024-03-30', type: 'Groceries', amount: 200, isIncome: false },
        { date: '2024-03-25', type: 'Rent', amount: 1200, isIncome: false },
        { date: '2024-03-24', type: 'Utilities', amount: 150, isIncome: false },
        { date: '2024-03-22', type: 'Freelance', amount: 500, isIncome: true },
        { date: '2024-03-15', type: 'Entertainment', amount: 100, isIncome: false },
        { date: '2024-03-10', type: 'Bonus', amount: 500, isIncome: true },
        { date: '2024-03-01', type: 'Groceries', amount: 220, isIncome: false },
      ],
    },
  };

export default userData