# ChipGroup



### Code Examples

#### Components Chip ChipGroup Action Chips

```jsx
import { ChipGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'Letter.pdf',
      icon: 'assessment',
      type: 'action',
      name: '1',
    },
    {
      label: 'Mail.pdf',
      icon: 'assessment',
      clearButton: true,
      type: 'action',
      name: '2',
    },
    {
      label: 'Draft.pdf',
      icon: 'assessment',
      clearButton: true,
      type: 'action',
      selected: true,
      name: '3',
    },
  ];

  return <ChipGroup list={list} onClick={action(`onClick event`)} />;
}
```


#### Components Chip ChipGroup Input Chips

```jsx
import { ChipGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'John',
      clearButton: true,
      type: 'input',
      name: '1',
    },
    {
      label: 'Locke',
      clearButton: true,
      type: 'input',
      name: '2',
    },
    {
      label: 'Nina',
      clearButton: true,
      type: 'input',
      name: '3',
    },
  ];

  return <ChipGroup list={list} onClose={action(`onClose event`)} onClick={action(`onClick event`)} />;
}
```


#### Components Chip ChipGroup Selection Chips

```jsx
import { ChipGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'Call note',
      icon: 'assessment',
      clearButton: true,
      type: 'selection',
      name: '1',
    },
    {
      label: 'Visit note',
      icon: 'assessment',
      clearButton: true,
      type: 'selection',
      name: '2',
    },
    {
      label: 'Generic note',
      icon: 'assessment',
      clearButton: true,
      type: 'selection',
      name: '3',
    },
  ];

  return <ChipGroup list={list} onClose={action(`onClose event`)} onClick={action(`onClick event`)} />;
}
```