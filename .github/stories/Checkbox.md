# Checkbox

Checkbox lets users select one or more values.

### Code Examples

#### Components Checkbox All

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => {
  const size = 'regular';

  const label = 'Checkbox';

  const [checked, setChecked] = React.useState(false);

  const [indeterminate, setIndeterminate] = React.useState(false);

  const disabled = false;

  const onChangeHandler = (event) => {
    setChecked(!checked);
    setIndeterminate(!indeterminate);
    return action(`onChange: ${event.target.checked}`)();
  };

  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      size={size}
      label={label}
      onChange={onChangeHandler}
    />
  );
}
```


#### Checkbox

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const labelHorizontal = 'Horizontal Alignment';
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
    <ChoiceList
      choices={days}
      selected={['mon', 'tue']}
      allowMultiple={true}
      title={labelHorizontal}
      alignment={alignmentHorizontal}
      onChange={() => {}}
    />
  );
}
```


#### Components Checkbox Checkbox Group Nested

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => {
  const labels = ['Diabetes Eye Exam', 'HbA1c Test in last 12 months', 'Falls Risk Assessment'];

  const childArray = [true, true, false];

  const [checked, setChecked] = React.useState(childArray);
  const [parentStatus, setParentStatus] = React.useState({ checked: false, indeterminate: true });

  const handleParentChange = (event) => {
    const updatedArray = [...childArray].fill(event.target.checked);
    setChecked(updatedArray);
    setParentStatus({ checked: event.target.checked, indeterminate: event.target.indeterminate });
  };

  const handleChildChange = (event, index) => {
    const updateCheck = [...checked];
    updateCheck[index] = event.target.checked;
    const totalCount = labels.length;
    const countT = updateCheck.filter(Boolean).length;
    const status = countT < totalCount;
    const obj = (countT > 0) ? { checked: !status, indeterminate: status } : { checked: !status, indeterminate: false };
    setChecked(updateCheck);
    setParentStatus(obj);
  };

  return (
    <div>
      <Checkbox
        checked={parentStatus.checked}
        indeterminate={parentStatus.indeterminate}
        label={'Measures'}
        onChange={handleParentChange}
        value={'Measures'}
      />
      <div className="d-flex flex-column pl-7">
        {
          labels.map((label, ind) => {
            return (
              <Checkbox
                key={`checkbox-${ind}`}
                label={label}
                checked={checked[ind]}
                value={label}
                onChange={c => handleChildChange(c, ind)}
                className='mt-3'
              />
            );
          })
        }
      </div>
    </div>
  );
}
```


#### Checkbox

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const labelVertical = 'Vertical Alignment';
  const alignmentVertical = 'vertical';
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
    <ChoiceList
      choices={days}
      selected={['mon', 'tue']}
      allowMultiple={true}
      title={labelVertical}
      alignment={alignmentVertical}
      onChange={() => {}}
    />
  );
}
```


#### Checkbox

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => <Checkbox label="Emergency contact" defaultChecked={true} />
```


#### Checkbox

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => (
  <Checkbox className="w-25" label="Patient with impaired physical mobility and care deficits." />
)
```


#### Components Checkbox Variants Controlled Checkbox

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    const updatedChecked = event.target.checked;
    setChecked(updatedChecked);
  };

  return (
      <Checkbox
        checked={checked}
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
  );
}
```


#### Checkbox

```jsx
import { Label, Checkbox } from '@innovaccer/design-system';

() => {
  const label = 'Checkbox';
  return (
    <div className="d-flex">
      <div className="mr-7">
        <Label withInput={true}>Checked</Label>
        <Checkbox checked={true} disabled={true} label={label} />
      </div>
      <div className="mr-7">
        <Label withInput={true}>Unchecked</Label>
        <Checkbox checked={false} disabled={true} label={label} />
      </div>
      <div>
        <Label withInput={true}>Indeterminate</Label>
        <Checkbox indeterminate={true} disabled={true} label={label} />
      </div>
    </div>
  );
}
```


#### Checkbox

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => {
  const size = 'regular';

  const label = 'Checkbox';

  const [checked, setChecked] = React.useState(false);

  const [indeterminate, setIndeterminate] = React.useState(false);

  const disabled = false;

  const onChangeHandler = (event) => {
    setChecked(!checked);
    setIndeterminate(!indeterminate);
    return action(`onChange: ${event.target.checked}`)();
  };

  return (
    <Checkbox
      error={true}
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      size={size}
      label={label}
      onChange={onChangeHandler}
    />
  );
}
```


#### Checkbox

```jsx
import { Label, Checkbox } from '@innovaccer/design-system';

() => {
  const sizes = ['tiny', 'regular'];
  const label = 'Checkbox';
  return (
    <div className="d-flex">
      {sizes.map((CheckboxSize, ind) => {
        return (
          <div key={ind} className="mr-7">
            <Label withInput={true}>{CheckboxSize.charAt(0).toUpperCase() + CheckboxSize.slice(1)}</Label>
            <Checkbox disabled={false} size={CheckboxSize} label={label} />
          </div>
        );
      })}
    </div>
  );
}
```


#### Components Checkbox With Help Text

```jsx
import { Checkbox } from '@innovaccer/design-system';

() => {
  return (
    <Checkbox
      label={'Guardian'}
      helpText={'A member legally responsible for the care of the patient.'}
      className="w-50"
    />
  );
}
```