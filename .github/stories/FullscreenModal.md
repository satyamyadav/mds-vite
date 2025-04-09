# FullscreenModal



### Code Examples

#### FullscreenModal

```jsx
import { Button, FullscreenModal, Heading, Paragraph } from '@innovaccer/design-system';


() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };


  return (
    <div>
      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            },
            {
              children: 'Done',
              appearance: 'primary',
              className: 'ml-4',
              onClick: ev => console.log('Primary button click', ev)
            }
          ]
        }}
      >
        <div className="pb-6">
          <Heading className="pb-3" size="s">
           Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card Sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>
    </div>
  );
}
```


#### FullscreenModal

```jsx
import { Button, FullscreenModal, Heading, Text, Paragraph } from '@innovaccer/design-system';


() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };


  return (
    <div>
      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        header={(
          <div className="ml-7">
            <Heading>Custom Heading component</Heading>
            <Text appearance="subtle">This is subheading</Text>
          </div>
        )}
        footer={(
          <>
            <Button appearance="basic" onClick={ev => console.log('Basic button click', ev)}>
              Cancel
            </Button>
            <Button appearance="primary" className="ml-4" onClick={ev => console.log('Primary button click', ev)}>
              Done
            </Button>
          </>
        )}
      >
        <div className="pb-6">
          <Heading className="pb-3" size="s">
            Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card Sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>
    </div>
  );
}
```


#### FullscreenModal

```jsx
import { Button, FullscreenModal, Heading, Paragraph, Text } from '@innovaccer/design-system';


() => {
  const [open, setOpen] = React.useState(false);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);


  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
  };

  const openSecondModal = () => {
    setOpenSecondOverlay(true);
  };


  return (
    <div>

      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        closeOnEscape={true}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            },
            {
              children: 'Open',
              appearance: 'primary',
              className: 'ml-4',
              onClick: ev => openSecondModal()
            }
          ]
        }}
      >
        <div className="pb-6">
          <Heading className="pb-3" size="s">
            Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>

      <FullscreenModal
        closeOnEscape={true}
        open={openSecondOverlay}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'Second modal heading',
          subHeading: 'Second modal subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            }
          ]
        }}
      >
        <Heading size="s">Second description title</Heading>
        <Text>Second fullscreen modal body</Text>
      </FullscreenModal>
    </div>
  );
}
```


#### FullscreenModal

```jsx
import { Button, FullscreenModal, Text, Chip } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const data = [{ question:'Do you experience any of the following in your current place of residence? [Select all that apply]', options:['Deteriorating appearance', 'Inoperable plumbing', 'Inadequate wining', 'Leaking roofs', 'Crumbling foundations', 'Unsafe steps', 'in poor condition', 'None of the above'] },
    { question:'In last 12 months, were you worried that your food would run out before you got money to buy more?',
      options:['Yes', 'No'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
    { question:'Feeling tired or having little energy?', options:['Yes', 'No'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
    { question:'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', options:['Not at all', 'Several Days', 'More than half the days', 'Nearly every day'] },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Full screen modal</Button>
      <FullscreenModal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'Survey',
        }}
        footer={(
          <>
            <Button  onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Submit button click')}>Submit</Button>
          </>
        )}
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
                      object.options.map((option, ind) => {
                        return <Chip key={ind} type="selection" label={option} className="mr-4 mt-4" />;
                      })
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      </FullscreenModal>
    </div>
  );
}
```


#### FullscreenModal

