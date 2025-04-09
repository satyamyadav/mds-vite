# Placeholder



### Code Examples

#### Components Progress Indicators Placeholder All

```jsx
import { Placeholder, PlaceholderParagraph } from '@innovaccer/design-system';

() => {
  const withImage = false;
  const round = false;
  const imageSize = 'large';

  const options = {
    withImage,
    round,
    imageSize,
  };

  return (
    <Placeholder {...options}>
      <PlaceholderParagraph length="small" />
      <PlaceholderParagraph length="medium" />
    </Placeholder>
  );
}
```


#### PlaceholderImage

```jsx
import { PlaceholderImage, Text } from '@innovaccer/design-system';

() => {
  const size = 'medium';

  return (
    <div className="d-flex">
      <div className="mr-6">
        <PlaceholderImage size={size} round={false} />
        <br />
        <Text weight="strong">Square</Text>
      </div>
      <div>
        <PlaceholderImage size={size} round={true} />
        <br />
        <Text weight="strong">Round</Text>
      </div>
    </div>
  );
}
```


#### PlaceholderImage

```jsx
import { Text, PlaceholderImage } from '@innovaccer/design-system';

() => {
  const round = false;
  const sizes = ['small', 'medium', 'large'];
  const options = {
    round,
  };

  return (
    <div className="d-flex">
      {sizes.map((PlaceholderSize, ind) => {
        return (
          <div key={ind} className="mr-7">
            <Text weight="strong">{PlaceholderSize.charAt(0).toUpperCase() + PlaceholderSize.slice(1)}</Text>
            <PlaceholderImage size={PlaceholderSize} {...options} className="mt-5" />
          </div>
        );
      })}
    </div>
  );
}
```


#### Components Progress Indicators Placeholder Skeleton Loaders

```jsx
import { Card, Placeholder, PlaceholderParagraph } from '@innovaccer/design-system';

() => {
  return (
    <Card>
      <div className="px-6 py-5">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
      <div className="px-6 py-5 border-top">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
      <div className="px-6 py-5 border-top">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
      <div className="px-6 py-5 border-top">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
    </Card>
  );
}
```


#### PlaceholderParagraph

```jsx
import { PlaceholderParagraph } from '@innovaccer/design-system';

() => {
  const length = 'medium';
  const size = 'l';

  return <PlaceholderParagraph size={size} length={length} />;
}
```


#### PlaceholderParagraph

```jsx
import { PlaceholderParagraph, Text } from '@innovaccer/design-system';

() => {
  const lengths = ['small', 'medium', 'large'];

  return (
    <div>
      {lengths.map((len, ind) => {
        return (
          <div key={ind} className="mb-7">
            <PlaceholderParagraph length={len} />
            <Text weight="strong">{len.charAt(0).toUpperCase() + len.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### PlaceholderParagraph

```jsx
import { PlaceholderParagraph, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  return (
    <div>
      {sizes.map((s, ind) => {
        return (
          <div key={ind} className="mb-7">
            <PlaceholderParagraph size={s} />
            <Text weight="strong">{s}</Text>
          </div>
        );
      })}
    </div>
  );
}
```