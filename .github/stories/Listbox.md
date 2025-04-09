# Listbox

Related content grouped together and arranged vertically or horizontally.

### Code Examples

#### Listbox

```jsx
import { Card, CardHeader, Heading, Listbox } from '@innovaccer/design-system';

() => {
  const data = [
    {
      assessment: 'Alcohol Usage Disorders Identification Test - C (Audit C)',
    },
    {
      assessment: 'Functional Assessment - Initial',
    },
    {
      assessment: 'Functional Assessment - Discharge',
    },
    {
      assessment: 'Hypertension - Diabetes Symptoms Identification Test',
    },
    {
      assessment: 'Patient Health Question',
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Select Assessment</Heading>
      </CardHeader>

      <Listbox>
        {data.map((item, key) => {
          return <Listbox.Item key={key}>{item.assessment}</Listbox.Item>;
        })}
      </Listbox>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Listbox, Text, Switch, Card, Icon, MetaList, StatusHint, Dropdown, Button } from '@innovaccer/design-system';


() => {
  const SubList = () => {
    const noteList = ['Call Note', 'Visit note', 'Generic note', 'Ad-hoc task'];

    /*
      // style.css
        .SubList-wrapper {
          margin-left: 40px;
          background-color: #fcfafa;
        }

        .Listbox-wrapper {
          height: var(--spacing-9);
        }
    */

    return (
      <Listbox type="description" className="SubList-wrapper mr-6 mb-5 mt-3">
        {noteList.map((note, key) => {
          return (
            <Listbox.Item key={key} className="justify-content-between">
              <Text>{note}</Text>
              <Switch defaultChecked={true} size="tiny" />
            </Listbox.Item>
          );
        })}
      </Listbox>
    );
  };

  const [expandList, setExpandList] = React.useState([]);

  const dataList = [
    {
      title: 'Provider Chat',
      date: '09/11/2022',
      user: 'Erin Boor',
      status: 'Active',
    },
    {
      title: 'Healthwise',
      date: '09/11/2003',
      user: 'Sam',
      status: 'Active',
    },
    {
      title: 'Productivity Metrics',
      date: '09/11/2003',
      user: 'Eric Sam',
      status: 'Active',
    },
    {
      title: 'New button',
      date: '09/11/2003',
      user: 'Ashley Conner',
      status: 'Active',
    },
    {
      title: 'Timer',
      date: '09/11/2003',
      user: 'John Doe',
      status: 'Active',
    },
  ];

  const onClickHandler = (key) => {
    if (expandList.includes(key)) {
      setExpandList(expandList.filter((sid) => sid !== key));
    } else {
      let newOpen = [...expandList];
      newOpen.push(key);
      setExpandList(newOpen);
    }
  };

  return (
    <Card className="w-75" shadow="none">
      <Listbox type="description" className="Listbox-wrapper overflow-auto">
        {dataList.map((record, key) => {
          const expanded = expandList.includes(key);

          return (
            <Listbox.Item key={key} id={key} expanded={expanded} nestedBody={<SubList />}>
              <Icon
                name={'keyboard_arrow_up'}
                size={16}
                onClick={() => onClickHandler(key)}
                appearance="subtle"
                className={`mr-4 cursor-pointer ${expanded ? 'rotate-clockwise' : 'rotate-anticlockwise'}`}
              />

              <div className="d-flex w-100 justify-content-between">
                <div>
                  <Text>{record.title}</Text> <br />
                  <MetaList list={[{ label: `Updated on ${record.date}` }, { label: `Updated by ${record.user}` }]} />
                </div>

                <div className="d-flex align-items-center">
                  <StatusHint appearance="info">{record.status}</StatusHint>
                  <Dropdown
                    align="right"
                    className="ml-5"
                    menu={true}
                    customTrigger={() => <Button appearance="transparent" aria-label="Menu" icon="more_horiz" />}
                    options={[
                      { label: 'Edit', value: 'edit' },
                      { label: 'Export', value: 'export' },
                      { label: 'Delete', value: 'delete' },
                    ]}
                  />
                </div>
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
}

```


#### Listbox

