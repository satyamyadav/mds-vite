# DateRangePicker



### Code Examples

#### Components DatePicker DateRangePicker All

```jsx
import { DateRangePicker, Card } from '@innovaccer/design-system';

() => {
  const withInput = false;

  const open = false;

  const monthsInView = withInput ? 2 : 1;

  const inputFormat = 'dd/mm/yyyy';

  const outputFormat = 'mm/dd/yyyy';

  const startDate = new Date('Jun 20 2023');

  const endDate = new Date('Jun 27 2023');

  const view = 'month';

  const rangeLimit = 0;

  const firstDayOfWeek = 'thursday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (rangeLimit) attr.rangeLimit = rangeLimit;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  if (withInput) {
    return (
      <DateRangePicker
        withInput={withInput}
        open={open}
        monthsInView={monthsInView}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card className="d-inline-flex" shadow="light">
      <DateRangePicker
        withInput={withInput}
        monthsInView={monthsInView}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
}
```


#### DateRangePicker

```jsx
import { Card, DateRangePicker } from '@innovaccer/design-system';

() => {
  // to freeze the object for typescript

  return (
    <div className="d-flex flex-column">
      {Array.from([1, 2, 3], (x, key) => (
        <div key={key} className="mt-5 align-self-start">
          <Card className="d-inline-flex" shadow="light">
            <DateRangePicker
              monthsInView={x}
              startDate={new Date(2023, 11, 3)}
              endDate={new Date(2023, x - 2, 11)}
              yearNav={2023}
              monthNav={11}
            />
          </Card>
        </div>
      ))}
    </div>
  );
}
```


#### DateRangePicker

```jsx
import { Card, DateRangePicker } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex mr-9">
      <Card className="d-inline-flex" shadow="light">
        <DateRangePicker
          startDate={new Date(2023, 2, 3)}
          endDate={new Date(2023, 2, 11)}
          rangeLimit={7}
          yearNav={2023}
          monthNav={2}
        />
      </Card>
    </div>
  );
}
```


#### DateRangePicker

```jsx
import { Card, DateRangePicker } from '@innovaccer/design-system';

() => {
  const values = ['year', 'month', 'date'];

  return (
    <div className="d-flex">
      {values.map((v, index) => (
        <div className="mr-9" key={index}>
          <Card className="d-inline-flex" shadow="light">
            <DateRangePicker
              startDate={new Date(2023, 2, 3)}
              endDate={new Date(2023, 2, 11)}
              view={v}
              yearNav={2023}
              monthNav={2}
            />
          </Card>
        </div>
      ))}
    </div>
  );
}
```


#### Components DatePicker DateRangePicker Variants With Input

```jsx
import { DateRangePicker } from '@innovaccer/design-system';

() => {
  const monthsInView = 2;

  const startDate = new Date('Jan 12 2023');

  const endDate = new Date('Jan 20 2023');

  const inputFormat = 'mm-dd-yyyy';

  const outputFormat = 'yyyy-mm-dd';

  const view = 'year';

  const firstDayOfWeek = 'monday';

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

  return (
    <div className="w-75">
      <DateRangePicker
        withInput={true}
        startDate={startDate}
        endDate={endDate}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        monthsInView={monthsInView}
        startInputOptions={{
          required: true,
        }}
        endInputOptions={{
          required: true,
        }}
        {...attr}
      />
    </div>
  );
}
```


#### Components DatePicker DateRangePicker Variants With Reverse Selection

```jsx
import { DateRangePicker } from '@innovaccer/design-system';

() => {
  const monthsInView = 2;

  const startDate = new Date('Jan 12 2023');

  const endDate = new Date('Jan 20 2023');

  const inputFormat = 'mm-dd-yyyy';

  const outputFormat = 'yyyy-mm-dd';

  const view = 'year';

  const firstDayOfWeek = 'monday';

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

  return (
    <div className="w-75">
      <DateRangePicker
        allowReverseSelection={true}
        withInput={true}
        startDate={startDate}
        endDate={endDate}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        monthsInView={monthsInView}
        startInputOptions={{
          required: true,
        }}
        endInputOptions={{
          required: true,
        }}
        {...attr}
      />
    </div>
  );
}
```


#### Components DatePicker DateRangePicker Variants With Single Input

```jsx
import { DateRangePicker } from '@innovaccer/design-system';

() => {
  const monthsInView = 2;

  const startDate = new Date('Jan 20 2023');

  const endDate = new Date('Jan 28 2023');

  const inputFormat = 'dd/mm/yyyy';

  const outputFormat = 'mm-dd-yyyy';

  const view = 'date';

  const firstDayOfWeek = 'monday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const open = false;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <div className="w-50">
      <DateRangePicker
        withInput={true}
        singleInput={true}
        startDate={startDate}
        endDate={endDate}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        monthsInView={monthsInView}
        inputOptions={{
          required: true,
          label: 'Date',
        }}
        {...attr}
        open={open}
      />
    </div>
  );
}
```


#### Components DatePicker DateRangePicker Variants With Single Input And Reverse Selection

```jsx
import { DateRangePicker } from '@innovaccer/design-system';

() => {
  const monthsInView = 2;

  const startDate = new Date('Jan 20 2023');

  const endDate = new Date('Jan 28 2023');

  const inputFormat = 'dd/mm/yyyy';

  const outputFormat = 'mm-dd-yyyy';

  const view = 'date';

  const firstDayOfWeek = 'monday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const open = false;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <div className="w-50">
      <DateRangePicker
        allowReverseSelection={true}
        withInput={true}
        singleInput={true}
        startDate={startDate}
        endDate={endDate}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        monthsInView={monthsInView}
        inputOptions={{
          required: true,
          label: 'Date',
        }}
        {...attr}
        open={open}
      />
    </div>
  );
}
```