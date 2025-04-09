# DatePicker

Date picker is used for selecting or entering a date value.

### Code Examples

#### Components DatePicker DatePicker All

```jsx
import { DatePicker, Card } from '@innovaccer/design-system';

() => {
  const withInput = false;

  const open = false;

  const closeOnSelect = true;

  const inputFormat = 'dd-mm-yyyy';

  const outputFormat = 'yyyy-mm-dd';

  const dateValue = undefined;

  const view = 'month';

  const firstDayOfWeek = 'sunday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  if (withInput) {
    return (
      <DatePicker
        withInput={withInput}
        closeOnSelect={closeOnSelect}
        open={open}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card className="d-inline-flex" shadow="light">
      <DatePicker
        withInput={withInput}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
}
```


#### DatePicker

```jsx
import { Card, DatePicker } from '@innovaccer/design-system';

() => {
  const values = ['year', 'month', 'date'];

  return (
    <div className="d-flex">
      {values.map((v, index) => (
        <div key={index} className="mr-5">
          <Card className="d-inline-flex" shadow="light">
            <DatePicker date={new Date(2023, 5, 1)} view={v} />
          </Card>
        </div>
      ))}
    </div>
  );
}
```


#### Components DatePicker DatePicker Variants With Input

```jsx
import { DatePicker } from '@innovaccer/design-system';

() => {
  const dateValue = undefined;

  const inputFormat = 'mm/dd/yyyy';

  const outputFormat = 'yyyy/mm/dd';

  const view = 'date';

  const firstDayOfWeek = 'saturday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const closeOnSelect = true;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <div className="w-25">
      <DatePicker
        withInput={true}
        closeOnSelect={closeOnSelect}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate, currValue) => {
          action(`on date change : ${currDate} --- ${currValue}`)();
        }}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        inputOptions={{
          required: true,
        }}
        {...attr}
      />
    </div>
  );
}
```