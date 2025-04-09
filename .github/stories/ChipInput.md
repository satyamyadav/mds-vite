# ChipInput



### Code Examples

#### Components Input ChipInput All

```jsx
import { ChipInput } from '@innovaccer/design-system';

() => {
  const allowDuplicates = false;
  const placeholder = 'Add value';
  const disabled = false;

  return (
    <ChipInput
      allowDuplicates={allowDuplicates}
      placeholder={placeholder}
      disabled={disabled}
      chipOptions={{ clearButton: true }}
    />
  );
}
```


#### Components Input ChipInput Chips In Single Line

```jsx
import { Label, ChipInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(['Anyone', 'Person with disability']);

  return (
    <>
      <Label withInput={true}>Population Focus</Label>
      <ChipInput
        value={value}
        chipOptions={{ clearButton: true }}
        onChange={setValue}
      />
    </>
  );
}
```


#### Components Input ChipInput Overflow Behavior

```jsx
import { Row, Column, Label, ChipInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(
    ['Anyone', 'Person with disability', 'Retired person from the armed forces']
  );

  return (
    <Row>
      <Column size={4}>
        <Label withInput={true}>Population Focus</Label>
        <ChipInput
          value={value}
          chipOptions={{ clearButton: true }}
          onChange={setValue}
        />
      </Column>
    </Row>
  );
}
```


#### Components Input ChipInput Variants Controlled

```jsx
import { ChipInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(['1024', '80']);

  return (
    <ChipInput
      value={value}
      placeholder="Add value"
      chipOptions={{ clearButton: true }}
      onChange={setValue}
    />
  );
}
```


#### Components Input ChipInput Variants Disabled

```jsx
import { ChipInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(['1024', '80']);

  return (
    <ChipInput
      value={value}
      chipOptions={{ clearButton: true }}
      onChange={setValue}
      disabled={true}
    />
  );
}
```