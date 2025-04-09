# Combobox

A combobox displays an input box combined with the option list.

### Code Examples

#### Combobox

```jsx
import { Spinner, Combobox, Label } from '@innovaccer/design-system';

() => {

  function useFetchOption() {
    const medicineList = [
      { label: 'Acetaminophen', value: 'Acetaminophen' },
      { label: 'Ibuprofen', value: 'Ibuprofen' },
      { label: 'Penicillin G', value: 'Penicillin G' },
      { label: 'Penbutolol', value: 'Penbutolol' },
      { label: 'Aminophenol', value: 'Aminophenol' },
      { label: 'Vancomycin', value: 'Vancomycin' },
    ];

    const getSearchedOptions = (options, searchTerm) => {
      const result = options.filter((option) => option.label.toLowerCase().startsWith(searchTerm.toLowerCase()));
      return result;
    };

    const fetchOptions = (searchTerm) => {
      const searchedOptions = searchTerm ? getSearchedOptions(medicineList, searchTerm) : medicineList;

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            options: searchedOptions,
          });
        }, 1000);
      });
    };
    
    return { fetchOptions };
  }

  const { fetchOptions } = useFetchOption();
  const [loading, setLoading] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchOptions().then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  }, []);

  const onChangeHandler = (item) => {
    console.log('selected option', item);

    setLoading(true);
    fetchOptions(item.label).then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  };

  const PopoverContent = ({loading, optionList}) => {
    if (loading) {
      return (
        <div className="d-flex align-items-center justify-content-center py-6">
          <Spinner />
        </div>
      );
    }

    if (optionList.length === 0) {
      return <></>;
    }

    return (
      <Combobox.List>
        {optionList.map((item, key) => {
          return (
            <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Combobox.Option>
          );
        })}
      </Combobox.List>
    );
  };

  return (
    <div className="w-50">
      <Label withInput={true}>Drug Name</Label>
      <Combobox onChange={onChangeHandler} icon="search" placeholder="Enter drug name">
        <PopoverContent loading={loading} optionList={optionList} />
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox, Text, Badge } from '@innovaccer/design-system';

() => {
  const providerList = [
    {
      name: 'Terry Wilson',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144309823',
    },
    {
      name: 'Ted Warren',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144379172',
    },
    {
      name: 'Tate Miles',
      position: 'Physicians of America/CIN Affiliates - East/Carcamo Pediatrics/Carcamo Pediatrics',
      id: '1144335826',
    },
  ];

  const [filterList, setFilterList] = React.useState(providerList);

  const onChangeHandler = (inputValue) => {
    console.log('inputValue', inputValue);
    const updatedList = providerList.filter((provider) =>
      provider.name.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Provider Name</Label>
      <Combobox onChange={onChangeHandler} className="w-50" icon="search" placeholder='Enter provider name'>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.name, value: item }}>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Text>{item.name}</Text>
                      <Badge>{item.id}</Badge>
                    </div>
                    <Text size="small" appearance="subtle">
                      {item.position}
                    </Text>
                  </div>
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Spinner, Combobox, Label } from '@innovaccer/design-system';

() => {
  function useFetchOption() {
    const medicineList = [
      { label: 'Acetaminophen', value: 'Acetaminophen' },
      { label: 'Ibuprofen', value: 'Ibuprofen' },
      { label: 'Penicillin G', value: 'Penicillin G' },
      { label: 'Penbutolol', value: 'Penbutolol' },
      { label: 'Aminophenol', value: 'Aminophenol' },
      { label: 'Vancomycin', value: 'Vancomycin' },
    ];

    const getSearchedOptions = (options, searchTerm) => {
      const result = options.filter((option) =>
        option.label.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      return result;
    };

    const fetchOptions = (searchTerm) => {
      const searchedOptions = searchTerm ? getSearchedOptions(medicineList, searchTerm) : medicineList;

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            options: searchedOptions,
          });
        }, 1000);
      });
    };

    return { fetchOptions };
  }

  const { fetchOptions } = useFetchOption();
  const [loading, setLoading] = React.useState(false);
  const [optionList, setOptionList] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchOptions(' ').then((res) => {
      const { options } = res;
      setLoading(false);
      setOptionList(options);
    });
  }, []);

  const onChangeHandler = (item) => {
    console.log('selected option', item);
    setLoading(true);
    if (!Array.isArray(item)) {
      fetchOptions(item.label).then((res) => {
        const { options } = res;
        setLoading(false);
        setOptionList(options);
      });
    }
  };

  const PopoverContent = ({ loading, optionList }) => {
    if (loading) {
      return (
        <div className="d-flex align-items-center justify-content-center py-6">
          <Spinner />
        </div>
      );
    }

    if (optionList.length === 0) {
      return <></>;
    }

    return (
      <Combobox.List>
        {optionList.map(
          (
            item, key
          ) => {
            return (
              <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Combobox.Option>
            );
          }
        )}
      </Combobox.List>
    );
  };

  return (
    <div className="w-50">
      <Label withInput={true}>Drug Name</Label>
      <Combobox
        multiSelect={false}
        onKeyDown={(ev) => console.log('onKeyDown :: ', ev)}
        onKeyUp={(ev) => console.log('onKeyUp :: ', ev)}
        onChange={onChangeHandler}
        icon="search"
        placeholder="Enter drug name"
      >
        <PopoverContent loading={loading} optionList={optionList} />
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [filterList, setFilterList] = React.useState([]);

  const onSearchHandler = (value) => {
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().startsWith(value.toLowerCase()));
    setFilterList(newList);
    console.log('searchOption', value, newList);
  };

  const onChangeHandler = (selectedOption) => {
    const newList = medicineList.filter((medicine) => !isElementPresent(selectedOption, medicine.label));
    setFilterList(newList);
    console.log('input value', selectedOption);
  };

  const isElementPresent = (list, value) => {
    let result = false;
    list &&
      list.forEach((listItem) => {
        if (listItem.label === value) {
          result = true;
        }
      });
    return result;
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox onSearch={onSearchHandler} onChange={onChangeHandler} multiSelect={true} clearButton={true}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];
  const [filterList, setFilterList] = React.useState([]);

  const [selectedOption, setSelectedOption] = React.useState([
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
  ]);

  const onSearchHandler = (value) => {
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().startsWith(value.toLowerCase()));
    
    setFilterList(newList);
    console.log('searchOption', value, newList);
  };

  const onChangeHandler = (selectedOption) => {
    const newList = medicineList.filter((medicine) => !isElementPresent(selectedOption, medicine.label));
    setFilterList(newList);
    setSelectedOption(selectedOption);
    console.log('input value', selectedOption);
  };

  const isElementPresent = (list, value) => {
    let result = false;
    list.forEach((listItem) => {
      if (listItem && listItem.label === value) {
        result = true;
      }
    });
    return result;
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox
        chipValue={selectedOption}
        onSearch={onSearchHandler}
        onChange={onChangeHandler}
        multiSelect={true}
        clearButton={true}
      >
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Tooltip, Combobox, Text, Label } from '@innovaccer/design-system';

() => {

  /*
    .Combobox-outerWrapper {
      max-width: var(--spacing-9);
    }
  */

  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    {
      label: 'Lack of readiness to change with environment',
      value: 'Lack of readiness to change with environment',
    },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    console.log('inputValue', inputValue);
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  const ComboboxItem = ({ item }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef(null);

    return (
      <Tooltip showOnTruncation={true} tooltip={item.label} elementRef={elementRef} open={showTooltip}>
        <Combobox.Option
          option={{ label: item.label, value: item.value }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Text ref={elementRef} className="ellipsis--noWrap d-inline-block w-100">
            {item.label}
          </Text>
        </Combobox.Option>
      </Tooltip>
    );
  };

  return (
    <div className="Combobox-outerWrapper">
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} placeholder="Enter barriers">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return <ComboboxItem item={item} key={key} />;
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [filterList, setFilterList] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState({ label: 'Acetaminophen', value: 'Acetaminophen' });

  const onChangeHandler = (item) => {
    const newList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(item.label.toLowerCase())
    );
    setFilterList(newList);
    setSelectedOption(item);
    console.log('item', item);
  };

  return (
    <div>
      <Label withInput={true}>Drug Name</Label>
      <Combobox icon="search" value={selectedOption} onChange={onChangeHandler}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              const option = { label: item.label, value: item.value };
              return (
                <Combobox.Option key={key} option={option}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
  ];

  const [filterList, setFilterList] = React.useState(medicineList);
  const sizes = ['tiny', 'regular', 'large'];

  const onChangeHandler = (inputValue) => {
    console.log(' inputValue', inputValue);
    const updatedList = medicineList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      {sizes.map((size) => {
        return (
          <div key={size}>
            <Label withInput={true}>Drug Name</Label>
            <Combobox onChange={onChangeHandler} placeholder="Enter drug name" size={size}>
              {filterList.length > 0 && (
                <Combobox.List>
                  {filterList.map((item, key) => {
                    return (
                      <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                        {item.label}
                      </Combobox.Option>
                    );
                  })}
                </Combobox.List>
              )}
            </Combobox>
          </div>
        );
      })}
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox } from '@innovaccer/design-system';

() => {
  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    { label: 'Lack of readiness to change', value: 'Lack of readiness to change' },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    console.log(' inputValue', inputValue);
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} className="w-50" placeholder="Enter barriers">
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
    </div>
  );
}
```


