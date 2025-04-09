# AvatarGroup

Avatar group displays a group of avatars stacked together.

### Code Examples

#### Components Avatar AvatarGroup All

```jsx
import { Avatar, AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];
  return <AvatarGroup list={list} popoverOptions={{ position: 'bottom', withSearch: true, on: 'click', searchPlaceholder: 'Search User',}} />;
}
```


#### Components Avatar AvatarGroup Overflow Behavior

```jsx
import { Text, AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter Paxton',
      lastName: 'Wheeler'
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Dynamic Width (Recommended)</Text>
        <div className="mt-4">
          <AvatarGroup list={list} popoverOptions={{ width: 200 }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Truncate</Text>
        <div className="mt-4">
          <AvatarGroup list={list} />
        </div>
      </div>
    </div>
  );
}
```


#### Components Avatar AvatarGroup Variants Border Color

```jsx
import { AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
  ];

  const popoverOptions = { on: 'hover' };

  return (
    <div className='d-flex justify-content-between align-items-center w-75'>
      <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
      <AvatarGroup size="regular" borderColor="var(--secondary-lightest)" 
        className='bg-secondary-lightest p-4' list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
      <AvatarGroup size="tiny" list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
      <AvatarGroup size="tiny" borderColor="var(--secondary-lightest)" list={list.slice(0, 4)} 
        className='bg-secondary-lightest p-4' popoverOptions={popoverOptions}/>
    </div>
  );
}
```


#### Components Avatar AvatarGroup Variants Custom Popover

```jsx
import { Avatar, Text, AvatarGroup } from '@innovaccer/design-system';

/*
// style.css
.UserAvatars-popover {
    max-height: var(--spacing-7);
}
*/

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler'
    },
  ];

  const popperRenderer = (list) => {
    const AvatarList = list.map((avatar, index) => {
      const { firstName, lastName, appearance } = avatar;

      return (
        <div className="d-flex align-items-center mr-4 mb-4" key={index}>
          <Avatar
            firstName={firstName}
            lastName={lastName}
            appearance={appearance}
            className="mr-4"
            withTooltip={false}
          />
          <Text>{`${firstName} ${lastName}`}</Text>
        </div>
      )
    });

    return (
      <div className="overflow-auto py-4 px-6 UserAvatars-popover">
        {AvatarList}
      </div>
    )
  };

  return (
    <AvatarGroup
      list={list}
      popoverOptions={{ dark: false, popperRenderer }}
    />
  );
}
```


#### Components Avatar AvatarGroup Variants Size

```jsx
import { Text, AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
  ];

  const popoverOptions = { on: 'hover' };

  return (
    <div className="d-flex">
      <div className="flex-column mr-9">
        <Text weight="strong">Regular</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Tiny</Text>
        <div className="mt-4">
          <AvatarGroup size="tiny" list={list.slice(0, 4)} popoverOptions={popoverOptions}/>
        </div>
      </div>
    </div>
  );
}
```


#### Components Avatar AvatarGroup Variants State

```jsx
import { Text, AvatarGroup } from '@innovaccer/design-system';

() => {
  const popoverOptions = { on: 'hover' };

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Default</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={popoverOptions} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-4">
          <AvatarGroup list={disabledList.slice(0, 4)} popoverOptions={popoverOptions} />
        </div>
      </div>
    </div>
  );
}
```


#### Components Avatar AvatarGroup Variants Trigger

```jsx
import { Text, AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Hover</Text>
        <div className="mt-4">
          <AvatarGroup list={list.slice(0, 4)} popoverOptions={{ on: 'hover' }} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Click</Text>
        <div className="mt-4">
          <AvatarGroup list={list.slice(0, 4)} popoverOptions={{ on: 'click' }} />
        </div>
      </div>
    </div>
  );
}
```


#### Components Avatar AvatarGroup With Icon

```jsx
import { Avatar, AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      icon: <Avatar.Icon name="person" />
    },
  ];
  return <AvatarGroup list={list} />;
}
```


#### Components Avatar AvatarGroup With Image

```jsx
import { Avatar, AvatarGroup } from '@innovaccer/design-system';

() => {
  const list = [
    {
      firstName: 'Satyam',
      lastName: 'Yadav',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Shivaansh',
      lastName: 'Sharma',
      image: <Avatar.Image src="https://design.innovaccer.com/images/github.png" />,
    },
  ];
  return <AvatarGroup list={list} />;

}
```