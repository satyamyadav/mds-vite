# Tabs

Tabs segregate similar kind of content and allow users to navigate between them without switching the context.

### Code Examples

#### Components Tabs All

```jsx
import { Tabs, Tab } from '@innovaccer/design-system';

() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6" headerClassName="pl-3">
      <Tab label="All" count={15} className="pl-6">
        <div>All</div>
      </Tab>
      <Tab label="Pending" count={5} className="pl-6">
        <div>Pending</div>
      </Tab>
      <Tab label="Transferred" count={3} className="pl-6">
        <div>Transferred</div>
      </Tab>
      <Tab label="Successful" count={2} className="pl-6">
        <div>Successful</div>
      </Tab>
      <Tab label="Declined" disabled={true} count={5}>
        <div>Declined</div>
      </Tab>
    </Tabs>
  );
}
```


#### Components Tabs Basic Tabs

```jsx
import { Heading, Select, Tabs, Tab } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Feb 9, 2019 (recent)',
      value: 'Feb 9, 2019 (recent)',
      selected: true
    },
    {
      label: 'Feb 10, 2019',
      value: 'Feb 10, 2019'
    },
    {
      label: 'Feb 11, 2019',
      value: 'Feb 11, 2019'
    },
    {
      label: 'Feb 12, 2019',
      value: 'Feb 12, 2019'
    },
    {
      label: 'Feb 13, 2019',
      value: 'Feb 13, 2019'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m" className="pl-5">
          Data Gaps
        </Heading>
        <div style={{ width: 'var(--spacing-8)' }}>
          <Select
            value={{ label: options[0].label, value: options[0].value }}
            triggerOptions={{ withClearButton: false }}
          >
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                )
              })}
            </Select.List>
          </Select>
        </div>
      </div>
      <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
        <Tab label="Clinical Gaps" className="pl-5">
          <div>Clinical Gaps</div>
        </Tab>
        <Tab label="Billing Gaps" className="pl-5">
          <div>Billing Gaps</div>
        </Tab>
        <Tab label="Claim Gaps" disabled={true}>
          <div>Claim Gaps</div>
        </Tab>
      </Tabs>
    </div>
  );
}
```


#### Components Tabs Custom Labels

```jsx
import { Tabs, Tab, Pills, Text } from '@innovaccer/design-system';

() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
    console.log(`tab-change: ${tabIndex}`)();
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab
        className="pl-5"
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 0 ? 'primary' : 'secondary'}>10</Pills>
            </div>
            <Text appearance={activeIndex !== 0 ? 'subtle' : 'link'}>Custom Label 1</Text>
          </>
        }
      >
        <div>Custom Label 1</div>
      </Tab>
      <Tab
        className="pl-5"
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 1 ? 'primary' : 'secondary'}>5</Pills>
            </div>
            <Text appearance={activeIndex !== 1 ? 'subtle' : 'link'}>Custom Label 2</Text>
          </>
        }
      >
        <div>Custom Label 2</div>
      </Tab>
      <Tab
        label={
          <>
            <div className="d-flex mr-4">
              <Pills appearance={activeIndex === 2 ? 'primary' : 'secondary'}>5</Pills>
            </div>
            <Text appearance={activeIndex !== 2 ? 'subtle' : 'link'}>Custom Label 3</Text>
          </>
        }
        disabled={true}
      >
        <div>Custom Label 3</div>
      </Tab>
    </Tabs>
  );
}
```


#### Components Tabs Disabled With Activated

```jsx
import { Tabs, Tab, EmptyState } from '@innovaccer/design-system';

() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  const isDisabled = true;
  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      <Tab label="All" icon="call_received" disabled={isDisabled}>
        {isDisabled ? (
          <div className="h-100 pb-5 bg-secondary-lightest">
            <EmptyState
              title="There's a problem loading this page."
              description="Tab is disabled and you are not authorized to see the content of this tab"
              size="large"
            ></EmptyState>
          </div>
        ) : (
          <div>All</div>
        )}
      </Tab>
      <Tab label="Successful" icon="check_circle">
        <div>Successful</div>
      </Tab>
      <Tab label="Declined" disabled={true} icon="warning">
        <div>Declined</div>
      </Tab>
    </Tabs>
  );
}
```


#### Components Tabs Dismissible Tab

```jsx
import { Tabs, Tab } from '@innovaccer/design-system';

() => {
  
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dismissList, setDismissList] = React.useState([]);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  const onDismissHandler = (tabInfo) => {
    let newList = [...dismissList];
    newList.push(tabInfo.label);
    setDismissList(newList);
  };

  return (
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6">
      {!dismissList.includes('All') && (
        <Tab label="All" count={15} className="pl-5">
          <div>All</div>
        </Tab>
      )}
      {!dismissList.includes('Pending') && (
        <Tab
          label="Pending"
          className="pl-5"
          count={10}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Pending</div>
        </Tab>
      )}
      {!dismissList.includes('Declined') && (
        <Tab
          label="Declined"
          className="pl-5"
          count={4}
          isDismissible={true}
          onDismiss={(tabInfo) => onDismissHandler(tabInfo)}
        >
          <div>Declined</div>
        </Tab>
      )}
      <Tab label="Successful" disabled={true} count={1} isDismissible={true}>
        <div>Successful</div>
      </Tab>
    </Tabs>
  );
}
```


#### Components Tabs Inline Content

