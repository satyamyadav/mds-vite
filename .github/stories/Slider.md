# Slider

A slider lets user select a value (or range) from a given range of values.

### Code Examples

#### Components Slider Slider All

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  const min = 0;
  const max = 10;
  const stepSize = 0.1;
  const labelStepSize = 1;
  const defaultValue = 4;
  const label = 'Slider Label';
  const disabled = false;

  const onChange = (value) => {
    return action(`new value: ${value}`);
  };

  const options = {
    min,
    max,
    stepSize,
    labelStepSize,
    label,
    disabled,
    defaultValue,
    onChange,
  };

  return <Slider key={defaultValue} className="my-8" {...options} />;
}
```


#### Components Slider Slider Custom Labels

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(4);

  const onChange = (value) => {
    setValue(value);
  };

  const labelRenderer = (value) => {
    return `${value}%`;
  };

  return (
    <Slider
      min={1}
      max={10}
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className='my-8'
    />
  );
}
```


#### Components Slider Slider Disabled

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  return (
    <Slider
      className="my-8"
      label="Disabled Slider"
      disabled={true}
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={4}
    />
  );
}
```


#### Components Slider Slider Types Controlled Slider

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(4);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <Slider
      min={1}
      max={10}
      label='Controlled Slider'
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      className="my-8"
    />
  );
}
```


#### Components Slider Slider Types Uncontrolled Slider

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  return (
    <Slider
      min={1}
      max={10}
      label="Uncontrolled Slider"
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={4}
      className="my-8"
    />
  );
}
```


#### Components Slider Slider Variants Discrete Slider

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  return (
    <Slider min={1} max={10} label="Discrete Slider" stepSize={1} labelStepSize={1} defaultValue={4} className="my-8" />
  );
}
```


#### Components Slider Slider Variants Free Slider

```jsx
import { Slider } from '@innovaccer/design-system';

() => {
  return (
    <Slider min={1} max={10} label="Free Slider" stepSize={0.1} labelStepSize={1} defaultValue={4} className="my-8" />
  );
}
```