# RangeSlider



### Code Examples

#### Components Slider RangeSlider All

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  const min = 0;
  const max = 10;
  const stepSize = 0.1;
  const labelStepSize = 1;
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
    onChange,
    defaultValue: [2, 4],
  };

  return <RangeSlider className="my-8" {...options} />;
}
```


#### Components Slider RangeSlider Custom Labels

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (value) => {
    setValue(value);
  };

  const labelRenderer = (value) => {
    return `${value}%`;
  };

  return (
    <RangeSlider
      min={1}
      max={10}
      value={value}
      stepSize={0.1}
      labelStepSize={1}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className="my-8"
    />
  );
}
```


#### Components Slider RangeSlider Disabled

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  return (
    <RangeSlider
      className="my-8"
      label="Disabled Slider"
      disabled={true}
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={[2, 4]}
    />
  );
}
```


#### Components Slider RangeSlider Types Controlled Slider

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <RangeSlider
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


#### Components Slider RangeSlider Types Uncontrolled Slider

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Uncontrolled Slider"
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="my-8"
    />
  );
}
```


#### Components Slider RangeSlider Variants Discrete Slider

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Discrete Slider"
      stepSize={1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="my-8"
    />
  );
}
```


#### Components Slider RangeSlider Variants Free Slider

```jsx
import { RangeSlider } from '@innovaccer/design-system';

() => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Free Slider"
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="my-8"
    />
  );
}
```