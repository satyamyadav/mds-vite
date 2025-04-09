# Breadcrumbs

Breadcrumbs indicate the path of a record and help the users to navigate back to the parent record.

### Code Examples

#### Components Breadcrumbs Label Truncate

```jsx
import { Breadcrumbs, PageHeader } from '@innovaccer/design-system';

() => {
  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'eCQM Performance year 2022',
          link: '/eCQM',
        },
        {
          label: 'Report 1',
          link: '/report1',
        },
      ]}
      onClick={link => console.log(`on-click: ${link}`)}
      showTooltip={true}
    />
  );

  return (
    <div className="py-6 bg-secondary-lightest">
      <PageHeader title="eCQM Performance year 2022" breadcrumbs={breadcrumbs} />
    </div>
  );
}
```


#### Components Breadcrumbs Less Than 4 Levels

```jsx
import { Breadcrumbs } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
    },
    {
      label: 'Level 2',
      link: '/level2'
    },
    {
      label: 'Level 3',
      link: '/level3'
    }
  ];

  return (
    <div className="bg-secondary-lightest">
      <Breadcrumbs
        list={list}
        onClick={link => console.log(`on-click: ${link}`)}
      />
    </div>
  );
}
```


#### Components Breadcrumbs More Than 4 Levels

```jsx
import { Breadcrumbs } from '@innovaccer/design-system';

() => {
  const list = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
    },
    {
      label: 'Level 2',
      link: '/level2'
    },
    {
      label: 'Level 3',
      link: '/level3'
    },
    {
      label: 'Level 4',
      link: '/level4'
    },
  ];

  return (
    <div className="bg-secondary-lightest">
      <Breadcrumbs
        list={list}
        onClick={link => console.log(`on-click: ${link}`)}
      />
    </div>
  );
}
```