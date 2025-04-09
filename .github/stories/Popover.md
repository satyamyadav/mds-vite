# Popover

Popover is used to display floating content in relation to a trigger, usually a button or link.

### Code Examples

#### Components Popover All

```jsx
import { Popover, Button, Text } from '@innovaccer/design-system';

() => {
  return(
    <div className='mb-11'>
      <Popover
        position="bottom-start"
        on="click"
        trigger={<Button appearance="basic">Open Popover</Button>}
      >
        <div className='p-5'>
        <Text>
          I am a popover, you can use me to display links,<br/> 
          interactive elements, avatars, text formatting, meta data
          etc.
        </Text>
        </div>
      </Popover>
    </div>
  );
}
```


#### Components Popover Dark Popover

```jsx
import { Popover, Button } from '@innovaccer/design-system';

() => (
  <div className="mb-9">
    <Popover
      position="bottom"
      on="click"
      trigger={<Button appearance="basic">Open Popover</Button>}
      dark={true}
      open={false}
    >
      <div className="p-10" />
    </Popover>
  </div>
)
```


#### Components Popover Disabled Trigger

```jsx
import { Popover, Button, Text } from '@innovaccer/design-system';

() => {
  const booleanValues = [false, true];

  return (
    <div className="mb-10 d-flex align-items-center w-100">
      {booleanValues.map((toggleValue) => {
        return (
          <Popover
            position="bottom-start"
            on="hover"
            disabled={toggleValue}
            key={toggleValue}
            trigger={
              <Button appearance="basic" disabled={true}>
                {toggleValue ? 'Disabled Popover' : 'Show Popover'}
              </Button>
            }
            open={false}
            className="w-25"
          >
            <div className="p-6">
              <Text>You have some edits saved in draft state.You can resume editing or discard those changes.</Text>
            </div>
          </Popover>
        );
      })}
    </div>
  );
}
```


#### Components Popover Layering

```jsx
import { Popover, Button, Select } from '@innovaccer/design-system';

() => {
  const options = [
    { label: 'Draft', value: 'draft' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Sent', value: 'sent' },
    { label: 'Scheduled', value: 'scheduled' },
    { label: 'Partially Failed', value: 'partially_failed' },
    { label: 'Completely Failed', value: 'completely_failed' },
  ];

  return (
    <div className="mb-9">
      <Popover position="bottom" on="click" trigger={<Button appearance="basic">Open Popover</Button>} open={false}>
        <div className="pb-11 pr-10">
          <Select
            className="p-6"
            width={100}
            popoverWidth={176}
            triggerOptions={{
              placeholder: 'Status',
            }}
          >
            <Select.List>
              {options.map((option, key) => {
                return (
                  <Select.Option key={key} option={{ label: option.label, value: option.value }}>
                    {option.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
        </div>
      </Popover>
    </div>
  );
}

```


#### Components Popover Light Popover

```jsx
import { Popover, Button } from '@innovaccer/design-system';

() => (
  <div className="mb-9">
    <Popover position="bottom" on="click" trigger={<Button appearance="basic">Open Popover</Button>} open={false}>
      <div className="p-10" />
    </Popover>
  </div>
)
```


#### Components Popover Popover With Action

```jsx
import { Popover, Button, Text } from '@innovaccer/design-system';

() => (
  <div className="mb-10">
    <Popover
      position="bottom-start"
      on="click"
      trigger={<Button appearance="basic">Open Popover</Button>}
      open={false}
      className="w-25"
    >
      <div className="m-6">
        <Text>You have some edits saved in draft state.You can resume editing or discard those changes.</Text>
        <div className="d-flex">
          <Button className="mt-4" appearance="primary">
            Edit Registry
          </Button>
          <Button className="mt-4 ml-4" appearance="basic">
            Discard Changes
          </Button>
        </div>
      </div>
    </Popover>
  </div>
)
```


#### Components Popover Popover With Input

```jsx
import { Popover, LinkButton, Label, Input, Textarea, Button } from '@innovaccer/design-system';

() => (
  <div className="mb-13">
    <Popover position="bottom-start" on="click" trigger={<LinkButton>Open Popover</LinkButton>} open={false}>
      <div className="m-6">
        <Label required={true} withInput={true}>
          Name
        </Label>
        <Input name="input" required={true} placeholder="Name" />
        <Label className="mt-4" withInput={true}>
          Description
        </Label>
        <Textarea name="Textarea" placeholder="Write a description" />
        <div className="d-flex justify-content-end">
          <Button className="mt-5" appearance="primary">
            Save Filter
          </Button>
        </div>
      </div>
    </Popover>
  </div>
)
```


#### Components Popover Popover With Menu

```jsx
import { Avatar, Button, Popover, Text } from '@innovaccer/design-system';

() => {
  const trigger = (
    <div className="d-flex">
      <Avatar firstName="John" lastName="Doe" />
      <Button className="ml-3" appearance="transparent" icon="arrow_drop_down" iconAlign="right">
        Open Popover
      </Button>
    </div>
  );

  return (
    <div className="mb-12">
      <Popover position="bottom-start" on="click" trigger={trigger} open={false} className="w-25">
        <div className="pt-7 pb-4 pl-7">
          <div className="d-flex pr-7 pb-6">
            <Avatar firstName="John" lastName="Doe" />
            <div className="Option-label">
              <Text className="ml-5">James Donovan</Text>
              <Text className="ml-5" appearance="subtle">
                jdonovan @two.health
              </Text>
            </div>
          </div>
          <div>
            <div className="Option pl-0 pr-4">Account Overview</div>
            <div className="Option pl-0 pr-4">Sign Out</div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
```


#### Components Popover Variants Boundary Element

```jsx
import { Popover, Button, Text } from '@innovaccer/design-system';

/*
// style.css
.custom-boundaryWrapper {
    height: var(--spacing-8);
    border: 1px dashed;
}

*/

() => {
  const ref = React.useRef(null);

  return(
    <div ref={ref} className="overflow-auto p-7 custom-boundaryWrapper">
      <Popover
        position="bottom-start"
        on="click"
        open={true}
        trigger={<Button appearance="basic">Open Popup</Button>}
        boundaryElement={ref}
        closeOnScroll={true}
      >
        <div className='m-6 pr-9'>
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">Click</Button>
        </div>
      </Popover>
      <div className="pb-14" />
    </div>
  );
}
```


#### Popover

```jsx
import { Button, Popover, Text } from '@innovaccer/design-system';

() => {
  const positions = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto-start',
    'auto',
    'auto-end',
  ];
  const getTrigger = (pos) => <Button appearance="basic">{pos}</Button>;

  return (
    <div className="d-flex flex-wrap">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className={`mr-13 ml-12 ${ind < 3 ? 'mt-11' : 'mt-5 mb-11'}`}>
            <Popover trigger={getTrigger(pos)} position={pos}>
              <div className="m-6 pr-9">
                <Text>Popup</Text>
                <Button appearance="primary" className="mt-4">
                  Click
                </Button>
              </div>
            </Popover>
          </div>
        );
      })}
    </div>
  );
}
```