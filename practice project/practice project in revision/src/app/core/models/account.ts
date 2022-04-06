export interface IAccount {
    userName: string;
    bankName: string;
    accountNumber : Number;
    balance: number;
    deposit?: number;
    withdraw?: number;
    totalAmount: () => void;
  }
  