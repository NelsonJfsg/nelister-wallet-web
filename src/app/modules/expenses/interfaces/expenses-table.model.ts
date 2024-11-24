export interface Expenses {
  id:                number;
  title:             string;
  description:       string;
  expenseDate:       Date;
  amount:            number;
  categoryId:        CategoryID | null;
  financialEntityId: FinancialEntityID | null;
}

export interface CategoryID {
  id:          number;
  title:       string;
  description: string;
}

export interface FinancialEntityID {
  id:            number;
  title:         string;
  description:   string;
  type:          number;
  statementDate: Date | null;
  dueDate:       Date | null;
}
