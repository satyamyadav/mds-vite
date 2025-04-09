# Link



### Code Examples

#### Link

```jsx
import { Link } from '@innovaccer/design-system';

() => {
  const href = 'http://innovaccer.com';
  const target = '_blank';
  const size = 'regular';
  const disabled = false;

  const options = {
    href,
    target,
    size,
    disabled,
  };

  return (
    <Link {...options} onClick={action('link click')}>
      Read more
    </Link>
  );
}
```


#### Link

```jsx
import { Link } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <Link appearance="default" href="http://innovaccer.com">
        Default Link
      </Link>
      <Link appearance="subtle" href="http://innovaccer.com" className="ml-7">
        Subtle Link
      </Link>
    </div>
  );
}
```


#### Link

```jsx
import { Link } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <Link href="http://innovaccer.com" disabled={true}>
        Link Disabled
      </Link>
      <Link href="http://innovaccer.com" appearance="subtle" disabled={true} className="ml-7">
        Link Disabled
      </Link>
    </div>
  );
}
```


#### Link

```jsx
import { Link } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <Link href="http://innovaccer.com" size="regular">
        Regular Link
      </Link>
      <Link href="http://innovaccer.com" size="tiny" className="ml-7 mt-2">
        Tiny Link
      </Link>
    </div>
  );
}
```