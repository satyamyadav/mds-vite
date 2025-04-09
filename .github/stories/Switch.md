# Switch

Switches are used to toggle between two states in a user interface - ON and OFF, hence resembling the real-life switches used to turn something ON or OFF.

### Code Examples

#### Switch

```jsx
import { Switch } from '@innovaccer/design-system';

() => <Switch aria-label="Default Checked Switch" defaultChecked={true} size="regular" />
```


#### Switch

```jsx
import { Switch, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['tiny', 'regular'];

  return (
    <>
      <div className="d-flex mb-7">
        {sizes.map((switchSize, ind) => {
          return (
            <Switch
              key={ind}
              aria-label={`Switch ${switchSize}`}
              defaultChecked={true}
              size={switchSize}
              className="mr-9"
            />
          );
        })}
      </div>
      <div className="d-flex">
        {sizes.map((switchSize, ind) => {
          return (
            <Text key={ind} weight="strong" className="mr-9">
              {switchSize.charAt(0).toUpperCase() + switchSize.slice(1)}
            </Text>
          );
        })}
      </div>
    </>
  );
}
```


#### Switch

```jsx
import { Switch, Text } from '@innovaccer/design-system';

() => {
  return (
    <>
      <div className="d-flex mb-7 justify-content-between w-75">
        <Switch aria-label="Switch enabled" defaultChecked={true} />
        <Switch aria-label="Switch disabled" defaultChecked={true} disabled={true} />
        <Switch aria-label="Switch disabled" disabled={true} />
      </div>
      <div className="d-flex justify-content-between w-75">
        <Text weight="strong">Enabled</Text>
        <Text weight="strong">Enabled - Disabled</Text>
        <Text weight="strong">Disabled</Text>
      </div>
    </>
  );
}
```


#### Components Switch With Label

```jsx
import { Label, Switch } from '@innovaccer/design-system';

() => {
  const [checked, setChecked] = React.useState(false);

  const onChangeHandler = (_event, checkedValue) => {
    setChecked(!checked);
    return action(`switch-change: ${checkedValue}`)();
  };

  return (
    <form>
      <Label htmlFor="vaccination-status" withInput={true}>
        Have you been vaccinated ?
      </Label>
      <br />
      <Switch id="vaccination-status" checked={checked} onChange={onChangeHandler} />
    </form>
  );
}
```