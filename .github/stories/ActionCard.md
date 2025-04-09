# ActionCard



### Code Examples

#### Action Card

```jsx
import { ActionCard, Icon, Text } from '@innovaccer/design-system';

() => {
  return (
    <ActionCard className="w-25">
      <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
        <Icon name="store" size={24} className="mb-4" />
        <Text weight="strong" className="mb-2">
          Marketplace
        </Text>
        <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
      </div>
    </ActionCard>
  );
}
```


#### Action Card

```jsx
import { ActionCard, Icon, Text } from '@innovaccer/design-system';

() => {
  const cardList = [
    {
      icon: 'api',
      title: 'API portal',
      description: 'Access and test out application APIs',
    },
    {
      icon: 'preview',
      title: 'App simulator',
      description: 'Envision and test the apps that you want to integrate with Innovaccer',
    },
    {
      icon: 'widgets',
      title: 'App distribution',
      description: 'Publish and monetize your apps and add-ons',
    },
    {
      icon: 'store',
      title: 'Marketplace',
      description: 'Explore and purchase apps and add-ons',
    },
  ];

  return (
    <div className="d-flex">
      {cardList.map((cardItem, key) => {
        const { icon, title, description } = cardItem;
        return (
          <ActionCard key={key} className="mr-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
              <Icon name={icon} size={24} className="mb-4" />
              {title && <Text weight="strong" className="mb-2">{title}</Text>}
              {description && <Text appearance="subtle">{description}</Text>}
            </div>
          </ActionCard>
        );
      })}
    </div>
  );
}
```


#### Action Card

```jsx
import { Text, ActionCard, Icon } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Text weight="strong">Center Content Alignment:</Text>
      <ActionCard className="w-25 mb-8 mt-6">
        <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
          <Icon name="store" size={24} className="mb-4" />
          <Text weight="strong" className="mb-2">
            Marketplace
          </Text>
          <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
        </div>
      </ActionCard>

      <Text weight="strong">Left Content Alignment:</Text>
      <ActionCard className="w-25 mt-6">
        <div className="d-flex justify-content-center p-6 text-align-start">
          <Icon name="store" size={24} className="mr-5" />
          <div>
            <Text weight="strong">Marketplace</Text>
            <br />
            <Text className="pt-2" appearance="subtle">
              Explore and purchase apps and add-ons
            </Text>
          </div>
        </div>
      </ActionCard>
    </div>
  );
}
```


#### Action Card

```jsx
import { Text, ActionCard, Icon } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Text weight="strong">Default:</Text>
      <ActionCard className="w-25 mb-8 mt-6">
        <div className="d-flex justify-content-center p-6 text-align-start">
          <Icon name="store" size={24} className="mr-5" />
          <div>
            <Text weight="strong">Marketplace</Text>
            <br />
            <Text className="pt-2" appearance="subtle">
              Explore and purchase apps and add-ons
            </Text>
          </div>
        </div>
      </ActionCard>

      <Text weight="strong">Disabled:</Text>
      <ActionCard disabled={true} className="w-25 mt-6">
        <div className="d-flex justify-content-center p-6 text-align-start">
          <Icon name="store" size={24} className="mr-5" />
          <div>
            <Text weight="strong">Marketplace</Text>
            <br />
            <Text className="pt-2" appearance="subtle">
              Explore and purchase apps and add-ons
            </Text>
          </div>
        </div>
      </ActionCard>
    </div>
  );
}
```