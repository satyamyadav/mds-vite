# ProgressIndicator-Vertical



### Code Examples

#### Progress Indicator - Vertical

```jsx
import { SaraSparkle, Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className="shimmer-text" size="large">
        Sara is listening
      </Text>
    </div>
  );
}
```