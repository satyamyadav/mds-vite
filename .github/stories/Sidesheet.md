# Sidesheet

Side sheets are used to present a great amount of information as a part of users' primary task while maintaining the context with the background content.

### Code Examples

#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet, Heading, Badge, Divider } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
  };

  const options = {
    onClose,
    open,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet
        {...options}
        header={
          <div className="pl-7">
          <Heading size="m">Untitled document</Heading>
          <div className="d-flex mt-2">
            <div className="mr-3">
              <Badge>User Interface</Badge>
            </div>
            <div className="mr-3">
              <Badge>Design</Badge>
            </div>
            <div className="mr-3">
              <Badge>Development</Badge>
            </div>
          </div>
          <Divider />
        </div>
        }
      >
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Sidesheet, Label, Input, InputMask, Radio, Textarea, Slider } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  const onClose = () => {
    setOpen(!open);
  };

  const headerOptions = {
    heading: 'Goal details',
    subHeading: 'Comorbidities (e.g obesity, chronic rhinosinusitis, food allergy)',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    seperator: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Add goal
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <div className="py-7">
          <div className="w-100">
            <Label required={true} withInput={true}>
              Goal
            </Label>
            <Input placeholder="Placeholder" />
          </div>
          <div className="d-flex mt-6">
            <div>
              <Label required={true} withInput={true}>
                Achieve by
              </Label>
              <InputMask icon="event" mask={dateMask} validators={dateValidator} placeholder="mm/dd/yyyy" />
            </div>
            <div className="ml-6">
              <Label required={true} withInput={true}>
                Priority
              </Label>
              <div className="d-flex py-3">
                <Radio className="mr-4" label="High" name="Priority" size="regular" value="High" />
                <Radio
                  defaultChecked={true}
                  className="mr-4"
                  label="Medium"
                  name="Priority"
                  size="regular"
                  value="Medium"
                />
                <Radio label="Low" name="Priority" size="regular" value="Low" />
              </div>
            </div>
          </div>
          <div className="mt-7">
            <Label withInput={true} required={true}>
              Care team interventions
            </Label>
            <Textarea
              className="mt-4"
              aria-labelledby="Textarea"
              name="Textarea"
              placeholder="Define intervention"
              resize={true}
              rows={5}
            />
            <Button className="mt-4" size="tiny" icon="refresh" iconAlign="left" appearance="transparent">
              Add intervention
            </Button>
          </div>
          <div className="mt-7">
            <Label className="d-block w-100" withInput={true}>
              Patient actions
            </Label>
            <Button className="mt-4" size="tiny" icon="refresh" iconAlign="left" appearance="transparent">
              Add patient action
            </Button>
          </div>
          <div className="pr-7 mt-7">
            <Label withInput={true}>Motivational score</Label>
            <Slider className="mt-6" defaultValue={2} label="Confidence" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Readiness" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Importance" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Punctuality" stepSize={1} />
            <Slider className="mt-8 mb-8" defaultValue={2} label="Clarity" stepSize={1} />
          </div>
        </div>
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet, Paragraph } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const backIconCallback = () => {
    console.log('back icon clicked');
  };

  const headerOptions = {
    backIconCallback,
    backIcon: true,
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
        <Paragraph>
          The action buttons appear in the left side of the sheet and follows the reverse order as the modals to keep
          the position of primary action predictable. Also, if the content covers &gt;= 75% of the side sheet measured
          vertically, then the actions appear in the bottom, i.e, margin-bottom for the footer is 0px.
        </Paragraph>
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet, Heading } from '@innovaccer/design-system';

() => {
  const [page, setPage] = React.useState(1);
  const [animate, setAnimate] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    return () => {
      setAnimate(false);
    };
  }, [page]);

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
    setPage(1);
  };

  const headerOptions = {
    backIconCallback,
    backIcon: page === 2,
    heading: `Heading ${page}`,
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    backdropClose: true,
    footer: (
      <>
        {page === 1 && (
          <>
            <Button appearance="primary" className="mr-4" onClick={() => setPage(2)}>
              Next
            </Button>
            <Button appearance="basic">Cancel</Button>
          </>
        )}
        {page === 2 && (
          <>
            <Button appearance="primary" className="mr-4">
              Submit
            </Button>
            <Button appearance="basic" onClick={() => setPage(1)}>
              Back
            </Button>
          </>
        )}
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <div className={animate ? 'fade-in' : ''} onAnimationEnd={() => setAnimate(false)}>
          <Heading size="s">{`Page ${page}`}</Heading>
          <SidesheetDescription {...sidesheetDescriptionOptions} />
          <SidesheetDescription {...optionsWithoutLabel} />
        </div>
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Basic</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} dimension="large">
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet } from '@innovaccer/design-system';

() =>{
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Basic</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet, Modal, ModalDescription } from '@innovaccer/design-system';

() =>  {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
  };

  const onCloseSecond = () => {
    setOpenSecond(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>

      <Modal
        closeOnEscape={true}
        open={openSecond}
        backdropClose={false}
        onClose={onCloseSecond}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4">
              Primary
            </Button>
          </>
        }
      >
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
      </Modal>
    </div>
  );
};
```


#### Sidesheet

```jsx
import { Button, Label, Text, Sidesheet } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const backdropClose = true;

  const onClose = () => {
    setOpen(false);
  };

  const onCloseSecond = () => {
    setOpenSecond(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    backdropClose,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4" onClick={() => setOpenSecond(true)}>
          Open
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SecondOverlayOptions = {
    headerOptions,
    backdropClose,
    onClose: onCloseSecond,
    open: openSecond,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
      </>
    ),
  };

  const SidesheetDescription = (params) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  const sidesheetDescriptionOptions2 = {
    label: 'Description Title - 2',
    description: 'Adding a subheading clearly indicates the hierarchy of the information. - 2',
  };

  const optionsWithoutLabel2 = {
    description:
      'Card Sections include supporting text like an article summary or a healthcare service description. - 2',
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options} dimension="large" closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <SidesheetDescription {...optionsWithoutLabel} />
      </Sidesheet>

      <Sidesheet {...SecondOverlayOptions} closeOnEscape={true}>
        <SidesheetDescription {...sidesheetDescriptionOptions2} />
        <SidesheetDescription {...optionsWithoutLabel2} />
      </Sidesheet>
    </div>
  );
};
```