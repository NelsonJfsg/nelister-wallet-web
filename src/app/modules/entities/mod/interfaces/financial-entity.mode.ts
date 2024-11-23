import { FinancialType } from "./financial-type.model";

export interface FinancialEntity {

  id : number;
  title : string;
  description : string;
  financialType : FinancialType;
  type : number;
  statementDate : Date;
  dueDate : Date;

}