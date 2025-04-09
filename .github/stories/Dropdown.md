# Dropdown



### Code Examples

#### Dropdown

```jsx
import { Label, Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
    {
      label: 'Transgender',
      value: 'Transgender',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];
  return (
    <div className="mb-10 w-25">
      <Label withInput={true}>Gender</Label>
      <Dropdown options={options} searchPlaceholder="Search Gender" withSearch={true} />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Edit',
      value: 'edit',
    },
    {
      label: 'Export',
      value: 'export',
    },
    {
      label: 'Delete',
      value: 'delete',
    },
  ];
  return (
    <div className="d-flex w-50">
      <Dropdown options={options} menu={true} className="mr-5" align="right" maxWidth={130} />
      <Dropdown options={options} menu={true} align="left" className="mr-5" maxWidth={130} />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    { label: 'Below 18', subInfo: 'People below 18 years old', value: 'below_18', optionType: 'WITH_META' },
    { label: '19 - 35', subInfo: 'People 19-35 years old', value: '19-35', optionType: 'WITH_META' },
    { label: '36 - 55', subInfo: 'People 36-55 years old', value: '36-55', optionType: 'WITH_META' },
    { label: '56 and above', subInfo: 'People above 56 years old', value: '56_above', optionType: 'WITH_META' },
  ];
  return (
    <div className="d-flex w-50">
      <Dropdown options={options} menu={true} className="mr-5" align="right" />
      <Dropdown options={options} menu={true} className="mr-5" align="right" />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Below 18',
      value: 'below_18',
    },
    {
      label: '19 - 35',
      value: '19-35',
    },
    {
      label: '36 - 55',
      value: '36-55',
    },
    {
      label: '56 and above',
      value: '56_above',
    },
  ];
  return <Dropdown options={options} withCheckbox={true} className="w-25" placeholder="Select" />;
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Below 18',
      value: 'below_18',
      subInfo: 'People below 18 years old',
    },
    {
      label: '19 - 35',
      value: '19-35',
      subInfo: 'People 19-35 years old',
    },
    {
      label: '36 - 55',
      value: '36-55',
      subInfo: 'People 36-55 years old',
    },
    {
      label: '56 and above',
      value: '56_above',
      subInfo: 'People above 56 years old',
    },
  ];
  return <Dropdown options={options} withCheckbox={true} className="w-25" placeholder="Select" />;
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Not yet helped',
      value: 'not_yet_helped',
      icon: 'more_horiz',
    },
    {
      label: 'Eligible',
      value: 'eligible',
      icon: 'add',
    },
    {
      label: 'Not Eligible',
      value: 'not_eligible',
      icon: 'horizontal_rule',
    },
    {
      label: 'Got help',
      value: 'got_help',
      icon: 'check',
    },
  ];
  return <Dropdown options={options} optionType="WITH_ICON" className="w-25" placeholder="Select status" />;
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Lawson, Joy',
      value: 'Lawson_Joy',
      subInfo: 'Patient',
    },
    {
      label: 'West, Sarah',
      value: 'West_Sarah',
      subInfo: 'Primary Care Physician',
    },
    {
      label: 'Powell, Lauren',
      value: 'Powell_Lauren',
      subInfo: 'Care Manager',
    },
  ];

  return <Dropdown options={options} optionType="WITH_META" className="w-25" placeholder="Select Recipient" />;
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [];
  for (let i=1; i <= 50; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option${i}`
    })
  }

  return (
    <Dropdown
      options={options}
      withCheckbox={true}
      withSearch={true}
      className="w-25"
      placeholder="Select"
  />
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [];
  for (let i=1; i <= 100; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option${i}`
    })
  }

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
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

  return (
    <Dropdown
      fetchOptions={fetchOptions}
      withCheckbox={true}
      className="w-25"
      placeholder="Select"
  />
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Cardiovascular',
      value: 'Cardiovascular',
    },
    {
      label: 'Communication impediments: hearing and vision loss, low literacy',
      value: 'Communication impediments: hearing and vision loss, low literacy',
    },
    {
      label: 'Community resource availability',
      value: 'Community resource availability',
    },
    {
      label: 'Depression and anxiety screenings',
      value: 'Depression and anxiety screenings',
    },
    {
      label: 'Obesity',
      value: 'Obesity',
    },
    {
      label: 'Diabetes',
      value: 'Diabetes',
    },
    {
      label: 'Gastrointestinal system',
      value: 'Gastrointestinal system',
    },
    {
      label: 'Patient has suicidal thoughts',
      value: 'Patient has suicidal thoughts',
    },
    {
      label: 'LTSS needs',
      value: 'LTSS needs',
    },
    {
      label: 'Medication regimen',
      value: 'Medication regimen',
    },
  ];
  return (
    <Dropdown
      options={options}
      withSearch={true}
      className="w-25"
      placeholder="Select problem"
      withCheckbox={true}
      showApplyButton={true}
    />
  );
}
```


#### Dropdown

```jsx
import { Label, Dropdown, HelpText } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Alabama (205)',
      value: 'Alabama (205)',
    },
    {
      label: 'Alabama (251)',
      value: 'Alabama (251)',
    },
    {
      label: 'Alabama (256)',
      value: 'Alabama (256)',
    },
    {
      label: 'Alabama (334)',
      value: 'Alabama (334)',
    },
    {
      label: 'Alabama (938)',
      value: 'Alabama (938)',
    },
    {
      label: 'Arizona (520)',
      value: 'Arizona (520)',
    },
    {
      label: 'California (209)',
      value: 'California (209)',
    },
    {
      label: 'California (408)',
      value: 'California (408)',
    },
    {
      label: 'Colorado (719)',
      value: 'Colorado (719)',
    },
    {
      label: 'Connecticut (860)',
      value: 'Connecticut (860)',
    },
  ];
  return (
    <>
      <Label withInput={true}>Area code</Label>
      <div className="w-25">
        <Dropdown options={options} withSearch={true} placeholder="Select an area code" />
        <HelpText message={'If the number with this code is not available, we will use the next best match'} />
      </div>
    </>
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Alabama',
      value: 'AL',
    },
    {
      label: 'Alaska',
      value: 'AK',
    },
    {
      label: 'Arizona',
      value: 'AZ',
    },
    {
      label: 'Arkansas',
      value: 'AR',
    },
    {
      label: 'California',
      value: 'CO',
    },
    {
      label: 'Connecticut',
      value: 'CT',
    },
    {
      label: 'Delaware',
      value: 'DE',
    },
    {
      label: 'Florida',
      value: 'FL',
    },
    {
      label: 'Georgia',
      value: 'GA',
    },
    {
      label: 'Hawaii',
      value: 'HI',
    },
    {
      label: 'Idaho',
      value: 'ID',
    },
    {
      label: 'Illinois',
      value: 'IL',
    },
    {
      label: 'Indiana',
      value: 'IN',
    },
    {
      label: 'Iowa',
      value: 'IA',
    },
    {
      label: 'Kansas',
      value: 'KS',
    },
    {
      label: 'Kentucky',
      value: 'KY',
    },
    {
      label: 'Louisiana',
      value: 'LA',
    },
    {
      label: 'Maine',
      value: 'ME',
    },
    {
      label: 'Maryland',
      value: 'KY',
    },
    {
      label: 'Massachusetts',
      value: 'MA',
    },
    {
      label: 'Michigan',
      value: 'MI',
    },
    {
      label: 'Minnesota',
      value: 'MN',
    },
    {
      label: 'Mississippi',
      value: 'MS',
    },
    {
      label: 'Missouri',
      value: 'MO',
    },
    {
      label: 'Montana',
      value: 'MT',
    },
    {
      label: 'Nebraska',
      value: 'NE',
    },
    {
      label: 'Nevada',
      value: 'NV',
    },
    {
      label: 'New Hampshire',
      value: 'NT',
    },
    {
      label: 'New Jersey',
      value: 'NJ',
    },
    {
      label: 'New Mexico',
      value: 'NM',
    },
    {
      label: 'New York',
      value: 'NY',
    },
    {
      label: 'North Carolina',
      value: 'NC',
    },
    {
      label: 'North Dakota',
      value: 'ND',
    },
    {
      label: 'Ohio',
      value: 'OH',
    },
    {
      label: 'Oklahoma',
      value: 'OK',
    },
    {
      label: 'Oregon',
      value: 'OR',
    },
    {
      label: 'Pennsylvania',
      value: 'PA',
    },
    {
      label: 'Rhode Island',
      value: 'RI',
    },
    {
      label: 'South Carolina',
      value: 'SC',
    },
    {
      label: 'South Dakota',
      value: 'SD',
    },
    {
      label: 'Tennessee',
      value: 'TN',
    },
    {
      label: 'Texas',
      value: 'TX',
    },
    {
      label: 'Utah',
      value: 'UT',
    },
    {
      label: 'Vermont',
      value: 'VT',
    },
    {
      label: 'Virginia',
      value: 'VA',
    },
    {
      label: 'Washington',
      value: 'WA',
    },
    {
      label: 'West Virginia',
      value: 'WV',
    },
    {
      label: 'Wisconsin',
      value: 'WI',
    },
    {
      label: 'Wyoming',
      value: 'WY',
    },
  ];
  return (
    <Dropdown options={options} icon="location_on" className="w-25" placeholder="Select state" staticLimit={100} />
  );
}
```


#### Dropdown

```jsx
import { Label, Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Male',
      value: 'Male',
      selected: true,
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];
  return (
    <div className="mb-10 w-25">
      <Label withInput={true}>Gender</Label>
      <Dropdown options={options} />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'All',
      value: 'all',
      selected: true,
    },
    {
      label: 'Draft',
      value: 'draft',
    },
    {
      label: 'In Progress',
      value: 'in_progress',
    },
    {
      label: 'Sent',
      value: 'sent',
    },
    {
      label: 'Scheduled',
      value: 'scheduled',
    },
    {
      label: 'Partially Failed',
      value: 'partially_failed',
    },
    {
      label: 'Completely Failed',
      value: 'completely_failed',
    },
  ];
  return (
    <div>
      <Dropdown options={options} className="w-25" inlineLabel="Status" withCheckbox={true} />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Label, Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'All',
      value: 'all',
      selected: true,
    },
    {
      label: 'Draft',
      value: 'draft',
    },
    {
      label: 'In Progress',
      value: 'in_progress',
    },
    {
      label: 'Sent',
      value: 'sent',
    },
    {
      label: 'Scheduled',
      value: 'scheduled',
    },
    {
      label: 'Partially Failed',
      value: 'partially_failed',
    },
    {
      label: 'Completely Failed',
      value: 'completely_failed',
    },
  ];
  return (
    <div>
      <div className="w-25 mb-9">
        <Label withInput={true}>Status</Label>
        <Dropdown options={options} className="w-100" withCheckbox={true} />
      </div>
    </div>
  );
}
```


#### Dropdown

```jsx
import { Label, Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Hindi',
      value: 'Hindi',
    },
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'French',
      value: 'French',
    },
  ];
  return (
    <div className="mb-11 w-25">
      <Label withInput={true}>Select Language</Label>
      <Dropdown options={options} />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Financial',
      value: 'financial',
    },
    {
      label: 'Homeless',
      value: 'homeless',
    },
    {
      label: 'Lack of Benefits',
      value: 'lack_of_benefits',
    },
    {
      label: 'Lack of Employment',
      value: 'lack_of_employment',
    },
    {
      label: 'Lack of Understanding',
      value: 'lack_of_understanding',
    },
  ];
  return <Dropdown options={options} withSearch={true} className="w-25" placeholder="Select barriers" />;
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'Draft',
      value: 'draft',
    },
    {
      label: 'In Progress',
      value: 'in_progress',
    },
    {
      label: 'Sent',
      value: 'sent',
    },
    {
      label: 'Scheduled',
      value: 'scheduled',
    },
    {
      label: 'Partially Failed',
      value: 'partially_failed',
    },
    {
      label: 'Completely Failed',
      value: 'completely_failed',
    },
  ];
  return <Dropdown options={options} className="w-25" placeholder="Status" />;
}
```


#### Dropdown

```jsx
import { Dropdown } from '@innovaccer/design-system';

() => {
  const options = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Pending',
      value: 'Pending',
    },
    {
      label: 'Completed',
      value: 'Completed',
    },
  ];
  return (
    <div className="mb-11 w-25">
      <Dropdown options={options} placeholder="All Categories" />
    </div>
  );
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  return (
    <div className='d-flex'>
      <div className='mr-12'>
        <Text weight="strong">Towards Right</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} align='right'/>
      </div>
      <div>
        <Text weight="strong">Towards Left</Text> <br /><br />
        <Dropdown menu={true} options={storyOptions} align='left'/>
      </div>
    </div>
  )
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  return (
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Disabled</Text> <br /><br />
        <Dropdown disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Enabled</Text> <br /><br />
        <Dropdown disabled={false} options={storyOptions} />
      </div>
    </div>
  )
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const disabledStoryOptions = [];
  for (let i = 1; i <= 10; i++) {
    disabledStoryOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      disabled: i===2
    });
  }

  const onClose = (options) => {
    console.log(options);
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <div className='d-flex'>
      <div className='mr-9 w-25'>
      <Text weight="strong">{'With Checkbox'}</Text><br /><br />
        <Dropdown
          withCheckbox={true}
          withSelectAll={false}
          options={disabledStoryOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Without Checkbox'}</Text><br /><br />
        <Dropdown
          options={disabledStoryOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
    </div>
  )
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  return (
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Default</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'DEFAULT'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Icon</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'WITH_ICON'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">SubInfo</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'WITH_META'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Icon with subInfo</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'ICON_WITH_META'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">{'Checkboxes'}</Text><br /><br />
        <Dropdown options={storyOptions} withCheckbox={true} loading={true}/>
      </div>
    </div>
  )
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  const onClose = (options) => {
    console.log(options);
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <div className='d-flex'>
      <div className='mr-9 w-25'>
        <Text weight="strong">{'With Apply Button'}</Text><br /><br />
        <Dropdown
          maxHeight={180}
          withCheckbox={true}
          showApplyButton={true}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className='mr-9 w-25'>
        <Text weight="strong">{'Without Apply Button'}</Text><br /><br />
        <Dropdown
          withCheckbox={true}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className='mr-9 w-25'>
        <Text weight="strong">{'Without Select All (Options <= 50)'}</Text><br /><br />
        <Dropdown
          withCheckbox={true}
          withSelectAll={false}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
    </div>
  )
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const optionTypes = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];

  return (
    <div className="d-flex">
      {optionTypes.map((type, ind) => {
        return (
          <div className="d-flex flex-column mr-9 w-25" key={ind}>
            <Text weight="strong">{labelMapping[type]}</Text>
            <br />
            <Dropdown options={optionsMapping[type].slice(0, 3)} />
          </div>
        );
      })}
      <div className="d-flex flex-column w-25">
        <Text weight="strong">{'Checkboxes'}</Text>
        <br />
        <Dropdown options={storyOptions.slice(0, 3)} withCheckbox={true} />
      </div>
    </div>
  );
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  return (
    <div className="d-flex">
      <div className="mr-9 w-25">
        <Text weight="strong">{'Search'}</Text>
        <br />
        <br />
        <Dropdown withSearch={true} options={storyOptions} />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Loading'}</Text>
        <br />
        <br />
        <Dropdown withSearch={true} loading={true} />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'No Result'}</Text>
        <br />
        <br />
        <Dropdown withSearch={true} noResultMessage={'No result found'} />
      </div>
    </div>
  );
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const options = [];

  for (let i = 1; i <= 10; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: 'Group',
    });
  }
  const BooleanValue = [true, false];

  return (
    <div className="d-flex">
      {BooleanValue.map((value, index) => {
        return (
          <div key={index} className="d-flex flex-column align-items-center">
            <Text weight="strong">{value ? ' Multi Select' : 'Single Select'}</Text>
            <br />
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center mr-7">
                <Text weight="strong">{'With Sections'}</Text>
                <br />
                <Dropdown options={options} withCheckbox={value} />
              </div>
              <div className="d-flex flex-column align-items-center mr-7">
                <Text weight="strong">{'Without Sections'}</Text> <br />
                <Dropdown options={storyOptions} withCheckbox={value} />
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
```


#### Dropdown

```jsx
import { Text, Dropdown } from '@innovaccer/design-system';

() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  const disabled = [true, false];

  return (
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Tiny</Text> <br /><br />
        <Dropdown triggerSize={'tiny'} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Regular</Text> <br /><br />
        <Dropdown triggerSize={'regular'} options={storyOptions}/>
      </div>
    </div>
  );
}
```


#### Dropdown

```jsx
import { Icon, Text, Dropdown } from '@innovaccer/design-system';

() => {
  const fetchOptions = (searchTerm) => {
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: [],
          count: 0,
        });
      }, 1000);
    });
  };
  
    const errorTemplate = (errorType) => {
      console.log(errorType);
      return (
        <div className="my-3 px-7 d-flex vh-25">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Icon name="error" appearance="alert" />
            <Text className="mb-3" weight="strong">
              Failed to fetch data
            </Text>
            <Text className="text-align-center" weight="medium" size="small" appearance="subtle">
              We couldn't load the data, try reloading.
            </Text>
          </div>
        </div>
      );
    };
  
    return <Dropdown fetchOptions={fetchOptions} className="w-25" placeholder="Select" errorTemplate={errorTemplate} />;
}
```