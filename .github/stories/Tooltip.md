# Tooltip

Tooltip is used to display content in relation to a target when that target is hovered.

### Code Examples

#### Components Tooltip All

```jsx
import { Tooltip, Button } from '@innovaccer/design-system';

() => {
  const position = 'bottom';
  const appendToBody = true;
  const hoverable = false;
  const tooltip = 'An awesome tooltip';

  const options = {
    tooltip,
    hoverable,
    position,
    appendToBody,
  };

  return (
    <div className="mb-8 ml-14">
      <Tooltip {...options}>
        <Button>Hover over me</Button>
      </Tooltip>
    </div>
  );
}
```


#### Tooltip

```jsx
import { Tooltip, Text, Avatar } from '@innovaccer/design-system';

() => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);
  return (
    <div className="d-flex justify-content-around">
      <div>
        <Tooltip showOnTruncation={true} tooltip="show me the tooltip on hover">
          <Text style={{ maxWidth: 150 }} className="ellipsis--noWrap d-inline-block w-100">
            show me the tooltip on hover
          </Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip showOnTruncation={true} tooltip="Don't show me the tooltip">
          <Text style={{ maxWidth: 300 }} className="ellipsis--noWrap d-inline-block w-100">
            Don't show me the tooltip on hover
          </Text>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          elementRef={elementRef}
          showOnTruncation={true}
          tooltip="John Doe: Passionate Innovator and Visionary Leader"
        >
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text style={{ maxWidth: 200 }} ref={elementRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
```


#### Tooltip

```jsx
import { Tooltip, Avatar, Text } from '@innovaccer/design-system';

() => {
  const [isFirstTruncated, setIsFirstTruncated] = React.useState(false);
  const [isSecondTruncated, setIsSecondTruncated] = React.useState(false);

  const { detectTruncation } = Tooltip.useAutoTooltip();
  const firstContentRef = React.useRef(null);
  const SecondContentRef = React.useRef(null);

  React.useEffect(() => {
    const isFirstTruncated = detectTruncation(firstContentRef);
    const isSecondTruncated = detectTruncation(SecondContentRef);
    setIsFirstTruncated(isFirstTruncated);
    setIsSecondTruncated(isSecondTruncated);
  }, [firstContentRef, SecondContentRef]);

  return (
    <div className="d-flex justify-content-around">
      <div>
        <Tooltip showTooltip={isFirstTruncated} tooltip="John Doe: Passionate Innovator and Visionary Leader">
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={firstContentRef} style={{ maxWidth: 150 }} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
      <div>
        <Tooltip showTooltip={isSecondTruncated} tooltip="John Doe: Passionate Innovator and Visionary Leader">
          <div className="d-flex ellipsis--noWrap">
            <Avatar appearance="primary" withTooltip={false} firstName="John" lastName="Doe" size="tiny" />
            <Text ref={SecondContentRef} className="ellipsis--noWrap w-100 ml-3 mt-2">
              John Doe: Passionate Innovator and Visionary Leader
            </Text>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
```


#### Tooltip

```jsx
import { Tooltip, Button } from '@innovaccer/design-system';

() => {
  const positions = ['top', 'top-start', 'bottom', 'top-end', 'bottom-start', 'bottom-end', 'right', 'left'];
  const appendToBody = false;
  const tooltip = 'An awesome tooltip';

  const options = {
    tooltip,
    appendToBody,
  };

  return (
    <div className="pb-6 Row">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className="mr-13 mt-8">
            <Tooltip position={pos} {...options}>
              <Button>{pos}</Button>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
}
```


#### Tooltip

```jsx
import { Label, Switch, Tooltip, Button } from '@innovaccer/design-system';

() => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div>
      <div className="mb-6 d-flex">
        <Label className="mr-4">Show Tooltip</Label>
        <Switch
          value={showTooltip}
          aria-label="Toggle tooltip"
          size="tiny"
          onChange={(_, selected) => setShowTooltip(selected)}
        />
      </div>

      <Tooltip showTooltip={showTooltip} tooltip="An awesome tooltip">
        <Button>Conditional Tooltip</Button>
      </Tooltip>
    </div>
  );
}
```