#### Combobox

```jsx
import { Label, Combobox, HelpText } from '@innovaccer/design-system';

() => {
  const barrierList = [
    { label: 'Health issues', value: 'Health issues' },
    { label: 'Lack of employment', value: 'Lack of employment' },
    { label: 'Lack of readiness to change', value: 'Lack of readiness to change' },
    { label: 'Lack of understanding', value: 'Lack of understanding' },
    { label: 'Lack of benefits', value: 'Lack of benefits' },
    { label: 'No housing', value: 'No housing' },
  ];

  const [filterList, setFilterList] = React.useState(barrierList);

  const onChangeHandler = (inputValue) => {
    console.log(' inputValue', inputValue);
    const updatedList = barrierList.filter((medicine) =>
      medicine.label.toLowerCase().startsWith(inputValue.label.toLowerCase())
    );

    setFilterList(updatedList);
  };

  return (
    <div>
      <Label withInput={true}>Barriers</Label>
      <Combobox onChange={onChangeHandler} className="w-50" error={true}>
        {filterList.length > 0 && (
          <Combobox.List>
            {filterList.map((item, key) => {
              return (
                <Combobox.Option key={key} option={{ label: item.label, value: item.value }}>
                  {item.label}
                </Combobox.Option>
              );
            })}
          </Combobox.List>
        )}
      </Combobox>
      <HelpText error={true} message="Please choose a valid option" />
    </div>
  );
}
```