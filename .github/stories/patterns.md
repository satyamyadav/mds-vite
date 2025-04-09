# patterns



### Code Examples

#### Date and time picker

```jsx
import { Label, DatePicker, Dropdown } from '@innovaccer/design-system';



() => {
  class DateTimePicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        date: undefined,
        time: undefined
      };
    }

    onDateChange(date, dateVal) {
      this.setState({
        date: dateVal,
        open: !!date
      });
    }

    onPopperToggle(val) {
      this.setState({
        open: val
      });
    }

    onChangeHandler(selected) {
      this.setState({
        time: selected
      });
    }

    render() {
      const timeValues = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'];
      const {
        open
      } = this.state;

      console.log("Date", this.state.date, "Time", this.state.time);

      return (
        <div className="d-flex">
          <div className="d-flex flex-column">
            <Label withInput>Date</Label>
            <DatePicker
              withInput={true}
              onDateChange={this.onDateChange.bind(this)}
            />
          </div>
          <div className="d-flex flex-column ml-5" style={{width: 'var(--spacing-8)'}}>
            <Label withInput>Time</Label>
            <Dropdown
              open={open}
              onPopperToggle={this.onPopperToggle.bind(this)}
              options={timeValues.map(value => ({label: value, value}))}
              onChange={this.onChangeHandler.bind(this)}
            />
          </div>
        </div>
      );
    }
  }

  return <DateTimePicker />
}
```


#### DatePicker

```jsx
import { DatePicker, Subheading, Chip, Divider, Card, Label } from '@innovaccer/design-system';

() => {

  const setDate = (jumpDateIndex) => {
    const d = new Date();
    return d.setDate(d.getDate() + jumpDateIndex);
  };

  const getTomorrowDate = setDate.bind(null, 1);
  const getThreeDaysLaterDate = setDate.bind(null, 3);
  const getOneWeekLaterDate = setDate.bind(null, 7);
  const getThirtyDaysLaterDate = setDate.bind(null, 30);

  
  const DatePickerPreset = ({ size, withInput=false }) => {
    
    const [date, setDate] = React.useState(new Date());
    const [selectedChip, setSelectedChip] = React.useState('today');
    
    const classNames = size === 'small' ? 'd-flex mb-4' : 'd-flex mb-5';
    return (
      <DatePicker date={date} showTodayDate={false} size={size} withInput={withInput}>
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" appearance="subtle">
              Date
            </Subheading>
          </div>
          <div className="pt-4">
            <Chip
              label="Today"
              clearButton={false}
              type="action"
              className={classNames}
              selected={selectedChip === 'today'}
              name="rangePicker"
              onClick={() => {
                setDate(new Date)
                setSelectedChip('today')
              }}
            />
            <Chip
              label="Tomorrow"
              clearButton={false}
              type="action"
              className={classNames}
              name={'chip'}
              onClick={() => {
                setDate(getTomorrowDate())
                setSelectedChip('tomorrow')
              }}
            />
            <Chip
              label="3 days later"
              clearButton={false}
              type="action"
              className={classNames}
              name="rangePicker"
              onClick={() => {
                setDate(getThreeDaysLaterDate())
                setSelectedChip('threeDaysLater')
              }}
            />
            <Chip
              label="1 week later"
              clearButton={false}
              type="action"
              className={classNames}
              name="rangePicker"
              onClick={() => {
                setDate(getOneWeekLaterDate())
                setSelectedChip('oneWeekLater')
              }}
            />
            <Chip
              label="30 days later"
              clearButton={false}
              type="action"
              className={classNames}
              name="rangePicker"
              onClick={() => {
                setDate(getThirtyDaysLaterDate())
                setSelectedChip('thirtyDaysLater')
              }}
            />
          </div>
        </div>
        <Divider vertical={true} />
      </DatePicker>
    );
  };
  return (
    <>
      <Card className="d-inline-flex" shadow="light">
        <DatePickerPreset />
      </Card>
      <Card className="d-inline-flex ml-5" shadow="light">
        <DatePickerPreset size="small" />
      </Card>
      <Card className="w-50 my-5 p-5">
        <Label>Set an appointment date:</Label>
        <DatePickerPreset withInput={true} />
      </Card>
    </>
  );
};
```


#### Date range picker with custom Popover

```jsx
import { Subheading, Icon, Chip, DateRangePicker, Divider } from '@innovaccer/design-system';



() => {
  class CustomPopover extends React.Component {
    constructor(props) {
      super(props);
      const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();

      this.state = {
        startDate,
        endDate,
        selected: 'currWeek',
        monthNav: DateRangePicker.utils.getCurrentMonth(),
      };

      this.renderChildren = this.renderChildren.bind(this);
      this.setDate = this.setDate.bind(this);
      this.onReset = this.onReset.bind(this);
    }

    setDate(date) {
      const d = new Date();
      return new Date(d.setDate(date));
    }

    onReset() {
      this.setState({
        startDate:null,
        endDate:null,
        selected: "",
        monthNav: DateRangePicker.utils.getCurrentMonth()
      });
    }

    renderChildren() {
      const { startDate, endDate, selected } = this.state;

      return (
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" className="py-3" appearance="subtle">Range</Subheading>
            <Icon name="refresh" onClick={this.onReset} />
          </div>
          <div className="pt-5">
            <Chip
              label="This week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === "currWeek"}
              name="rangePicker"
              onClick={() => {
                this.setState({
                  selected: "currWeek",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getCurrentWeek()
                });
              }}
            />
            <Chip
              label="Last week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prevWeek'}
              name={"chip"}
              onClick={() => {
                this.setState({
                  selected: "prevWeek",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPreviousWeek()
                });
              }}
            />
            <Chip
              label="Last month"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prevMonth'}
              name="rangePicker"
              onClick={() => {
                this.setState({
                  selected: "prevMonth",
                  monthNav: DateRangePicker.utils.getCurrentMonth() - 1,
                  ...DateRangePicker.utils.getPreviousMonth()
                });
              }}
            />
            <Chip
              label="Last 90 days"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prev90Days'}
              name="rangePicker"
              onClick={() => {
                this.setState({
                  selected: "prev90Days",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPrevious90Days()
                });
              }}
            />
            <Chip
              label="Custom"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'custom'}
              name="rangePicker"
              onClick={() => {
                this.setState({
                  selected: "custom",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getCustomDates()
                });
              }}
            />
          </div>
        </div>
      );
    };

    render() {
      const { startDate, endDate, monthNav } = this.state;

      return (
        <div className="w-25">
          <DateRangePicker
            withInput={true}
            singleInput={true}
            startDate={startDate}
            endDate={endDate}
            onRangeChange={(sDate, eDate, sValue, eValue) => {
              console.log(sDate, eDate);
            }}
            monthsInView={1}
            monthNav={monthNav}
          >
            {this.renderChildren()}
            <Divider vertical={true} />
          </DateRangePicker>
        </div>
      )
    }
  }

  return <CustomPopover />
}
```


#### Basic Form

