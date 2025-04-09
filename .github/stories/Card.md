# Card

Cards act as containers to group related information together.

### Code Examples

#### Components Card All

```jsx
import { Card, CardHeader, Text, CardBody, CardFooter, Button, CardSubdued } from '@innovaccer/design-system';

/*
// style.css
.Card-wrapper {
    height: 250px;
}
*/

() => {
  const shadow = 'default';

  return (
    <>
      <Card shadow={shadow} className="w-50 Card-wrapper">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardFooter className="justify-content-end" withSeperator={false}>
          <>
            <Button appearance="basic">Cancel</Button>
            <Button appearance="primary" className="ml-4">
              Submit
            </Button>
          </>
        </CardFooter>
      </Card>
      <Card className="mt-5 w-50">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardSubdued className='mt-5'>Subdued section.</CardSubdued>
      </Card>
    </>
  );
}
```


#### Components Card Card Within A Card

```jsx
import { Row, Column, Card, CardHeader, Heading, CardBody, Text, Badge, CardFooter } from '@innovaccer/design-system';


  () => {
  return (
    <Row>
      <Column size="8">
        <Card>
          <CardHeader>
            <Heading size="s">Managed Plans</Heading>
          </CardHeader>
          <CardBody>
            <Card shadow="none" className="mb-6">
              <CardHeader className="d-flex justify-content-between">
                <Text weight="strong">PRIMARY</Text>
                <Badge appearance="accent4">ACTIVE</Badge>
              </CardHeader>
              <CardBody>
                <Text appearance="disabled">MSSP - Track 3</Text>
                <br />
                <Text small={true}>Medicare</Text>
                <br />
                <div className="py-6">
                  <Text small={true} appearance="disabled">
                    Subscriber
                  </Text>
                  <br />
                  <Text appearance="disabled">LAWSON, JOY (Self)</Text>
                  <br />
                  <Text weight="medium">ZGP123456789</Text>
                </div>
              </CardBody>

              <CardFooter className="position-relative" withSeperator={false}>
                <div>
                  <Text appearance="disabled" small={true}>
                    Last attr:
                  </Text>
                  <Text small={true} className="ml-3">
                    04/19
                  </Text>
                  <Text appearance="disabled" small={true} className="ml-7">
                    Payer ID:
                  </Text>
                  <Text small={true} className="ml-3">
                    001
                  </Text>
                </div>
              </CardFooter>
            </Card>

            <Card shadow="none" className="mb-6">
              <CardHeader className="d-flex justify-content-between">
                <Text weight="strong" appearance="disabled">
                  SECONDARY
                </Text>
                <Badge>INACTIVE</Badge>
              </CardHeader>
              <CardBody>
                <Text appearance="disabled">Community Plan</Text>
                <br />
                <Text small={true}>Blue Shield of California</Text>
                <br />
                <div className="py-6">
                  <Text small={true} appearance="disabled">
                    Subscriber
                  </Text>
                  <br />
                  <Text appearance="disabled">LAWSON, MICHAEL (Spouse)</Text>
                  <br />
                  <Text weight="medium">HKA987654321</Text>
                </div>
              </CardBody>
              <CardFooter className="position-relative" withSeperator={false}>
                <div>
                  <Text appearance="disabled" small={true}>
                    Last attr:
                  </Text>
                  <Text small={true} className="ml-3">
                    11/18
                  </Text>
                  <Text appearance="disabled" small={true} className="ml-7">
                    Payer ID:
                  </Text>
                  <Text small={true} className="ml-3">
                    042
                  </Text>
                </div>
              </CardFooter>
            </Card>
          </CardBody>
        </Card>
      </Column>
    </Row>
  )
}

```


#### Components Card Empty Card

```jsx
import { Row, Column, Card, CardHeader, Heading, CardBody, EmptyState, Button } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="8">
        <Card>
          <CardHeader>
            <Heading size="s">Daily progress</Heading>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="Unable to fetch data"
              description="Sorry there was a technical issue while getting this data. Please try again."
              imageSrc={image}
              size="small"
              className="pb-6"
            >
              <Button icon="refresh" iconAlign="left" className="mt-3">
                Reload
              </Button>
            </EmptyState>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
}
```


#### Card

