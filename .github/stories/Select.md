# Select

Select offers multiple choices in a compact way.

### Code Examples

#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];
  

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler} >
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Text } from '@innovaccer/design-system';

() => {
    const [medicineList, setMedicineList] = React.useState([
      { label: 'Acetaminophen', value: 'Acetaminophen' },
      { label: 'Ibuprofen', value: 'Ibuprofen' },
      { label: 'Penicillin G', value: 'Penicillin G' },
      { label: 'Penbutolol', value: 'Penbutolol' },
      { label: 'Aminophenol', value: 'Aminophenol' },
      { label: 'Vancomycin', value: 'Vancomycin' },
      { label: 'Aspirin', value: 'Aspirin' },
      { label: 'Paracetamol', value: 'Paracetamol' },
      { label: 'Lisinopril', value: 'Lisinopril' },
      { label: 'Simvastatin', value: 'Simvastatin' },
      { label: 'Amoxicillin', value: 'Amoxicillin' },
      { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
      { label: 'Metformin', value: 'Metformin' },
    ]);
  
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
    const [showAddOption, setShowAddOption] = React.useState(false);
    const selectRef = React.useRef(null);
  
    React.useEffect(() => {
      if (searchTerm.trim() === '') {
        setFilteredMedicines(medicineList);
        setShowAddOption(false);
      } else {
        const newList = medicineList.filter((medicine) =>
          medicine.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const searchTearmFilter = medicineList.filter((medicine) =>
          medicine.label.toLowerCase() === searchTerm.toLowerCase()
        );
  
        setFilteredMedicines(newList);
        setShowAddOption(searchTearmFilter.length === 0);
      }
    }, [searchTerm, medicineList]);
  
    const onChangeHandler = (value) => {
      setSearchTerm(value);
    };
  
    const onClearHandler = () => {
      setSearchTerm('');
    };
  
    const onSelectHandler = (selectedOption) => {
      console.log('selectedOption', selectedOption);
    };
  
    const onAddMedicine = () => {
      const newMedicine = { label: searchTerm, value: searchTerm };
      setMedicineList((prevList) => [...prevList, newMedicine]);
      selectRef.current.setFocusFirstItem();
      setSearchTerm('');
    };
  
    return (
      <Select ref={selectRef} onSelect={onSelectHandler}>
        <Select.SearchInput
          value={searchTerm}
          placeholder="Search"
          onChange={onChangeHandler}
          onClear={onClearHandler}
        />
        <Select.List>
          {filteredMedicines.map((item, key) => (
            <Select.Option key={key} option={item}>
              {item.label}
            </Select.Option>
          ))}
          {showAddOption && (
            <Select.Option onClick={onAddMedicine} option={{ label: 'Add new medicine', value: 'add_new' }}> 
              <Text color="primary"> Add "{searchTerm}" </Text>
            </Select.Option>
          )}
        </Select.List>
      </Select>
    );
  }
```


#### Select

```jsx
import { Select, Button, AIIconButton, Text } from '@innovaccer/design-system';

() => {
    /**
   *
   *  .Button-primary--active  {
   *     background-color: var(--primary-darker);
   *  }
   *
   *  .AIButton-secondary--active {
   *    background-color: var(--secondary-dark);
   *    color: var(--secondary-dark)  !important;
   *  }
   *
   *  .Button-secondary--active {
   *     background-color: var(--secondary-dark);
   *  }
   */

  const [isStatusSelectOpen, setStatusSelectOpen] = React.useState(false);
  const [isRecordSelectOpen, setRecordSelectOpen] = React.useState(false);
  const [isOverviewSelectOpen, setOverviewSelectOpen] = React.useState(false);
  const [selectedDevelopmentStatus, setSelectedDevelopmentStatus] = React.useState({
    label: 'Development',
    value: 'Development',
  });

  const statusOptions = [
    { label: 'Published', value: 'Published' },
    { label: 'Finalized for publishing', value: 'Finalized for publishing' },
    { label: 'Signed', value: 'Signed' },
  ];

  const recordOptions = [
    { label: 'L1.xyz_table.sample_record', value: 'L1.sample_record', subInfo: 'Probability Score: 88%' },
    { label: 'L1.xyz_table.last_name', value: 'L1.last_name', subInfo: 'Probability Score: 61%' },
  ];

  const overviewOptions = [
    { label: 'Development', value: 'Development' },
    { label: 'Finalized', value: 'Finalized' },
  ];

  const onStatusSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setStatusSelectOpen(false);
  };

  const onRecordSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setRecordSelectOpen(false);
  };

  const onOverviewSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setOverviewSelectOpen(false);
    setSelectedDevelopmentStatus(selectedOption);
  };

  const onToggleStatusSelect = (isOpen) => {
    setStatusSelectOpen(isOpen);
  };

  const onToggleRecordSelect = (isOpen) => {
    setRecordSelectOpen(isOpen);
  };

  const onToggleOverviewSelect = (isOpen) => {
    setOverviewSelectOpen(isOpen);
  };

  const getStatusLabel = () => {
    return selectedDevelopmentStatus ? selectedDevelopmentStatus.label : 'Select';
  };

  return (
    <div className="d-flex justify-content-around">
      <Select
        onSelect={onStatusSelect}
        onToggle={onToggleStatusSelect}
        trigger={
          <Button
            appearance="primary"
            className={isStatusSelectOpen ? 'Button-primary--active' : ''}
            icon={isStatusSelectOpen ? 'expand_less' : 'expand_more'}
            iconAlign="right"
          >
            Updated status for P1
          </Button>
        }
      >
        <Select.List>
          {statusOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>

      <Select
        popoverWidth="var(--spacing-9)"
        onSelect={onRecordSelect}
        onToggle={onToggleRecordSelect}
        trigger={
          <AIIconButton
            className={isRecordSelectOpen ? 'AIButton-secondary--active' : ''}
            icon="import_contacts"
            type="button"
          />
        }
      >
        <Select.List>
          <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance="subtle">
            Mapping suggestions
          </Text>
          {recordOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex flex-column">
                <Text>{item.label}</Text>
                <Text size="small" appearance="subtle">
                  {item.subInfo}
                </Text>
              </div>
            </Select.Option>
          ))}
        </Select.List>
      </Select>

      <Select
        onSelect={onOverviewSelect}
        onToggle={onToggleOverviewSelect}
        value={selectedDevelopmentStatus}
        trigger={
          <Button
            appearance="transparent"
            className={isOverviewSelectOpen ? 'Button-secondary--active' : ''}
            icon={isOverviewSelectOpen ? 'expand_less' : 'expand_more'}
            iconAlign="right"
          >
            {getStatusLabel()}
          </Button>
        }
      >
        <Select.List>
          {overviewOptions.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>
    </div>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];
  

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select triggerOptions={{ disabled: true }} onSelect={onSelectHandler} >
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Button } from '@innovaccer/design-system';

