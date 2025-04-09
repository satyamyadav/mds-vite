# Sara

Sara, represented by a magic sparkle, is the avatar used for artificial intelligence.

### Code Examples

#### Sara

```jsx
import { Sara } from '@innovaccer/design-system';

() => {
  return <Sara />;
}
```


#### Sara

```jsx
import { Sara } from '@innovaccer/design-system';

() => {
  return <Sara size={100} />;
}
```


#### Sara

```jsx
import { Sara, Text } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center w-75">
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara />
          <Text appearance="subtle" className="mt-6">
            32
          </Text>
        </div>
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara size={48} />
          <Text appearance="subtle" className="mt-6">
            48
          </Text>
        </div>
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara size={64} />
          <Text appearance="subtle" className="mt-6">
            64
          </Text>
        </div>
      </div>
    </div>
  );
}
```


#### Sara

```jsx
import { Sara, Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex w-75">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara state="resting" />
        <Text appearance="subtle" className="mt-6">
          Resting
        </Text>
      </div>
    </div>
  );
}
```