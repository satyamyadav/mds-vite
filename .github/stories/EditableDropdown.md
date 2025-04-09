# EditableDropdown



### Code Examples

#### Components Inline Editable Fields EditableDropdown All

```jsx
import { Label, EditableDropdown } from '@innovaccer/design-system';

() => {
  const dropdownOptions = [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      selected: i === 2
    });
  };

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <div className="w-25">
      <Label withInput={true} className="ml-5">Editable Dropdown</Label>
      <EditableDropdown
        placeholder="Select Option"
        dropdownOptions={{
          fetchOptions,
          onChange
        }}
      />
    </div>
  );
}
```


#### Components Inline Editable Fields EditableDropdown Custom Render

```jsx
import { StatusHint, Icon, Label, EditableDropdown } from '@innovaccer/design-system';

/*
// style.css
.EditableDropdown-customTrigger {
  border-radius: var(--spacing-m);
}
*/

() => {
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      selected: i === 2
    });
  };

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };

  const customRenderer = (label) => {
    return (
      <StatusHint appearance="warning">{label}</StatusHint>
    );
  };

  const optionRenderer = (props) => {
    const { label } = props.optionData;
    return (
      <StatusHint className="px-5 py-4 cursor-pointer" appearance="warning">{label}</StatusHint>
    );
  };

  const customTrigger = (label) => {
    return (
      <div className="d-flex align-items-center justify-content-between pl-5 pr-4 bg-secondary cursor-pointer w-100 EditableDropdown-customTrigger">
        <StatusHint appearance="warning">{label}</StatusHint>
        <Icon name="keyboard_arrow_down" className="m-4"/>
      </div>
    );
  };

  return (
    <div className="w-25">
      <Label withInput={true} className="ml-5">Editable Dropdown</Label>
      <EditableDropdown
        customTriggerRenderer={customRenderer}
        placeholder="Select Option"
        dropdownOptions={{
          options,
          onChange,
          optionRenderer,
          triggerOptions: { customTrigger },
        }}
      />
    </div>
  );
}
```