```jsx
import { Button, FullscreenModal, Text, Input, Label, Card, List } from '@innovaccer/design-system';


() => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const headerOptions = () => {
    if (page === 0) {
      return(
      {
        heading:'New Care Plan',
      }
      );
    }
    return(
    {
      heading: 'Name the care plan',
      backButton: true,
      backButtonCallback: () => setPage(0)
    }
    );
  };

  const data = [{ name:'Cultural and language barriers', icon: 'close' }, { name:'Patient does not show emotion', icon: 'close' }];

  const schema = [
    {
      name: 'name',
      displayName: 'name',
      width: '80%',
    },
    {
      name: 'icon',
      displayName: 'icon',
      width: '20%',
      minWidth:'10',
      cellType:'ICON',
      align:'right'
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={headerOptions()}
        footer={(
          <>
            {page === 0 && (
              <>
                <Button>
                  Cancel
                </Button>
                <Button appearance="primary" onClick={() => setPage(1)} className="ml-4">
                  Continue
                </Button>
              </>
            )}
            {page === 1 && (
            <>
                <Button>
                  Cancel
                </Button>
                <Button appearance="primary" className="ml-4">
                  Submit
                </Button>
              </>
            )}
          </>
        )}

      >
        {page === 0 && (
          <div>
            <Text weight="strong" size="regular">Identify patient needs</Text><br/>
            <Text  size="small">Identify the patient needs to create a care plan for the patient</Text>
            <Input placeholder="Add patient needs" size="regular" className="my-5"/>
            <Label withInput={true}>2 selected</Label>
            <Card className="w-100" shadow="none">
              <List
                data={data}
                schema={schema}
                size="tight"
              />
            </Card>          
          </div>
        )}
        {page === 1 && (
          <div>
            <Text size="regular">Give a meaningful and easy to understand name to the care plan.</Text><br/>
            <Label required={true} className="mt-5">Name</Label>
            <Input placeholder="Name" size="regular" className="mt-2"/>
          </div>
        )}
      </FullscreenModal>
    </div>
  );
}
```


#### FullscreenModal

```jsx
import { Button, FullscreenModal, Label, Radio, Input, Card, Icon, Text } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const data = [{ iconName: 'message', textMessage: 'Text Message' }, { iconName: 'chat_bubble', textMessage: 'Portal Message' }, { iconName: 'email', textMessage: 'E-mail' }, { iconName: 'markunread_mailbox', textMessage: 'Letter' }, { iconName: 'mic', textMessage: 'Voice Recording' }];

  const cardClassName = (index) => {
    const classname = 'd-flex flex-column align-items-center justify-content-center w-25 py-4'
    return classname.concat((index !== data.length-1) && " mr-4")
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Full screen modal</Button>
      <FullscreenModal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'New outreach',
        }}
        footer={(
          <>
            <Button onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Next button click')}>Create</Button>
          </>
        )}
      >
        <Label withInput={true}>Type</Label>
        <div className="d-flex">
          <Radio
            defaultChecked={true}
            label="Message outreach"
            name="Outreach"
            size="regular"
            value="Message outreach"
          />
          <Radio label="Survey outreach" name="Outreach" size="regular" value="Survey outreach" className="ml-8" />
        </div>
        <Label withInput={true} className="mt-6">Name</Label>
        <Input placeholder="e.g. Annual Welness Visit outreach, etc." className="mb-5 w-50" />
        <Label withInput={true}>Medium</Label>
        <div className="d-flex">
          {
            data.map((obj, index) => {
              return(
                <Card key={index} shadow="none" 
                className={cardClassName(index)}
                >
                  <Icon name={obj.iconName} size={25}/>
                  <Text className="pt-5" size="small" weight="strong">
                    {obj.textMessage}
                  </Text>
                </Card>
              );
            })
          }
        </div>
      </FullscreenModal>
    </div>
  );
}
```


#### FullscreenModal

```jsx
import { Button, FullscreenModal, Label, Input, Textarea } from '@innovaccer/design-system';

() => {
    const [open, setOpen] = React.useState(false);

    const onClose = () => {
      setOpen(!open);
    };

    return (
      <div>
        <Button appearance="primary" onClick={() => setOpen(true)}>Open Full screen modal</Button>
        <FullscreenModal
          open={open}
          dimension="medium"
          onClose={onClose}
          headerOptions={{
            heading: 'New group',
          }}
          footer={(
            <>
              <Button  onClick={console.log('Cancel button click')}>Cancel</Button>
              <Button appearance="primary" className="ml-4" onClick={console.log('Next button click')}>Create</Button>
            </>
          )}
        >
          <Label withInput={true} required={true}>Name</Label>
          <Input placeholder="Admin" className="mb-5"/>
          <Label withInput={true}>Description</Label>
          <Textarea placeholder="Write a description"/>
        </FullscreenModal>
      </div>
    );
}
```