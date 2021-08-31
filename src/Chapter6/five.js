function circumference(radius) {
  return 2 * Math.PI * radius;
}

function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT"].includes(stateCode);
}

const newEnglanders = somCuostemers.filter((c) =>
  inNewEngland(c.address.state)
);
