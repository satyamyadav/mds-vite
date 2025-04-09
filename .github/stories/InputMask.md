# InputMask



### Code Examples

#### Components Input InputMask All

```jsx
import { InputMask } from '@innovaccer/design-system';

// import { Utils } from '@innovaccer/design-system';

() => {
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  return (
    <div className="w-25">
      <InputMask
        icon="calendar_month"
        mask={dateMask}
        validators={dateValidator}
        placeholder="mm/dd/yyyy"
      />
    </div>
  );
};

```


#### Components Input InputMask Card Number

```jsx
import { Label, InputMask } from '@innovaccer/design-system';

() => {
  return (
    <div className="w-25">
      <Label className="mb-3">Card Number</Label>
      <InputMask
        mask={[
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        placeholder="____ ____ ____ ____"
        name="card_number"
        icon="credit_card"
      />
    </div>
  );
}
```


#### InputMask

```jsx
import { Row, Label, InputMask } from '@innovaccer/design-system';

() => {
  const ref = React.useRef(null);
  const [error, setError] = React.useState(false);

  const onChangeHandler = () => {
    setError(ref.current.value[1] === '0');
  };

  return (
    <Row className="w-25 d-flex">
      <div>
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          icon="call"
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter your phone number"
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      </div>

      <div className="mt-8">
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          ref={ref}
          icon="call"
          error={error}
          onChange={onChangeHandler}
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter a phone number starting 0 to see the error mode"
          caption="Phone number cannot start with 0"
          mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      </div>
    </Row>
  );
};
```