class Queue<T> {
	private data = [];

	add(item: T) {
		this.data.push(item);
	}
	remove() {
		this.data.shift();
	}
}

const nameQueue = new Queue<string>();
nameQueue.add("pragati;");
nameQueue.add("janki");

console.log(nameQueue);

const numberQueue = new Queue<number>();
numberQueue.add(1);
numberQueue.add(2);

console.log(numberQueue);
