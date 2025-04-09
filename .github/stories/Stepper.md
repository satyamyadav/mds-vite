# Stepper



### Code Examples

#### Components Stepper All

```jsx
import { Stepper } from '@innovaccer/design-system';

() => {
  const [active, setActive] = React.useState(2);

  const steps = [
    {
      label: 'Step',
      value: 'Step1'
    },
    {
      label: 'Step',
      value: 'Step2'
    },
    {
      label: 'Step',
      value: 'Step3'
    },
    {
      label: 'Step',
      value: 'Step4'
    }
  ];

  const onChange = (index) => {
    setActive(index);
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      completed={1}
      onChange={onChange}
    />
  );
}
```


#### Components Stepper Stepper In Page Header

```jsx
import { Stepper, Text, Avatar, Menu, Button, Breadcrumbs, Badge, MetaList, PageHeader } from '@innovaccer/design-system';

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

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text className="mr-4" appearance="subtle" >Few minutes ago</Text>
      <Avatar className="mr-4" firstName="John" lastName="Doe" appearance="accent2"/>
      <div className="mr-4">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
            <Menu.Item>Option 3</Menu.Item>
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
      list={[{ label: 'Alert'}, { label: 'Draft' }]}
    />
  );

  return (
    <div className="p-6 bg-secondary-lightest" style={{width:'1200px'}}>
      <PageHeader
        title="Annual Wellness Visit"
        separator={true}
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


#### Components Stepper Stepper With Animation

```jsx
import { Card, Heading, Text, Row, Column, Label, Select, DateRangePicker, Icon, Checkbox, InputMask, Radio, Button, List, Stepper } from '@innovaccer/design-system';

