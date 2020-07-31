class Model {
  milliseconds: number;
  hour: number;
  minute: number;
  seconds: number;
  endUnit: string;

  constructor(milliseconds: number) {
    this.milliseconds = milliseconds;
    this.hour = milliseconds / 3600;
    this.minute = (milliseconds % 3600) / 60;
    this.seconds = (milliseconds % 3600) % 60;
    this.endUnit = this.hour !== 0 ? 'Hour' : this.minute !== 0 ? 'Min' : this.seconds !== 1 ? 'Seconds' : 'Second';
  }

  default() {
    return this.endUnit;
  }
}

const model = (number: number): any => {
  let model2 = new Model(number);
  return model2;
};

console.log(model(23));
