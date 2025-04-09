# MetaList

Meta list is a short horizontal list of meta/secondary information.

### Code Examples

#### MetaList

```jsx
import { MetaList } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'Meta data',
      icon: 'assessment',
    },
    {
      label: 'Meta data',
      icon: 'assessment',
    },
  ];

  return <MetaList list={list} />;
}
```


#### MetaList

```jsx
import { Text, MetaList } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'Meta data',
      icon: 'assessment',
    },
    {
      label: 'Meta data',
      icon: 'assessment',
    },
  ];

  return (
    <div className="ml-5">
      <Text weight="strong">Small</Text>
      <MetaList className="py-7" list={list} seperator={true} size="small" />

      <Text weight="strong">Regular</Text>
      <MetaList className="py-7" list={list} seperator={true} />
    </div>
  );
}
```


#### MetaList

```jsx
import { MetaList } from '@innovaccer/design-system';

() => {
  const seperator = true;

  const list = [
    {
      label: 'Meta data',
      icon: 'assessment',
    },
    {
      label: 'Meta data',
      icon: 'assessment',
    },
  ];

  return <MetaList list={list} seperator={seperator} />;
}
```