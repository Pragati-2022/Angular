function MenuItem(itemID : string){
    return (target : Function) => {
        target.prototype.id = itemID;        
    }
}

@MenuItem("abc")
class Pizza {
    id: string;
}

@MenuItem("xyz")
class Burger {
    id: string;
}

console.log(new Pizza().id);
