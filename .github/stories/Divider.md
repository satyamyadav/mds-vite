# Divider



### Code Examples

#### Components Divider All

```jsx
import { Row, Column, Card, CardBody, Heading, Divider, Text } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="10">
        <Card shadow="none">
          <CardBody className="p-0">
            <Row className="py-4 px-6">
              <Heading>Assessment Report</Heading>
            </Row>

            <Divider appearance="header" />
            <Row>
              <Column>
                <div className="p-6">
                  <Heading size="s">Select Assessment</Heading>
                </div>
                <Divider />
                <div className="pl-6">
                  <div className="py-4">
                    <Text>Functional Assessment - Initial</Text>
                  </div>
                  <Divider />

                  <div className="py-4">
                    <Text>Social Influence of Health</Text>
                  </div>
                  <Divider />

                  <div className="py-4">
                    <Text>Social Determinants of Health</Text>
                  </div>
                  <Divider />

                  <div className="py-4">
                    <Text>Functional Assessment - Discharge</Text>
                  </div>
                </div>
              </Column>
              <Divider vertical={true} />

              <Column>
                <div className="p-6">
                  <Text appearance="disabled">MSSP - Track 3</Text>
                  <br />
                  <Text small={true}>Medicare</Text>
                  <br />
                  <div className="pt-6">
                    <Text appearance="disabled" small={true}>
                      Subscriber
                    </Text>
                    <br />
                    <Text appearance="disabled">LAWSON, JOY (Self)</Text>
                    <br />
                    <Text weight="medium">ZGP123456789</Text>
                  </div>
                </div>
                <Divider />
                <Row className="p-6">
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Last attr:
                    </Text>
                    <Text className="ml-3" small={true}>
                      04/19
                    </Text>
                  </Column>
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Plan ID:
                    </Text>
                    <Text className="ml-3" small={true}>
                      040
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
}
```


#### Components Divider Horizontal All

```jsx
import { Row, Column, Divider, Text } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Row>
        <Column className="p-6">
          <Divider />
          <br />
          <Text weight="strong">Basic Divider</Text>
        </Column>

        <Column className="p-6">
          <Divider appearance="header" />
          <br />
          <Text weight="strong">Header Divider</Text>
        </Column>
      </Row>
    </div>
  );
}
```


#### Components Divider Horizontal Basic Divider In Card

```jsx
import { Row, Column, Card, CardBody, Text, Badge, Divider } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="9">
        <Card className="pt-6" shadow="none">
          <CardBody>
            <div className="d-flex justify-content-between">
              <Text appearance="disabled">MSSP - Track 3</Text>
              <Badge appearance="success" subtle={true}>
                ACTIVE
              </Badge>
            </div>
            <br />
            <Text small={true}>Medicare</Text>
            <br />
            <div className="py-6">
              <Text appearance="disabled" small={true}>
                Subscriber
              </Text>
              <br />
              <Text appearance="disabled">LAWSON, JOY (Self)</Text>
              <br />
              <Text weight="medium">ZGP123456789</Text>
            </div>
          </CardBody>

          {/* Horizontal Divider */}
          <Divider />

          <CardBody className="py-4">
            <Row>
              <Column>
                <Text appearance="disabled" small={true}>
                  Last attr:
                </Text>
                <Text className="ml-3" small={true}>
                  04/19
                </Text>
              </Column>
              <Column>
                <Text appearance="disabled" small={true}>
                  Plan ID:
                </Text>
                <Text className="ml-3" small={true}>
                  040
                </Text>
              </Column>
              <Column>
                <Text appearance="disabled" small={true}>
                  Payer ID:
                </Text>
                <Text className="ml-3" small={true}>
                  001
                </Text>
              </Column>
            </Row>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
}
```


#### Components Divider Horizontal Header Divider In Card

```jsx
import { Row, Column, Card, CardBody, Heading, Divider, Text, Radio } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="6">
        <Card className="pb-6" shadow="none">
          <CardBody className="p-0">
            <Row className="p-4">
              <Heading size="s">Section 1</Heading>
            </Row>

            <Divider appearance="header" />

            <div className="px-4 pt-5">
              <Text weight="strong">1. Little interest or pleasure in doing things.</Text>
              <br />
              <Column className="px-4 mt-5">
                <Radio defaultChecked={true} label="Not at all" name="section" size="regular" value="Not at all" />
                <Radio label="Several Days" name="section" size="regular" value="Several Days" />
                <Radio label="More than half the days" name="section" size="regular" value="More than half days" />
              </Column>
            </div>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
}
```


#### Components Divider Indented

```jsx
import { Row, Column, Heading, Card, CardBody, Input, Divider, Text } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="8">
        <Heading size="m">Select assessment</Heading>
        <Card>
          <CardBody className="p-0">
            <Row className="p-6">
              <Column size={8}>
                <Input className="w-25" icon="search" name="input" placeholder="Search" />
              </Column>
            </Row>

            <Divider appearance="header" />

            <div className="pl-6">
              <div className="py-6">
                <Text>Functional Assessment - Initial</Text>
              </div>
              <Divider />

              <div className="py-6">
                <Text>Functional Assessment - Discharge</Text>
              </div>
              <Divider />

              <div className="py-6">
                <Text>Social Influence of Health</Text>
              </div>
              <Divider />

              <div className="py-6">
                <Text>Social Determinants of Health</Text>
              </div>
            </div>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
}
```


#### Components Divider Vertical

```jsx
import { Row, Column, Card, CardBody, Text, Divider, Radio } from '@innovaccer/design-system';

() => {
  return (
    <Row>
      <Column size="10">
        <Card shadow="none">
          <CardBody className="p-0">
            <Row>
              <Column className="p-6">
                <Text appearance="disabled">MSSP - Track 3</Text>
                <br />
                <Text small={true}>Medicare</Text>
                <br />
                <div className="pt-6">
                  <Text appearance="disabled" small={true}>
                    Subscriber
                  </Text>
                  <br />
                  <Text appearance="disabled">LAWSON, JOY (Self)</Text>
                  <br />
                  <Text weight="medium">ZGP123456789</Text>
                </div>
              </Column>

              <Divider vertical={true} />

              <Column className="p-6">
                <div>
                  <Text weight="strong">1. Little interest or pleasure in doing things.</Text>
                  <br />
                  <Column className="px-4 mt-5">
                    <Radio defaultChecked={true} label="Not at all" name="section" size="regular" value="Not at all" />
                    <Radio label="Several Days" name="section" size="regular" value="Several Days" />
                    <Radio label="More than half the days" name="section" size="regular" value="More than half days" />
                  </Column>
                </div>
              </Column>
            </Row>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
}
```