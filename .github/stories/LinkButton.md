# LinkButton

Link button is used to initiate standalone actions in cases where using a button impacts spacing, alignment, or overall aesthetics.

### Code Examples

#### Components Button LinkButton All

```jsx
import { LinkButton } from '@innovaccer/design-system';

() => {
  const type = 'button';

  const icon = 'keyboard_arrow_down_round';

  const iconAlign = 'right';

  const children = 'more details';

  return (
    <LinkButton type={type} icon={icon} iconAlign={iconAlign} aria-label="Open" onClick={action('button-clicked')}>
      {children}
    </LinkButton>
  );
}
```


#### Components Button LinkButton Disabled

```jsx
import { LinkButton } from '@innovaccer/design-system';

() => {
  const icon = 'keyboard_arrow_down_round';
  const iconAlign = 'right';
  const children = 'more details';

  return (
    <LinkButton icon={icon} iconAlign={iconAlign} aria-label="More Details" disabled={true}>
      {children}
    </LinkButton>
  );
}
```


#### LinkButton

```jsx
import { LinkButton, Text } from '@innovaccer/design-system';

() => {
  const sizes = ['tiny', 'regular'];
  const children = 'Assign to me';

  return (
    <div className="d-flex w-25 justify-content-between">
      {sizes.map((buttonSize, ind) => {
        return (
          <div key={ind}>
            <LinkButton size={buttonSize} aria-label={`${buttonSize}`}>
              {children}
            </LinkButton>
            <br />
            <Text weight="strong">{buttonSize.charAt(0).toUpperCase() + buttonSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
```


#### Components Button LinkButton Subtle

```jsx
import { LinkButton } from '@innovaccer/design-system';

() => {
  const type = 'button';

  const icon = 'keyboard_arrow_down_round';

  const iconAlign = 'right';

  const children = 'more details';

  return (
    <LinkButton subtle={true} type={type} icon={icon} iconAlign={iconAlign} aria-label="Open">
      {children}
    </LinkButton>
  );
}
```


#### LinkButton

```jsx
import { LinkButton, Text } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <div className="mr-10">
        <LinkButton icon="add" iconAlign="left" aria-label="left">
          add items
        </LinkButton>
        <br />
        <Text weight="strong">Left</Text>
      </div>

      <div>
        <LinkButton icon="keyboard_arrow_down_round" iconAlign="right" aria-label="right">
          more details
        </LinkButton>
        <br />
        <Text weight="strong">Right</Text>
      </div>
    </div>
  );
}
```