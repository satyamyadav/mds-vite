# ProgressBar



### Code Examples

#### Components Progress Indicators ProgressBar All

```jsx
import { ProgressBar } from '@innovaccer/design-system';

() => {
  const value = 10;
  const max = 100;

  return (
    <div className="w-50">
      <ProgressBar value={value} max={max} />
    </div>
  );
}
```


#### Components Progress Indicators ProgressBar Fifty Percent

```jsx
import { ProgressBar } from '@innovaccer/design-system';

() => <ProgressBar value={50} max={100} />
```


#### ProgressBar

```jsx
import { ProgressBar, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['small', 'regular'];
  return (
    <div className="w-75">
      {sizes.map((ProgressBarSize, ind) => {
        return (
          <div key={ind} className="mb-7">
            <ProgressBar size={ProgressBarSize} value={30} />
            <br />
            <Text weight="strong">{ProgressBarSize.charAt(0).toUpperCase() + ProgressBarSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### ProgressBar

```jsx
import { ProgressBar } from '@innovaccer/design-system';

() => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);
  });

  return <ProgressBar value={progress} max={100} />;
}
```