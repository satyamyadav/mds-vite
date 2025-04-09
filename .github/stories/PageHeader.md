# PageHeader



### Code Examples

#### Components PageHeader Level 0 With Navigation

```jsx
import { HorizontalNav, Button, Row, Column, PageHeader } from '@innovaccer/design-system';

() => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active}/>;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button className="mr-4">Reorganize</Button>
      <Button icon="get_app">Export to PDF</Button>
    </div>
  );

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Dashboard"
            separator={false}
            navigation={navigation}
            actions={actions}
          />
        </div>
      </Column>
    </Row>
  );
}
```


#### Components PageHeader Level 0 With Stepper

```jsx
import { Stepper, Button, PageHeader } from '@innovaccer/design-system';

() => {
  const title = 'Annual Wellness Visit';

  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep)
  };

  const options = {
    title,
    separator: false,
    stepper: <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />,
    actions: <Button>Finish later</Button>
  };

  return (
    <div className="w-100 bg-secondary-lightest">
      <PageHeader {...options} />
    </div>
  );
}
```


#### Components PageHeader Level 0 With Tabs

```jsx
import { Tabs, Button, Row, Column, PageHeader } from '@innovaccer/design-system';

() => {
  const tabs = [
    {
      count: 4,
      label: 'Current'
    },
    {
      count: 4,
      label: 'Invited'
    },
    {
      count: 4,
      label: 'Inactive'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = (
    <Tabs
      tabs={tabs}
      activeIndex={activeIndex}
      onTabChange={setActiveIndex}
    />
  );

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button icon="get_app" className="mr-4">Download Records</Button>
      <Button appearance="primary">Invite users</Button>
    </div>
  );

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Users"
            separator={true}
            tabs={tab}
            actions={actions}
          />
        </div>
      </Column>
    </Row>
  );
}
```


#### Components PageHeader Level 1 With back button With Navigation

```jsx
import { HorizontalNav, Text, AvatarGroup, Menu, Button, Badge, StatusHint, PageHeader } from '@innovaccer/design-system';

/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">Few minutes ago</Text>
      <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-4" list={list} popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }} />
      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            {
              options.map((item, key) => {
                const { label } = item;
                return (
                  <Menu.Item key={key}>
                    {label}
                  </Menu.Item>
                );
              })
            }
          </Menu.List>
        </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
      <Button appearance="primary" onClick={onClickHandler}>
        Next
      </Button>
    </div>
  );

  const badge = <Badge appearance="success" subtle={true}>Sent</Badge>;
  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;
  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Annual Wellness"
        separator={false}
        navigationPosition="center"
        navigation={navigation}
        actions={actions}
        badge={badge}
        status={status}
        button={button}
      />
    </div>
  );
}
```


#### Components PageHeader Level 1 With back button With Stepper

```jsx
import { Stepper, Text, AvatarGroup, Menu, Button, Badge, MetaList, PageHeader } from '@innovaccer/design-system';

/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    }
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">Few minutes ago</Text>
      <AvatarGroup className="mr-4" list={list} borderColor="var(--secondary-lightest)" popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }} />
      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            {
              options.map((item, key) => {
                const { label } = item;
                return (
                  <Menu.Item key={key}>
                    {label}
                  </Menu.Item>
                );
              })
            }
          </Menu.List>
        </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
    </div>
  );

  const badge = (
    <Badge appearance="secondary">Message</Badge>
  );

  const meta = (
    <MetaList
      list={[{ label: 'Draft' }]}
      seperator={false}
    />
  );

  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Annual Wellness Visit"
        separator={false}
        navigationPosition="center"
        stepper={stepper}
        actions={actions}
        button={button}
        badge={badge}
        meta={meta}
      />
    </div>
  );
}
```


#### Components PageHeader Level 1 With back button With Tabs

```jsx
import { Tabs, Text, AvatarGroup, Menu, Button, PageHeader } from '@innovaccer/design-system';

/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  const tabs = [
    {
      count: 32,
      label: 'New',
    },
    {
      count: 4,
      label: 'Invalid',
    },
    {
      count: 2,
      label: 'Duplicate',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = <Tabs tabs={tabs} activeIndex={activeIndex} onTabChange={setActiveIndex} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">Few minutes ago</Text>
      <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-4" list={list} popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }} />
      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            {
              options.map((item, key) => {
                const { label } = item;
                return (
                  <Menu.Item key={key}>
                    {label}
                  </Menu.Item>
                );
              })
            }
          </Menu.List>
        </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
      <Button appearance="primary">Next</Button>
    </div>
  );

  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Sender creation report"
        tabs={tab}
        actions={actions}
        button={button}
      />
    </div>
  );
}
```


#### Components PageHeader Level 1 With breadcrumb With Navigation

