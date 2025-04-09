# Badge



### Code Examples

#### Components Badge All

```jsx
import { Badge } from '@innovaccer/design-system';

() => {
  return <Badge>Approved</Badge>;
}
```


#### Badge

```jsx
import { Badge } from '@innovaccer/design-system';

() => {
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
    <div className="d-flex justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Badge key={ind} appearance={appear}>
            {appear}
          </Badge>
        );
      })}
    </div>
  );
}
```


#### Components Badge Solid Warning

```jsx
import { Badge } from '@innovaccer/design-system';

() => {
  return <Badge appearance="warning">Pending</Badge>;
}
```


#### Badge

```jsx
import { Badge } from '@innovaccer/design-system';

() => {
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
    <div className="d-flex justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Badge key={ind} appearance={appear} subtle={true}>
            {appear}
          </Badge>
        );
      })}
    </div>
  );
}
```


#### Components Badge Subtle Warning

```jsx
import { Badge } from '@innovaccer/design-system';

() => {
  return (
    <Badge appearance="warning" subtle={true}>
      Pending
    </Badge>
  );
}
```