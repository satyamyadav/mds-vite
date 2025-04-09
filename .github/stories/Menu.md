# Menu

Menu is used to display actions like navigation and page actions such as edit, export, delete, etc.

### Code Examples

#### Menu

```jsx
import { Menu } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group>
        <Menu.List>
          <Menu.Item>Run Pipeline</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group>
        <Menu.List>
          <Menu.Item>Logs</Menu.Item>
          <Menu.Item>Preview Data</Menu.Item>
          <Menu.Item>View Profile</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group showDivider={false}>
        <Menu.List>
          <Menu.Item>Copy ID</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
          <Menu.Item>Duplicate Pipeline</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Add">
        <Menu.List>
          <Menu.Item>Add Product</Menu.Item>
          <Menu.Item>Add Custom</Menu.Item>
          <Menu.Item>Add Row</Menu.Item>
        </Menu.List>
      </Menu.Group>

      <Menu.Group label="Actions">
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Duplicate</Menu.Item>
          <Menu.Item>Share</Menu.Item>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Icon } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.Group label="Group 1">
        <Menu.List>
          <Menu.Item>App store</Menu.Item>
          <Menu.Item>Developer Portal</Menu.Item>

          <Menu.SubMenu>
            <Menu.Item className="d-flex align-items-center justify-content-between w-100">
              User Admin
              <Icon name="chevron_right" />
            </Menu.Item>
            <Menu position="right-start">
              <Menu.List>
                <Menu.Item>Users</Menu.Item>
                <Menu.Item>Groups</Menu.Item>
                <Menu.Item>Roles</Menu.Item>
              </Menu.List>
            </Menu>
          </Menu.SubMenu>
        </Menu.List>
      </Menu.Group>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Text, Tooltip } from '@innovaccer/design-system';


() => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Export</Text>
        </Menu.Item>
        <Tooltip showOnTruncation={true} tooltip="Create a bug report here" open={showTooltip} elementRef={elementRef}>
          <Menu.Item onFocus={() => setShowTooltip(true)} onBlur={() => setShowTooltip(false)}>
            <Text ref={elementRef} className="ellipsis--noWrap">
              Create a bug report here
            </Text>
          </Menu.Item>
        </Tooltip>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Text, Tooltip, Icon } from '@innovaccer/design-system';


() => {

  /*
    .SubMenu-Text {
      width: var(--spacing-7);
    }
  */
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Export</Text>
        </Menu.Item>
        <Menu.SubMenu>
          <Menu.Item
            onFocus={() => {
              setShowTooltip(true);
            }}
            onBlur={() => {
              setShowTooltip(false);
            }}
          >
            <Tooltip showOnTruncation={true} tooltip="User Admin Settings" open={showTooltip} elementRef={elementRef}>
              <div className="justify-space-between d-flex align-items-center w-100">
                <Text ref={elementRef} className="ellipsis--noWrap SubMenu-Text">
                  User Admin Settings
                </Text>
                <Icon name="chevron_right" />
              </div>
            </Tooltip>
          </Menu.Item>
          <Menu position="right-start">
            <Menu.List>
              <Menu.Item>Users</Menu.Item>
              <Menu.Item>Groups</Menu.Item>
              <Menu.Item>Roles</Menu.Item>
            </Menu.List>
          </Menu>
        </Menu.SubMenu>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Row, Column, Label, Menu } from '@innovaccer/design-system';


() => {

  return (
    <Row>
      <Column>
        <Label withInput={true}>Compressed Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="compressed">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Standard Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="standard">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Tight Options</Label>
        <br />
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List size="tight">
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>
    </Row>
  );
}

```


#### Menu

```jsx
import { Row, Column, Label, Menu } from '@innovaccer/design-system';


() => {

  return (
    <Row>
      <Column>
        <Label withInput={true}>Tiny</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="tiny" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>

      <Column>
        <Label withInput={true}>Regular</Label>
        <br />
        <Menu trigger={<Menu.Trigger size="regular" />}>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Export</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
          </Menu.List>
        </Menu>
      </Column>
    </Row>
  );
}

```


#### Menu

```jsx
import { Menu, Button } from '@innovaccer/design-system';


() => {

  return (
    <Menu
      trigger={
        <Button icon="expand_more" iconAlign="right">
          Page actions
        </Button>
      }
    >
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Export</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Components Menu Trigger Right Click

```jsx
import { Text, Menu } from '@innovaccer/design-system';

