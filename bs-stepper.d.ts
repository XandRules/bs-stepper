declare type StepperOptions = {
  linear: boolean,
};

declare class Stepper {
  constructor(element: Element, _options?: StepperOptions);
  next(): void;
  previous(): void;
  destroy(): void;
}

export default Stepper;