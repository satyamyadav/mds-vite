# Avatar

Avatar is used to identify an entity through display pictures, icons or their initials.

### Code Examples

#### Components Avatar Avatar All

```jsx
import { Avatar } from '@innovaccer/design-system';

() => {
  const appearance = 'primary';
  const size = 'tiny';
  const withTooltip = true;
  const children = '';
  const firstName = 'John';
  const lastName = 'Doe';

  const options = {
    appearance,
    withTooltip,
    size,
    firstName,
    lastName,
  };

  return <Avatar {...options}>{children}</Avatar>;
}
```


#### Avatar

```jsx
import { Avatar } from '@innovaccer/design-system';

() => <Avatar firstName="John" lastName="Doe" appearance="primary" />
```


#### Avatar

```jsx
import { Row, Column, Text, Avatar } from '@innovaccer/design-system';

() => {
  const weight = 'strong';

  return (
    <Row className="w-50">
      <Column>
        <Text weight={weight}>Active</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" presence="active" />
      </Column>
      <Column>
        <Text weight={weight}>Away</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" presence="away" />
      </Column>
    </Row>
  );
}
```


#### Avatar

```jsx
import { Row, Column, Avatar, Text } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" disabled={true} tooltipSuffix="(Deactivated)" />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
}
```


#### Avatar

```jsx
import { Avatar, Tooltip, Icon } from '@innovaccer/design-system';

() => {
  return (
    <Avatar
      lastName="Doe"
      firstName="John"
      appearance="primary"
      status={
        <Tooltip tooltip="Verified" position="top">
          <Icon name="done" size={10} appearance="white" className="p-1 bg-success" />
        </Tooltip>
      }
    />
  );
}
```


#### Avatar

```jsx
import { Avatar, Tooltip } from '@innovaccer/design-system';

() => {
  return (
    <Avatar
      firstName="Tom"
      lastName="Yusuf"
      appearance="accent1"
      status={
        <Tooltip tooltip="DND" position="top">
          <img width="14px" alt="DND" src={StatusImage} />
        </Tooltip>
      }
    />
  );
}
```


#### Avatar

```jsx
import { Text, Avatar } from '@innovaccer/design-system';

() => {
  const weight = 'strong';

  const appearances = [
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
  ];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <br />
            <br />
            <Avatar firstName="John" lastName="Doe" appearance={appear} />
          </div>
        );
      })}
    </div>
  );
}
```


#### Avatar

```jsx
import { Row, Column, Text, Avatar } from '@innovaccer/design-system';

() => {
  const weight = 'strong';

  return (
    <Row className="w-50">
      <Column>
        <Text weight={weight}>Round</Text>
        <br />
        <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" />
      </Column>
      <Column>
        <Text weight={weight}>Square</Text>
        <br />
        <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" shape="square" />
      </Column>
    </Row>
  );
}
```


#### Avatar

```jsx
import { Row, Column, Text, Avatar } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Row>
        <Column>
          <Text weight="strong">Regular</Text>
          <div className="d-flex mt-7">
            <Avatar firstName="John" lastName="Doe" className="mr-8" />
            <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" />
          </div>
        </Column>
        <Column>
          <Text weight="strong">Tiny</Text>
          <div className="d-flex mt-7">
            <Avatar firstName="John" lastName="Doe" size="tiny" className="mr-8" />
            <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" size="tiny" />
          </div>
        </Column>
      </Row>
    </div>
  );
}
```


#### Components Avatar Avatar With Icon

```jsx
import { Avatar } from '@innovaccer/design-system';

() => {
  const appearance = 'primary';
  const withTooltip = true;
  const firstName = 'Innovaccer';
  const lastName = 'Bot';

  const options = {
    appearance,
    withTooltip,
    firstName,
    lastName,
  };

  return (
    <Avatar {...options} shape="square">
      <Avatar.Icon name="smart_toy" />
    </Avatar>
  );
}
```


#### Components Avatar Avatar With Image

```jsx
import { Avatar } from '@innovaccer/design-system';

() => {
  const appearance = 'secondary';
  const withTooltip = true;
  const firstName = 'Innovaccer';
  const lastName = 'logo';

  const options = {
    appearance,
    withTooltip,
    firstName,
    lastName,
  };

  return (
    <Avatar {...options}>
      <Avatar.Image src="https://design.innovaccer.com/images/withoutType.png" />
    </Avatar>
  );
}
```


#### Components Avatar Avatar With Suffix

```jsx
import { Avatar } from '@innovaccer/design-system';

() => {
  const withTooltip = true;
  const firstName = 'John';
  const lastName = 'Doe';
  const tooltipSuffix = '(Deactivated)';
  const disabled = true;

  const options = {
    withTooltip,
    firstName,
    lastName,
    disabled,
    tooltipSuffix,
  };

  return <Avatar {...options} />;
}
```


#### Components Avatar Avatar With Svg

```jsx
import { Avatar } from '@innovaccer/design-system';

() => {
  const withTooltip = true;
  const firstName = 'John';
  const lastName = 'Doe';

  const options = {
    withTooltip,
    firstName,
    lastName,
  };

  return (
    <Avatar {...options}>
      <Avatar.Image>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Avatar.Image>
    </Avatar>
  );
}
```