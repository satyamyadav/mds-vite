# Pills

Pill is used to highlight the count of an item.

### Code Examples

#### Components Pills All

```jsx
import { Pills } from '@innovaccer/design-system';

() => {
  return <Pills>10</Pills>;
}
```


#### Pills

```jsx
import { Pills } from '@innovaccer/design-system';

() => <Pills appearance="alert">10</Pills>
```


#### Pills

```jsx
import { Pills, Text } from '@innovaccer/design-system';

() => {
  const subtle = false;
  const weight = 'strong';
  const children = 10;
  const appearances = [
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
  ];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Pills appearance={appear} subtle={subtle}>
              {children}
            </Pills>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Pills

```jsx
import { Pills, Text } from '@innovaccer/design-system';

() => {
  const ButtonSubtle = true;
  const weight = 'strong';
  const children = 10;
  const appearances = [
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
  ];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Pills appearance={appear} subtle={ButtonSubtle}>
              {children}
            </Pills>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Pills

```jsx
import { Pills } from '@innovaccer/design-system';

() => {
  return (
    <Pills appearance="alert" subtle={true}>
      10
    </Pills>
  );
}
```