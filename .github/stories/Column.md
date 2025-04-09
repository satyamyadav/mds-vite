# Column



### Code Examples

#### Components Layout Column

```jsx
import { Row, Column } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column className="p-6 border bg-secondary-lightest">Column 1</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 2</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 3</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 4</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 5</Column>
    </Row>
  );
}
```


#### Components Layout Sizes

```jsx
import { Row, Column } from '@innovaccer/design-system';

() => {
  return (
    <>
      <Row>
        <Column className="p-6 border bg-secondary-lightest mr-4" size={10}>
          size=10
        </Column>
        <Column className="p-6 bg-secondary-lightest border">size=2</Column>
      </Row>
      <Row className="justify-space-between mt-6">
        <Column className="p-6 border bg-secondary-lightest mr-4" size={8}>
          size=8
        </Column>
        <Column className="p-6 bg-secondary-lightest border">size=4</Column>
      </Row>
      <Row className="justify-space-between mt-6">
        <Column className="p-6 border bg-secondary-lightest mr-4" size={6}>
          size=6
        </Column>
        <Column className="p-6 bg-secondary-lightest border">size=6</Column>
      </Row>
    </>
  );
}
```