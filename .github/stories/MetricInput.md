# MetricInput



### Code Examples

#### Input

```jsx
import { MetricInput } from '@innovaccer/design-system';

() => {
  const size = 'regular';

  const placeholder = 'Placeholder';

  const disabled = false;

  const readOnly = false;

  const icon = '';

  const prefix = '';

  const suffix = '';

  const error = false;

  return (
    <div className="w-25">
      <MetricInput
        name="input"
        disabled={disabled}
        readOnly={readOnly}
        onChange={action('on-change')}
        onClick={action('on-click')}
        placeholder={placeholder}
        aria-label="Metric input example"
        prefix={prefix}
        suffix={suffix}
        size={size}
        icon={icon}
        error={error}
      />
    </div>
  );
}
```


#### Input

```jsx
import { Row, Column, MetricInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(10);

  return (
    <Row>
      <Column size={1}>
        <MetricInput
          aria-label="Metric Input Label"
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
        />
      </Column>
    </Row>
  );
}
```


#### Input

```jsx
import { Row, Label, Column, MetricInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(15);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">  No. of Days </Label>
      <Column size={1}>
        <MetricInput
          id="metric-input"
          name="metric-input"
          size="regular"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
        </Column>
    </Row>
  );
}
```


#### Input

```jsx
import { Row, Label, Column, MetricInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(2000);

  const onKeyDownHandler = (e) => {
    if (/[.]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const isInteger = (val) => {
    return val - Math.floor(val) === 0 ? true : false;
  };

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        Year
      </Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          value={isInteger(value) ? value : 0}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDownHandler}
        />
      </Column>
    </Row>
  );
}
```


#### Input

```jsx
import { Row, Column, MetricInput, Text } from '@innovaccer/design-system';

() => (
  <Row>
    <Column size={2} className="d-flex">
      <div className="flex-column align-items-center mr-8">
        <MetricInput aria-label="Metric input regular size" size="regular" className="mb-3" />
        <Text>Regular</Text>
      </div>
      <div className="flex-column align-items-center">
        <MetricInput aria-label="Metric input large size" size="large" className="mb-3" />
        <Text>Large</Text>
      </div>
    </Column>
  </Row>
)
```


#### Input

```jsx
import { Row, Label, Column, MetricInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(625);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">Cost</Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          prefix="USD"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </Column>
    </Row>
  );
}
```


#### Input

```jsx
import { Row, Label, Column, MetricInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(65);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">Body Height</Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          suffix="in"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </Column>
    </Row>
  );
}
```