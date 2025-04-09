# AIButton

AI Buttons initiate actions powered by AI and have a distinct appearance to signal users that the action utilizes AI capabilities.

### Code Examples

#### AIButton

```jsx
import { AIButton } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>Basic Button</AIButton>
      <AIButton appearance="primary">Primary Button</AIButton>
    </div>
  );
}
```


#### AIButton

```jsx
import { AIButton } from '@innovaccer/design-system';

() => {
  return <AIButton>Basic Button</AIButton>;
}
```


#### AIButton

```jsx
import { AIButton } from '@innovaccer/design-system';

() => {
  return <AIButton appearance="primary">Primary Button</AIButton>;
}
```


#### AIButton

```jsx
import { AIButton } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>Basic Button</AIButton>
      <AIButton disabled={true}>Disabled Button</AIButton>
    </div>
  );
}
```


#### AIButton

```jsx
import { AIButton } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton appearance="primary">Primary Button</AIButton>
      <AIButton appearance="primary" disabled={true}>
        Disabled Button
      </AIButton>
    </div>
  );
}
```