```jsx
import { Card, Heading, Label, Input, Icon, Link, Button } from '@innovaccer/design-system';



() => {
  class BasicForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        signInDisabled: true,
        passwordVisible: false,
        data: { email: '', password: '' }
      };

      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onActionClick = this.onActionClick.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onActionClick() {
      this.setState({
        passwordVisible: !this.state.passwordVisible
      });
    }

    onEmailChange(event) {
      const { password = '' } = this.state.data;
      const email = event.target.value;
      const disabled = !password || !email;

      this.setState({
        data: { ...this.state.data, email },
        signInDisabled: disabled
      });
    };

    onPasswordChange(event) {
      const { email = '' } = this.state.data;
      const password = event.target.value;
      const disabled = !password || !email;

      this.setState({
        data: { ...this.state.data, password },
        signInDisabled: disabled
      });
    }

    onSubmit(e) {
      e.preventDefault();
      const { email = '', password = '' } = this.state.data;
      console.log(`email: ${email}, password: ${password}`);
      return false;
    }

    render() {
      const { password = '' } = this.state.data;

      return (
        <div style={{ width: '350px' }}>
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
              <Heading className="mb-7" size="m">Login</Heading>
              <Label withInput={true}>Email</Label>
              <Input
                name="input"
                type="text"
                placeholder="Enter email"
                className="mb-6"
                autocomplete={'off'}
                onChange={this.onEmailChange}
              />
              <Label withInput={true}>Password</Label>
              <Input
                name="input"
                className="mb-4"
                placeholder="Enter password"
                autocomplete={'off'}
                type={this.state.passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={this.onPasswordChange}
                actionIcon={(
                  <Icon
                    name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                    onClick={this.onActionClick}
                  />
                )}
              />
              <Link target="_blank" href="#">Forgot Password?</Link>
              <Button
                className="mt-7"
                appearance="primary"
                expanded={true}
                disabled={this.state.signInDisabled}
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  return <BasicForm />
}
```


#### Create Password Form

```jsx
import { Icon, Text, Card, Label, Input, Button } from '@innovaccer/design-system';



() => {
  const passwordRequirements = [
    { key: 'minLen',validation: 'At least eight (8) characters in length' },
    { key: 'uppercaseChar', validation: 'At least one (1) uppercase character'},
    { key: 'lowercaseChar', validation: 'At least one (1) lowercase character'},
    { key: 'numericChar', validation: 'At least one (1) numeric character' },
    { key: 'specialChar', validation: 'At least one (1) special character (! @ # $ \ _)'},
  ];

  const regex = {
    minLen: /^.{8,}$/,
    specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
    lowercaseChar: /[a-z]/,
    uppercaseChar: /[A-Z]/,
    numericChar: /\d/
  };

  class CreatePassword extends React.Component {
    constructor(props = {}) {
      super(props);

      const validations = {
        minLen: false,
        uppercaseChar: false,
        lowercaseChar: false,
        numericChar: false,
        specialChar: false,
      };

      this.state = {
        validations,
        signInDisabled: true,
        password: '',
        confirmPassword: '',
        passwordVisible: false,
        confirmPasswordVisible: false,
      };

      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.renderRequirements = this.renderRequirements.bind(this);
      this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onPasswordChange(event) {
      const newPassword = event.target.value;

      const newValidations = Object.keys(this.state.validations).reduce((acc, curr) => {
        return { ...acc, [curr]: regex[curr].test(newPassword) }
      }, this.state.validations);

      const isValidated = Object.keys(newValidations).every(k => !newValidations[k]);
      const value=event.target.value;
      this.setState({
        password: value,
        validations: newValidations,
        signInDisabled: (!isValidated && value!== this.state.confirmPassword) || !value,
      });

    }

    onConfirmPasswordChange(event) {
      const value=event.target.value;
      this.setState({
        confirmPassword: value,
        signInDisabled: value !== this.state.password || !value
      });
    }

    renderRequirements() {

      return (
        <div>
          {
            passwordRequirements.map((item, index) => {
              const { validation, key } = item;

              return (
                <div className="d-flex mb-4 align-items-center" key={index}>
                  <Icon
                    className="mr-4"
                    name={this.state.validations[key] ? 'check_circle' : 'fiber_manual_record'}
                    appearance={this.state.validations[key] ? 'success' : 'default'}
                  />
                  <Text>{validation}</Text>
                </div>
              );
            })
          }
        </div>
      )
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.password);
      return false;
    }

    render() {
      const { passwordVisible, confirmPasswordVisible } = this.state;

      return (
        <div style={{ width: '350px' }}>
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
              <Label withInput={true}>Password</Label>
              <Input
                name="input"
                className="mb-4"
                placeholder="Enter password"
                type={this.state.passwordVisible ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.onPasswordChange}
                autocomplete="off"
                actionIcon={(
                  <Icon
                    name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                    onClick={() => this.setState({ passwordVisible: !passwordVisible })}
                  />
                )}
              />
              {this.renderRequirements()}
              <Label withInput={true} className="mt-6">Confirm Password</Label>
              <Input
                name="input"
                placeholder="Enter password"
                type={this.state.confirmPasswordVisible ? 'text' : 'password'}
                value={this.state.confirmPassword}
                onChange={this.onConfirmPasswordChange}
                autocomplete="off"
                actionIcon={(
                  <Icon
                    name={this.state.confirmPasswordVisible ? 'visibility' : 'visibility_off'}
                    onClick={() => this.setState({ confirmPasswordVisible: !confirmPasswordVisible })}
                  />
                )}
              />
              <Button
                className="mt-7"
                appearance="primary"
                disabled={this.state.signInDisabled}
              >
                Next
            </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  return <CreatePassword />
}
```


#### Create User Form

```jsx
import { Card, Text, Row, Column, Label, Input, Dropdown, DatePicker, Button } from '@innovaccer/design-system';



() => {
  const genderOptions = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    }
  ];

  const userOptions = [
    {
      label: 'User A',
      value: 'UserA',
    },
    {
      label: 'User B',
      value: 'UserB',
    }
  ];

  class CreateUser extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        updateDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        updateDisabled: Object.keys(updatedData).every(key => !updatedData[key])
      });
    }

    onSubmit(event) {
      event.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      return (
      <div className="w-100">
        <Card className="px-6 py-6">
          <Text appearance="subtle" weight="strong">Primary Details</Text>
          <form onSubmit={this.onSubmit}>
            <Row className="mt-6">
              <Column sizeXL={4} sizeL={4} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true} required={true}>Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="E.g. Doe, Smith, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true}>Middle Name</Label>
                <Input
                  name="middleName"
                  type="text"
                  placeholder="E.g. Doe, Smith, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={3} sizeL={3} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true} required={true}>First Name</Label>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="E.g. John, Will, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true}>Gender</Label>
                <Dropdown
                  options={genderOptions}
                  onChange={(value) => this.onChange(value, 'gender')}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true}>Date of Birth</Label>
                <DatePicker
                  withInput={true}
                  onDateChange={(currentDate) => this.onChange(currentDate, 'dob')}
                  inputOptions={{
                    placeholder: 'MM/DD/YYYY',
                    icon: 'cake',
                    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
                  }}
                />
              </Column>
              <Column sizeXL={3} sizeL={3} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true} >Maiden Name</Label>
                <Input
                  name="MaidenName"
                  type="text"
                  placeholder="E.g. Roe, Will, etc."
                  icon="person"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={6} className="mr-6 mb-6">
                <Label withInput={true} required={true}>Email Address</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="E.g. abc@gmail.com"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
              <Column sizeXL={4} sizeL={4} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true}>User Type</Label>
                <Dropdown
                  options={userOptions}
                  placeholder="Select User Type"
                  onChange={(value) => this.onChange(value, 'userType')}
                />
              </Column>
              <Column sizeXL={3} sizeL={3} sizeM={5} className="mr-6 mb-6">
                <Label withInput={true} >NPI</Label>
                <Input
                  name="npi"
                  type="text"
                  placeholder="E.g. 000000"
                  autocomplete={'off'}
                  onChange={(event) => this.onChange(event.target.value, event.target.name)}
                />
              </Column>
            </Row>
            <div className="d-flex justify-content-end">
              <Button className="mr-4">Cancel</Button>
              <Button type="submit" appearance="success" disabled={this.state.updateDisabled}>Update Account</Button>
            </div>
          </form>
        </Card>
      </div>
      );
    }
  }

  return <CreateUser />
}
```


