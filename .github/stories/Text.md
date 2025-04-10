# Text



### Code Examples

#### Text

```jsx
import { Text } from '@innovaccer/design-system';

() => {
  return <Text>Text component have different variants, look for options in knobs tab.</Text>;
}
```


#### Text

```jsx
import { Text } from '@innovaccer/design-system';

() => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled', 'success', 'link'];
  return (
    <div className="d-flex w-75 justify-content-between">
      {appearances.map((appear, ind) => {
        const backgroundClass = appear === 'white' ? 'bg-dark mr-6' : '';

        return (
          <Text key={ind} className={backgroundClass} appearance={appear}>
            {appear.charAt(0).toUpperCase() + appear.slice(1)}
          </Text>
        );
      })}
    </div>
  );
}
```


#### Text

```jsx
import { Row, Column, Text } from '@innovaccer/design-system';

() => {
  const colorList = [
    [
      'primary',
      'primary-dark',
      'primary-darker',
      'primary-light',
      'primary-lighter',
      'primary-lightest',
      'primary-shadow',
    ],
    [
      'success',
      'success-dark',
      'success-darker',
      'success-light',
      'success-lighter',
      'success-lightest',
      'success-shadow',
    ],
    ['alert', 'alert-dark', 'alert-darker', 'alert-light', 'alert-lighter', 'alert-lightest', 'alert-shadow'],
    [
      'warning',
      'warning-dark',
      'warning-darker',
      'warning-light',
      'warning-lighter',
      'warning-lightest',
      'warning-shadow',
    ],
    [
      'accent1',
      'accent1-dark',
      'accent1-darker',
      'accent1-light',
      'accent1-lighter',
      'accent1-lightest',
      'accent1-shadow',
    ],
    [
      'accent2',
      'accent2-dark',
      'accent2-darker',
      'accent2-light',
      'accent2-lighter',
      'accent2-lightest',
      'accent2-shadow',
    ],
    [
      'accent3',
      'accent3-dark',
      'accent3-darker',
      'accent3-light',
      'accent3-lighter',
      'accent3-lightest',
      'accent3-shadow',
    ],
    [
      'accent4',
      'accent4-dark',
      'accent4-darker',
      'accent4-light',
      'accent4-lighter',
      'accent4-lightest',
      'accent4-shadow',
    ],
    ['secondary', 'secondary-dark', 'secondary-light', 'secondary-lighter', 'secondary-lightest', 'secondary-shadow'],

    ['white', 'inverse', 'inverse-light', 'inverse-lighter', 'inverse-lightest', 'inverse-shadow'],
  ];

  return (
    <Row>
      {colorList.map((colors, key) => {
        return (
          <Row key={key} className="py-4">
            {colors.map((color, ind) => {
              return (
                <Column key={ind}>
                  <Text size="large" color={color} className={color === 'white' ? 'bg-dark' : ''}>
                    {color}
                  </Text>
                </Column>
              );
            })}
          </Row>
        );
      })}
    </Row>
  );
}
```


#### Text

```jsx
import { Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex align-items-center justify-content-between w-25">
      <Text size="small">Small</Text>
      <Text size="regular">Regular</Text>
      <Text size="large">Large</Text>
    </div>
  );
}
```


#### Text

```jsx
import { Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex justify-content-between w-25">
      <Text weight="strong">Strong</Text>
      <Text weight="medium">Medium</Text>
      <Text>Default</Text>
    </div>
  );
}
```