```jsx
import { Card, Heading, Text, Divider, Listbox, Checkbox, CardFooter, Button } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      name: 'Priority',
      checked: true,
    },
    {
      name: 'Scheduled',
      checked: true,
    },
    {
      name: 'Patient',
      checked: false,
    },
    {
      name: 'Activity details',
      checked: true,
    },
    {
      name: 'Note',
      checked: true,
    },
    {
      name: 'Care gaps',
      checked: false,
    },
    {
      name: 'HHS',
      checked: true,
    },
    {
      name: 'CDPS',
      checked: true,
    },
    {
      name: 'Patient',
      checked: false,
    },
  ];

  return (
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-9);
    // }

    <Card className="w-50" shadow="none">
      <div className="pt-6 ml-6 mb-5">
        <Heading>Todo’s table columns</Heading>
        <Text appearance="subtle">Select the columns that you want to see in work list</Text>
      </div>
      <Divider />
      <Listbox showDivider={true} type="description" draggable={true} className="Listbox-wrapper overflow-auto">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item key={key + 1} id={key + 1}>
              <div className="d-flex align-items-center w-100 justify-content-between">
                <Text>{record.name}</Text>
                <Checkbox defaultChecked={record.checked} />
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>

      <CardFooter className="bg-light justify-content-end position-relative">
        <>
          <Button appearance="basic">Cancel</Button>
          <Button appearance="primary" className="ml-4">
            Submit
          </Button>
        </>
      </CardFooter>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Card, CardHeader, Heading, Listbox, Icon, Text, Badge, MetaList } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      title: 'Social Needs Assessment',
      time: '2 days ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      status: 'Due',
    },
    {
      title: 'Diabetes Self Management Assessment',
      time: '1 week ago',
      sender: 'Dr. John Matthews(your primary care physician)',
    },
    {
      title: 'Depression Screening',
      time: '2 week ago',
      sender: 'Dr. Nina Locke(Psychologist)',
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Screenings and assessments</Heading>
      </CardHeader>
      <Listbox size="compressed">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item key={key}>
              <Icon name="assignment" size={20} appearance="primary" className="mr-4" />
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div>
                  <div className="d-flex">
                    <Text>{record.title}</Text>
                    {record.status && (
                      <Badge appearance="alert" subtle={true} className="ml-4">
                        {record.status}
                      </Badge>
                    )}
                  </div>
                  <MetaList list={[{ label: `Sent by ${record.sender}` }, { label: `${record.time}` }]} />
                </div>
                <Icon name="chevron_right" size={20} appearance="subtle" />
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Card, CardHeader, Heading, Listbox, Icon, Text, Badge, MetaList } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      title: 'Social Needs Assessment',
      time: '2 days ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      status: 'Due',
    },
    {
      title: 'Diabetes Self Management Assessment',
      time: '1 week ago',
      sender: 'Dr. John Matthews(your primary care physician)',
    },
    {
      title: 'Depression Screening',
      time: '2 week ago',
      sender: 'Dr. Nina Locke(Psychologist)',
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Screenings and assessments</Heading>
      </CardHeader>
      <Listbox>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item key={key}>
              <Icon name="assignment" size={20} appearance="primary" className="mr-4" />
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div>
                  <div className="d-flex">
                    <Text>{record.title}</Text>
                    {record.status && (
                      <Badge appearance="alert" subtle={true} className="ml-4">
                        {record.status}
                      </Badge>
                    )}
                  </div>
                  <MetaList list={[{ label: `Sent by ${record.sender}` }, { label: `${record.time}` }]} />
                </div>
                <Icon name="chevron_right" size={20} appearance="subtle" />
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Card, CardHeader, Heading, Listbox, Icon, Text, Badge, MetaList } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      title: 'Social Needs Assessment',
      time: '2 days ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      status: 'Due',
    },
    {
      title: 'Diabetes Self Management Assessment',
      time: '1 week ago',
      sender: 'Dr. John Matthews(your primary care physician)',
    },
    {
      title: 'Depression Screening',
      time: '2 week ago',
      sender: 'Dr. Nina Locke(Psychologist)',
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Screenings and assessments</Heading>
      </CardHeader>
      <Listbox size="tight">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item key={key}>
              <Icon name="assignment" size={20} appearance="primary" className="mr-4" />
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div>
                  <div className="d-flex">
                    <Text>{record.title}</Text>
                    {record.status && (
                      <Badge appearance="alert" subtle={true} className="ml-4">
                        {record.status}
                      </Badge>
                    )}
                  </div>
                  <MetaList list={[{ label: `Sent by ${record.sender}` }, { label: `${record.time}` }]} />
                </div>
                <Icon name="chevron_right" size={20} appearance="subtle" />
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Card, CardHeader, Heading, Input, Text, Divider, CardBody, Listbox, Avatar, Button } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      permission: 'Owner',
    },
    {
      firstName: 'Nina',
      lastName: 'Locke',
      email: 'ninalocke@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Joy',
      lastName: 'Lawson',
      email: 'joylawson@gmail.com',
      permission: 'Can view',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      permission: 'Can edit',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      permission: 'Owner',
    },
    {
      firstName: 'Nina',
      lastName: 'Locke',
      email: 'ninalocke@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry@gmail.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Joy',
      lastName: 'Lawson',
      email: 'joylawson@gmail.com',
      permission: 'Can view',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      permission: 'Can edit',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      permission: 'Can edit',
    },
  ];

  return (
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-9);
    // }
    <Card shadow="none">
      <CardHeader className="pb-4">
        <Heading size="s">Sharing test manual</Heading>
        <Input className=" mr-4 mt-5 w-25 mb-6" icon="search" name="input" placeholder="Search" />
        <Text size="medium">Showing 10 items</Text>
      </CardHeader>

      <Divider className="mt-3" appearance="header" />
      <CardBody className="p-0">
        <Listbox type="description" className="Listbox-wrapper overflow-auto">
          {dataList.map((data, key) => {
            return (
              <Listbox.Item key={key} id={key} disabled={key === 2} className="justify-content-between">
                <div className="d-flex align-items-center">
                  <Avatar firstName={data.firstName} lastName={data.lastName} />
                  <div className="ml-5">
                    <Text>{data.firstName + ' ' + data.lastName}</Text> <br />
                    <Text size="small" appearance="subtle">
                      {data.email}
                    </Text>
                  </div>
                </div>
                <Button
                  icon="keyboard_arrow_down"
                  iconAlign="right"
                  appearance="transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  {data.permission}
                </Button>
              </Listbox.Item>
            );
          })}
        </Listbox>
      </CardBody>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Card, CardHeader, Heading, CardBody, Input, Dropdown, Tabs, Tab, Listbox, Text, StatusHint, CardFooter, Icon } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      name: 'ED Discharge care Protocol',
      subInfo: 'Pediatric',
      selected: true,
    },
    {
      name: 'Behavioral Outreach',
      subInfo: 'Remote patient monitoring',
      selected: false,
    },
    {
      name: 'Chronic Care Protocol - Diabetes',
      subInfo: 'Hospice',
      selected: false,
    },
    {
      name: 'TCM Care Protocol',
      subInfo: 'Chronic Care Management',
      selected: false,
    },
    {
      name: 'CAD Outreach',
      subInfo: 'Pharmacy management',
      selected: false,
    },
    {
      name: 'Diabetes care protocol',
      subInfo: 'Remote patient monitoring',
      selected: false,
    },
  ];
  return (
    // style.css
    // .Listbox-wrapper {
    //   height: var(--spacing-9);
    // }

    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Select starting template</Heading>
      </CardHeader>
      <CardBody>
        <div className="d-flex w-50 mb-4">
          <Input className=" mr-4" icon="search" name="input" placeholder="Search" />
          <Dropdown
            options={[
              { label: 'Todo', value: 'TODO' },
              { label: 'In Progress', value: 'IN PROGRESS' },
              { label: 'Done', value: 'DONE' },
              { label: 'Closed', value: 'CLOSED' },
            ]}
            placeholder="Transition"
            withSearch={true}
          />
        </div>
        <Tabs activeIndex={0}>
          <Tab label="Suggested" count={6} className="Listbox-wrapper overflow-auto">
            <Listbox type="option">
              {dataList.map((data, key) => {
                return (
                  <Listbox.Item selected={data.selected} key={key} id={key} disabled={key === 2}>
                    <div className="d-flex w-100 justify-content-between">
                      <div>
                        <Text>{data.name}</Text>
                        <br />
                        <Text appearance="subtle">{data.subInfo}</Text>
                      </div>
                      <StatusHint appearance="info">{data.selected ? 'Selected' : 'Unselected'}</StatusHint>
                    </div>
                  </Listbox.Item>
                );
              })}
            </Listbox>
          </Tab>
          <Tab label="Your protocols" count={7} disabled={true}>
            <div>Your Protocol</div>
          </Tab>
        </Tabs>
      </CardBody>
      <CardFooter className="bg-light position-relative">
        <Icon name="add" size={20} appearance="primary" className="mr-3" />
        <Text appearance="link" weight="medium">
          Create from scratch
        </Text>
      </CardFooter>
    </Card>
  );
}
```


