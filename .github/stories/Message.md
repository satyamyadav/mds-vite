# Message

Messages are used to display important information and provide relevant actions for users to address. The information can be specific to a page, section or field.

### Code Examples

#### Components Message All

```jsx
import { Message, LinkButton } from '@innovaccer/design-system';

() => {
  const title = 'Design System';
  const description = 'Design System is a library of reusable components';

  return (
    <Message
      title={title}
      description={description}
      actions={
        <>
          <LinkButton>Action 1</LinkButton>
          <LinkButton className="ml-5">Action 2</LinkButton>
        </>
      }
    />
  );
}
```


#### Components Message Appearance Alert

```jsx
import { Message } from '@innovaccer/design-system';

() => (
  <Message className="w-50" appearance="alert" description="Could not start verification. Please try again later." />
)
```


#### Components Message Appearance Info

```jsx
import { Message } from '@innovaccer/design-system';

() => (
  <Message className="w-50" appearance="info" description="Patient profile has been updated with new records." />
)
```


#### Components Message Appearance Success

```jsx
import { Message } from '@innovaccer/design-system';

() => (
  <Message className="w-50" appearance="success" description="Password updated. Login with your updated credentials." />
)
```


#### Components Message Appearance Warning

```jsx
import { Message } from '@innovaccer/design-system';

() => (
  <Message
    className="w-50"
    appearance="warning"
    description="Try to save again. If it continues to fail, please raise a ticket."
  />
)
```


#### Components Message Custom Description

```jsx
import { Message, LinkButton, Text } from '@innovaccer/design-system';

() => (
  <Message className="w-75" actions={<LinkButton>Try again</LinkButton>}>
    <Text>Sorry we couldn't subscribe you. Please try again.</Text>
  </Message>
)
```


#### Components Message Message With Actions

```jsx
import { Message, LinkButton } from '@innovaccer/design-system';

() => (
  <Message
    className="w-50"
    appearance="alert"
    description="Sorry we couldn't subscribe you. Please try again."
    actions={<LinkButton>Try again</LinkButton>}
  />
)
```


#### Components Message Message With Title

```jsx
import { Message, LinkButton } from '@innovaccer/design-system';

() => (
  <Message
    className="w-50"
    appearance="warning"
    title="Sender 'Alta Wells' already exists "
    description="Based on the details you've entered, we found that this sender might already be on our platform."
    actions={<LinkButton>Edit details</LinkButton>}
  />
)
```


#### Message

```jsx
import { Text, Message, LinkButton } from '@innovaccer/design-system';

() => {
  const appearances = ['alert', 'info', 'success', 'warning'];
  return (
    <div>
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mb-7">
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <Message
              actions={
                <>
                  <LinkButton>Action 1</LinkButton>
                  <LinkButton className="ml-5">Action 2</LinkButton>
                </>
              }
              className="mt-4"
              appearance={appear}
              title="Outreach was not saved"
              description="Patient record has been updated with new records."
            />
          </div>
        );
      })}
    </div>
  );
}
```


#### Message

```jsx
import { Text, Message, LinkButton } from '@innovaccer/design-system';

() => {
  const appearances = ['alert', 'info', 'success', 'warning'];
  return (
    <div>
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mb-7">
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <Message
              actions={
                <>
                  <LinkButton>Action 1</LinkButton>
                  <LinkButton className="ml-5">Action 2</LinkButton>
                </>
              }
              className="mt-4"
              appearance={appear}
              description="Patient record has been updated with new records."
            />
          </div>
        );
      })}
    </div>
  );
}
```