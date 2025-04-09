# EditableChipInput



### Code Examples

#### Components Inline Editable Fields EditableChipInput All

```jsx
import { EditableChipInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState();

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };
  const onClick = (item) =>  console.log(item);

  const placeholder ='Add Value';
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-8)',
  };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates:false,
    defaultValue:[],
    autoFocus:true
  };

  const options = {
    placeholder,
    value,
    onChange,
    chipInputOptions
  };
  return (
      <div className="w-25">
        <EditableChipInput
          {...options}
        />
      </div>
  );
}
```


#### Components Inline Editable Fields EditableChipInput Overflow Behavior

```jsx
import { Label, EditableChipInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState(["John","Eric","Martin", "Joy"]);

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };
  const onClick = (item) =>  console.log(item);

  const placeholder ='Add Value';
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-8)',
  };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates:false,
    defaultValue:[],
    autoFocus:true
  };

  const options = {
    placeholder,
    value,
    onChange,
    chipInputOptions
  };
  return (
      <div className="w-25">
        <Label>Members</Label>
        <EditableChipInput
          {...options}
        />
      </div>
  );
}
```


#### Components Inline Editable Fields EditableChipInput Uncontrolled

```jsx
import { EditableChipInput } from '@innovaccer/design-system';

() => {
  const onClick = (item) => console.log(`onClick: ${item}`);
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-8)',
  };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates: false,
    defaultValue: [],
    autoFocus: true,
  };

  const options = {
    chipInputOptions,
    placeholder: 'Add Value',
  };
  return (
    <div className="w-25">
      <EditableChipInput {...options} />
    </div>
  );
}
```