# OutsideClick



### Code Examples

#### Components Utilities OutsideClick All

```jsx
import { OutsideClick, Card, Heading } from '@innovaccer/design-system';

() => {
  const outsideClickHandler = () => console.log('outside click');
  const insideClickHandler = () => console.log('inside click');

  return(
    <OutsideClick className="d-inline-block" onOutsideClick={outsideClickHandler}>
      <Card
        className="d-flex align-items-center justify-content-center p-10"
        onClick={insideClickHandler}
      >
        <Heading>Card</Heading>
      </Card>
    </OutsideClick>
  );
}
```