interface IAccount {
	name: string;
	balance: number;
	status?: string;
	deposite?: () => void;
	// deposite1?():void;

}

const accounts: IAccount = {
	name: "pragati",
	balance: 10,
};
console.log(accounts);

let account1: IAccount[];


