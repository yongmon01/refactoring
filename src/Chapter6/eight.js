const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: 1 },
    { temp: 53, time: 2 },
    { temp: 58, time: 3 },
    { temp: 53, time: 4 },
    { temp: 51, time: 5 },
  ],
};

function readingsOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
}

const range = new NumberRange(
  opertaingPlan.temperatureFloor,
  opertaingPlan.temperatureCeiling
);

alerts = readingsOutsideRange(station, range);

class NumberRange {
  constructor(min, max) {
    this._data = { min: min, max: max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}
