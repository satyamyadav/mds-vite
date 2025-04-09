# Button

Buttons initiate actions and indicate what will happen after interacting with them.

### Code Examples

#### Components Button Button All

```jsx
import { Button } from '@innovaccer/design-system';

() => {
  const type = 'button';
  const children = 'Open';

  return (
    <Button type={type} onClick={action('button-clicked')} aria-label="Open">
      {children}
    </Button>
  );
}
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => {
  const appearances = ['basic', 'primary', 'alert', 'transparent'];

  return (
    <div className="d-flex w-75 justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Button key={ind} onClick={action('button-clicked')} appearance={appear} aria-label={`${appear}`}>
            {appear.charAt(0).toUpperCase() + appear.slice(1)}
          </Button>
        );
      })}
    </div>
  );
}
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button appearance="alert" aria-label="Delete">
    Delete
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button appearance="basic" size="regular" aria-label="Cancel">
    Cancel
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button appearance="primary" size="regular" aria-label="Submit your response">
    Submit your response
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button appearance="transparent" aria-label="Re-evaluate">
    Re-evaluate
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button appearance="primary" size="regular" expanded={true} aria-label="Login">
    Login
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button appearance="basic" icon="keyboard_arrow_right" aria-label="Next in rank" tooltip="Next in rank" />
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <div className="d-inline-flex">
    <Button className="mr-2" size="tiny" icon="content_copy" aria-label="Copy" tooltip="Copy" />
    <Button className="mr-2" size="tiny" icon="content_paste" aria-label="Paste" tooltip="Paste" />
    <Button size="tiny" icon="delete" aria-label="Delete" tooltip="Delete" />
  </div>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button icon="get_app" iconAlign="left" aria-label="Download">
    Download
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <Button icon="arrow_forward" iconAlign="right" aria-label="Next in rank">
    Next in rank
  </Button>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => (
  <div className="d-flex">
    <Button size="tiny" className="mr-2" aria-label="Copy">
      Copy
    </Button>
    <Button size="tiny" className="mr-2" aria-label="Paste">
      Paste
    </Button>
    <Button size="tiny" aria-label="Delete">
      Delete
    </Button>
  </div>
)
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => <Button loading={true} aria-label="loading" />
```


#### Button

```jsx
import { Button } from '@innovaccer/design-system';

() => {
  const sizes = ['tiny', 'regular', 'large'];

  return (
    <div className="d-flex justify-content-between w-50">
      {sizes.map((ButtonSize, ind) => {
        return (
          <Button
            key={ind}
            size={ButtonSize}
            appearance={'primary'}
            aria-label={`${ButtonSize}`}
            onClick={action('button-clicked')}
          >
            {ButtonSize.charAt(0).toUpperCase() + ButtonSize.slice(1)}
          </Button>
        );
      })}
    </div>
  );
}
```


#### Button

```jsx
import { Button, Menu } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <Button className="mr-2" aria-label="Request review">
        Request review
      </Button>
      <div className="mb-10">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item>Download All</Menu.Item>
            <Menu.Item>Download Selected</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
    </div>
  );
}
```


#### Button

```jsx
import { Button, Text } from '@innovaccer/design-system';

() => {
  const children = 'Delete';

  return (
    <div className="d-flex w-50 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'alert'} aria-label="Delete">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'alert'} disabled={true} aria-label="Delete">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'alert'} loading={true} aria-label="Loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
}
```


#### Button

```jsx
import { Button, Text } from '@innovaccer/design-system';

() => {
  const children = 'Open';

  return (
    <div className="d-flex w-75 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'basic'} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'basic'} disabled={true} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'basic'} loading={true} aria-label="Loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div>
        <Button
          onClick={action('button-clicked')}
          appearance={'basic'}
          size={'regular'}
          selected={true}
          aria-label="Selected"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div>
        <Button
          onClick={action('button-clicked')}
          appearance={'basic'}
          selected={true}
          icon="events"
          aria-label="Selected"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
}
```


#### Button

```jsx
import { Button, Text } from '@innovaccer/design-system';

() => {
  const children = 'Login';

  return (
    <div className="d-flex w-50 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'primary'} aria-label="Login">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'primary'} disabled={true} aria-label="Login">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'primary'} loading={true} aria-label="Loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
}
```


#### Button

```jsx
import { Button, Text } from '@innovaccer/design-system';

() => {
  const children = 'Open';

  return (
    <div className="d-flex w-75 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} disabled={true} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} loading={true} aria-label="loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} selected={true} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div>
        <Button
          onClick={action('button-clicked')}
          appearance={'transparent'}
          selected={true}
          icon="events"
          aria-label="Events"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
}
```