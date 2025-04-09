# ProgressIndicator-Horizontal



### Code Examples

#### Progress Indicator - Horizontal

```jsx
import { SaraSparkle, Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <SaraSparkle size={24} state="listening" className="mr-3" />
      <Text className="shimmer-text">Sara is listening</Text>
    </div>
  );
}
```