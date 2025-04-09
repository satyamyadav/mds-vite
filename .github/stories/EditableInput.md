# EditableInput



### Code Examples

#### Components Inline Editable Fields EditableInput All

```jsx
import { EditableInput } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState('');

  const onChange = (updatedValue) => {
    setValue(updatedValue);
  };

  const options = {
    placeholder: 'First Name',
    onChange,
    value,
  };

  return (
    <div className="vw-25">
      <EditableInput
        {...options}
      />
    </div>
  );
}
```


#### Components Inline Editable Fields EditableInput Variants Error

```jsx
import { EditableInput } from '@innovaccer/design-system';

/*
// style.css
.EditableInput-wrapper--error {
  width: var(--spacing-9);
}

*/
() => {
  const [value, setValue] = React.useState('');

  const onChange = (value) => {
    setValue(value);
  }

  return (
    <div className='EditableInput-wrapper--error'>
      <EditableInput
        placeholder="First Name"
        value={value}
        onChange={onChange}
        error={true}
        errorMessage={'Error Message'}
      />
    </div>
  );
}
```


#### Components Inline Editable Fields EditableInput Variants Size

```jsx
import { Row, Label, EditableInput, Column } from '@innovaccer/design-system';

() => {
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangeWeight = (value) => {
    setWeight(value);
  }

  return (
    <Row>
      <div className="d-flex flex-column vw-25">
        <Label withInput={true} className="ml-5">Regular</Label>
        <EditableInput
          placeholder="First Name"
          value={name}
          onChange={onChangeName}
          className="mr-5"
        />
      </div>
      <Column size={2}>
        <div className="d-flex ml-8 flex-column">
          <Label withInput={true} className="ml-5">Tiny</Label>
          <EditableInput
            placeholder="Add Weight"
            value={weight}
            onChange={onChangeWeight}
            size="tiny"
          />
        </div>
      </Column>
    </Row>
  );
}
```


#### Components Inline Editable Fields EditableInput Variants Uncontrolled

```jsx
import { EditableInput } from '@innovaccer/design-system';

() => {
  return (
    <div className="vw-25">
      <EditableInput placeholder="First Name" />
    </div>
  );
}
```