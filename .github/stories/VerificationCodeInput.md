# VerificationCodeInput



### Code Examples

#### Input

```jsx
import { Label, VerificationCodeInput } from '@innovaccer/design-system';

() => {
  const inputType = 'number';

  const fields = undefined;

  const value = '6543';

  const placeholder = '-';

  const disabled = false;

  const autoFocus = true;

  const readOnly = false;

  const error = false;

  const pattern = '';

  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput
        fields={fields}
        type={inputType}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onChange={action('on-change')}
        onComplete={action('on-complete')}
        onFocus={action('on-focus')}
        onBlur={action('on-blur')}
        placeholder={placeholder}
        error={error}
        pattern={pattern}
        // TODO(a11y)
        
        autoFocus={autoFocus}
      />
    </>
  );
}
```


#### VerificationCodeInput

```jsx
import { Label, VerificationCodeInput } from '@innovaccer/design-system';

() => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput disabled={true} value="1234" />
    </>
  );
}
```


#### VerificationCodeInput

```jsx
import { Label, VerificationCodeInput } from '@innovaccer/design-system';

() => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput error={true} />
    </>
  );
}
```


#### Input

```jsx
import { Label, VerificationCodeInput } from '@innovaccer/design-system';

() => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput />
    </>
  );
}
```


#### Input

```jsx
import { Label, VerificationCodeInput, Button } from '@innovaccer/design-system';

() => {
    const inputType = 'number';
  
    const fields = undefined;
  
    const placeholder = '-';
  
    const disabled = false;
  
    const autoFocus = true;
  
    const readOnly = false;
  
    const error = false;
  
    const pattern = '';
    const [counter, setCounter] = React.useState(0);
    const [value, setValue] = React.useState('1234');
    const handleClick = () => {
      setCounter(counter + 1);
      setValue('----');
    };
  
    return (
      <>
        <Label withInput={true}>Verification code</Label>
        <VerificationCodeInput
          key={counter}
          fields={fields}
          type={inputType}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          onComplete={console.log('on-complete')}
          onFocus={console.log('on-focus')}
          onBlur={console.log('on-blur')}
          placeholder={placeholder}
          error={error}
          pattern={pattern}
          // TODO(a11y)
          //  eslint-disable-next-line
          autoFocus={autoFocus}
        />
        <Button className="mt-5" onClick={handleClick}>
          Reset
        </Button>
      </>
    );
  }
```


#### Input

```jsx
import { Label, VerificationCodeInput } from '@innovaccer/design-system';

() => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput fields={6} />
    </>
  );
}
```