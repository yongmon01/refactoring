let defaultOwner = { firstName: "martin", lastName: "fouler" };
export function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 참조하는 코드
spaceship.owner = getDefaultOwner();
// 갱신하는 코드
setDefaultOwner({ firstName: "lebeca", lastName: "parsons" });