#### Inline Form

```jsx
import { Card, Label, Input, Button, DatePicker, Dropdown } from '@innovaccer/design-system';



() => {
  class InlineForm extends React.Component {

    constructor(props = {}) {
      super(props);

      this.state = {
        searchDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        searchDisabled: Object.keys(updatedData).every(key => !updatedData[key])
      });
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      const options = [];
      for (let i = 1; i <= 10; i++) {
        options.push({
          label: `Option ${i}`,
          value: `Option ${i}`,
        });
      }

      return (
        <div className="w-100">
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
              <div className="d-flex flex-wrap">
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Last Name</Label>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="E.g. Doe, Smith, etc."
                    icon="person"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>First Name</Label>
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="E.g. John, Will, etc."
                    icon="person"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Gender</Label>
                  <div className="d-flex">
                    <Button className="mr-3" onClick={() => this.onChange('Male', 'gender')}>Male</Button>
                    <Button className="mr-3" onClick={() => this.onChange('Female', 'gender')}>Female</Button>
                    <Button className="mr-3" onClick={() => this.onChange('Other', 'gender')}>Other</Button>
                    <Button onClick={() => this.onChange('Unknown', 'gender')}>Unknown</Button>
                  </div>
                </div>
                <div className="mr-6 mb-6" style={{ width: 'var(--spacing-9)' }}>
                  <Label withInput={true}>Date of Birth</Label>
                  <DatePicker
                    withInput={true}
                    onDateChange={(currentDate) => this.onChange(currentDate, 'date')}
                    inputOptions={{
                      placeholder: 'MM/DD/YYYY',
                      icon: 'cake',
                      mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
                    }}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>EMPI</Label>
                  <Input
                    name="empi"
                    type="text"
                    placeholder="P000000"
                    icon="fingerprint"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>MRN</Label>
                  <Input
                    name="mrn"
                    type="text"
                    placeholder="Medical Record Number"
                    icon="account_box"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>ZIP</Label>
                  <Input
                    name="zip"
                    type="text"
                    placeholder="00000"
                    icon="location_on"
                    autocomplete={'off'}
                    onChange={(event) => this.onChange(event.target.value, event.target.name)}
                  />
                </div>
                <div className="mr-6 mb-6" style={{ width: 'var(--spacing-9)' }}>
                  <Label withInput={true}>Primary Care Physician</Label>
                  <Dropdown
                    icon="add_box"
                    placeholder="00000"
                    options={options}
                    onChange={(option) => this.onChange(option, 'pcp')}
                  />
                </div>
                <div className="mr-6 mb-6" style={{ width: 'var(--spacing-9)' }}>
                  <Label withInput={true}>Region</Label>
                  <Dropdown
                    icon="flag"
                    placeholder="00000"
                    options={options}
                    onChange={(option) => this.onChange(option, 'region')}
                  />
                </div>
              </div>
              <Button
                disabled={this.state.searchDisabled}
                appearance="primary"
                type="submit"
              >
                Search
              </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  return <InlineForm />
}
```


#### Inline Label Form

```jsx
import { Card, Row, Column, Icon, Text, Dropdown, Checkbox, Button, InputMask, Radio } from '@innovaccer/design-system';



() => {
  const languages = [
    {
      label: 'Hindi',
      value: 'Hindi',
    },
    {
      label: 'English',
      value: 'English',
      selected: true
    },
    {
      label: 'French',
      value: 'French',
    }
  ];

  class InlineLabelForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        data: {
          language: 'English',
          defaultLanguage: 'English',
          defaultPhoneNumber: 'primaryPhoneNumber'
        },
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const { defaultLanguage = '' } = this.state.data;

      const updatedData = {
        ...this.state.data,
        [name]: value,
      };

      this.setState({
        data: updatedData,
      });
    }

    onSubmit(event) {
      event.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      const { defaultLanguage, language, defaultPhoneNumber } = this.state.data;

      return (
      <div className="w-100">
        <Card className="px-6 py-6">
          <form onSubmit={this.onSubmit}>
            <Row className="mb-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="language" />
                <Text>Known Languages</Text>
              </Column>
              <Column size={8} className="d-flex">
                <div className="mr-5 w-25">
                  <Dropdown
                    options={languages}
                    onChange={(value) => {
                      const updatedData = {
                        ...this.state.data,
                        language: value,
                        defaultLanguage: defaultLanguage !== '' ? value : defaultLanguage,
                      };
                      this.setState({data: updatedData})
                    }}
                  />
                </div>
                <Checkbox
                  name="defaultLanguage"
                  label="Set as Default"
                  defaultChecked={defaultLanguage}
                  onChange={(e) => {
                    const updatedData = {
                      ...this.state.data,
                      defaultLanguage: e.target.checked ? language : '',
                    };
                    this.setState({data: updatedData})
                  }}
                />
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Button icon="delete" appearance="transparent" />
              </Column>
            </Row>
            <Row className="my-5">
              <Column className="d-flex align-items-center" size={3}>
                <Icon className="mr-4" name="record_voice_over" />
                <Text>Preferred Method of Contact</Text>
              </Column>
              <Column size={8} className="d-flex">
                <Button className="mr-3" icon="call" onClick={() => this.onChange('phone', 'contact')}>Phone</Button>
                <Button className="mr-3" icon="chat" onClick={() => this.onChange('message', 'contact')}>Message</Button>
                <Button className="mr-3" icon="email" onClick={() => this.onChange('email', 'contact')}>Email</Button>
                <Button
                  className="mr-3"
                  icon="markunread_mailbox"
                  onClick={() => this.onChange('letter', 'contact')}
                >
                  Letter
                </Button>
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Button icon="delete" appearance="transparent" />
              </Column>
            </Row>
            <Row className="mt-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="call" />
                <Text>Phone Numbers</Text>
              </Column>
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="primaryPhoneNumber"
                  onChange={(e, value) => this.onChange(value, e.target.name)}
                />
                <Radio
                  defaultChecked={defaultPhoneNumber === 'primaryPhoneNumber'}
                  name="defaultPhoneNumber"
                  value="defaultPrimaryPhoneNumber"
                  label="Mark as Preferred"
                  onChange={(e) => {
                    const updatedData = {
                      ...this.state.data,
                      defaultPhoneNumber: e.target.checked ? 'primaryPhoneNumber' : defaultPhoneNumber
                    };
                    this.setState({data: updatedData})
                  }}
                />
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Button icon="delete" appearance="transparent" />
              </Column>
            </Row>
            <Row className="my-5">
              <Column size={3} className="d-flex align-items-center" />
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="secondaryPhoneNumber"
                  onChange={(e, value) => this.onChange(value, e.target.name)}
                />
                <Radio
                  defaultChecked={defaultPhoneNumber === 'secondaryPhoneNumber'}
                  name="defaultPhoneNumber"
                  value="defaultSecondaryPhoneNumber"
                  label="Mark as Preferred"
                  onChange={(e) => {
                    const updatedData = {
                      ...this.state.data,
                      defaultPhoneNumber: e.target.checked ? 'secondaryPhoneNumber' : defaultPhoneNumber
                    };
                    this.setState({data: updatedData})
                  }}
                />
              </Column>
              <Column size={1} className="d-flex align-items-center justify-content-end">
                <Icon name="flag" appearance="warning" className="mr-4"/>
              </Column>
            </Row>
          <div className="d-flex">
            <Button className="mr-4" type="submit" appearance="success">Save</Button>
            <Button>Cancel</Button>
          </div>
          </form>
        </Card>
      </div>
      );
    }
  }

  return <InlineLabelForm />
}
```


#### Stepper Form

