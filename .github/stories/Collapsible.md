# Collapsible



### Code Examples

#### Components VerticalNav Collapsible All

```jsx
import { Collapsible, Icon, Text } from '@innovaccer/design-system';

() => {
  const [expanded, setExpanded] = React.useState(false);
  return (
      <Collapsible
        expanded={expanded}
        height="100vh"
        onToggle={setExpanded}
      >
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-6 Text--regular" />
          {expanded && (
            <Text className="mr-6">Collapsible</Text>
          )}
        </div>
      </Collapsible>
  );
}
```


#### Components VerticalNav Collapsible Custom Trigger

```jsx
import { Icon, Heading, Collapsible, Text } from '@innovaccer/design-system';

() => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <div className='d-flex align-items-center mb-3'>
        <Icon name="menu" className="cursor-pointer" onClick={() => setExpanded(!expanded) }></Icon>
        <Heading size='s' className="ml-4">Click to Open</Heading>
      </div>
      <Collapsible withTrigger={false} expanded={expanded} height="100vh">
        <div className="d-flex pt-4">
          <Icon name="events" className="d-flex align-items-center px-6 Text--regular" />
          {expanded && <Text className="mr-6">Collapsible</Text>}
        </div>
        </Collapsible>
    </div>
  );
}
```