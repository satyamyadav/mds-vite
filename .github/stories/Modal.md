# Modal



### Code Examples

#### Modal

```jsx
import { Button, Modal, Text, ModalDescription } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
            <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
          </>
        )}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a healthcare service description."
        />
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Paragraph } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'small';

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Discard Changes',
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="alert" className="ml-4" onClick={console.log('Discard button click')}>Discard</Button>
          </>
        )}
      >
        <Paragraph>
            You are about to discard all the saved filters.
            Once discarded, this action cannot be undone.
            Please be sure of it.
        </Paragraph>
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Paragraph, Text } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'medium';

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Edit filters',
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Discard button click')}>
                Create version
            </Button>
          </>
        )}
      >
        <Paragraph>
          Currently, Version 1.0 is published.
          This will create a new version of the registry which will be saved as draft untill published.<br />
        </Paragraph><br/>
        <Text>Do you want to continue?</Text>
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Text, Button, Modal, Message, List } from '@innovaccer/design-system';

/*
// styles.css
.Modal-list {
    height: var(--spacing-8);
}
*/

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = true;
  const dimension = 'medium';
  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  const data = [{ Name:'ER Education' }, { Name:'HbA1c Test Due' } , { Name:'Flu Vaccination' }  , { Name:'Well-Child Visit' }, { Name:'Cervical Screening' }, { Name:'HbA1c Test Due' } , { Name:'Flu Vaccination' }  , { Name:'Well-Child Visit' }, { Name:'Cervical Screening' }, { Name:'HbA1c Test Due' } , { Name:'Flu Vaccination' }  , { Name:'Well-Child Visit' }];

  const schema = [
    {
      name: 'info',
      displayName: 'Info',
      cellRenderer: (props) => {
        return (
          <Text className=" ml-4">{`${props.data.Name}`}</Text>
        );
      }
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Cannot delete Leona Lucas',
        }}
        footer={(
          <>
            <Button className="ml-4" onClick={console.log('Close button click')}>Close</Button>
          </>
        )}
      >
        <div>
          <Message
            appearance="warning"
            description="Following 11 outreaches are currently scheduled using this sender's details."
          />
        </div>
        <div className="my-5 overflow-auto border Modal-list">
          <List
            data={data}
            schema={schema}
            size="compressed"
          />
        </div>
        <Text weight="strong" className="mt-2">What to do next?</Text><br/>
        <Text>
          You cannot delete this sender until the scheduled outreaches have been completed or cancelled.
        </Text>
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Navigation, Heading, Button, Modal, Label, Select } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose =false;

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  const options = [
    {
      label: 'Option1',
      value: 'Option1',
    },
    {
      label: 'Option2',
      value: 'Option2',
    }
  ];

  const data = [
    {
      label: 'Medicine',
      name: 'Tab1'
    },
    {
      label: 'Period',
      name: 'Tab2'
    },
    {
      label: 'Alias',
      name: 'Tab3'
    },
    {
      label: 'Priority',
      name: 'Tab4'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'Tab1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const subHeading = (
    <Navigation
      align="left"
      menus={data}
      active={active}
      onClick={onClickHandler}
      className="ml-5 mt-4"
    />
  );

  const header = (
    <div>
      <Heading className="ml-7 mb-3">Medication</Heading>
      {subHeading}
    </div>
  );

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        header={header}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Discard</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Discard button click')}>
                Create operand
            </Button>
          </>
        )}
      >
        <div className="my-5">
          <Label withInput={true} required={true}>Type</Label>
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
          <Label withInput={true} className="mt-5">Active Date</Label>
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
          <div className="d-flex pb-4">
            <div className="d-block w-75">
              <Label withInput={true} required={true} className="mt-5">Diagnosis Diseases</Label>
              <Select triggerOptions={{ withClearButton: false }} width="100%">
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
            <div className="ml-5 d-block w-25">
              <Label withInput={true} required={true} className="mt-5">Version</Label>
              <Select triggerOptions={{ withClearButton: false }} width="100%">
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
          </div>
        </div>
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Text, ModalDescription } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
  }

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        closeOnEscape={true}
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
            <Button appearance="primary" className="ml-4" onClick={()=> setOpenSecondOverlay(true)}>Open</Button>
          </>
        )}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a healthcare service description."
        />
      </Modal>

      <Modal
        closeOnEscape={true}
        open={openSecondOverlay}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4" onClick={() => console.log('Primary button click')}>
              Primary
            </Button>
          </>
        }
      >
        <Text>Modal Part Two Body</Text>
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Text, ModalDescription } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a healthcare service description."
        />
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, ModalHeader, ModalBody, Text, ModalDescription, ModalFooter } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={onClose}
      >
        <ModalHeader
          onClose={onClose}
          heading="Heading"
          subHeading="Subheading"
        />
        <ModalBody>
          <Text>Modal Body</Text>
          <ModalDescription
            title="Description Title"
            description="Adding a subheading clearly indicates the hierarchy of the information."
          />
          <ModalDescription
            description="Card Sections include supporting text like an article summary or a healthcare service description."
          />
        </ModalBody>
        <ModalFooter open={open}>
          <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
          <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Text, Chip } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  const data = [{"question":"Do you experience any of the following in your current place of residence? [Select all that apply]", "options":["Deteriorating appearance","Inoperable plumbing","Inadequate wining","Leaking roofs","Crumbling foundations","Unsafe steps","in poor condition","None of the above"]},
    {"question":"In last 12 months, were you worried that your food would run out before you got money to buy more?", "options":["Yes","No"]},
    {"question":"Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual", "options":["Not at all","Several Days","More than half the days","Nearly every day"]},
    {"question":"Feeling tired or having little energy?", "options":["Yes","No"]},
    {"question": "Which of the following refers to a programme that aims to enable patients to make better use of information and communication technology for health and health care?", "options":["patient informatics","ICT health","Health-tech","None of these"]},
    {"question": "The way messages are framed influences people’s intentions and willingness to change their behaviour. Which of the following refers to the type of message framing that gives information about a health behaviour that emphasizes the costs of failing to take action?", "options":["Gain-framed messages","Loss-framed messages","Neutrally-framed messages","None of these"]},
    {"question": "Which of the following refers to the capacity to access, understand, appraise and apply health information and services, and to make appropriate health decisions to promote and maintain health?", "options":["health accessibility","health appraisal","health literacy","health promotion"]},
    {"question": "Frederich Engels’ book entitled The Condition of the Working Class in England in 1844 provided a detailed description of the appalling living and working conditions and the limited health care of working-class residents in which of the following English cities?", "options":["London","Manchester","Liverpool","None of these"]},
    {"question": "Which of the following explanations for health inequalities focus on the individual as the unit of analysis, emphasizing unthinking, reckless or irresponsible behaviour or incautious lifestyle as the moving determinant?", "options":["Individualist explanations","Natural and social selection","Materialist and structuralist explanations","Cultural and/or behavioural differences"]},
    {"question": "This approach to health promotion is based on the assumption that humans are rational decision-makers, this approach relies heavily upon the provision of information about risks and benefits of certain behaviours.", "options":["Behaviour change approach","Community development approach","Biomedical approach","None of these"]},
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={(
          <>
            <Button  onClick={() => console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={() => console.log('Next button click')}>Next</Button>
          </>
        )}
        seperator={true}
      >
        <div className="mt-5">
          <Text weight="strong">All questions must be answered, unless marked</Text><br/>
          {
            data.map((object, index) => {
              return(
                <div key={index} className="mt-5 d-flex">
                  <div >
                    <Text size="regular" className="mr-4">
                    {`${index + 1}.`}
                    </Text>
                  </div>
                  <div className="d-inline-block ml-2">
                    <Text size="regular">
                      {object.question}
                    </Text>
                    <div className="mb-5 mt-3">
                      {
                        object.options.map((option , ind) => {
                          return <Chip key={ind} type="selection" label={option} className="mr-4 mt-4"/>;
                        })
                      }
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Text, ModalDescription } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'large';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
            <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
          </>
        )}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a healthcare service description."
        />
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Text, ModalDescription } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
            <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
          </>
        )}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a healthcare service description."
        />
      </Modal>
    </div>
  );
}
```


#### Modal

```jsx
import { Button, Modal, Text, ModalDescription } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'small';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
            <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
          </>
        )}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a healthcare service description."
        />
      </Modal>
    </div>
  );
}
```