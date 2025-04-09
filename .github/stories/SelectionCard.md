# SelectionCard



### Code Examples

#### SelectionCard

```jsx
import { Row, Column, SelectionCard, Icon, Text } from '@innovaccer/design-system';

() => {
  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useMultiSelect();

  const list = [
    {
      id: 'item1',
      iconName: 'key',
      title: 'Manual drop w/ SFTP user',
      description: 'Give access to data asset using SSH keys',
    },
    {
      id: 'item2',
      iconName: 'adjust',
      title: 'Manual drop on SFTP disk',
      description: 'Give access to a separate SFTP disk image',
    },
  ];

  React.useEffect(() => {
    console.log(selectedCardIds, selectedCardValues);
  }, [selectedCardIds]);

  const onClickHandler = (e, id, value) => {
    console.log('onClick handler', e, id, value);
    updateCardSelection(id, value);
  };

  return (
    <Row>
      {list.map((cardItem, key) => {
        const { id, iconName, title, description } = cardItem;
        return (
          <Column key={key} size={6}>
            <SelectionCard
              id={id}
              cardValue={cardItem}
              className="p-6 d-flex mr-6"
              onClick={onClickHandler}
              selected={isCardSelected(id)}
            >
              <Icon size={20} name={iconName} />
              <div className="ml-5">
                <Text weight="strong">{title}</Text>
                <br />
                <Text className="pt-2" appearance="subtle">{description}</Text>
              </div>
            </SelectionCard>
          </Column>
        );
      })}
    </Row>
  );
}
```


#### SelectionCard

```jsx
import { Text, SelectionCard, Icon } from '@innovaccer/design-system';

() => {
  return (
    <div>
      <Text weight="strong">Left Content Alignment:</Text>
      <SelectionCard name="item1" className="p-6 w-25 d-flex mb-8 mt-6" selected={true}>
        <Icon size={24} name="adjust" />
        <div className="ml-5">
          <Text weight="strong">Manual drop on SFTP disk</Text>
          <br />
          <Text className="pt-2" appearance="subtle">
            Give access to a separate SFTP disk image
          </Text>
        </div>
      </SelectionCard>

      <Text weight="strong">Center Content Alignment:</Text>
      <SelectionCard
        name="item2"
        className="p-6 w-25 mt-6 d-flex flex-column align-items-center text-align-center"
        selected={true}
      >
        <Icon size={24} name="adjust" className="mb-4" />
        <Text weight="strong" className="mb-2">
          Manual drop on SFTP disk
        </Text>
        <Text appearance="subtle">Give access to a separate SFTP disk image</Text>
      </SelectionCard>
    </div>
  );
}
```


#### SelectionCard

```jsx
import { Row, Column, SelectionCard, Icon, Text } from '@innovaccer/design-system';

() => {
  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useMultiSelect();

  const list = [
    {
      id: 'item1',
      iconName: 'transfer_within_a_station',
      title: 'ADT - Admit, Discharge, Transfer',
      description: 'ENS (Encounter notification system) data',
    },
    {
      id: 'item2',
      iconName: 'calendar_month',
      title: 'Appointments',
      description: 'PMS (Practice management system)',
    },
    {
      id: 'item3',
      iconName: 'receipt_long',
      title: 'Billing',
      description: 'Billing and charges',
    },
    {
      id: 'item4',
      iconName: 'account_balance',
      title: 'Claims',
      description: 'Medical, pharmacy, attribution',
    },
  ];

  React.useEffect(() => {
    console.log(selectedCardIds, selectedCardValues);
  }, [selectedCardIds]);

  const onClickHandler = (e, id, value) => {
    console.log('onClick handler', e, id, value);
    updateCardSelection(id, value);
  };

  return (
    <Row>
      {list.map((cardItem, key) => {
        const { id, iconName, title, description } = cardItem;
        return (
          <Column key={key} size={6} className="mb-6">
            <SelectionCard
              id={id}
              cardValue={cardItem}
              className="p-6 d-flex mr-6"
              onClick={onClickHandler}
              selected={isCardSelected(id)}
            >
              <Icon size={20} name={iconName} />
              <div className="ml-5">
                <Text weight="strong">{title}</Text>
                <br />
                <Text className="pt-2" appearance="subtle">{description}</Text>
              </div>
            </SelectionCard>
          </Column>
        );
      })}
    </Row>
  );
}
```


#### SelectionCard

```jsx
import { Row, Column, SelectionCard, Icon, Text } from '@innovaccer/design-system';

() => {
  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useSingleSelect();

  const list = [
    {
      id: 'item1',
      iconName: 'transfer_within_a_station',
      title: 'ADT - Admit, Discharge, Transfer',
      description: 'ENS (Encounter notification system) data',
    },
    {
      id: 'item2',
      iconName: 'calendar_month',
      title: 'Appointments',
      description: 'PMS (Practice management system)',
    },
    {
      id: 'item3',
      iconName: 'receipt_long',
      title: 'Billing',
      description: 'Billing and charges',
    },
    {
      id: 'item4',
      iconName: 'account_balance',
      title: 'Claims',
      description: 'Medical, pharmacy, attribution',
    },
  ];

  React.useEffect(() => {
    console.log(selectedCardIds, selectedCardValues);
  }, [selectedCardIds]);

  const onClickHandler = (e, id, value) => {
    console.log('onClick handler', e, id, value);
    updateCardSelection(id, value);
  };

  return (
    <Row>
      {list.map((cardItem, key) => {
        const { id, iconName, title, description } = cardItem;
        return (
          <Column key={key} size={6} className="mb-6">
            <SelectionCard
              id={id}
              cardValue={cardItem}
              className="p-6 d-flex mr-6"
              onClick={onClickHandler}
              selected={isCardSelected(id)}
            >
              <Icon size={20} name={iconName} />
              <div className="ml-5">
                <Text weight="strong">{title}</Text>
                <br />
                <Text className="pt-2" appearance="subtle">{description}</Text>
              </div>
            </SelectionCard>
          </Column>
        );
      })}
    </Row>
  );
}
```


#### SelectionCard

```jsx
import { Row, Column, Text, SelectionCard, Icon } from '@innovaccer/design-system';

() => {
  const cardConfigs = [
    { label: 'Default:', props: {} },
    { label: 'Disabled:', props: { disabled: true } },
    { label: 'Selected:', props: { selected: true } },
    { label: 'Selected and disabled:', props: { disabled: true, selected: true } },
  ];

  return (
    <Row>
      {cardConfigs.map((config, index) => (
        <Column key={index} size={6}>
          <Text weight="strong">{config.label}</Text>
          <SelectionCard className="p-6 d-flex mt-6 mb-8 mr-6" {...config.props}>
            <Icon size={20} name="adjust" />
            <div className="ml-5">
              <Text weight="strong">Manual drop on SFTP disk</Text>
              <br />
              <Text className="pt-2" appearance="subtle">
                Give access to a separate SFTP disk image
              </Text>
            </div>
          </SelectionCard>
        </Column>
      ))}
    </Row>
  );
}
```