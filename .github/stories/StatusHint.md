# StatusHint

Status hint is used to highlight the status of an item.

### Code Examples

#### Components StatusHint All

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => {
  const children = 'Status Hint';

  const appearance = 'success';

  const options = {
    appearance,
  };

  return <StatusHint {...options}>{children}</StatusHint>;
}
```


#### Components StatusHint Label Wrap

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => {
  const children = 'Status hint is used to highlight the status of an item.';

  const appearance = 'success';

  const options = {
    appearance,
  };

  return (
    <div className="d-flex">
      <StatusHint {...options} className="w-25" truncateLabel={true}>
        {children}
      </StatusHint>

      <StatusHint {...options} className="w-25 ml-10">
        {children}
      </StatusHint>
    </div>
  );
}
```


#### StatusHint

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => <StatusHint appearance="alert">{'Alert'}</StatusHint>
```


#### StatusHint

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => <StatusHint appearance="default">{'Default'}</StatusHint>
```


#### StatusHint

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => <StatusHint appearance="info">{'Info'}</StatusHint>
```


#### StatusHint

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => <StatusHint appearance="success">{'Success'}</StatusHint>
```


#### StatusHint

```jsx
import { StatusHint } from '@innovaccer/design-system';

() => <StatusHint appearance="warning">Warning</StatusHint>
```