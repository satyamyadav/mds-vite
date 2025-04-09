# Backdrop



### Code Examples

#### Components Backdrop All

```jsx
import { Button, Backdrop } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div onKeyDown={onKeyDown}>
      <Button onClick={() => setOpen(true)} appearance="primary">
        Trigger Backdrop
      </Button>
      <div onClick={() => setOpen(false)}>
        <Backdrop open={open} />
      </div>
    </div>
  );
}
```