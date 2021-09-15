class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

let highPriorityCount = orders.filter(
  (o) => o.priority === "high" || o.priority === "rush"
).length;
