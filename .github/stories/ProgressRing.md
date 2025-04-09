# ProgressRing



### Code Examples

#### Components Progress Indicators ProgressRing All

```jsx
import { ProgressRing } from '@innovaccer/design-system';

() => {
  const value = 50;
  const max = 100;

  return <ProgressRing value={value} max={max} />;
}
```


#### ProgressRing

```jsx
import { ProgressRing, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['small', 'regular', 'large'];
  return (
    <div className="d-flex">
      {sizes.map((ProgressRingSize, ind) => {
        return (
          <div key={ind} className="mr-10 d-flex flex-column align-items-center">
            <ProgressRing size={ProgressRingSize} value={30} />
            <br />
            <Text weight="strong">{ProgressRingSize.charAt(0).toUpperCase() + ProgressRingSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### ProgressRing

```jsx
import { ProgressRing } from '@innovaccer/design-system';

() => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);

    return () => clearInterval(interval)
  });

  return <ProgressRing value={progress} max={100} />;
}
```