```jsx
import { Button, Card, Stepper, Text, Badge, Dropdown, Label, InputMask, Avatar, Textarea, Switch } from '@innovaccer/design-system';



() => {
  const steps = [
    {
      label: 'Define Input/Output',
      value: 'Define_Input_Output'
    },
    {
      label: 'Add Configuration',
      value: 'Add_Configuration'
    },
  ];
  const totalSteps = steps.length;

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
    });
  }

  class StepperForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        activeStep: 0,
        completedStep: -1,
        data: {},
        configuration: {},
      };

      this.onChangeStep = this.onChangeStep.bind(this);
      this.onClickNext = this.onClickNext.bind(this);
      this.onChangeOutput = this.onChangeOutput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.renderButton = this.renderButton.bind(this);
    }

    onChangeStep(activeStep) {
      this.setState({
        activeStep
      })
    }

    onChangeOutput(value, name) {
      const data = {
        ...this.state.data,
        [name]: value,
      };

      this.setState({
        data
      });
    }

    onClickNext() {
      const { activeStep, completedStep } = this.state;
      const updatedActive = activeStep > completedStep ? activeStep + 1 : completedStep + 1;
      this.setState({
        activeStep: updatedActive,
        completedStep: activeStep > completedStep ? activeStep : completedStep
      });
    }

    onSubmit(event) {
      event.preventDefault();
      console.log(this.state.data);
      console.log(this.state.configuration);
      return false;
    }

    renderButton() {
      if (this.state.activeStep + 1 === totalSteps) {
        return <Button appearance="success" type="submit">Save</Button>
      }

      return <Button appearance="primary" onClick={this.onClickNext}>Next</Button>
    }

    render() {
      const { value } = steps[this.state.activeStep];

      return (
        <div className="w-75">
          <Card className="px-7 py-6">
            <form onSubmit={this.onSubmit}>
              <div className="d-flex justify-content-between">
                <Stepper
                  steps={steps}
                  active={this.state.activeStep}
                  completed={this.state.completedStep}
                  onChange={this.onChangeStep}
                />
                {this.renderButton()}
              </div>
              <div className={value !== 'Define_Input_Output' ? 'd-none' : ''}>
                <div className="d-flex mr-3 mt-7 mb-2">
                  <Text weight="strong" className="mr-4">Source</Text>
                  <Badge appearance="warning">2 Inputs</Badge>
                </div>
                <Text size="small" appearance="subtle">
                  The system automatically creates collection for multiple support.
                </Text>
                <div className="w-50 mt-4">
                  <Dropdown
                    options={options}
                    placeholder="Input Collection 1"
                    className="mb-4"
                    onChange={(value) => this.onChangeOutput(value, 'collection1')}
                  />
                  <Dropdown
                    options={options}
                    placeholder="Input Collection 2"
                    onChange={(value) => this.onChangeOutput(value, 'collection2')}
                  />
                </div>
                <div className="d-flex mr-3 mt-8 mb-2">
                  <Text weight="strong" className="mr-4">Destination</Text>
                  <Badge appearance="success">8 Outputs</Badge>
                </div>
                <Text size="small" appearance="subtle">
                  The system automatically creates collection for multiple support.
                </Text>
                <div className="w-50 mt-6">
                  <Label withInput={true}>Destination Collection</Label>
                  <Dropdown
                    options={options}
                    placeholder="Select Destination"
                    onChange={(value) => this.onChangeOutput(value, 'collection')}
                  />
                </div>
                <div className="mt-6 w-50">
                  <Label withInput={true} required>Prefix</Label>
                  <InputMask
                    mask={[/\d/, '_', /\d/, '_', /\d/]}
                    name="prefix"
                    placeholder="<workspace_id>_<workflow_id>_<pipeline_id>"
                    placeholderChar="-"
                    onChange={(e) => this.onChangeOutput(e.target.value, e.target.name)}
                  />
                </div>
                <div className="w-25 mt-6">
                  <Label withInput={true} required>Retention</Label>
                  <Dropdown options={options} onChange={(value) => this.onChangeOutput(value, 'retention')} />
                  <Label className="mt-6" withInput={true}>Visibility Clarification</Label>
                  <Dropdown options={options} onChange={(value) => this.onChangeOutput(value, 'clarification')} />
                </div>
              </div>
              <div className={value !== 'Add_Configuration' ? 'd-none' : ''}>
                <div className="d-flex mt-7">
                  <Avatar className="mr-5" firstName="A" appearance="success" />
                  <div className="d-flex flex-column">
                    <Text weight="strong" className="mb-2">Job Configuration</Text>
                    <Text size="small" appearance="subtle">
                      The system automatically creates collection for multiple support.
                    </Text>
                  </div>
                </div>
                <div className="w-25 mt-6">
                  <Label withInput={true} required>Mode</Label>
                  <Dropdown
                    options={options}
                    onChange={(value) => {
                      this.setState({
                        configuration: { ...this.state.configuration, mode: value }
                      });
                    }}
                  />
                </div>
                <div className="mt-6 w-50">
                  <Label withInput={true} required>Regex</Label>
                  <Textarea
                    rows={3}
                    onChange={(e, value) => {
                      this.setState({
                        configuration: { ...this.state.configuration, regex: value }
                      });
                    }}
                  />
                </div>
                <Label className="mt-6" withInput={true} required>Retention</Label>
                <Switch appearance="primary" defaultChecked={true} className="d-flex" />
              </div>
            </form>
          </Card>
        </div>
      );
    }

  }

  return <StepperForm />
}
```


#### Time Period Form

```jsx
import { Card, Heading, Text, Label, Dropdown, Link, DateRangePicker, Slider, Paragraph, Button } from '@innovaccer/design-system';



() => {
  class TimePeriodForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        time: 8,
        budget: 60
      };
    }

    render() {
      const options = [];
      for (let i = 1; i <= 10; i++) {
        options.push({
          label: `Option ${i}`,
          value: `Option ${i}`,
        });
      }

      return (
        <div className="w-75">
          <Card className="px-7 py-6">
            <Heading className="mb-6" size="s">Configure Initiative</Heading>
            <Text weight="strong">Population Filter</Text>
            <div className="d-flex mt-5 mb-4">
              <div className="mr-6" style={{ width: 'var(--spacing-8)' }}>
                <Label withInput={true}>Region</Label>
                <Dropdown options={options} />
              </div>
              <div style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Organization</Label>
                <Dropdown options={options} />
              </div>
            </div>
            <Link target="_blank" href="#">Add organizations</Link>
            <div className="my-6 pt-6" style={{ borderTop: 'var(--spacing-xs) solid var(--secondary-light)' }}>
              <Text weight="strong">Time Period</Text>
              <div className="mt-5">
                <DateRangePicker withInput />
              </div>
              <Slider
                className="mt-6 mb-7"
                label="Care Manager - Time Allocation"
                min={1}
                max={10}
                stepSize={1}
                value={this.state.time}
                onChange={(value) => this.setState({ time: value })}
                labelRenderer={(value) => this.state.time === value ? `${value}` : ''}
              />
              <Paragraph appearance="subtle">Limit to <b>{this.state.time} hours</b> per day per Care Manager</Paragraph>
              <Slider
                className="mt-6 mb-7"
                label="Budget Allocation"
                min={10}
                max={100}
                stepSize={10}
                labelStepSize={10}
                value={this.state.budget}
                onChange={(value) => this.setState({ budget: value })}
                labelRenderer={(value) => this.state.budget === value ? `$${value}K` : ''}
              />
              <Paragraph appearance="subtle">Allocated Budget: <b>${this.state.budget}K</b> </Paragraph>
            </div>
            <div
              className="mt-7 pt-5 d-flex justify-content-end"
              style={{ borderTop: 'var(--spacing-xs) solid var(--secondary-light)' }}
            >
              <Button appearance="basic" className="mr-4">Cancel</Button>
              <Button appearance="success">Initiate</Button>
            </div>
          </Card>
        </div>
      );
    }
  }

  return <TimePeriodForm />
}
```


