function printOwing(invoce) {
  printBanner();

  const outstanding = calculateOutstanding(invoce);

  recordDueDate(invoce);
  printDetails(invoce, outstanding);

  function printBanner() {
    console.log("***************");
    console.log("***고객 채무***");
    console.log("***************");
  }
}

function printDetails(invoce, outstanding) {
  console.log(`고객명: ${invoce.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoce.dueDate.toLocaleDateString()}`);
}

// invoce의 필드값을 수정할수있다
function recordDueDate(invoce) {
  const today = Clock.today;
  invoce.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDueDate() + 30
  );
}

function calculateOutstanding(invoce) {
  let result = 0;
  for (const o of invoce.orders) {
    result += o.amount;
  }
  return result;
}
