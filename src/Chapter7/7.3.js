class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

let highPriorityCount = orders.filter(
  (o) => o.priorityString === "high" || o.priorityString === "rush"
).length;
