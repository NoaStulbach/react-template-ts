export interface Expense {
    id: string;
    merchant: string;
    amount: number;
    description: string;
    date: Date;
    category: string;
    status: string;
}

export async function getExpenses(username: string): Promise<Expense[] | undefined> {
  try {
    const response = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
      headers: {
        "Content-Type": "application/json",
        Username: username,
      },
    });
    const data = await response.json() as Expense[];
    return data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return undefined;
  }
}
