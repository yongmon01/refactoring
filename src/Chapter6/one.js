function printOwing(invoce) {
  let outstanding = 0;

  console.log("***************");
  console.log("***고객 채무***");
  console.log("***************");

  for (const o of invoce.orders) {
    outstanding += o.amount;
  }

  const today = Clock.today;
  invoce.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDueDate() + 30
  );

  console.log(`고객명: ${invoce.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoce.dueDate.toLocaleDateString()}`);
}
