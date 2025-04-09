# Input



### Code Examples

#### Input

```jsx
import { Input } from '@innovaccer/design-system';

() => {
  const inputType = 'url';

  const placeholder = 'Placeholder';

  const info = 'sample info tooltip';

  const min = 1;

  const max = 30;

  const minLength = 1;

  const maxLength = 30;

  return (
    <Input
      className="w-25"
      name="input"
      type={inputType}
      placeholder={placeholder}
      onChange={action('on-change')}
      info={info}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}
```


#### Input

```jsx
import { Input } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState('Joy Lawson');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClear = React.useCallback(() => {
    setValue('');
  }, []);

  return (
    <Input
      placeholder="Name"
      name="input"
      className="w-25"
      value={value}
      onChange={onChange}
      onClear={onClear}
    />
  );
}
```


#### Input

```jsx
import { Input } from '@innovaccer/design-system';

() => (
  <Input name="input" placeholder="Search" className="w-25" onChange={action('on-change')} icon="search" />
)
```


#### Input

```jsx
import { Label, Input, HelpText } from '@innovaccer/design-system';

() => {
  const [visibility, setVisibility] = React.useState(false);
  const [visibility2, setVisibility2] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('Value');
  const [secondInputValue, setSecondInputValue] = React.useState('Value');
  return (
    <div className="d-flex">
      <div>
        <Label htmlFor="password-1" withInput={true}>
          Password
        </Label>
        <Input
          id="password-1"
          placeholder="Password"
          value={inputValue}
          type={visibility ? 'text' : 'password'}
          onChange={(ev) => {
            ev.persist();
            setInputValue(ev.target.value);
          }}
          actionIcon={
            <Input.ActionButton
              aria-label={visibility ? 'Show Password' : 'Hide Password'}
              onClick={() => setVisibility((x) => !x)}
              name={visibility ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <HelpText message={'Create a string, unique password'} />
      </div>
      <div className="ml-6">
        <Label htmlFor="password-2" withInput={true}>
          Password
        </Label>
        <Input
          id="password-2"
          placeholder="Password"
          value={secondInputValue}
          type={visibility2 ? 'text' : 'password'}
          onChange={(ev) => {
            ev.persist();
            setSecondInputValue(ev.target.value);
          }}
          actionIcon={
            <Input.ActionButton
              aria-label={visibility ? 'Show Password' : 'Hide Password'}
              onClick={() => setVisibility2((x) => !x)}
              name={visibility2 ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <HelpText error={true} message={'Create a password with at least 8 characters'} />
      </div>
    </div>
  );
};
```


#### Input

```jsx
import { Label, Input } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState('lawsonjoy@gmail.com');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value)
  }, []);

  return (
    <>
      <Label 
        withInput={true}
        htmlFor="email"
      >
        Email
      </Label>
      <Input
        name="input"
        className="w-25"
        value={value}
        onChange={onChange}
        placeholder="Email"
      />
    </>
  );
}
```


#### Input

```jsx
import { Label, Input } from '@innovaccer/design-system';

() => {
  const [inputValue, setInputValue] = React.useState('Joy Lawson');
  const [secondInputValue, setSecondInputValue] = React.useState('Joy Lawson');
  return (
    <div className="d-flex align-items-end">
      <div>
        <Label htmlFor="fullName" withInput={true}>
          Full Name
        </Label>
        <Input
          placeholder="Full name"
          id="fullName"
          value={inputValue}
          onChange={(ev) => {
            ev.persist();
            setInputValue(ev.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center ml-9">
        <Label htmlFor="fullName2" className="mr-6">
          Full Name
        </Label>
        <Input
          placeholder="Full name"
          id="fullName2"
          value={secondInputValue}
          onChange={(ev) => {
            ev.persist();
            setSecondInputValue(ev.target.value);
          }}
        />
      </div>
    </div>
  );
};
```


#### Input

