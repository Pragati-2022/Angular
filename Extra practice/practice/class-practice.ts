interface IAccount {
	name: string;
	balance: number;
	status?: string;
	deposite?: () => void;
}

const accountsI : IAccount = {
	name: "pragati",
	balance: 10,
};

class InvestmentAccount implements IAccount {
    constructor(
        public name: string , public balance: number
    ){

    }
	private widraw(){

	}
}

class Person {
    firstName : number;
}

interface IEmployee extends Person { 
    empCode: number;
}

let emp: IEmployee = { empCode  : 1, firstName:"James Bond" }