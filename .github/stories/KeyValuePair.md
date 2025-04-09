# KeyValuePair

Key value pairs consist of properties (keys) each paired with their respective values.

### Code Examples

#### Components KeyValuePair All

```jsx
import { Text, KeyValuePair } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between w-75">
      <div>
        <Text weight="strong">Left Right Arrangement</Text>
        <KeyValuePair className="d-flex mt-8">
          <KeyValuePair.Key className="mr-7" icon="call" label="Phone" />
          <KeyValuePair.Value value="(555) 555-5555" />
        </KeyValuePair>
      </div>
      <div>
        <Text weight="strong">Top Bottom Arrangement</Text>
        <KeyValuePair className="mt-8">
          <KeyValuePair.Key label="Name" />
          <KeyValuePair.Value value="Joy Lawson" />
        </KeyValuePair>
      </div>
    </div>
  );
}
```


#### Components KeyValuePair Arrangement Left Right Arrangement

```jsx
import { Card, CardHeader, Heading, CardBody, KeyValuePair, Column, StatusHint, MetaList, Avatar, Text, Icon, Badge } from '@innovaccer/design-system';

() => {
  return (
    <Card className="w-50" shadow="none">
      <CardHeader>
        <Heading size="s">Case details</Heading>
      </CardHeader>

      <CardBody className="pb-6">
        <KeyValuePair className="d-flex">
          <Column size={5} className="pr-7">
            <KeyValuePair.Key label="Status" />
          </Column>
          <Column size={7}>
            <KeyValuePair.Value>
              <StatusHint appearance="info">Status Hint</StatusHint>
              <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
            </KeyValuePair.Value>
          </Column>
        </KeyValuePair>

        <KeyValuePair className="d-flex mt-5">
          <Column size={5} className="pr-7">
            <KeyValuePair.Key label="Assigned to" />
          </Column>
          <Column size={7}>
            <KeyValuePair.Value className="d-flex align-items-center">
              <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
              <Text className="ml-4">Daniels, Molly</Text>
            </KeyValuePair.Value>
          </Column>
        </KeyValuePair>

        <KeyValuePair className="d-flex mt-5">
          <Column size={5} className="pr-7">
            <KeyValuePair.Key label="Referred on" />
          </Column>
          <Column size={7}>
            <KeyValuePair.Value className="d-flex align-items-center">
              <Icon name="event" className="my-2" />
              <Text className="ml-3">08/23/2023</Text>
            </KeyValuePair.Value>
          </Column>
        </KeyValuePair>

        <KeyValuePair className="d-flex mt-5">
          <Column size={5} className="pr-7">
            <KeyValuePair.Key label="All programs" />
          </Column>
          <Column size={7}>
            <KeyValuePair.Value className="d-flex align-items-center">
              <Badge>Asthma</Badge>
              <Badge className="ml-4">HIV</Badge>
              <Badge className="ml-4">Hepatitis</Badge>
            </KeyValuePair.Value>
          </Column>
        </KeyValuePair>
      </CardBody>
    </Card>
  )
}
```


#### Components KeyValuePair Arrangement Top Bottom Arrangement

```jsx
import { Card, Heading, KeyValuePair, Avatar, Text } from '@innovaccer/design-system';

() => {
  const healthRecordList = [
    { key: 'TIN', value: '879-79-7989' },
    { key: 'Location', value: 'San Diego, California' },
    { key: 'PCPs', value: '2' },
    { key: 'Risk score', value: '1.5' },
    { key: 'Assignee', value: 'Joy Lawson', showAvatar: true },
    { key: 'Quality score', value: '89' },
    { key: 'Patient count', value: '590' },
  ];

  return (
    <Card className="p-6" shadow="none">
      <Heading size="s">Health center</Heading>
      <div className="d-flex justify-content-between mt-4">
        {healthRecordList.map((healthRecord) => {
          return (
            <KeyValuePair key={healthRecord}>
              <KeyValuePair.Key label={healthRecord.key} />
              <KeyValuePair.Value value={healthRecord.value}>
                {healthRecord.showAvatar && (
                  <div className="mt-3 d-flex align-items-center">
                    <Avatar appearance="primary" firstName="Joy" lastName="Lawson" size="tiny" />
                    <Text className="ml-4">{healthRecord.value}</Text>
                  </div>
                )}
              </KeyValuePair.Value>
            </KeyValuePair>
          );
        })}
      </div>
    </Card>
  );
}
```


#### Components KeyValuePair Multiple Column Layout Column With Fixed Width