() => {
  const steps = [
    {
      label: 'Step 1',
      value: 'Step1',
    },
    {
      label: 'Step 2',
      value: 'Step2',
    },
    {
      label: 'Step 3',
      value: 'Step3',
    },
  ];
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);
  const [activeCard, setActiveCard] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const maxSteps = steps.length;
  const [tab, setTab] = React.useState(1);
  const [skipIndices, setSkipIndices] = React.useState([]);

  const handleAnimationEnd = () => {
    if (step === activeCard) {
      setActiveCard(active);
    }
    setStep(active);
  };

  const getClasses = () => {
    if (activeCard !== active && step !== active) {
      if (tab === 1) {
        return 'slideOut-left';
      }
      else {
        return 'slideOut-right';
      }
    }
    else {
      if (tab === 1) {
        return 'slideIn-left';
      }
      else {
        return 'slideIn-right';
      }
    }
  }

  const step1 = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push({
        label: `Option ${i}`,
        value: `Option ${i}`,
      });
    }
    return (
      <div
        className={`py-4 w-100 position-relative ${getClasses()}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Card className="px-6 py-6">
          <Heading className="mb-6" size="s">
            Configure Initiative
          </Heading>
          <Text weight="strong">Population Filter</Text>
          <Row className="mt-5 mb-4">
            <Column size={6} className="d-flex">
              <div className="mr-6 w-100">
                <Label withInput={true}>Region</Label>
                <Select triggerOptions={{ withClearButton: false }}>
                  <Select.List>
                    {options.map((item, key) => {
                      return (
                        <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                          {item.label}
                        </Select.Option>
                      );
                    })}
                  </Select.List>
                </Select>
              </div>
              <div className="w-100">
                <Label withInput={true}>Organization</Label>
                <Select triggerOptions={{ withClearButton: false }}>
                  <Select.List>
                    {options.map((item, key) => {
                      return (
                        <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                          {item.label}
                        </Select.Option>
                      );
                    })}
                  </Select.List>
                </Select>
              </div>
            </Column>
          </Row>
          <div className="pt-6">
            <Text weight="strong">Time Period</Text>
            <div className="mt-5">
              <DateRangePicker withInput />
            </div>
          </div>
        </Card>
      </div>
    );
  };

  const step2 = () => {
    const languages = [
      {
        label: 'Hindi',
        value: 'Hindi',
      },
      {
        label: 'English',
        value: 'English',
        selected: true,
      },
      {
        label: 'French',
        value: 'French',
      },
    ];
    const method = [
      {
        label: 'Phone',
        value: 'Phone',
      },
      {
        label: 'Message',
        value: 'Message',
        selected: true,
      },
      {
        label: 'Email',
        value: 'Email',
      },
      {
        label: 'Letter',
        value: 'Letter',
      },
    ];

    return (
      <div
        className={`py-4 w-100 position-relative ${getClasses()}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Card className="px-6 py-6">
          <form>
            <Row className="mb-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="language" />
                <Text>Known Languages</Text>
              </Column>
              <Column size={8} className="d-flex align-items-center">
                <div className="mr-5 w-25 align-items-center">
                  <Select
                    width
                    value={{ label: 'English', value: 'English' }}
                    triggerOptions={{ withClearButton: false }}
                  >
                    <Select.List>
                      {languages.map((item, key) => {
                        return (
                          <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                            {item.label}
                          </Select.Option>
                        );
                      })}
                    </Select.List>
                  </Select>
                </div>
                <Checkbox className="align-items-center" name="defaultLanguage" label="Set as Default" />
              </Column>
            </Row>
            <Row className="my-5">
              <Column className="d-flex align-items-center" size={3}>
                <Icon className="mr-4" name="record_voice_over" />
                <Text>Preferred Method of Contact</Text>
              </Column>
              <Column size={8} className="d-flex align-items-center">
                <Select value={{ label: 'Message', value: 'Message' }} triggerOptions={{ withClearButton: false }}>
                  <Select.List>
                    {method.map((item, key) => {
                      return (
                        <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                          {item.label}
                        </Select.Option>
                      );
                    })}
                  </Select.List>
                </Select>
              </Column>
            </Row>
            <Row className="mt-6">
              <Column size={3} className="d-flex align-items-center">
                <Icon className="mr-4" name="call" />
                <Text>Phone Numbers</Text>
              </Column>
              <Column size={8} className="d-flex align-items-center">
                <InputMask
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="primaryPhoneNumber"
                />
                <Radio name="defaultPhoneNumber" value="defaultPrimaryPhoneNumber" label="Mark as Preferred" />
              </Column>
            </Row>
            <Row className="my-5">
              <Column size={3} className="d-flex align-items-center" />
              <Column size={8} className="d-flex">
                <InputMask
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  placeholder="(___) ___-____"
                  className="mr-4"
                  name="secondaryPhoneNumber"
                />
                <Radio name="defaultPhoneNumber" value="defaultSecondaryPhoneNumber" label="Mark as Preferred" />
              </Column>
            </Row>
          </form>
        </Card>
      </div>
    );
  };

  const step3 = () => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jonathandoe@gamil.com',
        owner: true,
      },
      {
        firstName: 'Katty',
        lastName: 'Perry',
        email: 'kattyperry21@gamil.com',
        edit: true,
      },
      {
        firstName: 'Daniel',
        lastName: 'Low',
        email: 'daniellow02@yahoo.com',
        view: true,
      },
    ];

    const schema = [
      {
        name: 'info',
        displayName: 'Info',
        width: '80%',
        cellType: 'AVATAR_WITH_META_LIST',
        translate: (a) => ({
          firstName: a.firstName,
          lastName: a.lastName,
          title: `${a.firstName} ${a.lastName}`,
          metaList: [a.email],
        }),
      },
      {
        name: 'rights',
        displayName: 'Rights',
        width: '20%',
        cellRenderer: (props) => {
          const renderRights = () => {
            if (props.data.owner) {
              return (
                <Text appearance="subtle" className="pr-5">
                  owner
                </Text>
              );
            }

            if (props.data.edit || props.data.view) {
              const rights = props.data.edit ? 'edit' : 'view';
              return (
                <Button
                  icon="keyboard_arrow_down"
                  iconAlign="right"
                  appearance="transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  {`can ${rights}`}
                </Button>
              );
            }

            return null;
          };

          return <div className="d-flex align-items-center justify-content-end flex-grow-1">{renderRights()}</div>;
        },
      },
    ];

    return (
      <div
        className={`py-4 w-100 position-relative ${getClasses()}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Card className="pt-4">
          <Text size="large" weight="strong" className="ml-5">
            Sharing Test Manual
          </Text>
          <List
            type="resource"
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false,
            }}
            separator={false}
            showMenu={false}
            data={data}
            schema={schema}
            withPagination={false}
            onSearch={(currData, searchTerm) => {
              return currData.filter(
                (d) =>
                  d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                  d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
          />
        </Card>
      </div>
    );
  };

  const onChange = (activeStep) => {
    if (activeStep < active) {
      setTab(0);
    } else {
      setTab(1);
    }
    setActive(activeStep);
  };

  const onNextHandler = () => {
    setTab(1);
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active);
    setActive(active + 1);
  };

  const onSkipHandler = () => {
    setTab(1);
    if (!skipIndices.includes(active)) {
      setSkipIndices([...skipIndices, active]);
    }
    setActive(active + 1);
  };

  const onPreviousHandler = () => {
    setTab(0);
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active - 1);
    setActive(active - 1);
  };

  const resetStepper = () => {
    setTab(1);
    setActive(0);
    setActiveCard(0);
    setCompleted(-1);
    setStep(0);
    setSkipIndices([]);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return step1();
      case 1:
        return step2();
      case 2:
        return step3();
    }
  };

  return (
    <div className="d-flex flex-column py-4 px-6 bg-secondary-lightest">
      <div className="d-flex justify-content-center py-5 w-100">
        <Stepper steps={steps} active={active} completed={completed} onChange={onChange} skipIndexes={skipIndices} />
      </div>
      {renderStep()}
      <div className="w-100 d-flex justify-content-between">
        {active === maxSteps ? (
          <div className="w-100 d-flex justify-content-center">
            <Button onClick={resetStepper}>Reset</Button>
          </div>
        ) : (
          <div className="my-4 w-100 d-flex justify-content-between">
            <Button onClick={onPreviousHandler} disabled={active === 0}>
              Previous
            </Button>
            <div className="d-flex flex-row">
              <Button className="mr-4" onClick={onSkipHandler}>
                {active < maxSteps - 1 ? 'Skip' : 'Skip and Finish'}
              </Button>
              <Button onClick={onNextHandler} appearance="primary">
                {active < maxSteps - 1 ? 'Next' : 'Finish'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```


#### Components Stepper Variants Active Step

```jsx
import { Stepper } from '@innovaccer/design-system';

() => {
  const [active, setActive] = React.useState(0);

  const steps = [
    {
      label: 'Step',
      value: 'Step1'
    },
    {
      label: 'Step',
      value: 'Step2'
    },
    {
      label: 'Step',
      value: 'Step3'
    },
    {
      label: 'Step',
      value: 'Step4'
    }
  ];

  const onChange = (index) => {
    setActive(index);
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      onChange={onChange}
    />
  );
}
```


#### Components Stepper Variants Completed Step

```jsx
import { Stepper } from '@innovaccer/design-system';

() => {
  const [active, setActive] = React.useState(3);

  const steps = [
    {
      label: 'Step',
      value: 'Step1'
    },
    {
      label: 'Step',
      value: 'Step2'
    },
    {
      label: 'Step',
      value: 'Step3'
    },
    {
      label: 'Step',
      value: 'Step4'
    }
  ];

  const onChange = (index) => {
    setActive(index);
  };

  return (
    <Stepper
      steps={steps}
      active={active}
      completed={2}
      onChange={onChange}
    />
  );
}
```


#### Components Stepper Variants Stepper With Skip

```jsx
import { Stepper, Button } from '@innovaccer/design-system';

() => {
  const steps = [
    {
      label: 'Step 1',
      value: 'Step1',
    },
    {
      label: 'Step 2',
      value: 'Step2',
    },
    {
      label: 'Step 3',
      value: 'Step3',
    },
  ];
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);
  const maxSteps = steps.length;
  const [skipIndices, setSkipIndices] = React.useState([]);

  const onChange = (activeStep) => {
    return action(`Active Index: ${activeStep}`)();
  };

  const onNextHandler = () => {
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active);
    setActive(active + 1);
  };

  const onSkipHandler = () => {
    if (!skipIndices.includes(active)) {
      setSkipIndices([...skipIndices, active]);
    }
    setActive(active + 1);
  };

  const onPreviousHandler = () => {
    if (skipIndices.includes(active)) {
      const updatedSkip = [...skipIndices];
      const index = skipIndices.findIndex((skippedIndex) => skippedIndex === active);
      updatedSkip.splice(index, 1);
      setSkipIndices([...updatedSkip]);
    }
    setCompleted(active - 1);
    setActive(active - 1);
  };

  const resetStepper = () => {
    setActive(0);
    setCompleted(-1);
    setSkipIndices([]);
  };

  return (
    <div className="d-flex flex-column py-4 px-6 bg-secondary-lightest">
      <div className="d-flex justify-content-center py-5 w-100">
        <Stepper steps={steps} active={active} completed={completed} onChange={onChange} skipIndexes={skipIndices} />
      </div>
      <div className="w-100 d-flex mt-12 justify-content-between">
        {active === maxSteps ? (
          <div className="w-100 d-flex justify-content-center">
            <Button onClick={resetStepper}>Reset</Button>
          </div>
        ) : (
          <div className="my-4 w-100 d-flex justify-content-between">
            <Button onClick={onPreviousHandler} disabled={active === 0}>
              Previous
            </Button>
            <div className="d-flex flex-row">
              <Button className="mr-4" onClick={onSkipHandler}>
                {active < maxSteps - 1 ? 'Skip' : 'Skip and Finish'}
              </Button>
              <Button onClick={onNextHandler} appearance="primary">
                {active < maxSteps - 1 ? 'Next' : 'Finish'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
```