let defaultOwner = { firstName: "martin", lastName: "fouler" };
export function getDefaultOwner() {
  // 게터가 데이터의 복제본을 반환하도록
  return Object.assign({}, defaultOwner);
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 참조하는 코드
spaceship.owner = getDefaultOwner();
// 갱신하는 코드
setDefaultOwner({ firstName: "lebeca", lastName: "parsons" });
