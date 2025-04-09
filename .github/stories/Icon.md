# Icon



### Code Examples

#### Components Icon All

```jsx
import { Icon } from '@innovaccer/design-system';

() => {
  return(
    <Icon size={48} name='place'/>
    );
}
```


#### Icon

```jsx
import { Icon, Text } from '@innovaccer/design-system';

() => {
  const appearances = [
    ['primary', 'primary_dark', 'primary_darker', 'primary_lighter'],
    ['alert', 'alert_dark', 'alert_darker', 'alert_lighter'],
    ['success', 'success_dark', 'success_darker', 'success_lighter'],
    ['warning', 'warning_dark', 'warning_darker', 'warning_lighter'],
    ['accent1', 'accent1_dark', 'accent1_darker', 'accent1_lighter'],
    ['accent2', 'accent2_dark', 'accent2_darker', 'accent2_lighter'],
    ['accent3', 'accent3_dark', 'accent3_darker', 'accent3_lighter'],
    ['accent4', 'accent4_dark', 'accent4_darker', 'accent4_lighter'],
    ['inverse', 'subtle', 'disabled'],
  ];

  const name = 'events';
  return (
    <div>
      {appearances.map((appearance, ind) => {
        return (
          <div key={ind} className="d-flex mb-8">
            <div>
              <Icon className="mr-12 mb-4" appearance={appearance[0]} size={48} name={name} />
              <br />
              <Text weight="strong">{appearance[0]}</Text>
            </div>

            <div>
              <Icon className="mr-12 mb-4" appearance={appearance[1]} size={48} name={name} />
              <br />
              <Text weight="strong">{appearance[1]}</Text>
            </div>

            <div>
              <Icon className="mr-12 mb-4" appearance={appearance[2]} size={48} name={name} />
              <br />
              <Text weight="strong">{appearance[2]}</Text>
            </div>

            {appearance[3] && (
              <div>
                <Icon className="mb-4" appearance={appearance[3]} size={48} name={name} />
                <br />
                <Text weight="strong">{appearance[3]}</Text>
              </div>
            )}
          </div>
        );
      })}
      <div>
        <Icon appearance="white" size={48} name={name} className="bg-dark" />
      </div>
      <br />
      <Text weight="strong">white</Text>
      <div className="mt-5">
        <Icon appearance="destructive" size={48} name={name} />
      </div>
      <br />
      <Text weight="strong">destructive</Text>
    </div>
  );
}
```


#### Icon

```jsx
import { Icon } from '@innovaccer/design-system';

() => {
  return (
    <Icon size={48}>
      <img alt="Innovaccer logo" src="https://design.innovaccer.com/images/withoutType.png" width="48" height="48" />
    </Icon>
  );
}
```


#### Icon

```jsx
import { Icon, Text } from '@innovaccer/design-system';

() => {
  const types = ['outlined', 'rounded'];

  const name = 'alarm';
  return (
    <div className="d-flex">
      {types.map((IconShape, ind) => {
        return (
          <div key={ind} className="mr-10">
            <Icon type={IconShape} size={48} name={name} />
            <br />
            <Text weight="strong">{IconShape.charAt(0).toUpperCase() + IconShape.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```