```jsx
import { Tabs, Tab, Input, Select } from '@innovaccer/design-system';

() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const options = [
    {
      label: 'Increasing',
      value: 'Increasing',
    },
    {
      label: 'Decreasing',
      value: 'Decreasing'
    },
  ];

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <Tabs
      onTabChange={onTabChangeHandler}
      className="mb-6"
      activeIndex={activeIndex}
    >
      <Tab label="All" count={12} className="pl-5">
        <div>All</div>
      </Tab>
      <Tab label="Active User" count={3} className="pl-5">
        <div>Active User</div>
      </Tab>
      <Tab label="Inactive User" count={9} className="pl-5">
        <div>Inactive User</div>
      </Tab>
      <div className="d-flex justify-content-end flex-grow-1">
        <div style={{ width: 'var(--spacing-9)' }} className="ml-8">
          <Input placeholder="Search by name" icon="search" />
        </div>
        <div style={{ width: 'var(--spacing-8)' }} className="ml-4">
          <Select
            triggerOptions={{ 
              withClearButton: false,
              placeholder: 'Sort by',
            }}
          >
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                )
              })}
            </Select.List>
          </Select>
        </div>
      </div>
    </Tabs>
  );
}
```


#### Components Tabs Size

```jsx
import { Text, Tabs, Tab } from '@innovaccer/design-system';


  () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onTabChangeHandler = (tabIndex) => {
      setActiveIndex(tabIndex);
    };

    return (
      <div className="d-flex w-100">
        <div className="d-flex flex-column">
          <Text weight="strong" className="mb-5">
            Regular
          </Text>
          <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6 mr-10" headerClassName="pl-3">
            <Tab label="All" count={15} className="pl-6">
              <div>All</div>
            </Tab>
            <Tab label="Successful" count={5} className="pl-6">
              <div>Successful</div>
            </Tab>
            <Tab label="Declined" count={10} className="pl-6">
              <div>Declined</div>
            </Tab>
          </Tabs>
        </div>

        <div className="d-flex flex-column">
          <Text weight="strong" className="mb-5">
            Small
          </Text>
          <Tabs
            size="small"
            activeIndex={activeIndex}
            onTabChange={onTabChangeHandler}
            className="mb-6"
            headerClassName="pl-3"
          >
            <Tab label="All" count={15} className="pl-6">
              <div>All</div>
            </Tab>
            <Tab label="Successful" count={5} className="pl-6">
              <div>Successful</div>
            </Tab>
            <Tab label="Declined" count={10} className="pl-6">
              <div>Declined</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

```


#### Components Tabs Tab Label Overflow

```jsx
import { Tabs, Tab } from '@innovaccer/design-system';

() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <Tabs activeIndex={activeIndex} onTabChange={onTabChangeHandler} className="mb-6" headerClassName="pl-3">
      <Tab label="All" count={15} className="pl-6">
        <div>All</div>
      </Tab>
      <Tab label="Pending" count={5} className="pl-6">
        <div>Pending</div>
      </Tab>
      <Tab label="A very very very very very long tab label" count={3} className="pl-6">
        <div>A very very very very very long tab label</div>
      </Tab>
      <Tab label="Successful" count={2} className="pl-6">
        <div>Successful</div>
      </Tab>
      <Tab label="Declined" disabled={true} count={5}>
        <div>Declined</div>
      </Tab>
    </Tabs>
  );
}
```


#### Components Tabs Tabs With Count

```jsx
import { Heading, Button, Tabs, Tab, Input, Select } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Increasing',
      value: 'Increasing',
    },
    {
      label: 'Decreasing',
      value: 'Decreasing'
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <div>
      <div className="d-flex justify-content-between">
        <Heading size="m" className="pl-5">Strategy</Heading>
        <Button appearance="primary">New Strategy</Button>
      </div>
      <div className="d-flex align-items-center mt-3" >
        <Tabs
          onTabChange={onTabChangeHandler}
          className="mb-6"
          activeIndex={activeIndex}
        >
          <Tab label="All" count={12} className="pl-5">
            <div>All</div>
          </Tab>
          <Tab label="Active User" count={3} className="pl-5">
            <div>Active User</div>
          </Tab>
          <Tab label="Inactive User" count={9} className="pl-5">
            <div>Inactive User</div>
          </Tab>
          <div className="d-flex align-items-center">
            <div style={{ width: 'var(--spacing-9)' }} className="ml-8">
              <Input placeholder="Search by name" icon="search" />
            </div>
            <div style={{ width: 'var(--spacing-8)' }} className="ml-4">
              <Select
                triggerOptions={{ 
                  withClearButton: false,
                  placeholder: 'Sort by',
                }}
              >
                <Select.List>
                  {options.map((item, key) => {
                    return (
                      <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                        {item.label}
                      </Select.Option>
                    )
                  })}
                </Select.List>
              </Select>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
```


#### Components Tabs Tabs With Icon

```jsx
import { Heading, Link, Tabs, Tab } from '@innovaccer/design-system';

() => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onTabChangeHandler = (tabIndex) => {
    setActiveIndex(tabIndex);
  };

  return(
    <div>
      <div className="d-flex align-items-center">
        <Heading size="s" className="pl-5">Diabetes: Hemoglobin A1c Poor Control</Heading>
        <Link className="ml-4">Measure definition</Link>
      </div>
      <Tabs
        activeIndex={activeIndex}
        onTabChange={onTabChangeHandler}
        className="mb-6"
      >
        <Tab label="2020" icon="warning" className="pl-5">
          <div>2020</div>
        </Tab>
        <Tab label="2019" icon="check_circle" className="pl-5">
          <div>2019</div>
        </Tab>
        <Tab label="2018" icon="warning" className="pl-5">
          <div>2018</div>
        </Tab>
        <Tab label="2017" icon="check_circle" className="pl-5">
          <div>2017</div>
        </Tab>
      </Tabs>
    </div>
  );
}
```