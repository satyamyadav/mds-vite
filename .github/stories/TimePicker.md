# TimePicker

Time picker is used for selecting or entering a time value.

### Code Examples

#### TimePicker

```jsx
import { TimePicker } from '@innovaccer/design-system';

() => {
  const onTimeChange = (val) => {
    console.log(val);
  };

  return (
    <div className="w-25">
      <TimePicker
        inputFormat={'hh:mm AM'}
        outputFormat={'hh:mm AM'}
        onTimeChange={onTimeChange}
      />
    </div>
  );
}
```


#### TimePicker

```jsx
import { TimePicker, HelpText } from '@innovaccer/design-system';

() => {
  const onTimeChange = (val) => {
    console.log(val);
  };

  return (
    <div className="w-25">
      <TimePicker
        inputFormat={'hh:mm AM'}
        outputFormat={'hh:mm AM'}
        onTimeChange={onTimeChange}
        error={true}
      />
      <HelpText error={true} message={'Error message goes here.'} />
    </div>
  );
}
```


#### TimePicker

```jsx
import { Row, Label, TimePicker } from '@innovaccer/design-system';

() => {

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker withSearch={true} disabledSlotList={['12:45 AM', '01:00 AM']} id="12-hour" />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker timeFormat="24-Hour" withSearch={true} disabledSlotList={['00:45', '01:00']} id="24-hour" />
      </div>
    </Row>
  );
}
```


#### TimePicker

```jsx
import { Label, TimePicker } from '@innovaccer/design-system';

() => {

  const [startTime, setStartTime] = React.useState('00:00');

  const onFromChangeHandler = (props) => {
    setStartTime(props);
  };

  return (
    <div className="d-flex">
      <div className="w-25 mr-5">
        <Label withInput={true}>From</Label>
        <TimePicker withSearch={true} startTime="00:15 AM" endTime="11:45 PM" onChange={onFromChangeHandler} id="From" />
      </div>

      <div className="w-25">
        <Label withInput={true}>To</Label>
        <TimePicker withSearch={true} startTime={startTime} endTime="11:45 PM" showDuration={true} id="To" />
      </div>
    </div>
  );
}
```


#### TimePicker

```jsx
import { Row, Label, TimePicker } from '@innovaccer/design-system';

() => {

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker startTime="05:00" withSearch={true} showDuration={true} id="12-hour" />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker startTime="05:00" timeFormat="24-Hour" withSearch={true} showDuration={true} id="24-hour" />
      </div>
    </Row>
  );
}
```


#### TimePicker

```jsx
import { Row, Label, TimePicker } from '@innovaccer/design-system';

() => {

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format (1 hour Interval)</Label>
        <TimePicker withSearch={true} interval={60} id="12-hour" />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format (1 hour Interval)</Label>
        <TimePicker timeFormat="24-Hour" withSearch={true} interval={60} id="24-hour" />
      </div>
    </Row>
  );
}
```


#### TimePicker

```jsx
import { Row, Label, DatePicker, TimePicker } from '@innovaccer/design-system';

() => {

  const [open, setOpen] = React.useState(false);

  const handleDateChange = (date) => {
    if(date) {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
      }, 0);
    }
  };

  return (
    <Row>
      <div className="w-25">
        <Label>Date</Label>
        <DatePicker
          firstDayOfWeek="saturday"
          onDateChange={handleDateChange}
          outputFormat="yyyy/mm/dd"
          withInput={true}
          inputOptions={{
            required: true,
          }}
        />
      </div>
      <div className="w-25 ml-7">
        <Label>Time</Label>
        <TimePicker withSearch={true} open={open} />
      </div>
    </Row>
  );
}
```


#### TimePicker

```jsx
import { Row, Label, TimePicker } from '@innovaccer/design-system';

() => {

  const onChangeHandler = (props) => {
    console.log(props);
  };

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker 
          withSearch={true} 
          startTime="00:00 AM" 
          endTime="11:59 PM" 
          onChange={onChangeHandler} 
          noResultMessage="Invalid Time"
          id="12-hour"
        />
      </div>
      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker
          withSearch={true}
          startTime="00:00 AM"
          endTime="11:59 PM"
          timeFormat="24-Hour"
          onChange={onChangeHandler}
          noResultMessage="Invalid Time"
          id="24-hour"
        />
      </div>
  </Row>
  );
}
```


#### TimePicker

```jsx
import { Label, TimePicker, HelpText } from '@innovaccer/design-system';

() => {

  const onChangeHandler = (props) => {
    console.log(props);
  };

  return (
    <div className="w-25">
      <Label>Time</Label>
      <TimePicker
        withSearch={true}
        startTime="00:00 AM"
        endTime="11:59 PM"
        onChange={onChangeHandler}
        noResultMessage="Invalid Time"
        id="12-hour"
        error={true}
      />
      <HelpText error={true} message={'Error message goes here.'} />
    </div>
  );
}
```