#### Verification Code Input

```jsx
import { Text, Message, Card, Label, VerificationCodeInput, Spinner } from '@innovaccer/design-system';

() => {
  class VerificationCodeInputCard extends React.Component {
    constructor(props) {
      super(props);

      this.correctValue = '555123';
      this.state = {
        isTimerStarted: false,
        timer: 30,
        loading: false,
        value: '',
        error: false,
      };

      this.onToogleLink = this.onToogleLink.bind(this);
      this.onCompleteHandler = this.onCompleteHandler.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      const { timer, isTimerStarted } = this.state;

      if (isTimerStarted
        && (timer !== prevState.time || prevState.isTimerStarted !== isTimerStarted)
      ) {
        if (timer > 0) {
          setTimeout(() => {
            this.setState({
              timer: timer - 1,
            })
          }, 1000);
        }

        if (timer === 0) {
          this.setState({
            isTimerStarted: !isTimerStarted,
          });
        }
      }
    }

    onToogleLink() {
      if (this.state.loading || !!this.state.value) return;
      this.setState({
        isTimerStarted: true,
        timer: 30
      });
    };

    onCompleteHandler(value) {
      this.setState({
        loading: true,
        timer: 0,
        isTimerStarted: false,
      });

      setTimeout(() => {
        this.setState({
          value: value === this.correctValue ? value : '',
          loading: false,
          error: value !== this.correctValue
        });
      }, 2000);
    };

    render() {
      const { isTimerStarted, timer, loading, value, error } = this.state;
      const time = timer < 10 ? `0${timer}` : timer;

      return (
        <div>
          <div className="mb-5">
            <Text weight="strong">Note: </Text>
            <Text weight="medium">{`Verified value of Verification Code Input is ${this.correctValue} in this example.`}</Text>
          </div>
          <div className="w-50">
            {(value || error) && (
              <Message
                appearance={error ? 'alert' : 'success'}
                description={error? 'The code that you have entered is invalid or incorrect. Try again.' : 'Verification Successful.'}
                className="mb-5"
              />
            )}
            <Card className="py-6 px-6">
              <div className="d-flex flex-column">
                <Text weight="strong" size="large">Enter Verification Code</Text>
                <Text className="mt-3" appearance="subtle">
                  We have sent a 6 digit verification code to your phone (555) 555-1234
                </Text>
              </div>
              <Label withInput={true} className="mt-7">Verification code</Label>
              <div className="d-flex align-items-center">
                <VerificationCodeInput
                  fields={6}
                  onComplete={this.onCompleteHandler}
                  disabled={loading || !!value}
                />
                {loading && <Spinner className="ml-5" size="medium" />}
              </div>
              {isTimerStarted ? (
                <Text className="mt-7 d-flex" weight="medium">
                  {`Haven't recieved the code? Resend code in 0:${time}`}
                </Text>
              ) : (
                  <Text
                    className="mt-7 d-flex cursor-pointer"
                    appearance={loading || !!value ? 'disabled' : 'link'}
                    weight="medium"
                    onClick={this.onToogleLink}
                  >
                    Resend Code
                  </Text>
                )}
            </Card>
          </div>
        </div>
      );
    }
  };

  return <><VerificationCodeInputCard /></>
}
```


#### Blank Template

```jsx
import { Row, Column } from '@innovaccer/design-system';

() => {
  return(
    <Row className="d-flex flex-column bg-secondary-lightest vh-100 p-6">
      <Column>
        <div className="h-100 bg-light" />
      </Column>
    </Row>
  );
}
```


#### Level 1 Header Template

```jsx
import { Navigation, Button, Breadcrumbs, Badge, PageHeader, Row, Column } from '@innovaccer/design-system';

() => {
  const navigationPosition = 'center';
  const title = 'Page title';
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
    },
    {
      name: 'menu_2',
      label: 'Menu 2'
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true
    }
  ];
  const breadcrumbData = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
    }
  ];

  const options = {
    navigationPosition,
    title,
    navigation: <Navigation menus={navigationData} onClick={menu => console.log(menu)} active={{ name: 'menu_1' }} />,
    actions: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button appearance="primary">Primary</Button>
      </div>
    ),
    breadcrumbs: (
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => console.log(link)}
      />
    ),
    badge: (
      <Badge appearance="secondary">Badge</Badge>
    )
  };

  return(
    <div className="d-flex flex-column bg-secondary-lightest vh-100">
      <PageHeader
        {...options}
      />
      <Row className="h-100 p-6">
        <Column className="h-100 bg-light" />
      </Row>
    </div>
  );
}
```


#### Mini sidebar Template

```jsx
import { Row, Collapsible, VerticalNav, Column, PageHeader, Icon, Heading } from '@innovaccer/design-system';

() => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return(
    <Row className="vh-100 bg-secondary-lightest">
        <Collapsible expanded={expanded} onToggle={setExpanded}>
          <VerticalNav
            menus={menus}
            expanded={expanded}
            active={active}
            onClick={onClickHandler}
            hoverable={false}
          />
        </Collapsible>
      <Column
        className="d-flex flex-column pb-6"
      >
        <PageHeader title="Page title" separator={false} />
        <Row className="px-6 h-100">
          <Column className="h-100 bg-light" />
        </Row>
      </Column>
      <Column size={'auto'}>
        <div className="d-flex flex-column py-4">
          <Icon name="assignment_ind" className="m-4"/>
          <Icon name="account_circle" className="m-4"/>
        </div>
      </Column>
      <Column
        size={3}
        className="d-flex flex-column pb-6"
      >
        <Heading className='px-6 py-4'>Page Title</Heading>
        <Row className="px-6 h-100">
          <Column className="h-100 bg-light" />
        </Row>
      </Column>
    </Row>
  );
}
```


#### Narrow width content Template

```jsx
import { Row, Collapsible, VerticalNav, Column, PageHeader } from '@innovaccer/design-system';

() => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return(
    <Row className="vh-100 bg-secondary-lightest flex-nowrap">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={menus}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </Collapsible>
      <Row className="justify-content-center">
        <Column size={8} className="d-flex flex-column pb-6">
          <PageHeader
            title="Page title"
            separator={false}
          />
          <Row className="px-6 h-100">
            <Column className="h-100 bg-light" />
          </Row>
        </Column>
      </Row>
    </Row>
  );
}
```


#### Resource Table Template

```jsx
import { PageHeader, Row, Column } from '@innovaccer/design-system';

() => {
  return(
    <div className="d-flex flex-column bg-secondary-lightest vh-100 pb-6">
      <PageHeader
        title="Page title"
        separator={false}
      />
      <Row className="px-6 h-100">
        <Column className="h-100 bg-light" />
      </Row>
    </div>
  );
}
```


#### Sidebar Template

```jsx
import { Row, Collapsible, VerticalNav, Column, PageHeader } from '@innovaccer/design-system';

() => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return(
    <Row className="vh-100 bg-secondary-lightest">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={menus}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </Collapsible>
      <Column className="d-flex flex-column pb-6">
        <PageHeader
          title="Page title"
          separator={false}
        />
        <Row className="px-6">
          <Column className="h-100 bg-light" />
        </Row>
      </Column>
    </Row>
  );
}
```


#### Async Table With Filters

```jsx
import {  } from '@innovaccer/design-system';

() => <></>
```


#### Sync Table With Filters

```jsx
import {  } from '@innovaccer/design-system';

