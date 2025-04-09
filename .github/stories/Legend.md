# Legend



### Code Examples

#### Components Legend All

```jsx
import { Legend } from '@innovaccer/design-system';

() => {
  return(
    <Legend iconAppearance="inverse" iconSize={14}>
    Legend
  </Legend>
    );
}
```


#### Legend

```jsx
import { Legend } from '@innovaccer/design-system';

() => {
  const appearances = [
    'primary',
    'secondary',
    'success',
    'alert',
    'warning',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
    'inverse',
  ];

  return (
    <div>
      {appearances.map((appearance, i) => {
        return (
          <div key={i} className="mb-4">
            <Legend iconAppearance={appearance}>{appearance}</Legend>
          </div>
        );
      })}
    </div>
  );
}
```


#### Legend

```jsx
import { Legend } from '@innovaccer/design-system';

() => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled'];
  return (
    <div>
      {appearances.map((appearance, i) => {
        return (
          <div key={i} className={`${appearance === 'white' ? 'bg-dark' : 'bg-transparent'} mb-4 w-25 `}>
            <Legend labelAppearance={appearance} iconAppearance={appearance === 'white' ? 'secondary' : 'inverse'}>
              {appearance}
            </Legend>
          </div>
        );
      })}
    </div>
  );
}
```


#### Legend

```jsx
import { Legend } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <div className="mr-5">
        <Legend labelWeight={'strong'}>Strong</Legend>
      </div>
      <div>
        <Legend labelWeight={'medium'}>Medium</Legend>
      </div>
    </div>
  );
}
```