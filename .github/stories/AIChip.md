# AIChip

AI Chip, based on Action Chips, enables contextual and dynamic AI actions. It has a distinct appearance to signal users that the action utilizes AI capabilities.

### Code Examples

#### AIChip

```jsx
import { AIChip } from '@innovaccer/design-system';

() => {
  return <AIChip icon="edit_note" label="AI chip" />;
}
```


#### AIChip

```jsx
import { AIChip } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIChip icon="edit_note" label="Default chip" />
      <AIChip icon="edit_note" label="Disabled chip" disabled={true} />
    </div>
  );
}
```