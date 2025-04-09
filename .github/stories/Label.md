# Label



### Code Examples

#### Label

```jsx
import { Label } from '@innovaccer/design-system';

() => {
  return <Label>Label</Label>;
}
```


#### Label

```jsx
import { Label } from '@innovaccer/design-system';

() => {
  return <Label optional={true}>Label</Label>;
}
```


#### Label

```jsx
import { Label } from '@innovaccer/design-system';

() => {
  return <Label required={true}>Required Label</Label>;
}
```


#### Label

```jsx
import { Label } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <Label className="mr-5">Enabled Label</Label>
      <Label disabled={true}>Disabled Label</Label>
    </div>
  );
}
```


#### Label

```jsx
import { Label } from '@innovaccer/design-system';

() => {
  return <Label info="Sample Info">Label</Label>;
}
```