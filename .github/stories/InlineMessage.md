# InlineMessage



### Code Examples

#### Components InlineMessage All

```jsx
import { InlineMessage } from '@innovaccer/design-system';

() => {
  return <InlineMessage appearance="info" description="There are two new referral requests." />;
}
```


#### Components InlineMessage Appearance Alert

```jsx
import { InlineMessage } from '@innovaccer/design-system';

() => <InlineMessage appearance="alert" description="Inline message goes here." />
```


#### Components InlineMessage Appearance Info

```jsx
import { InlineMessage } from '@innovaccer/design-system';

() => <InlineMessage appearance="info" description="There are two new referral requests." />
```


#### Components InlineMessage Appearance Success

```jsx
import { InlineMessage } from '@innovaccer/design-system';

() => <InlineMessage appearance="success" description="Inline message goes here." />
```


#### Components InlineMessage Appearance Warning

```jsx
import { InlineMessage } from '@innovaccer/design-system';

() => <InlineMessage appearance="warning" description="Inline message goes here." />
```


#### Components InlineMessage Inline Message Within Table

```jsx
import { InlineMessage, Card, Table } from '@innovaccer/design-system';


() => {
  const data = [
    {
        "name": "Asthma Outreach",
        "firstName": "Brooke",
        "lastName": "Heeran",
        "lastUpdated": "June 20, 2020",
        "recipients": 11846
    },
    {
        "firstName": "Frazer",
        "lastName": "Cathro",
        "lastUpdated": "June 19, 2020",
        "name": "HbA1c Test due",
        "recipients": 12846
    },
    {
        "firstName": "Lemmie",
        "name": "ER Education",
        "lastName": "Ciric",
        "lastUpdated": "May 19, 2020",
        "recipients": 118467
    }
];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      sorting: false,
      translate: (a) => ({
        title: a.name,
        metaList: [`${a.recipients} recipients`]
      }),
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: 'Message',
      sorting: false,
      width: '40%',
      cellRenderer: (props) => {
        const { data } = props;
        return (
          <InlineMessage appearance='info' description='Patient profile updated.' />
        );
      }
    }
  ];

  return (
    <Card>
      <Table
        showMenu={false}
        type="data"
        data={data}
        schema={schema}
        withHeader={false}
        headerOptions={{
          withSearch: false
        }}
      />
    </Card>
  );
};

```


#### Components InlineMessage Size

```jsx
import { InlineMessage, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['small', 'regular'];

  return (
    <div className="d-flex align-items-center">
      {sizes.map((size, key) => {
        return (
          <div className="mr-9" key={key}>
            <InlineMessage size={size} appearance="info" description="There are two new referral requests." />
            <br />
            <Text weight="strong">{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```