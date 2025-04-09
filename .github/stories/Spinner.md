# Spinner



### Code Examples

#### Components Progress Indicators Spinner All

```jsx
import { Spinner } from '@innovaccer/design-system';

() => {
  return <Spinner />;
}
```


#### Spinner

```jsx
import { Spinner, Text } from '@innovaccer/design-system';

() => {
  const appearances = ['primary', 'secondary', 'white'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-8">
            <div className={appear === 'white' ? 'bg-dark' : 'bg-transparent'}>
              <Spinner appearance={appear} />
            </div>
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Components Progress Indicators Spinner Inline Loader

```jsx
import { Spinner, Text } from '@innovaccer/design-system';

() => (
  <div className="d-flex">
    <Spinner appearance="primary" size="small" className="mr-3" />
    <Text>uploading...</Text>
  </div>
)
```


#### Spinner

```jsx
import { Spinner, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['xsmall', 'small', 'medium', 'large'];
  return (
    <div className="d-flex">
      {sizes.map((SpinnerSize, ind) => {
        return (
          <div key={ind} className="mr-8 d-flex flex-column align-items-center">
            <div className="h-75">
              <Spinner size={SpinnerSize} />
            </div>
            <Text weight="strong">{SpinnerSize.charAt(0).toUpperCase() + SpinnerSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```