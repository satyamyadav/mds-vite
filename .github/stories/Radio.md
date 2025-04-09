# Radio

Radio button lets users select one value from a list of mutually exclusive choices.

### Code Examples

#### Components Radio All

```jsx
import { Radio } from '@innovaccer/design-system';

() => {
  const label = 'Radio';

  const name = 'gender';

  const onChangeHandler = (event) => {
    return action(`onChange: ${event.target.value}: ${event.target.checked}`)();
  };

  return <Radio label={label} name={name} value={label} onChange={onChangeHandler} />;
}
```


#### Components Radio RadioGroup Controlled

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const label = 'Days';
  const alignmentHorizontal = 'horizontal';
  const days = [
    { label: 'Mon', name: 'days', value: 'mon' },
    { label: 'Tue', name: 'days', value: 'tue' },
    { label: 'Wed', name: 'days', value: 'wed' },
    { label: 'Thu', name: 'days', value: 'thu' },
    { label: 'Fri', name: 'days', value: 'fri' },
    { label: 'Sat', name: 'days', value: 'sat' },
    { label: 'Sun', name: 'days', value: 'sun' },
  ];

  return (
    <>
      <ChoiceList
        selected={['mon', 'wed', 'sat']}
        choices={days}
        title={label}
        alignment={alignmentHorizontal}
        onChange={() => {}}
      />
    </>
  );
}
```


#### Components Radio RadioGroup Horizontal

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  return (
    <ChoiceList
      alignment="horizontal"
      choices={[
        { label: 'Male', name: 'gender', value: 'Male' },
        { label: 'Female', name: 'gender', value: 'Female' },
        { label: 'Other', name: 'gender', value: 'Other' },
      ]}
      title="Gender"
    />
  );
}
```


#### Components Radio RadioGroup Vertical

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  return (
    <ChoiceList
      choices={[
        { label: 'Male', name: 'gender', value: 'Male' },
        { label: 'Female', name: 'gender', value: 'Female' },
        { label: 'Other', name: 'gender', value: 'Other' },
      ]}
      title="Gender"
    />
  );
}
```


#### Components Radio Variants Error

```jsx
import { Radio } from '@innovaccer/design-system';

() => <Radio label={'Error label'} name={'Radio'} value={'Radio'} error={true} />
```


#### Components Radio Variants Size

```jsx
import { Radio } from '@innovaccer/design-system';

() => {
  const sizes = ['tiny', 'regular'];

  const name = 'gender';
  return (
    <div className="d-flex w-25 justify-content-between">
      {sizes.map((RadioSize, ind) => {
        return (
          <Radio
            key={ind}
            size={RadioSize}
            label={RadioSize.charAt(0).toUpperCase() + RadioSize.slice(1)}
            name={name}
            value={RadioSize}
          />
        );
      })}
    </div>
  );
}
```


#### Components Radio Variants State

```jsx
import { Radio } from '@innovaccer/design-system';

() => {
  const name = 'state';

  return (
    <div className="d-flex w-25 justify-content-between">
      <Radio label={'Disabled'} name={name} value={'Disabled'} disabled={true} />
      <Radio label={'Enabled'} name={name} value={'Enabled'} disabled={false} />
    </div>
  );
}
```


#### Components Radio Default Checked

```jsx
import { Radio } from '@innovaccer/design-system';

() => (
  <Radio defaultChecked={true} label={'Survey Outreach'} name={'Radio'} value={'Radio'} />
)
```


#### Components Radio Overflow Content

```jsx
import { Radio } from '@innovaccer/design-system';

() => (
  <Radio
    className="w-25"
    label="Share both your healthcare data and some personal information."
    name="options"
    value="Option 1"
  />
)
```


#### Components Radio With Help Text

```jsx
import { Radio } from '@innovaccer/design-system';

() => {
  return (
    <Radio
      label={'Share all your data'}
      value={'accepted'}
      name={'consent'}
      helpText={'This app will have access to both your healthcare data and some personal information.'}
      className="w-50"
    />
  );
}
```