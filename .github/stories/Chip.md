# Chip



### Code Examples

#### Components Chip Chip All

```jsx
import { Chip } from '@innovaccer/design-system';

() => {
  const type = 'selection';

  const label = 'Chip Label';

  const icon = 'assessment';

  const disabled = false;

  let clearButton;
  if (type !== 'action') {
    clearButton = true;
  }

  let selected;
  if (type === 'selection') {
    selected = false;
  }
  return (
    <Chip
      icon={icon}
      label={label}
      clearButton={clearButton}
      disabled={disabled}
      type={type}
      onClose={action(`onClose: ${label}`)}
      onClick={action(`onClick: ${label}`)}
      selected={selected}
      name={'chip'}
    />
  );
}
```


#### Components Chip Chip Custom Label

```jsx
import { Chip } from '@innovaccer/design-system';

() => {
  const customLabelData1 = [
    ['Age=', '60yrs', { selected: true }],
    ['Age:', '18yrs to 60yrs', { selected: false }],
    ['Age>=', '18yrs', { selected: false, disabled: true }],
  ];

  const customLabelData2 = [
    ['Provider City:', 'San Diego', { selected: true }],
    ['Provider City:', 'San Diego, Chicago', { selected: false }],
    ['Provider City:', '3 selected', { selected: false, disabled: true }],
  ];

  const customLabelData3 = [
    ['Creation Date>=', '01/01/2020', { selected: true }],
    ['Creation Date=', '01/01/2020', { icon: 'assessment', selected: false }],
    ['Creation Date:', 'last 6 months', { icon: 'assessment', selected: false, disabled: true }],
  ];

  const renderChips = (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData1.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={customLabel[1]}
            labelPrefix={customLabel[0]}
            clearButton={true}
            name={customLabel[0]}
            type="selection"
            selected={customLabel[2].selected}
            disabled={customLabel[2].disabled}
          />
        ))}
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData2.map((customLabel, index) => (
          <Chip
            icon={customLabel[2].icon}
            className="mb-6"
            key={index}
            label={customLabel[1]}
            labelPrefix={customLabel[0]}
            clearButton={true}
            name={customLabel[0]}
            type="selection"
            selected={customLabel[2].selected}
            disabled={customLabel[2].disabled}
          />
        ))}
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {customLabelData3.map((customLabel, index) => (
          <Chip
            className="mb-6"
            key={index}
            label={customLabel[1]}
            labelPrefix={customLabel[0]}
            icon={customLabel[2].icon}
            clearButton={true}
            name={customLabel[0]}
            type="selection"
            selected={customLabel[2].selected}
            disabled={customLabel[2].disabled}
          />
        ))}
      </div>
    </>
  );

  return <div>{renderChips}</div>;
}
```


#### Components Chip Chip Overflow Behavior

```jsx
import { Row, Column, Chip } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column>
        <Chip
          label="Dan Mckenzie Farland Bartholomew"
          clearButton={true}
          name="Dan Mckenzie Farland Bartholomew"
          type="input"
        />
      </Column>
      <Column>
        <Chip
          labelPrefix="Provider city :"
          label="Los Angeles, California"
          clearButton={true}
          name="Provider city :"
          type="input"
        />
      </Column>
      <Column>
        <Chip
          label="LA"
          labelPrefix="Provider city is very very very long :"
          name="Provider city is very very very long :"
          clearButton={true}
          type="input"
        />
      </Column>
    </Row>
  );
}
```


#### Chip

```jsx
import { Chip, Text } from '@innovaccer/design-system';

() => {
  const icon = 'assessment';
  const label = 'Action';
  return (
    <div className="d-flex justify-content-between w-50">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind}>
            <Chip icon={icon} label={label} disabled={booleanvalue} type="action" name={'chip'} />
            <br />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Chip

```jsx
import { Chip, Text } from '@innovaccer/design-system';

() => {
  const icon = 'assessment';
  const label = 'Input';
  return (
    <div className="d-flex justify-content-between w-50">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind}>
            <Chip icon={icon} label={label} clearButton={true} disabled={booleanvalue} type="input" name={'chip'} />
            <br />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Chip

```jsx
import { Chip, Text } from '@innovaccer/design-system';

() => {
  const icon = 'assessment';
  const label = 'Selection';

  return (
    <div className="d-flex justify-content-between">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind}>
            <Chip
              icon={icon}
              label={label}
              clearButton={true}
              disabled={booleanvalue}
              type="selection"
              selected={false}
              name={'chip'}
            />
            <br />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
      <div>
        <Chip
          icon={icon}
          label={label}
          clearButton={true}
          type="selection"
          onClose={action(`onClose: ${label}`)}
          onClick={action(`onClick: ${label}`)}
          selected={true}
          name={'chip'}
        />
        <br />
        <br />
        <Text weight="strong">Selected: true</Text>
      </div>
      <div>
        <Chip
          icon={icon}
          label={label}
          clearButton={true}
          type="selection"
          onClose={action(`onClose: ${label}`)}
          onClick={action(`onClick: ${label}`)}
          selected={true}
          disabled={true}
          name={'chip'}
        />
        <br />
        <br />
        <Text weight="strong">Selected: true</Text>
        <br></br>
        <Text weight="strong">Disabled: true</Text>
      </div>
    </div>
  );
}
```