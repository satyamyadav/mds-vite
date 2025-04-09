# Textarea



### Code Examples

#### Components Input Textarea All

```jsx
import { Textarea } from '@innovaccer/design-system';

() => {
  const placeholder = 'Placeholder';

  const resize = true;

  const rows = 3;

  return (
    <div className="w-25">
      <Textarea
        name="Textarea"
        onChange={action('on-change')}
        onClick={action('on-click')}
        placeholder={placeholder}
        resize={resize}
        rows={rows}
        aria-labelledby="Textarea"
      />
    </div>
  );
}
```


#### Textarea

```jsx
import { Label, Textarea } from '@innovaccer/design-system';

() => (
  <div className="w-50">
    <Label withInput={true} htmlFor="comments">
      Comments
    </Label>
    <Textarea name="comments" id="comments" aria-labelledby="Comments" placeholder="Enter your comments here" />
  </div>
)
```


#### Textarea

```jsx
import { Label, Textarea, Caption } from '@innovaccer/design-system';

() => {
  const [value, setValue] = React.useState('Patient moved out of country last week.');

  return (
    <div className="w-50">
      <Label withInput={true} htmlFor="notes">
        Confirmation Notes
      </Label>
      <Textarea
        name="notes"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter your comments here"
        aria-labelledby="Confirmation Notes"
        id="notes"
      />
      <Caption withInput={true}>This note will be automatically pinned for export.</Caption>
    </div>
  );
};
```


#### Textarea

```jsx
import { Label, Textarea } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <div>
        <Label withInput={true}>Disabled</Label>
        <Textarea
          aria-labelledby="Textarea"
          disabled={true}
          resize={false}
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
      <div className="ml-6">
        <Label withInput={true}>Enabled</Label>
        <Textarea
          aria-labelledby="Textarea"
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
    </div>
  );
}
```


#### Textarea

```jsx
import { Label, Textarea } from '@innovaccer/design-system';

() => (
  <div className="w-50">
    <Label withInput={true} htmlFor="Error">
      Error
    </Label>
    <Textarea name="error" id="error" aria-labelledby="Error" error={true} placeholder="This is the error state." />
  </div>
)
```