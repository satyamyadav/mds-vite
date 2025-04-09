# AIIconButton



### Code Examples

#### AIIconButton

```jsx
import { AIIconButton } from '@innovaccer/design-system';

() => {
  return <AIIconButton icon="import_contacts" tooltip="Import Contacts" />;
}
```


#### AIIconButton

```jsx
import { Row, Column, AIIconButton, Text } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Top
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="edit" position="bottom" tooltip="Edit" />
        <Text appearance="subtle" className="mt-6">
          Bottom
        </Text>
      </Column>
    </Row>
  );
}
```


#### AIIconButton

```jsx
import { Row, Column, AIIconButton, Text } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" />
        <Text appearance="subtle" className="mt-6">
          Regular
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" size="large" />
        <Text appearance="subtle" className="mt-6">
          Large
        </Text>
      </Column>
    </Row>
  );
}
```


#### AIIconButton

```jsx
import { Row, Column, AIIconButton, Text } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <AIIconButton icon="import_contacts" disabled={true} tooltip="Import Contacts" />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
}
```