() => <></>
```


#### Table with header

```jsx
import { Popover, Button, Checkbox, Icon, Input, Dropdown, Placeholder, PlaceholderParagraph, Label, Card, Grid, Pagination, Subheading, DatePicker, Table } from '@innovaccer/design-system';

/*
import * as React from 'react';
import { debounce } from 'throttle-debounce';
import {
  Card,
  Button,
  Label,
  Grid,
  Placeholder,
  PlaceholderParagraph,
  Dropdown,
  Input,
  Checkbox,
  Subheading,
  Icon,
  Pagination,
  DatePicker,
} from '@innovaccer/design-system';
import './style.css';

// styles.css
.Table-container {
  display: flex;
  height: 100%;
}

.Table-filters {
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
}

.Table-filters--vertical {
  flex-direction: column;
  height: 100%;
  width: var(--spacing-9);
  padding: 0 var(--spacing-l);
}

.Table-filtersHeading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Table-filtersCloseIcon {
  cursor: pointer;
}

.Table-filters--vertical .Table-filter {
  padding: var(--spacing) 0;
}

.Table-filters--vertical .Table-filter:first-of-type {
  padding-top: var(--spacing-l);
}

.Table-filters--vertical .Table-filter:last-of-type {
  padding-bottom: var(--spacing-l);
}

.Table-filters--horizontal .Table-filter {
  padding: 0 var(--spacing-m);
}

.Table-filters--horizontal .Table-filter:first-of-type {
  padding-left: 0;
}

.Table-filters--horizontal .Table-filter:last-of-type {
  padding-right: 0;
}

.Table-filter .Input {
  min-width: unset;
}
*/

