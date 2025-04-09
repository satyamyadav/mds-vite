# TextField



### Code Examples

#### TextField

```jsx
import { TextField } from '@innovaccer/design-system';

() => {
  const [inputText, setInputText] = React.useState('');
  const [helpText, setHelpText] = React.useState('');

  const maxLimit = 50

  React.useEffect(() => {
    if (inputText.length > maxLimit) {
      setHelpText('Character limit exceeded');
    } else {
      setHelpText('Pick a unique username');
    }
  }, [inputText]);

  return (
    <div className="w-25">
      <TextField
        max={maxLimit}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        label="Username"
        helpText={helpText}
      />
    </div>
  );
}
```


#### TextField

```jsx
import { TextField } from '@innovaccer/design-system';

() => {

  return (
    <div className="w-25">
      <TextField
        label="Username"
        helpText="Enter a unique name"
      />
    </div>
  );
}
```


#### TextField

```jsx
import { TextField } from '@innovaccer/design-system';

() => {
  const [inputText, setInputText] = React.useState('');
  const [helpText, setHelpText] = React.useState('');

  const maxLimit = 50

  React.useEffect(() => {
    if (inputText.length > maxLimit) {
      setHelpText('Character limit exceeded');
    } else {
      setHelpText('Enter billing details');
    }
  }, [inputText]);

  return (
    <div className="w-25">
      <TextField
        withTextarea={true}
        max={maxLimit}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value); 
        }}
        label="Description"
        helpText={helpText}
      />
    </div>
  );
}
```


#### TextField

```jsx
import { TextField } from '@innovaccer/design-system';

() => {

  return (
    <div className="w-25">
      <TextField
        label="Description"
        withTextarea={true}
        helpText="Enter billing details"
      />
    </div>
  );
}
```