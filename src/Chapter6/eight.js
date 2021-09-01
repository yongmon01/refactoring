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

function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(
  station,
  opertaingPlan.temperatureFloor,
  opertaingPlan.temperatureCeiling
);
