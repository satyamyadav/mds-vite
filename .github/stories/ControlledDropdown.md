# ControlledDropdown



### Code Examples

#### Controlled Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const dropdownOptions =  [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'events',
      subInfo: 'subInfo',
    });
  }

  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const onPopperToggle = (popperIsOpen, type) => {
    setOpen(popperIsOpen);
    console.log(`type: ${type}`);
  }

  const onUpdate = (type, options, recentSelected) => {
    switch (type) {
      case 'apply-selected':
        setSelected(recentSelected);
        return;
      case 'cancel-selected':
        console.log('cancel-clicked');
      default:
        return;
    }
  };

  const onClose = (values) => {
    console.log(`dropdown closed with selected values: ${values}`)
  };

  return (
    <div className="w-25">
      <Text weight="strong">{'Options > 50'}</Text><br /><br />
      <Dropdown
        fetchOptions={fetchOptions}
        onPopperToggle={onPopperToggle}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        withCheckbox={true}
        showApplyButton={true}
        open={open}
        onClose={onClose}
      />
    </div>
  );
}
```


#### Controlled Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const dropdownOptions =  [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'events',
      subInfo: 'subInfo',
    });
  }

  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const onUpdate = (type, options, recentSelected) => {
    switch (type) {
      case 'apply-selected':
        setOpen(!open);
        setSelected(recentSelected);
        return;
      case 'cancel-selected':
        setOpen(!open);
        return action('cancel event triggered')();
      default:
        return;
    }
  };

  const onPopperToggle = (isPopperOpen) => {
    setOpen(isPopperOpen);
  };

  return (
    <div className="w-25">
      <Text weight="strong">{'Options <= 50'}</Text><br /><br />
      <Dropdown
        options={dropdownOptions.slice(0, 50)}
        onPopperToggle={onPopperToggle}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        withCheckbox={true}
        showApplyButton={true}
        open={open}
      />
    </div>
  );
}
```


#### Controlled Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const dropdownOptions =  [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'events',
      subInfo: 'subInfo',
    });
  }

  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const onUpdate = (_type, option) => {
    this.window.setTimeout(() => {
      setSelected([option]);
    }, 2000);
  };

  const onPopperToggle = (updatedOpen, type) => {
    console.log(type)
    setOpen(updatedOpen);
  }

  const onClose = (values) => {
    console.log(values);
  }

  return (
    <div className="w-25">
      <Dropdown
        fetchOptions={fetchOptions}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        onPopperToggle={onPopperToggle}
        onClose={onClose}
        open={open}
      />
    </div>
  );
}
```