```jsx
import { Row, Column, Card, CardHeader, Heading, CardBody, Paragraph, Radio, Text, CardSubdued, StatusHint } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="7">
        <Card>
          <CardHeader>
            <Heading size="s">Set timing</Heading>
          </CardHeader>
          <CardBody>
            <Paragraph>
              After the campaign starts, the outreach attempt will be made with the recipients according to the sender's
              preferred timings.
            </Paragraph>
            <Row>
              <Column size="12" className="pt-4">
                <Radio label="Send now" name="gender" value="Checkbox" defaultChecked={true} />
                <Text small={true} appearance="disabled" className="ml-7">
                  Campaign will start immediately
                </Text>
              </Column>
              <Column size="12" className="py-4">
                <Radio label="Schedule for later" name="gender" value="Checkbox" />
                <Text small={true} appearance="disabled" className="ml-7">
                  Campaign will not start immediately
                </Text>
              </Column>
            </Row>
          </CardBody>

          <CardSubdued>
            <Text weight="strong" small={true}>
              SELECTED RECIPIENTS
            </Text>
            <div className="pt-5">
              <StatusHint appearance="success">437 wil receive the message.</StatusHint>
              <StatusHint appearance="alert">42 have opted out or never agreed to receive messages.</StatusHint>
            </div>
          </CardSubdued>
        </Card>
      </Column>
    </Row>
  );
}
```


#### Components Card Scrollable Content

```jsx
import { Paragraph, Text, Card, CardHeader, Heading, List } from '@innovaccer/design-system';



() => {

  const data = [
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG. +1 Hi [recipient.name]! Your (test) is overdue. Please get in touch with [recipient.PCPI..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG. +1 Hi [recipient.name]! Your (test) is overdue. Please get in touch with [recipient.PCPI..."
    }
  },
  {
    "data": {
      "title": "Reminder for upcoming lab test",
      "subTitle": "ENG. «1 Hi [recipient.name]! Your [test] is scheduled for [test.date]. Please get in..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG -1 Hi [recipient.name] Your [test] is overdue. Please get in touch with [recipiert.PCP}..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG. +1 Hi [recipient.name] Your (test] is overdue. Please get in touch with (recipient. PCP}..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG. +1 Hi [recipient.name]! Your (test) is overdue. Please get in touch with [recipient.PCPI..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG. +1 Hi [recipient.name]! Your (test) is overdue. Please get in touch with [recipient.PCPI..."
    }
  },
  {
    "data": {
      "title": "Reminder for upcoming lab test",
      "subTitle": "ENG. «1 Hi [recipient.name]! Your [test] is scheduled for [test.date]. Please get in..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG -1 Hi [recipient.name] Your [test] is overdue. Please get in touch with [recipiert.PCP}..."
    }
  },
  {
    "data": {
      "title": "Reminder for due lab tests",
      "subTitle": "ENG. +1 Hi [recipient.name] Your (test] is overdue. Please get in touch with (recipient. PCP}..."
    }
  }
];

  const schema = [
    {
      width: '100%',
      name: 'data',
      displayName: '',
      cellRenderer: (props) => {
        return (
          <>
          <Paragraph>
            <Text weight="strong">
              {props.data.data.title}
            </Text>
            <br />
            <Text>
              {props.data.data.subTitle}
            </Text>

          </Paragraph>
          </>
        );
      }
    }
  ];

  return (
    <div>
      <Card className="">
        <CardHeader>
          <Heading size="s">Use a template</Heading>
        </CardHeader>
        <div className="vh-50">
          <List
            data={data}
            schema={schema}
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false
            }}
            withPagination={true}
            pageSize={5}
          />
        </div>
      </Card>
    </div>
  );
};

```


#### Components Card Shadow

```jsx
import { Card } from '@innovaccer/design-system';

() => {
  const shadows = ['none', 'shadow10', 'shadow20', 'shadow30'];
  return (
    <div className="d-flex justify-content-between w-75">
      {shadows.map((shadow) => {
        return (
          <Card shadow={shadow} key={shadow}>
            <div className="p-8">{shadow}</div>
          </Card>
        );
      })}
    </div>
  );
}
```


#### Components Card Type Default Card

```jsx
import { Card } from '@innovaccer/design-system';

() => {
  return (
    <Card>
      <div className="p-8" />
    </Card>
  );
}
```


#### Components Card Type Flat

```jsx
import { Card } from '@innovaccer/design-system';

() => {
  return (
    <Card shadow="none">
      <div className="p-8" />
    </Card>
  );
}
```


#### CardSubdued

```jsx
import { CardSubdued } from '@innovaccer/design-system';

() => {
  return (
    <CardSubdued>
      <div className="p-8" />
    </CardSubdued>
  );
}
```