() => {
  const medicineList = [];
  const [ searchTerm , setSearchTerm ] = React.useState('');

  const onChangeHandler = (value) => {
    setSearchTerm(value)
  }

  const onClearHandler = () => {
    setSearchTerm('')
  }
  
  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder='Search'
        onChange={onChangeHandler}
        onClear={onClearHandler}
      ></Select.SearchInput>
      {medicineList.length === 0 ? (
        <Select.EmptyTemplate
          description="We couldn't load the data, try reloading."
          title="Failed to fetch data">
        <Button onClick={function(){}} size="tiny" aria-label="Reload" icon="refresh" iconAlign="left">Reload</Button>
        </Select.EmptyTemplate>
      ) : (
      <Select.List>
          {medicineList.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
      </Select.List>
      )}
    </Select>
  );
}
```


#### Select

```jsx
import { Label, Select } from '@innovaccer/design-system';

() => {
  const areaCode = [
    { label: 'Alabama (205)', value: 'Alabama (205)' },
    { label: 'Alabama (251)', value: 'Alabama (251)' },
    { label: 'Alabama (256)', value: 'Alabama (256)' },
    { label: 'Alabama (334)', value: 'Alabama (334)' },
    { label: 'Alabama (938)', value: 'Alabama (938)' },
    { label: 'Arizona (520)', value: 'Arizona (520)' },
    { label: 'California (209)', value: 'California (209)' },
    { label: 'California (408)', value: 'California (408)' },
    { label: 'Colorado (719)', value: 'Colorado (719)' },
    { label: 'Connecticut (860)', value: 'Connecticut (860)' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <div className="w-25">
      <Label withInput={true}>Area code</Label>
      <Select onSelect={onSelectHandler}>
        <Select.List>
          {areaCode.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>
    </div>
  );
};
```


#### Select

```jsx
import { Select, Spinner } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [error, setError] = React.useState(false);

  const fetchOptions = (searchTerm) => {
    const searchedOptions =
      searchTerm.trim() === ''
        ? medicineList
        : medicineList.filter((medicine) => medicine.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ option: searchedOptions });
      }, 1000);
    });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchOptions(searchTerm).then((res) => {
      const { option } = res;
      setFilteredMedicines(option);
      setError(option.length === 0);
      setLoading(false);
    });
  }, [searchTerm]);

  const onChangeHandler = (value) => setSearchTerm(value);
  const onClearHandler = () => setSearchTerm('');
  const onSelectHandler = (selectedOption) => console.log('selectedOption', selectedOption);

  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder="Search"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      />
      {loading ? (
        <Select.EmptyTemplate>
          <Spinner />
        </Select.EmptyTemplate>
      ) : error ? (
        <Select.EmptyTemplate
          description="Try modifying your search to find what you are looking for."
          size="small"
          title="No results found"
        />
      ) : (
        <Select.List>
          {filteredMedicines.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      )}
    </Select>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];
  

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const setLableHandler = (count) => {
    if (count > 2) {
      return `${count} Medicines`;
    }
  }

  return (
    <Select triggerOptions={{ setLabel: setLableHandler }} onSelect={onSelectHandler} multiSelect={true} >
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];
  

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const setLableHandler = (count) => {
    if (count > 2) {
      return `${count} Medicines`;
    }
  }

  return (    
  <Select
    triggerOptions={{ setLabel: setLableHandler }}
    value={[
      { label: 'Aspirin', value: 'Aspirin' },
      { label: 'Paracetamol', value: 'Paracetamol' }
    ]}
    onSelect={onSelectHandler}
    multiSelect={true}
  >
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Text } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin', group: 'Painkillers' },
    { label: 'Paracetamol', value: 'Paracetamol', group: 'Painkillers' },
    { label: 'Lisinopril', value: 'Lisinopril', group: 'Hypertension' },
    { label: 'Simvastatin', value: 'Simvastatin', group: 'Antibiotics' },
    { label: 'Amoxicillin', value: 'Amoxicillin', group: 'Antibiotics' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin', group: 'Antibiotics' },
    { label: 'Omeprazole', value: 'Omeprazole', group: 'Painkillers' },
    { label: 'Diazepam', value: 'Diazepam', group: 'Antibiotics' },
    { label: 'Levothyroxine', value: 'Levothyroxine', group: 'Antibiotics' },
    { label: 'Ibuprofen', value: 'Ibuprofen', group: 'Painkillers' },
    { label: 'Prednisone', value: 'Prednisone', group: 'Painkillers' },
    { label: 'Metoprolol', value: 'Metoprolol', group: 'Hypertension' },
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const selectRef = React.useRef(null);

  const handleSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    selectRef.current.setFocusFirstItem();
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  const groupedMedicine = medicineList.reduce((acc, item) => {
    const groupKey = selectedOptions.find((opt) => opt.value === item.value) ? 'Selected Items' : item.group;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  return (
    <Select
      ref={selectRef}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {selectedOptions.length > 0 && (
          <React.Fragment>
            <Text className="d-flex ml-6 mt-5 mr-5 mb-4" size="small" appearance="subtle">
              Selected Items
            </Text>
            {selectedOptions.map((option) => (
              <Select.Option key={option.value} option={option}>
                {option.label}
              </Select.Option>
            ))}
          </React.Fragment>
        )}
        {Object.keys(groupedMedicine).map(
          (group) =>
            group !== 'Selected Items' &&
            groupedMedicine[group].length > 0 && (
              <React.Fragment key={group}>
                <Text
                  className="d-flex ml-6 mt-5 mr-5 mb-4"
                  size="small"
                  appearance={'subtle'}
                >
                  {group}
                </Text>
                {groupedMedicine[group].map((item) => (
                  <Select.Option key={item.value} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                ))}
              </React.Fragment>
            )
        )}
      </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Button } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const selectRef = React.useRef(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [previousSelectedOptions, setPreviousSelectedOptions] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSelect = (selectedOption) => {
    setIsDisabled(false);
    console.log('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
    setPreviousSelectedOptions([]);
  };

  const onApplyOptions = () => {
    console.log('onApply button called');
    selectRef.current.setOpen(false);
    setPreviousSelectedOptions(selectedOptions);
  };

  const onCancelOptions = () => {
    console.log('onApply button called');
    selectRef.current.setOpen(false);
    setSelectedOptions(previousSelectedOptions);
  };

  const onOutsideClickHandler = () => {
    setSelectedOptions(previousSelectedOptions);
  };

  React.useEffect(() => {
    setSelectedOptions(previousSelectedOptions);
  }, [previousSelectedOptions]);

  return (
    <Select
      ref={selectRef}
      onOutsideClick={onOutsideClickHandler}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        {medicineList.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
      <Select.Footer>
        <Button
          size={'tiny'}
          className="mr-4"
          appearance={'basic'}
          onClick={onCancelOptions}
          data-test="DesignSystem-Select-CancelButton"
          type="button"
        >
          Cancel
        </Button>
        <Button
          appearance={'primary'}
          size={'tiny'}
          onClick={onApplyOptions}
          data-test="DesignSystem-Select-ApplyButton"
          type="button"
          disabled={isDisabled}
        >
          Apply
        </Button>
      </Select.Footer>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Text } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin', group: 'Painkillers' },
    { label: 'Paracetamol', value: 'Paracetamol', group: 'Painkillers' },
    { label: 'Lisinopril', value: 'Lisinopril', group: 'Hypertension' },
    { label: 'Simvastatin', value: 'Simvastatin', group: 'Antibiotics' },
    { label: 'Amoxicillin', value: 'Amoxicillin', group: 'Antibiotics' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin', group: 'Antibiotics' },
    { label: 'Omeprazole', value: 'Omeprazole', group: 'Painkillers' },
    { label: 'Diazepam', value: 'Diazepam', group: 'Antibiotics' },
    { label: 'Levothyroxine', value: 'Levothyroxine', group: 'Antibiotics' },
    { label: 'Ibuprofen', value: 'Ibuprofen', group: 'Painkillers' },
    { label: 'Prednisone', value: 'Prednisone', group: 'Painkillers' },
    { label: 'Metoprolol', value: 'Metoprolol', group: 'Hypertension' },
  ];

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const groupedMedicine = medicineList.reduce((acc, item) => {
    const groupKey = item.group;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});

  const handleSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const onClearHandler = () => {
    setSelectedOptions([]);
  };

  return (
    <Select onSelect={handleSelect} value={selectedOptions} multiSelect={true} triggerOptions={{ onClear: onClearHandler }}>
      <Select.List>
        {Object.keys(groupedMedicine).map((group) => (
          <React.Fragment key={group}>
            <Text
              className="d-flex ml-6 mt-5 mr-5 mb-4"
              size="small"
              appearance={'subtle'}
            >
              {group}
            </Text>
            {groupedMedicine[group].map((item) => (
              <Select.Option key={item.value} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            ))}
          </React.Fragment>
        ))}
      </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
    const medicineList = [
        { label: 'Aspirin', value: 'Aspirin' },
        { label: 'Paracetamol', value: 'Paracetamol' },
        { label: 'Lisinopril', value: 'Lisinopril' },
        { label: 'Simvastatin', value: 'Simvastatin' },
        { label: 'Amoxicillin', value: 'Amoxicillin' },
        { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
        { label: 'Metformin', value: 'Metformin' },
        { label: 'Omeprazole', value: 'Omeprazole' },
        { label: 'Diazepam', value: 'Diazepam' },
        { label: 'Levothyroxine', value: 'Levothyroxine' },
    ];

    const [selectedValue, setSelectedValue] = React.useState([]);
    const [checkedState, setCheckedState] = React.useState('unchecked');

    const onSelectHandler = (selectedOption) => {
        console.log('selectedOption', selectedOption);
        setSelectedValue(selectedOption);
    };

    const onClickHandler = (selectedOption) => {
        console.log(selectedOption, 'onClickHandler');
        if(checkedState === 'checked'){
            setCheckedState('unchecked');
            setSelectedValue([]);
        } else {
            setCheckedState('checked');
            setSelectedValue(medicineList);
        }
    }

    const onClearHandler = () => {
        setCheckedState('unchecked');
        setSelectedValue([]);
    }
    
    React.useEffect(() => {
        if(selectedValue.length === medicineList.length ){
            setCheckedState('checked')
        } else if(selectedValue.length === 0){
            setCheckedState('unchecked')
        } else {
            setCheckedState('indeterminate')
        }
        console.log('Selected Value Changed:', selectedValue);
    }, [checkedState, selectedValue]);

    return (
        <Select 
        onSelect={onSelectHandler} 
        value={selectedValue} 
        multiSelect={true} 
        triggerOptions={{ onClear: onClearHandler }}
        >
            <Select.List>
                <Select.Option checkedState={checkedState} onClick={onClickHandler} option={{ label: 'SelectAll', value: 'SelectAll' }}>
                    Select All
                </Select.Option>
            {medicineList.map((item, key) => {
                return (
                <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                </Select.Option>
                );
            })}
            </Select.List>
        </Select>
    );
}
```


#### Select

```jsx
import { Select, Button } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const selectRef = React.useRef(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [previousSelectedOptions, setPreviousSelectedOptions] = React.useState([]);
  const [checkedState, setCheckedState] = React.useState('unchecked');
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSelect = (selectedOption) => {
    setIsDisabled(false);
    console.log('selectedOption', selectedOption);
    setSelectedOptions(selectedOption);
  };

  const handleSelectAllClick = (selectedOption) => {
    setIsDisabled(false);
    console.log(selectedOption, 'handleSelectAllClick');
    if (checkedState === 'checked') {
      setCheckedState('unchecked');
      setSelectedOptions([]);
    } else {
      setCheckedState('checked');
      setSelectedOptions(medicineList);
    }
  };

  const onClearHandler = () => {
    setCheckedState('unchecked');
    setSelectedOptions([]);
    setPreviousSelectedOptions([]);
  };

  const onApplyOptions = () => {
    console.log('onApply button called');
    selectRef.current.setOpen(false);
    setPreviousSelectedOptions(selectedOptions);
  };

  const onCancelOptions = () => {
    console.log('onCancel button called');
    selectRef.current.setOpen(false);
    setSelectedOptions(previousSelectedOptions);
  };

  const onOutsideClickHandler = () => {
    setSelectedOptions(previousSelectedOptions);
  };

  React.useEffect(() => {
    setSelectedOptions(previousSelectedOptions);
  }, [previousSelectedOptions]);

  React.useEffect(() => {
    if (selectedOptions.length === medicineList.length) {
      setCheckedState('checked');
    } else if (selectedOptions.length === 0) {
      setCheckedState('unchecked');
    } else {
      setCheckedState('indeterminate');
    }
  }, [checkedState, selectedOptions]);

  return (
    <Select
      ref={selectRef}
      onOutsideClick={onOutsideClickHandler}
      onSelect={handleSelect}
      value={selectedOptions}
      multiSelect={true}
      triggerOptions={{ onClear: onClearHandler }}
    >
      <Select.List>
        <Select.Option
          checkedState={checkedState}
          onClick={handleSelectAllClick}
          option={{ label: 'SelectAll', value: 'SelectAll' }}
        >
          Select All
        </Select.Option>
        {medicineList.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
      <Select.Footer>
        <Button
          size={'tiny'}
          className="mr-4"
          appearance={'basic'}
          onClick={onCancelOptions}
          data-test="DesignSystem-Select-CancelButton"
          type="button"
        >
          Cancel
        </Button>
        <Button
          appearance={'primary'}
          size={'tiny'}
          onClick={onApplyOptions}
          data-test="DesignSystem-Select-ApplyButton"
          type="button"
          disabled={isDisabled}
        >
          Apply
        </Button>
      </Select.Footer>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Icon, Text } from '@innovaccer/design-system';

() => {

  const options = [
    { icon: 'more_horiz', label: 'Not yet helped', value: 'not_yet_helped' },
    { icon: 'add', label: 'Eligible', value: 'eligible' },
    { icon: 'horizontal_rule', label: 'Not Eligible', value: 'not_eligible' },
    { icon: 'check', label: 'Got help', value: 'got_help' },
    { icon: 'cancel', label: 'Denied', value: 'denied' },
    { icon: 'info', label: 'Pending', value: 'info_pending' },
    { icon: 'priority_high', label: 'Urgent Needed', value: 'urgent_assistance' },
    { icon: 'history', label: 'History', value: 'prev_helped' },
  ];
  
  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler} >
        <Select.List>
          {options.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className="d-flex align-items-center">
                <Icon
                className="mr-4"
                name={item.icon}
                />
                <Text> {item.label} </Text>
              </div>
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select, Text } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Smith, John', subInfo: 'Patient', value: 'Smith_John' },
    { label: 'Jones, Emily', subInfo: 'Primary Care Physician', value: 'Jones_Emily' },
    { label: 'Davis, Michael', subInfo: 'Care Manager', value: 'Davis_Michael' },
    { label: 'Taylor, Jessica', subInfo: 'Patient', value: 'Taylor_Jessica' },
    { label: 'Miller, Robert', subInfo: 'Primary Care Physician', value: 'Miller_Robert' },
    { label: 'Clark, Ashley', subInfo: 'Care Manager', value: 'Clark_Ashley' },
    { label: 'Baker, Christopher', subInfo: 'Patient', value: 'Baker_Christopher' },
    { label: 'Ward, Kimberly', subInfo: 'Primary Care Physician', value: 'Ward_Kimberly' }
  ]

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Select onSelect={onSelectHandler}>
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              <div className='d-flex flex-column'>
                <Text>{item.label}</Text>
                <Text size="small" appearance="subtle">
                {item.subInfo}
                </Text>
              </div>
              </Select.Option>
            );
          })}
        </Select.List>
    </Select>
  );

}
```


#### Select

```jsx
import { Tooltip, Select, Text } from '@innovaccer/design-system';

() => {

  /*
    .Select-Option-label {
      max-width: var(--spacing-7);
    }
  */
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril Anasthesia', value: 'Lisinopril' },
    { label: 'Simvastatin Anasthesia', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  const SelectItem = ({ item }) => {
    const elementRef = React.useRef(null);
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
      <Tooltip showOnTruncation={true} tooltip={item.label} elementRef={elementRef} open={showTooltip}>
        <Select.Option
          option={{ label: item.label, value: item.value }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Text ref={elementRef} className="ellipsis--noWrap d-block w-100 Select-Option-label">
            {item.label}
          </Text>
        </Select.Option>
      </Tooltip>
    );
  };

  return (
    <Select onSelect={onSelectHandler}>
      <Select.List>
        {medicineList.map((item, key) => {
          return <SelectItem item={item} key={key} />;
        })}
      </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Label, Select } from '@innovaccer/design-system';

() => {
  const areaCode = [
    { label: 'Alabama (205)', value: 'Alabama (205)' },
    { label: 'Alabama (251)', value: 'Alabama (251)' },
    { label: 'Alabama (256)', value: 'Alabama (256)' },
    { label: 'Alabama (334)', value: 'Alabama (334)' },
    { label: 'Alabama (938)', value: 'Alabama (938)' },
    { label: 'Arizona (520)', value: 'Arizona (520)' },
    { label: 'California (209)', value: 'California (209)' },
    { label: 'California (408)', value: 'California (408)' },
    { label: 'Colorado (719)', value: 'Colorado (719)' },
    { label: 'Connecticut (860)', value: 'Connecticut (860)' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <div className="w-25">
      <Label withInput={true}>Area code</Label>
      <Select 
        width="var(--spacing-9)" 
        onSelect={onSelectHandler} 
        value={{ label: 'Alabama (205)', value: 'Alabama (205)' }}
      >
        <Select.List>
          {areaCode.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>
    </div>
  );
}
```


#### Select

```jsx
import { Label, Select, HelpText } from '@innovaccer/design-system';

() => {
  const areaCode = [
    { label: 'Alabama (205)', value: 'Alabama (205)' },
    { label: 'Alabama (251)', value: 'Alabama (251)' },
    { label: 'Alabama (256)', value: 'Alabama (256)' },
    { label: 'Alabama (334)', value: 'Alabama (334)' },
    { label: 'Alabama (938)', value: 'Alabama (938)' },
    { label: 'Arizona (520)', value: 'Arizona (520)' },
    { label: 'California (209)', value: 'California (209)' },
    { label: 'California (408)', value: 'California (408)' },
    { label: 'Colorado (719)', value: 'Colorado (719)' },
    { label: 'Connecticut (860)', value: 'Connecticut (860)' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <div className="w-25">
      <Label withInput={true}>Area code</Label>
      <Select width="var(--spacing-9)" onSelect={onSelectHandler}>
        <Select.List>
          {areaCode.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>
      <HelpText message="If the number with this code is not available, we will use the next best match" />
    </div>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const stateAbbreviations = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };


  return (
    <Select triggerOptions={{ icon: 'location_on', placeholder: 'Select state' }} onSelect={onSelectHandler}>
      <Select.List>
        {stateAbbreviations.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Row, Column, Label, Select } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const list = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };

  return (
    <Row>
      {list.map((size, key) => {
        return (
          <Column key={key} size={4}>
            <Label withInput={true}>{size.label}</Label>
            <Select triggerOptions={{ triggerSize: size.value }} onSelect={onSelectHandler}>
              <Select.List>
                {medicineList.map((item, key) => {
                  return (
                    <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                      {item.label}
                    </Select.Option>
                  );
                })}
              </Select.List>
            </Select>
          </Column>
        );
      })}
    </Row>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const colourList = [
    { label: 'Red', value: 'Color_Red' },
    { label: 'Blue', value: 'Color_Blue' },
    { label: 'Green', value: 'Color_Green' },
    { label: 'Yellow', value: 'Color_Yellow' },
    { label: 'Orange', value: 'Color_Orange' },
    { label: 'Purple', value: 'Color_Purple' },
    { label: 'Pink', value: 'Color_Pink' },
    { label: 'Black', value: 'Color_Black' },
    { label: 'White', value: 'Color_White' },
    { label: 'Brown', value: 'Color_Brown' },
  ];

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };


  return (
    <Select triggerOptions={{ inlineLabel: 'colour', placeholder: 'Select' }} onSelect={onSelectHandler}>
      <Select.List>
        {colourList.map((item, key) => {
          return (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select.List>
    </Select>
  );
}
```


#### Select

```jsx
import { Select } from '@innovaccer/design-system';

() => {
  const medicineList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMedicines, setFilteredMedicines] = React.useState(medicineList);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMedicines(medicineList);
    }
    const newList = medicineList.filter((medicine) => medicine.label.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredMedicines(newList);
    setError(newList.length === 0);
  }, [searchTerm]);

  const onChangeHandler = (value) => {
    setSearchTerm(value);
  };

  const onClearHandler = () => {
    setSearchTerm('');
  };

  const onSelectHandler = (selectedOption) => {
    console.log('selectedOption', selectedOption);
  };


  return (
    <Select onSelect={onSelectHandler}>
      <Select.SearchInput
        value={searchTerm}
        placeholder="Search"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      ></Select.SearchInput>
      {error ? (
        <Select.EmptyTemplate
          description="Try modifying your search to find what you are looking for."
          size="small"
          title="No results found"
        ></Select.EmptyTemplate>
      ) : (
        <Select.List>
          {filteredMedicines.map((item, key) => (
            <Select.Option key={key} option={{ label: item.label, value: item.value }}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      )}
    </Select>
  );
}
```