# Paragraph



### Code Examples

#### Paragraph

```jsx
import { Paragraph } from '@innovaccer/design-system';

() => {
  return <Paragraph>Paragraph component have different variants, look for options in knobs tab.</Paragraph>;
}
```


#### Paragraph

```jsx
import { Paragraph, Text } from '@innovaccer/design-system';

() => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-6">
            <div className={appear === 'white' ? 'bg-dark' : 'bg-transparent'}>
              <Paragraph appearance={appear}>Paragraph</Paragraph>
            </div>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Paragraph

```jsx
import { Paragraph } from '@innovaccer/design-system';

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
    ['white', 'inverse', 'inverse-light', 'inverse-lighter', 'inverse-lightest', 'inverse-shadow'],

    ['secondary', 'secondary-dark', 'secondary-light', 'secondary-lighter', 'secondary-lightest', 'secondary-shadow'],
  ];

  return (
    <div>
      {colorList.map((colors, key) => {
        return (
          <div key={key} className="d-flex justify-content-between w-100 py-4">
            {colors.map((color, ind) => {
              return (
                <Paragraph key={ind} color={color} className={color === 'white' ? 'bg-dark' : ''}>
                  {color}
                </Paragraph>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
```