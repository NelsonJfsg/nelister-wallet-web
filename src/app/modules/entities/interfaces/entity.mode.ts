export interface Entity {
  id : number;
  title : string;
  description : string;
  entity : number;
  type ?: number; // in case entity is card
  statementDate  ?: Date; // in case entity is card
  dueDate ?: Date; // in case entity is card
}