() => {
  const getSelectAll = (data) => {
    if (data.length) {
      const anyUnSelected = data.some(d => !d._selected);
      const allUnSelected = data.every(d => !d._selected);
  
      const indeterminate = data.length >= 0 && anyUnSelected && !allUnSelected;
      const checked = !indeterminate && !allUnSelected;
  
      return { indeterminate, checked };
    }
    return { indeterminate: false, checked: false };
  };
  
  const getTotalPages = (totalRecords, pageSize) => Math.ceil(totalRecords / pageSize);
  
  const hasSchema = schema => (schema && !!schema.length);

  const getPluralSuffix = (count) => count > 1 ? 's' : '';
  
  const updateBatchData = (data, rowIndexes, dataUpdate) => {
    const updatedData = [...data];
    for (const rowIndex of rowIndexes) {
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        ...dataUpdate
      };
    }
  
    return updatedData;
  };

  const moveToIndex = (arr, from, to) => {
    if (from === to) return arr;
  
    let newArr = arr;
    if (from < to) {
      newArr = [
        ...arr.slice(0, from),
        ...arr.slice(from + 1, to + 1),
        arr[from],
        ...arr.slice(to + 1)
      ];
    } else {
      newArr = [
        ...arr.slice(0, to),
        arr[from],
        ...arr.slice(to, from),
        ...arr.slice(from + 1)
      ];
    }
  
    return newArr;
  };

  const DraggableDropdown = (props) => {
    const {
      options,
      onChange
    } = props;
  
    const [open, setOpen] = React.useState(false);
    const [tempOptions, setTempOptions] = React.useState(options);
    const [triggerWidth, setTriggerWidth] = React.useState('var(--spacing-8)');
  
    React.useEffect(() => {
      setTempOptions(options);
    }, [open]);
  
    const handleParentChange = (e) => {
      setTempOptions(tempOptions.map(option => ({ ...option, selected: e.target.checked })));
    };
  
    const handleChildChange = (e, index) => {
      const newOptions = [...tempOptions];
      newOptions[index] = {
        ...newOptions[index],
        selected: e.target.checked
      };
  
      setTempOptions(newOptions);
    };
  
    const onToggleHandler = (newOpen) => {
      setOpen(newOpen);
    };
  
    const onCancelHandler = () => {
      setOpen(false);
    };
  
    const onApplyHandler = () => {
      setOpen(false);
  
      if (onChange) onChange(tempOptions);
    };
  
    return (
      <div className="Dropdown">
        <Popover
          open={open}
          onToggle={onToggleHandler}
          trigger={(
            <Button
              ref={el => {
                // setTriggerWidth(`${el.clientWidth}px`);
              }}
              size="tiny"
              appearance="transparent"
              icon="keyboard_arrow_down_filled"
              iconAlign="right"
            >
              {`Showing ${options.filter(option => option.selected).length} of ${options.length} column${getPluralSuffix(options.length)}`}
            </Button>
          )}
          triggerClass="w-100"
          customStyle={{
            width: triggerWidth
          }}
          className="Header-draggableDropdown"
        >
          <div className="Dropdown-wrapper">
            <div className="OptionWrapper">
              <Checkbox
                className="OptionCheckbox"
                label="Select All"
                checked={tempOptions.every(option => option.selected)}
                indeterminate={tempOptions.some(option => option.selected)
                  && tempOptions.some(option => !option.selected)}
                onChange={handleParentChange}
              />
            </div>
            {tempOptions.map((option, index) => {
              return (
                <div
                  key={option.value}
                  className="OptionWrapper d-flex flex-space-between align-items-center cursor-pointer"
                  draggable={true}
                  onDragStart={e => {
                    e.dataTransfer.setData('index', `${index}`);
                  }}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => {
                    const from = +e.dataTransfer.getData('index');
                    const to = index;
  
                    if (from !== to) setTempOptions(moveToIndex(tempOptions, from, to));
                  }}
                >
                  <Checkbox
                    className="OptionCheckbox"
                    name={option.value}
                    label={option.label}
                    checked={tempOptions[index].selected}
                    onChange={e => handleChildChange(e, index)}
                  />
                  <Icon name="drag_handle" className="mr-4" />
                </div>
              );
            })}
          </div>
          <div className="Dropdown-buttonWrapper">
            <Button className="mr-4" size="tiny" onClick={onCancelHandler}>Cancel</Button>
            <Button appearance="primary" size="tiny" onClick={onApplyHandler}>Apply</Button>
          </div>
        </Popover>
      </div>
    );
  };
  
  const Header = (props) => {
    const {
      loading,
      error,
      data,
      schema,
      showHead,
      withPagination,
      page,
      pageSize,
      withCheckbox,
      updateSchema,
      filterList = {},
      updateFilterList,
      totalRecords = 0,
      onSelectAll,
      searchPlaceholder,
      selectAll,
      searchTerm,
      updateSearchTerm,
      allowSelectAll,
      updateShowVerticalFilters
    } = props;
  
    const [selectAllRecords, setSelectAllRecords] = React.useState(false);
    const [flag, setFlag] = React.useState(true);
  
    React.useEffect(() => {
      setFlag(!flag);
    }, [schema]);
  
    React.useEffect(() => {
      if (selectAll && selectAll.checked) {
        if (onSelectAll) onSelectAll(true, selectAllRecords);
      }
    }, [selectAllRecords]);
  
    React.useEffect(() => {
      if (selectAll && !selectAll.checked) setSelectAllRecords(false);
    }, [selectAll]);
  
    const filterSchema = schema.filter(s => s.filters);
  
    const onSearchChange = e => {
      const value = e.target.value;
      if (updateSearchTerm) {
        updateSearchTerm(value);
      }
    };
  
    const onFilterChange = (name, filters) => {
      const newFilterList = {
        ...filterList,
        [name]: filters
      };
  
      if (updateFilterList) {
        updateFilterList(newFilterList);
      }
    };
  
    const columnOptions = schema.map(s => ({
      label: s.displayName,
      value: s.name,
      selected: !s.hidden
    }));
  
    const onDynamicColumnUpdate = (options) => {
      const newSchema = options.map(option => ({
        ...schema.find(colSchema => colSchema.name === option.value),
        hidden: !option.selected
      }));
  
      if (updateSchema) updateSchema(newSchema);
    };
  
    const selectedCount = data.filter(d => d._selected).length;
    const startIndex = (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, totalRecords);
  const label = error
    ? `Showing 0 items`
    : withCheckbox && selectedCount
      ? selectAllRecords
        ? `Selected all ${totalRecords} item${getPluralSuffix(totalRecords)}`
        : `Selected ${selectedCount} item${getPluralSuffix(totalRecords)} on this page`
      : withPagination
        ? `Showing ${startIndex}-${endIndex} of ${totalRecords} item${getPluralSuffix(totalRecords)}`
        : `Showing ${totalRecords} item${getPluralSuffix(totalRecords)}`;
  
    return (
      <div className="Header">
        <div className="Header-content Header-content--top">
          <div className="Header-search">
            <Input
              name="GridHeader-search"
              icon="search"
              placeholder={searchPlaceholder}
              onChange={onSearchChange}
              value={searchTerm}
              onClear={() => updateSearchTerm && updateSearchTerm('')}
              disabled={loading && !hasSchema(schema)}
            />
          </div>
          <div className="Header-dropdown">
            <div className="Table-filters Table-filters--horizontal">
              <div className="Table-filter">
                <Dropdown
                  key="name"
                  disabled={loading}
                  withCheckbox={true}
                  showApplyButton={true}
                  inlineLabel={"Name"}
                  options={[
                    { label: 'A-G', value: 'a-g', selected: true },
                    { label: 'H-R', value: 'h-r', selected: true },
                    { label: 'S-Z', value: 's-z', selected: true },
                  ]}
                  onChange={selected => onFilterChange("name", selected)}
                />
              </div>
              <div className="Table-filter">
                <Button
                  icon="add"
                  onClick={() => updateShowVerticalFilters(true)}
                >
                  More Filters
                </Button>
              </div>
            </div>
          </div>
          <div className="Header-actions">
          </div>
        </div>
        <div className="Header-content Header-content--bottom">
          <div className="Header-label">
            {showHead && !loading && (
              <Checkbox
                {...selectAll}
                onChange={event => {
                  if (onSelectAll) onSelectAll(event.target.checked);
                }}
              />
            )}
            {loading ? (
              <Placeholder withImage={!showHead && withCheckbox}>
                <PlaceholderParagraph length={'small'} size={'s'} />
              </Placeholder>
            ) : (
                <>
                  <Label>{label}</Label>
                  {withPagination && selectAll.checked && allowSelectAll && (
                    <div className="ml-4">
                      {!selectAllRecords ? (
                        <Button
                          size="tiny"
                          onClick={() => setSelectAllRecords(true)}
                        >
                          {`Select all 	otalRecords} items`}
                        </Button>
                      ) : (
                          <Button
                            size="tiny"
                            onClick={() => setSelectAllRecords(false)}
                          >
                            Clear selection
                          </Button>
                        )
                      }
                    </div>
                  )}
                </>
              )
            }
          </div>
          <div className="Header-hideColumns">
            <DraggableDropdown
              options={columnOptions}
              onChange={onDynamicColumnUpdate}
            />
          </div>
        </div>
      </div>
    );
  };
  
  Header.defaultProps = {
    schema: [],
    data: [],
    searchPlaceholder: 'Search',
    dynamicColumn: true
  };
  
  class Table extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        schema: [],
        page: 1,
        totalRecords: 0,
        sortingList: props.sortingList || [],
        filterList: props.filterList || {},
        loading: true,
        error: false,
        selectAll: getSelectAll([]),
        searchTerm: undefined,
        showVerticalFilters: props.showVerticalFilters,
      };
  
      this.pageSize = 4;
      this.searchDebounceDuration = 750;
      this.debounceUpdate = debounce(this.searchDebounceDuration, this.updateDataFn);
    }

    componentDidMount() {
      this.updateData();
    }
  
    componentDidUpdate(_prevProps, prevState) {
      if (prevState.page !== this.state.page) {
        const { onPageChange } = this.props;
        if (onPageChange) onPageChange(this.state.page);
      }
  
      if (prevState.page !== this.state.page
        || prevState.filterList !== this.state.filterList
        || prevState.sortingList !== this.state.sortingList
        || prevState.searchTerm !== this.state.searchTerm) {
        if (!this.props.loading) this.updateData({});
      }
    }

    updateData() {
      this.setState({
        loading: true
      });
  
      this.debounceUpdate();
    }
  
    updateDataFn() {
      this.onSelect(-1, false);
  
      const {
        fetchData,
      } = this.props;
  
      const {
        page,
        sortingList,
        filterList,
        searchTerm
      } = this.state;
  
      const {
        pageSize
      } = this;
  
      const opts = {
        page,
        pageSize,
        sortingList,
        filterList,
        searchTerm,
      };
  
      this.setState({
        loading: true
      });
      if (fetchData) {
        fetchData(opts)
          .then((res) => {
            const data = res.data;
            const schema = this.state.schema.length ? this.state.schema : res.schema;
            this.setState({
              data,
              schema,
              selectAll: getSelectAll(data),
              totalRecords: res.count,
              loading: false,
              error: !data.length
            });
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: true,
              data: []
            });
          });
      }
    }
  
    onSelect(rowIndexes, selected) {
      const {
        data
      } = this.state;
  
      const {
        onSelect
      } = this.props;
  
      const indexes = [rowIndexes];
      let newData = data;
      if (rowIndexes >= 0) {
        newData = updateBatchData(data, indexes, {
          _selected: selected
        });
  
        this.setState({
          data: newData,
          selectAll: getSelectAll(newData)
        });
      }
  
      if (onSelect) {
        onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter(d => d._selected));
      }
    }
  
    onSelectAll(selected, selectAll) {
      const {
        onSelect
      } = this.props;
  
      const {
        data
      } = this.state;
  
      const indexes = Array.from({ length: data.length }, (_, i) => i);
  
      const newData = updateBatchData(data, indexes, {
        _selected: selected
      });
  
      if (onSelect) {
        onSelect(indexes, selected, newData.filter(d => d._selected), selectAll);
      }
  
      this.setState({
        data: newData,
        selectAll: getSelectAll(newData)
      });
    }
  
    onPageChange(newPage) {
      this.setState({
        page: newPage
      });
    }
  
    onFilterChange(name, selected) {
      const {
        filterList
      } = this.props;
  
      const newFilterList = {
        ...filterList,
        [name]: selected
      };
  
      this.updateFilterList(newFilterList);
    }
  
    updateShowVerticalFilters(val) {
      this.setState({
        showVerticalFilters: val
      });
    }
  
    updateSchema(newSchema) {
      this.setState({
        schema: newSchema
      });
    }
  
    updateSortingList(newSortingList) {
      const {
        multipleSorting
      } = this.props;
  
      this.setState({
        sortingList: multipleSorting ? [...newSortingList] : newSortingList.slice(-1),
        page: 1,
      });
    }
  
    updateFilterList(newFilterList) {
      this.setState({
        filterList: newFilterList,
        page: 1,
      });
    }
  
    updateSearchTerm(newSearchTerm) {
      this.setState({
        searchTerm: newSearchTerm,
        page: 1
      });
    }
  
    render() {
      const {
        loaderSchema,
      } = this.props;
  
      const withCheckbox = true;
      const withPagination = true;
      const {
        pageSize
      } = this;
  
      const {
        totalRecords,
        showVerticalFilters,
        loading
      } = this.state;
      const totalPages = getTotalPages(totalRecords, pageSize);

      const classNames = showVerticalFilters ? 'Table-verticalFilter' : 'w-100';

      return (
        <div className="Table-container">
          <div className={classNames}>
            <Card className="Table overflow-hidden">
              <div className="Table-header">
                <Header
                  {...this.state}
                  updateSchema={this.updateSchema.bind(this)}
                  updateFilterList={this.updateFilterList.bind(this)}
                  updateSearchTerm={this.updateSearchTerm.bind(this)}
                  updateShowVerticalFilters={this.updateShowVerticalFilters.bind(this)}
                  onSelectAll={this.onSelectAll.bind(this)}
                  withCheckbox={withCheckbox}
                  withPagination={withPagination}
                  pageSize={pageSize}
                />
              </div>
              <div className="Table-grid">
                <Grid
                  {...this.state}
                  updateData={this.updateData.bind(this)}
                  updateSchema={this.updateSchema.bind(this)}
                  updateSortingList={this.updateSortingList.bind(this)}
                  updateFilterList={this.updateFilterList.bind(this)}
                  withCheckbox={withCheckbox}
                  onSelect={this.onSelect.bind(this)}
                  onSelectAll={this.onSelectAll.bind(this)}
                  showMenu={true}
                  type="data"
                  size="comfortable"
                  draggable={true}
                  withPagination={withPagination && totalPages > 1}
                  pageSize={pageSize}
                  loaderSchema={loaderSchema}
                />
              </div>
              {withPagination && (totalPages > 1) && (
                <div className="Table-pagination">
                  <Pagination
                    page={this.state.page}
                    totalPages={getTotalPages(totalRecords, pageSize)}
                    type="jump"
                    onPageChange={this.onPageChange.bind(this)}
                  />
                </div>
              )}
            </Card>
          </div>
          <div className={`Table-filters Table-filters--vertical${!showVerticalFilters ? ' d-none' : ''}`}>
            <div className="Table-filtersHeading">
              <Subheading>Filters</Subheading>
              <Icon name="close" className="Table-filtersCloseIcon" onClick={() => this.setState({ showVerticalFilters: false })} />
            </div>
            <div>
              <div className="Table-filter">
                <Dropdown
                  key="gender"
                  disabled={loading}
                  withCheckbox={true}
                  showApplyButton={true}
                  inlineLabel={"Gender"}
                  options={[
                    { label: 'Male', value: 'male', selected: true },
                    { label: 'Female', value: 'female', selected: true },
                  ]}
                  onChange={selected => this.onFilterChange("gender", selected)}
                />
              </div>
              <div className="Table-filter">
                <DatePicker
                  withInput={true}
                  label="Date"
                  inputOptions={{
                    placeholder: "mm/dd/yyyy",
                    disabled: loading,
                    minWidth: 'unset'
                  }}
                  onDateChange={(_date, dateStr) => this.onFilterChange("date", dateStr)}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  const translateData = (schema, data) => {
    let newData = data;

    if (schema.translate) {
      const translatedData = schema.translate(data);
      newData = {
        ...newData,
        [schema.name]: typeof translatedData === 'object' ? {
          ...newData[schema.name],
          ...translatedData
        } : translatedData
      };
    }
    if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

    return newData;
  }

  const onFilterChange = {
    "name": (a, filters) => {
      for (const filter of filters) {
        switch (filter) {
          case 'a-g':
            if (a.firstName[0].toLowerCase() >= 'a' && a.firstName[0].toLowerCase() <= 'g') return true;
            break;
          case 'h-r':
            if (a.firstName[0].toLowerCase() >= 'h' && a.firstName[0].toLowerCase() <= 'r') return true;
            break;
          case 's-z':
            if (a.firstName[0].toLowerCase() >= 's' && a.firstName[0].toLowerCase() <= 'z') return true;
            break;
        }
      }
      return false;
    },
    "gender": (a, filters) => {
      for (const filter of filters) {
        if (a.gender.toLowerCase() === filter) return true;
      }
      return false;
    }
  };

  const filterData = (data, filterList) => {
    let filteredData = data;
    if (filterList) {
      Object.keys(filterList).forEach(name => {
        const filters = filterList[name];
        const onChange = onFilterChange[name];
        if (onChange) {
          filteredData = filteredData.filter(d => onChange(d, filters));
        }
      });
    }

    return filteredData;
  };

  const sortData = (schema, data, sortingList) => {
    const sortedData = [...data];
    sortingList.forEach(l => {
      const sIndex = schema.findIndex(s => s.name === l.name);
      if (sIndex !== -1) {
        const defaultComparator = (a, b) => {
          const aData = translateData(schema[sIndex], a);
          const bData = translateData(schema[sIndex], b);
          return aData[l.name].title.localeCompare(bData[l.name].title);
        };

        const {
          comparator = defaultComparator
        } = schema[sIndex];

        sortedData.sort(comparator);
        if (l.type === 'desc') sortedData.reverse();
      }
    });

    return sortedData;
  };

  const paginateData = (data, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    return paginatedData;
  };

  const data = [
    {
        "firstName": "Brooke",
        "lastName": "Heeran",
        "email": "bheeran0@altervista.org",
        "gender": "Female",
        "status": "Failed"
    },
    {
        "firstName": "Frazer",
        "lastName": "Cathro",
        "email": "fcathro1@ucla.edu",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Lemmie",
        "lastName": "Ciric",
        "email": {
            "title": "lciric2@dmoz.org",
            "metaList": [
                "First",
                "Second"
            ]
        },
        "gender": "Male",
        "status": "Completed"
    },
    {
        "firstName": "Randy",
        "lastName": "Boatwright",
        "email": "rboatwright3@arstechnica.com",
        "status": "Completed",
        "gender": "Male"
    },
    {
        "firstName": "Rolando",
        "lastName": "Cyples",
        "email": "rcyples4@biglobe.ne.jp",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Lem",
        "lastName": "Males",
        "email": "lmales5@admin.ch",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Sayres",
        "lastName": "Adelberg",
        "email": "sadelberg6@uol.com.br",
        "gender": "Male",
        "status": "Completed"
    },
    {
        "firstName": "Murray",
        "lastName": "Bravington",
        "email": "mbravington7@drupal.org",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Jena",
        "lastName": "Swatheridge",
        "email": "jswatheridge8@npr.org",
        "gender": "Female",
        "status": "Failed"
    },
    {
        "firstName": "Annabel",
        "lastName": "Nelsey",
        "email": "anelsey9@google.com",
        "gender": "Female",
        "status": "Completed"
    }
];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
      }),
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      separator: true,
      cellRenderer: (props) => {
        const {
          loading
        } = props;

        if (loading) return <></>;

        return (
          <Button appearance={'primary'}>Button</Button>
        );
      }
    },
  ];

  const fetchData = (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;

    const onSearch = (d, searchTerm = '') => {
      return (
        d.firstName.toLowerCase().match(searchTerm.toLowerCase())
        || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
      );

      return true;
    }

    const filteredData = filterData(data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);

    if (page && pageSize) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            searchTerm,
            schema,
            count: sortedData.length,
            data: slicedData,
          });
        }, 2000);
      });
    }

    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          schema,
          count: sortedData.length,
          data: sortedData,
        });
      }, 2000);
    });
  }

  const loaderSchema = schema.filter(s => {
    const { name, displayName, width, separator, cellType, cellRenderer } = s;
    return {
      name, displayName, width, separator, cellType, cellRenderer
    };
  });

  return (
    <div className="bg-secondary-lightest">
      <Table
        loaderSchema={loaderSchema}
        fetchData={fetchData}
      />
    </div>
  );
}
```


#### Side Nav

```jsx
import { Collapsible, VerticalNav } from '@innovaccer/design-system';

() => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={menus}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </Collapsible>
    </div>
  );
}
```