```jsx
import { HorizontalNav, Breadcrumbs, Badge, MetaList, StatusHint, Row, Column, PageHeader } from '@innovaccer/design-system';

() => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Performance',
    },
    {
      name: 'menu_2',
      label: 'Recipients'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = (
    <HorizontalNav
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
    />
  );
  const actions = (
    <div className="d-flex justify-content-end align-items-center"/>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Outreach',
        link: '/Outreach'
      }]}
      onClick={link => console.log(`on-click: ${link}`)}
    />
  );
  const badge = (
    <Badge subtle={true} appearance="success">Sent</Badge>
  );
  const meta = (
    <MetaList
      list={[{ label: 'Text' }, { label: 'Email' }]}
    />
  );

  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Covid-19"
            separator={false}
            navigationPosition="center"
            navigation={navigation}
            actions={actions}
            breadcrumbs={breadcrumbs}
            badge={badge}
            status={status}
            meta={meta}
          />
        </div>
      </Column>
    </Row>
  );
}
```


#### Components PageHeader Level 1 With breadcrumb With Stepper

```jsx
import { Stepper, Text, AvatarGroup, Menu, Button, Breadcrumbs, Badge, MetaList, PageHeader } from '@innovaccer/design-system';

/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    }
  ];

  const avatarList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text appearance="subtle" className="mr-4">Few minutes ago</Text>
      <AvatarGroup
        className="mr-4"
        list={avatarList}
        borderColor="var(--secondary-lightest)"
        popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }}
      />
      <div className="mr-4">
       <Menu trigger={<Menu.Trigger />}>
        <Menu.List>
          {
            options.map((item, key) => {
              const { label } = item;
              return (
                <Menu.Item key={key}>
                  {label}
                </Menu.Item>
              );
            })
          }
        </Menu.List>
      </Menu>
      </div>
      <Button className="mr-4">Finish later</Button>
    </div>
  );
  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Campaigns',
        link: '/Campaigns'
      }]}
      onClick={link => console.log(`on-click: ${link}`)}
    />
  );
  const badge = (
    <Badge appearance="secondary">Message</Badge>
  );
  const meta = (
    <MetaList
      list={[{ label: 'Draft' }]}
      seperator={false}
    />
  );

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Annual Wellness Visit"
        separator={false}
        navigationPosition="center"
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
}
```


#### Components PageHeader Level 1 With breadcrumb With Tabs

```jsx
import { Tabs, Breadcrumbs, Row, Column, PageHeader } from '@innovaccer/design-system';

() => {
  const tabs = [
    {
      count: 32,
      label: 'New'
    },
    {
      count: 4,
      label: 'Invalid'
    },
    {
      count: 2,
      label: 'Duplicate'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const tab = (
    <Tabs
      tabs={tabs}
      activeIndex={activeIndex}
      onTabChange={setActiveIndex}
    />
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Senders',
        link: '/Senders'
      }]}
      onClick={link => console.log(`on-click: ${link}`)}
    />
  );

  return (
    <Row>
      <Column size={11}>
        <div className="bg-secondary-lightest">
          <PageHeader
            title="Sender creation report"
            separator={true}
            tabs={tab}
            breadcrumbs={breadcrumbs}
          />
        </div>
      </Column>
    </Row>
  );
}
```


#### Components PageHeader Responsiveness

```jsx
import { Text, AvatarGroup, Menu, Icon, Breadcrumbs, StatusHint, HorizontalNav, PageHeader } from '@innovaccer/design-system';

() => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Interventions',
    },
    {
      name: 'menu_2',
      label: 'No Linked Activites'
    }
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      appearance: 'accent2',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      appearance: 'accent3',
    }
  ];

  const options = [
    {
      icon: 'print',
      label: 'Edit',
      value: 'Edit',
    },
    {
      icon: 'assignment_turned_in',
      label: 'Complete',
      value: 'Complete',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
    <Text appearance="subtle" className="mr-4">Updated 1 day ago</Text>
    <AvatarGroup borderColor="var(--secondary-lightest)" className="mr-5" list={list}/>
    <div>
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="print" className="mr-4 my-2" />
              <Text>Edit</Text>
            </Menu.Item>
            <Menu.Item className="d-flex align-items-center">
              <Icon name="assignment_turned_in" className="mr-4 my-2" />
              <Text>Complete</Text>
            </Menu.Item>
          </Menu.List>
      </Menu>
    </div>
    </div>
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Care potential',
        link: '/Care potential'
      }]}
      onClick={link => console.log(`on-click: ${link}`)}
    />
  );

  const status = (
    <StatusHint appearance="info">Ongoing</StatusHint>
  );

  const navigation = (
    <HorizontalNav 
      menus={navigationData}
      onClick={onClickHandler}
      active={active}
    />
  );

  return (
    <div className="bg-secondary-lightest">
      <PageHeader
        navigationPosition="bottom"
        title="Pac Follow-Up Protocol"
        separator={false}
        navigation={navigation}
        actions={actions}
        breadcrumbs={breadcrumbs}
        status={status}
      />
    </div>
  );
}
```