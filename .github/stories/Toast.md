# Toast

Toasts are used to notify users about the outcome of their actions without disrupting the ongoing user workflow.

### Code Examples

#### Components Toast All

```jsx
import { Toast } from '@innovaccer/design-system';

() => {
  const title = 'Sample toast';

  const message = '';

  const actionLabel1 = '';
  const actionLabel2 = '';

  const props = {
    actions: [],
  };

  if (actionLabel1) {
    props.actions.push({
      label: actionLabel1,
      onClick: () => action('action button click: 1')(),
    });
  }
  if (actionLabel2) {
    props.actions.push({
      label: actionLabel2,
      onClick: () => action('action button click: 2')(),
    });
  }

  return <Toast title={title} message={message} onClose={action('on-close clicked')} {...props} />;
}
```


#### Components Toast Alert Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => (
  <Toast
    appearance="alert"
    title="Campaign failed to run"
    message="Try to run again. If it continues to fail, please raise a ticket."
  />
)
```


#### Components Toast Info Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => (
  <Toast
    appearance="info"
    title="Sophie sent you a task"
    message="Schedule Appointment for 'Joy Lawson'. It's due on Aug 31."
  />
)
```


#### Components Toast Success Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => (
  <Toast
    appearance="success"
    title="Outreach successfully sent"
    message="2,340 outreach messages have been successfully sent."
  />
)
```


#### Components Toast Toast With Actions

```jsx
import { Toast } from '@innovaccer/design-system';

() => (
  <Toast
    appearance="success"
    title="Review requested successfully"
    message="Automatically redirecting to the next Prior Auth of Joy Lawson in 10s"
    actions={[
      {
        label: 'Need Prior Auth',
        onClick: () => {},
      },
      {
        label: 'Go To Worklist',
        onClick: () => {},
      },
    ]}
  />
)
```


#### Components Toast Toast With Description

```jsx
import { Toast } from '@innovaccer/design-system';

() => (
  <Toast appearance="success" title="Message sent successfully" message="Description goes here" />
)
```


#### Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => {
  const appearances = ['info', 'success', 'alert', 'warning'];
  return (
    <div className="d-flex flex-column">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-5 mb-8">
            <Toast appearance={appear} title={appear.charAt(0).toUpperCase() + appear.slice(1)} />
          </div>
        );
      })}
    </div>
  );
}
```


#### Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => {
  const appearances = ['info', 'success', 'alert', 'warning'];

  const message = 'Outreach was sent';

  const actionLabel1 = 'Try Again';
  const actionLabel2 = '';

  const props = {
    actions: [],
  };

  if (actionLabel1) {
    props.actions.push({
      label: actionLabel1,
      onClick: () => action('action button click: 1')(),
    });
  }
  if (actionLabel2) {
    props.actions.push({
      label: actionLabel2,
      onClick: () => action('action button click: 2')(),
    });
  }

  return (
    <div className="d-flex flex-column">
      {appearances.map((appearance, ind) => {
        return (
          <div key={ind} className="mr-5 mb-8">
            <Toast
              appearance={appearance}
              title={appearance.charAt(0).toUpperCase() + appearance.slice(1)}
              message={message}
              onClose={action('on-close clicked')}
              {...props}
            />
          </div>
        );
      })}
    </div>
  );
}
```


#### Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => {
  const appearances = ['info', 'success', 'alert', 'warning'];

  const message = 'Outreach was sent';
  return (
    <div className="d-flex flex-column">
      {appearances.map((appearance, ind) => {
        return (
          <div key={ind} className="mr-5 mb-8">
            <Toast
              appearance={appearance}
              title={appearance.charAt(0).toUpperCase() + appearance.slice(1)}
              message={message}
            />
          </div>
        );
      })}
    </div>
  );
}
```


#### Components Toast Warning Toast

```jsx
import { Toast } from '@innovaccer/design-system';

() => (
  <Toast
    appearance="warning"
    title="Chat response is delayed"
    message="'Memorial Clinic' has been running for more that 2 hours."
  />
)
```