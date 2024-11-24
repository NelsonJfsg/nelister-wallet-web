export interface Expense {
  id: number;
  title: string;
  description: string;
  expenseDate: Date;
  categoryId: number;
  financialEntityId: number;
  amount: number;
}