#### Listbox

```jsx
import { Card, CardHeader, Heading, Listbox, Icon, Text, Badge, MetaList, StatusHint } from '@innovaccer/design-system';

() => {
  const dataList = [
    {
      title: 'Social Needs Assessment',
      time: '2 days ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      status: 'Due',
      activated: true,
    },
    {
      title: 'Diabetes Self Management Assessment',
      time: '1 week ago',
      sender: 'Dr. John Matthews(your primary care physician)',
      activated: false,
    },
    {
      title: 'Depression Screening',
      time: '2 week ago',
      sender: 'Dr. Nina Locke(Psychologist)',
      activated: false,
    },
    {
      title: 'PHQ-9 ',
      time: '1 mon ago',
      sender: 'Dr. Jimmy',
      activated: false,
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Screenings and assessments</Heading>
      </CardHeader>

      <Listbox type="resource">
        {dataList.map((record, key) => {
          return (
            <Listbox.Item
              activated={record.activated}
              disabled={key === 2}
              id={key}
              key={key}
              className="justify-content-between"
            >
              <div className="d-flex align-items-center">
                <Icon name="assignment" size={20} appearance="primary" className="mr-4" />
                <div>
                  <div className="d-flex align-items-center">
                    <Text>{record.title}</Text>
                    {record.status && (
                      <Badge appearance="alert" subtle={true} className="ml-4">
                        {record.status}
                      </Badge>
                    )}
                  </div>
                  <MetaList list={[{ label: `Sent by ${record.sender}` }, { label: `${record.time}` }]} />
                </div>
              </div>
              <StatusHint appearance="info">{record.activated ? 'Active' : 'Inactive'}</StatusHint>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
}
```