() => {

  const [popoverVisible, setPopoverVisible] = React.useState(false);
  const [popoverPosition, setPopoverPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    
    const x = event.clientX;
    const y = event.clientY;
    
    setPopoverPosition({ x, y });
    setPopoverVisible(true);
  };

  const handleDocumentClick = () => {
    setPopoverVisible(false);
  };

  return ( 
    <div className="bg-secondary-lighter p-10" onContextMenu={handleContextMenu} onClick={handleDocumentClick}>
      <Text>Right click to open popover</Text>
      <Menu triggerCoordinates={popoverPosition} open={popoverVisible}>
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Export</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menu.List>
      </Menu>
    </div> 
  );
}

```


#### Menu

```jsx
import { Menu, Icon } from '@innovaccer/design-system';


() => {
  const [itemList, setItemList] = React.useState([]);
  const actionList = ['Edit', 'Export', 'Copy'];

  const onClickHandler = (action) => {
    if (itemList.includes(action)) {
      const list = itemList.filter((item) => item !== action);
      setItemList(list);
    } else {
      setItemList([...itemList, action]);
    }
  };

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        {actionList.map((actions) => {
          return (
            <Menu.Item key={actions} onClick={() => onClickHandler(actions)} className="d-flex justify-content-between">
              {actions}
              {itemList.includes(actions) && <Icon name="done" />}
            </Menu.Item>
          );
        })}
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Icon, Text } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="edit" className="mr-4 my-2" />
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="content_Copy" className="mr-4 my-2" />
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="share" className="mr-4 my-2" />
          <Text>Share</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Text } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Run</Text>
          <Text appearance="subtle">Cmd + R</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Preview</Text>
          <Text appearance="subtle">Cmd + P</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center justify-content-between">
          <Text>Copy</Text>
          <Text appearance="subtle">Cmd + C</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Text } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex flex-column align-items-start">
          <Text>Edit</Text>
          <Text appearance="subtle" size="small" weight="medium">
            Changes will be saved
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Share</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Icon, Text } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="edit" className="mr-4 my-2" />
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="content_Copy" className="mr-4 my-2" />
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item className="d-flex align-items-center">
          <Icon name="delete" appearance="alert" className="mr-4 my-2" type="rounded" />
          <Text appearance="destructive">Delete</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Text } from '@innovaccer/design-system';


() => {

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item className="d-flex flex-column align-items-start">
          <Text appearance="destructive">Delete</Text>
          <Text appearance="subtle" size="small" weight="medium">
            Changes will be lost.
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Copy</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Share</Text>
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}

```


#### Menu

```jsx
import { Menu, Text } from '@innovaccer/design-system';


() => {

  return (
    <div className="d-flex justify-content-between">
      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Export</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Copy</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item>
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Export</Text>
          </Menu.Item>
          <Menu.Item>
            <Text appearance="destructive">Delete</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

```


#### Menu

```jsx
import { Menu, Icon, Text } from '@innovaccer/design-system';


() => {

  return (
<div className="d-flex justify-content-between">
      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item className="d-flex align-items-center">
            <Icon name="edit" className="mr-4 my-2" />
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item className="d-flex align-items-center">
            <Icon name="content_Copy" className="mr-4 my-2" />
            <Text>Copy</Text>
          </Menu.Item>
          <Menu.Item className="d-flex align-items-center">
            <Icon name="share" className="mr-4 my-2" />
            <Text>Share</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item className="d-flex align-items-center">
            <Icon name="edit" className="mr-4 my-2" />
            <Text>Edit</Text>
          </Menu.Item>
          <Menu.Item className="d-flex align-items-center">
            <Icon name="content_Copy" className="mr-4 my-2" />
            <Text>Copy</Text>
          </Menu.Item>
          <Menu.Item className="d-flex align-items-center">
            <Icon name="delete" appearance="alert" className="mr-4 my-2" type="rounded" />
            <Text appearance="destructive">Delete</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

```


#### Menu

```jsx
import { Menu, Text } from '@innovaccer/design-system';


() => {

  return (
    <div className="d-flex justify-content-between">
      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item className="d-flex flex-column align-items-start">
            <Text>Edit</Text>
            <Text appearance="subtle" size="small" weight="medium">
              Changes will be saved
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Copy</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Share</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>

      <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          <Menu.Item className="d-flex flex-column align-items-start">
            <Text appearance="destructive">Delete</Text>
            <Text appearance="subtle" size="small" weight="medium">
              Changes will be lost.
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Copy</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Share</Text>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

```