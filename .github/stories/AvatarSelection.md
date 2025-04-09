# AvatarSelection



### Code Examples

#### Components Avatar AvatarSelection All

```jsx
import { Avatar, AvatarSelection } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Satyam',
      lastName: 'Yadav',
      selected: true,
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];

  const onSelectHandler = (props) => {
    console.log('props', props);
  };

  const searchComparator = (searchValue, data) => {
    if (searchValue === '') {
      return true;
    }
    return data.firstName.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <AvatarSelection
      list={list}
      withSearch={true}
      onSelect={onSelectHandler}
      searchPlaceholder="Search User"
      searchComparator={searchComparator}
    />
  );
}
```


#### Components Avatar AvatarSelection Custom

```jsx
import { Tooltip, AvatarSelection, Checkbox } from '@innovaccer/design-system';

() => {

  /*
    .AvatarSelection-wrapper {
      width: var(--spacing-8);
    }
  */
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Thom',
      lastName: 'Yorke',
      email: 'thom12@gmail.com',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter Harry Paxton',
      lastName: 'Wheeler',
      selected: true,
    },
  ];

  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      iconOptions: {
        name: 'places',
        type: 'outlined',
      },
      selected: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ]);

  React.useEffect(() => {
    const updatedList = avatarList.map((avatar) => {
      if (selectedItems.includes(avatar)) {
        avatar.selected = true;
      } else {
        avatar.selected = false;
      }
      return avatar;
    });
    setAvatarList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = avatarList.slice(5, avatarList.length);

    const list = popoverList.filter((avatarData) => {
      return avatarData.firstName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(list);
  };

  const onSelectHandler = (list) => {
    setSelectedItems(list);
  };

  const AvatarSelectionItem = (props) => {
    const { avatarData, isSelected } = props;
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef(null);

    const { firstName = '', lastName = '', email } = avatarData;
    const name = `${firstName} ${lastName}`;

    return (
      <Tooltip showOnTruncation={true} tooltip={name} elementRef={elementRef} open={showTooltip}>
        <AvatarSelection.Option
          value={avatarData}
          className="d-flex align-items-center"
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Checkbox
            key={isSelected}
            checked={isSelected}
            label={name}
            size="regular"
            helpText={email}
            labelRef={elementRef}
            className="w-100"
          />
        </AvatarSelection.Option>
      </Tooltip>
    );
  };

  return (
    <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <div className="AvatarSelection-wrapper">
        <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

        {searchList.length === 0 && (
          <AvatarSelection.EmptyState
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <AvatarSelection.List>
          {searchList.map((avatarData, index) => {
            const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

            return <AvatarSelectionItem key={index} avatarData={avatarData} isSelected={isSelected} />;
          })}
        </AvatarSelection.List>
      </div>
    </AvatarSelection>
  );
}
```


#### Components Avatar AvatarSelection List Item Size

```jsx
import { Label, AvatarSelection, Checkbox, Avatar, Text } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Thom',
      lastName: 'Yorke',
      email: 'thomyorke12@gmail.com'
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ];

  const listSize = ['standard', 'compressed', 'tight'];
  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ]);

  React.useEffect(() => {
    const updatedList = avatarList.map((avatar) => {
      if (selectedItems.includes(avatar)) {
        avatar.selected = true;
      } else {
        avatar.selected = false;
      }
      return avatar;
    });
    setAvatarList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = avatarList.slice(5, avatarList.length);

    const list = popoverList.filter((avatarData) => {
      return avatarData.firstName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(list);
  };

  const onSelectHandler = (list) => {
    setSelectedItems(list);
  };

  return (
    <div>
      {listSize.map((size, index) => {
        return (
          <div key={index} className="mb-8 w-25">
            <Label htmlFor={size} withInput={true}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Label>
            <br />
            <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
              <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

              {searchList.length === 0 && (
                <AvatarSelection.EmptyState
                  title="No users found"
                  description="Try modifying your search to find what you are looking for."
                />
              )}

              <AvatarSelection.List size={size}>
                {searchList.map((avatarData, index) => {
                  const { firstName = '', lastName = '' } = avatarData;
                  const name = `${firstName} ${lastName}`;

                  const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

                  return (
                    <AvatarSelection.Option key={index} value={avatarData} className="d-flex align-items-center">
                      <Checkbox
                        key={isSelected}
                        defaultChecked={isSelected}
                        checked={isSelected}
                        size="regular"
                        tabIndex={-1}
                      />
                      <Avatar {...avatarData} className="ml-3 mr-4" withTooltip={false} />
                      <Text className="ellipsis--noWrap">{name}</Text>
                    </AvatarSelection.Option>
                  );
                })}
              </AvatarSelection.List>
            </AvatarSelection>
          </div>
        );
      })}
    </div>
  );
}
```


#### Components Avatar AvatarSelection States

```jsx
import { Avatar, Text, AvatarSelection } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
    },
  ];

  const disabledList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
    },
  ];

  const onSelectHandler = (props) => {
    action('props', props)();
  };

  const searchComparator = (searchValue, data) => {
    if (searchValue === '') {
      return true;
    }
    return data.firstName.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <div className="d-flex">
      <div className="flex-column mr-9">
        <Text weight="strong">Default</Text>
        <div className="mt-7">
          <AvatarSelection
            list={list}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-7">
          <AvatarSelection
            list={disabledList}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
    </div>
  );
}
```