```jsx
import { Label, Input, Text } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Label htmlFor="email" withInput={true} required={true}>
            Email
          </Label>
          <Input id="email" required placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Required Field</Text>
          </div>
        </div>
        <div className="ml-9">
          <Label htmlFor="email2" withInput={true}>
            Email
          </Label>
          <Input id="email2" placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Optional Field</Text>
          </div>
        </div>
      </div>
      <div className="d-flex mt-9">
        <div>
          <Label htmlFor="email3" withInput={true}>
            Email
          </Label>
          <Input id="email3" placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Required Field</Text>
          </div>
        </div>
        <div className="ml-9">
          <Label htmlFor="email4" withInput={true} optional={true}>
            Email
          </Label>
          <Input id="email4" placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Optional Field</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
```


#### Components Input Input Variants Action Icon

```jsx
import { Input } from '@innovaccer/design-system';

() => {
  const actionIcon = (
    <Input.ActionButton name="events" onClick={() => console.log("Custom action icon")} />
  );

  return (
    <Input
      name="input"
      defaultValue="Custom action icon"
      actionIcon={actionIcon}
    />
  );
}
```


#### Input

```jsx
import { Row, Column, Input } from '@innovaccer/design-system';

() => {
  const [visibility, setVisibility] = React.useState(false);
  const [value, setValue] = React.useState('Value');
  const handleParentChange = (event) => {
    const updatedValue = event.target.value;
      setValue(updatedValue);
  };
  const [value1, setValue1] = React.useState('Value');
  const onChangeHandler = (event) => {
    const updatedValue = event.target.value;
      setValue1(updatedValue);
  };
  const onClearHandler = () => {
    const updatedValue = '';
      setValue1(updatedValue);
  };
  return (
    <Row>
    <Column size={4}>
      <Input
        name="input"
        value={value}
        type={visibility ? 'text' : 'password'}
        placeholder="Placeholder"
        actionIcon={
          <Input.ActionButton
            onClick={() => {
              setVisibility((x) => !x);
            }}
            name={visibility ? 'visibility_on' : 'visibility_off'}
            aria-label={visibility ? 'Show Password' : 'Hide Password'}
            className="cursor-pointer"
          />
        }
        onChange={handleParentChange}
      />
    </Column>
    <Column size={4} className="ml-7">
      <Input
        name="input"
        value={value1}
        type="text"
        placeholder="PlaceHolder"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      />
    </Column>
  </Row>
  );
};
```


#### Input

```jsx
import { Label, Input } from '@innovaccer/design-system';

() => {
  const sizes = ['tiny', 'regular', 'large'];

  const placeholder = 'Placeholder';

  return (
    <div>
      {sizes.map((InputSize, ind) => {
        return (
          <div key={ind} className="mb-8 w-25">
            <Label htmlFor={InputSize} withInput={true}>
              {InputSize.charAt(0).toUpperCase() + InputSize.slice(1)}
            </Label>
            <Input name="input" onChange={action('on-change')} placeholder={placeholder} size={InputSize} />
          </div>
        );
      })}
    </div>
  );
}
```


#### Input

```jsx
import { Input, Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Placeholder" onChange={action('on-change')} />
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          value=""
          placeholder="Placeholder"
          onChange={action('on-change')}
          info="sample info tooltip"
        />
        <br />
        <Text weight="strong">Placeholder</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Placeholder" onChange={action('on-change')} error={true} />
        <br />
        <Text weight="strong">Error</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" placeholder="Placeholder" disabled={true} />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" value="Value" readOnly={true} />
        <br />
        <Text weight="strong">Read Only</Text>
      </div>
    </div>
  );
}
```


#### Input

```jsx
import { Input, Text } from '@innovaccer/design-system';

() => {
  const icon = 'search';
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Search" onChange={action('on-change')} icon={icon} />
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          placeholder="Search"
          onChange={action('on-change')}
          info="sample info tooltip"
          icon={icon}
        />
        <br />
        <Text weight="strong">Placeholder</Text>
      </div>
      <div className="mr-9 mb-8 w-25">
        <Input name="input" placeholder="Search" onChange={action('on-change')} error={true} icon={icon} />
        <br />
        <Text weight="strong">Error</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" placeholder="Search" disabled={true} icon={icon} />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9 w-25">
        <Input name="input" value="Value" icon={icon} readOnly={true} />
        <br />
        <Text weight="strong">Read Only</Text>
      </div>
    </div>
  );
}
```