function circumference(radius) {
  return 2 * Math.PI * radius;
}

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT"].includes(aCustomer.address.state);
}

const newEnglanders = somCuostemers.filter((c) => inNewEngland(c));
