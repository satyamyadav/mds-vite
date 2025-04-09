# ChoiceList



### Code Examples

#### Components ChoiceList All

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const label = 'Gender';
  const gender = [
    { label: 'Male', name: 'gender', value: 'Male' },
    { label: 'Female', name: 'gender', value: 'Female' },
    { label: 'Other', name: 'gender', value: 'Other' },
  ];

  return <ChoiceList choices={gender} title={label} onChange={() => {}} />;
}
```


#### Components ChoiceList Alignment

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const label = 'Gender';
  const alignmentHorizontal = 'horizontal';
  const gender = [
    { label: 'Male', name: 'gender', value: 'Male' },
    { label: 'Female', name: 'gender', value: 'Female' },
    { label: 'Other', name: 'gender', value: 'Other' },
  ];
  const alignmentVertical = 'vertical';
  const allGender = [
    { label: 'Male', name: 'allGender', value: 'Male' },
    { label: 'Female', name: 'allGender', value: 'Female' },
    { label: 'Other', name: 'allGender', value: 'Other' },
  ];

  return (
    <>
      <ChoiceList choices={gender} title={label} alignment={alignmentHorizontal} onChange={() => {}} />
      <div className="mt-8">
        <ChoiceList choices={allGender} title={label} alignment={alignmentVertical} onChange={() => {}} />
      </div>
    </>
  );
}
```


#### Components ChoiceList Allow Multiple

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const label = 'Days';
  const alignment = 'horizontal';
  const days = [
    { label: 'Mon', name: 'days', value: 'mon' },
    { label: 'Tue', name: 'days', value: 'tue' },
    { label: 'Wed', name: 'days', value: 'wed' },
    { label: 'Thu', name: 'days', value: 'thu' },
    { label: 'Fri', name: 'days', value: 'fri' },
    { label: 'Sat', name: 'days', value: 'sat' },
    { label: 'Sun', name: 'days', value: 'sun' },
  ];

  return <ChoiceList choices={days} title={label} alignment={alignment} allowMultiple={true} onChange={() => {}} />;
}
```


#### Components ChoiceList Controlled

```jsx
import { ChoiceList } from '@innovaccer/design-system';

() => {
  const label = 'Gender';
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
        allowMultiple={true}
        title={label}
        alignment={alignmentHorizontal}
        onChange={() => {}}
      />
    </>
  );
}
```