```jsx
import { Card, Row, Column, KeyValuePair, StatusHint, LinkButton } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Card className="px-6 py-7" shadow="none">
        <Row className="d-flex justify-content-between">
          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Provider" />
              <KeyValuePair.Value value="Dr. Anil Jain" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="TIN" />
              <KeyValuePair.Value value="879-79-7989" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Location" />
              <KeyValuePair.Value value="San Diego, California" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Quality score" />
              <KeyValuePair.Value value="89" />
            </KeyValuePair>
          </Column>
        </Row>

        <Row className="mt-6 d-flex justify-content-between">
          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="PCPs" />
              <KeyValuePair.Value value="2" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Risk score" />
              <KeyValuePair.Value value="1.5" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Patient count" />
              <KeyValuePair.Value value="590" />
            </KeyValuePair>
          </Column>

          <Column size={2} />
        </Row>
      </Card>

      <Card className="px-6 py-7 mt-6" shadow="none">
        <Row className="d-flex justify-content-between">
          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Ticket type" />
              <KeyValuePair.Value value="Appointment request" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Channel" />
              <KeyValuePair.Value value="Text Message" />
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Transfer status" />
              <KeyValuePair.Value>
                <StatusHint appearance="success">Complete</StatusHint>
              </KeyValuePair.Value>
            </KeyValuePair>
          </Column>

          <Column size={2}>
            <KeyValuePair>
              <KeyValuePair.Key label="Location" />
              <KeyValuePair.Value>
                <LinkButton>Add</LinkButton>
              </KeyValuePair.Value>
            </KeyValuePair>
          </Column>
        </Row>
      </Card>
    </div>
  );
}
```


#### Components KeyValuePair Multiple Column Layout Column With Variable Width

```jsx
import { Card, KeyValuePair } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Card className="px-6 py-7" shadow="none">
        <div className="d-flex justify-content-between w-50">
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="Provider" />
            <KeyValuePair.Value value="Dr. Anil Jain" />
          </KeyValuePair>
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="Score" />
            <KeyValuePair.Value value="89" />
          </KeyValuePair>
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="TIN" />
            <KeyValuePair.Value value="879-79-7989" />
          </KeyValuePair>
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="Location" />
            <KeyValuePair.Value value="San Diego, California" />
          </KeyValuePair>
        </div>
      </Card>
    </div>
  );
}
```


#### Components KeyValuePair Width Left Right Width

```jsx
import { Text, Card, CardHeader, Heading, CardBody, KeyValuePair, Column, StatusHint, MetaList, Avatar, Icon, Badge } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between">
      <div className="w-50 pr-10">
        <Text weight="strong">40:60 Key-Value Width Ratio (Recommended)</Text>
        <Card className="mt-5" shadow="none">
          <CardHeader>
            <Heading size="s">Case details</Heading>
          </CardHeader>

          <CardBody className="pb-6">
            <KeyValuePair className="d-flex">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Status" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="flex-column">
                  <StatusHint appearance="info">Status Hint</StatusHint>
                  <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Assigned to" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
                  <Text className="ml-4">Daniels, Molly</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Referred on" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Icon name="event" className="my-2" />
                  <Text className="ml-3">08/23/2023</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="All programs" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Badge>Asthma</Badge>
                  <Badge className="ml-4">HIV</Badge>
                  <Badge className="ml-4">Hepatitis</Badge>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={5} className="pr-7">
                <KeyValuePair.Key label="Additional given comments" />
              </Column>
              <Column size={7}>
                <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
              </Column>
            </KeyValuePair>
          </CardBody>
        </Card>
      </div>

      <div className="w-50">
        <Text weight="strong">50:50 Key-Value Width Ratio</Text>
        <Card className="mt-5" shadow="none">
          <CardHeader>
            <Heading size="s">Case details</Heading>
          </CardHeader>

          <CardBody className="pb-6">
            <KeyValuePair className="d-flex">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Status" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="flex-column">
                  <StatusHint appearance="info">Status Hint</StatusHint>
                  <MetaList list={[{ label: 'Just now' }, { label: 'Clinical' }]} />
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Assigned to" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Avatar appearance="primary" firstName="Molly" lastName="Daniels" size="tiny" />
                  <Text className="ml-4">Daniels, Molly</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Referred on" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Icon name="event" className="my-2" />
                  <Text className="ml-3">08/23/2023</Text>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="All programs" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value className="d-flex align-items-center">
                  <Badge>Asthma</Badge>
                  <Badge className="ml-4">HIV</Badge>
                  <Badge className="ml-4">Hepatitis</Badge>
                </KeyValuePair.Value>
              </Column>
            </KeyValuePair>

            <KeyValuePair className="d-flex mt-5">
              <Column size={6} className="pr-7">
                <KeyValuePair.Key label="Additional given comments" />
              </Column>
              <Column size={6}>
                <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
              </Column>
            </KeyValuePair>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
```


#### Components KeyValuePair Width Top Bottom Width

```jsx
import { Card, KeyValuePair } from '@innovaccer/design-system';

() => {
  return (
    <Card className="p-7 w-25" shadow="none">
      <KeyValuePair>
        <KeyValuePair.Key label="Additional comments" />
        <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
      </KeyValuePair>
    </Card>
  );
}
```