# Calendar

Calendar lets users select a date.

### Code Examples

#### Components Calendar All

```jsx
import { Calendar } from '@innovaccer/design-system';

() => {
  const monthsInView = 1;

  const dateValue = new Date('Jan 11 2023');

  const view = 'date';

  const rangePicker = false;

  const rangeLimit = 0;

  const firstDayOfWeek = 'saturday';

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

  // we redefine this function here because in storybook.json we do not get imported functions.

  const isValid = (validators, ...value) => {
    const iterator = Array.isArray(validators) ? validators : [validators];

    return iterator.every((validator) => validator(...value));
  };

  const translateToDate = (format, val, validators) => {
    if (isValid(validators, val, format)) {
      const separator = format.includes('/') ? '/' : '-';

      let year = -1,
        month = -1,
        date = -1;
      const v = val.split(separator);
      format.split(separator).forEach((f, i) => {
        switch (f) {
          case 'mm':
            month = +v[i] - 1;
            break;
          case 'yyyy':
            year = +v[i];
            break;
          case 'dd':
            date = +v[i];
            break;
        }
      });
      const d = convertToDate({ year, month, date });
      return d;
    } else {
      return undefined;
    }
  };

  const convertToDate = (d, format, validators) => {
    let dateVal;

    if (d) {
      if (typeof d === 'number') {
        dateVal = new Date(d);
      } else if (typeof d === 'string') {
        return format ? translateToDate(format, d, validators) : undefined;
      } else if (!(d instanceof Date)) {
        const { year, month, date } = d;
        dateVal = new Date(year, month, date, 0, 0, 0);
      } else {
        dateVal = d;
      }
    }
    return dateVal;
  };

  return (
    <Calendar
      monthsInView={monthsInView}
      rangePicker={rangePicker}
      jumpView={jumpView}
      date={convertToDate(dateValue)}
      events={{
        '01/12/2023': true,
      }}
      onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
      onRangeChange={(sDate, eDate) => action(`on range change: ${sDate} - ${eDate}`)()}
      view={view}
      firstDayOfWeek={firstDayOfWeek}
      {...attr}
    />
  );
}
```


#### Calendar

```jsx
import { Heading, Calendar } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex mt-8">
      <div className="mr-8">
        <Heading>size: small</Heading>
        <Calendar events={{ '12/21/2023': true }} date={new Date('12/21/2023')} size={'small'} />
      </div>

      <div>
        <Heading>size: large</Heading>
        <Calendar events={{ '12/20/2023': true }} date={new Date('12/21/2023')} size={'large'} />
      </div>
    </div>
  );
}
```


#### Calendar

```jsx
import { Heading, Calendar } from '@innovaccer/design-system';

() => {
  const view = ['date', 'month', 'year'];

  return (
    <>
      <Heading>Disabled before</Heading>
      <div className="d-flex mb-8 justify-content-between">
        {view.map((v, index) => (
          <Calendar key={index} date={new Date(2023, 2, 15)} disabledBefore={new Date(2023, 2, 10)} view={v} />
        ))}
      </div>

      <Heading>Disabled after</Heading>
      <div className="d-flex mb-8 justify-content-between">
        {view.map((v, index) => (
          <Calendar key={index} date={new Date(2023, 2, 15)} disabledAfter={new Date(2023, 2, 20)} view={v} />
        ))}
      </div>

      <Heading>Disabled before and Disabled after</Heading>
      <div className="d-flex justify-content-between">
        {view.map((v, index) => (
          <Calendar
            key={index}
            date={new Date(2023, 2, 15)}
            disabledBefore={new Date(2023, 2, 10)}
            disabledAfter={new Date(2023, 2, 20)}
            view={v}
          />
        ))}
      </div>
    </>
  );
}
```


#### Calendar

```jsx
import { Calendar } from '@innovaccer/design-system';

() => {
  const values = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return (
    <div className="d-flex flex-wrap">
      {values.map((v, index) => (
        <Calendar className="mr-9 mt-5" key={index} date={new Date(2023, 2, 1)} firstDayOfWeek={v} />
      ))}
    </div>
  );
}
```


#### Calendar

```jsx
import { Heading, Calendar } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex mt-8">
      <div className="mr-8">
        <Heading>size: small</Heading>
        <Calendar date={new Date(2023, 2, 15)} size={'small'} view="date" />
      </div>

      <div>
        <Heading>size: large</Heading>
        <Calendar date={new Date(2023, 2, 15)} size={'large'} view="date" />
      </div>
    </div>
  );
}
```


#### Calendar

```jsx
import { Heading, Calendar } from '@innovaccer/design-system';

() => {
  const view = ['year', 'month', 'date'];

  return (
    <>
      <div className="mt-8">
        <Heading>size: small</Heading>
        <div className="d-flex justify-content-between">
          {view.map((v, index) => (
            <Calendar key={index} date={new Date(2023, 2, 15)} size={'small'} view={v} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Heading>size: large</Heading>
        <div className="d-flex">
          {view.map((v, index) => (
            <Calendar key={index} date={new Date(2023, 2, 15)} size={'large'} view={v} />
          ))}
        </div>
      </div>
    </>
  );
}
```