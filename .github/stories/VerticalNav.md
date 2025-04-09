# VerticalNav



### Code Examples

#### Components VerticalNav VerticalNav All

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
      count: 10,
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      count: 2,
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled',
      count: 5,
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'border_color'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        hoverable={false}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Child Items With Icons

```jsx
import { Collapsible, VerticalNav } from '@innovaccer/design-system';

() => {

  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={setActive}
        />
      </Collapsible>
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Custom Items Renderer

```jsx
import { Icon, Tooltip, Text, VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const customItemRenderer = (props) => {
    const {menu, onClick, expanded, isChildren} = props;
    return ( 
      <div 
        onClick={() => onClick(menu)}
        className={`p-5 d-flex align-items-center cursor-pointer ${isChildren ? 'ml-7' : ''}`}
      >
        {menu.icon && 
            <Icon
              data-test="DesignSystem-VerticalNav--Icon"
              className={expanded ? 'mr-4' : ''}
              name={menu.icon}
            />
        }
        <Tooltip tooltip={menu.label} position="right">
          <Text weight="medium">
            {menu.label}
          </Text>
        </Tooltip>
      </div>
    );
  };
  
  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        customItemRenderer={customItemRenderer}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Custom Options Renderer

```jsx
import { Tooltip, Icon, VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management policies',
      icon: 'forum',
      count: 40,
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people',
          count: 10
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check',
          count: 10
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment',
          count: 10
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm',
          count: 10
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled',
      count: 100
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const customItemRenderer = (props) => {
    const {menu, onClick, hasSubmenu, expanded, contentRef, isChildren, MenuIcon, MenuLabel, MenuPills} = props;
    const [isTextTruncated, setIsTextTruncated] = React.useState(false);
    const { detectTruncation } = Tooltip.useAutoTooltip();
  
    React.useEffect(() => {
      const isTruncated = detectTruncation(contentRef);
      setIsTextTruncated(isTruncated);
      console.log(isTruncated);
    }, []);

    return ( 
      <Tooltip showTooltip={isTextTruncated} tooltip={menu.label} position="right">
      <div 
        onClick={() => onClick(menu)}
        style={{width: '232px'}}
        className={`p-5 d-flex align-items-center cursor-pointer ${isChildren ? 'ml-7' : ''}`}
      >
        {menu.icon && (
          <Icon data-test="DesignSystem-VerticalNav--Icon" className={expanded ? 'mr-4' : ''} name={menu.icon} />
        )}
        {MenuLabel()}
        <div className="ml-5 d-flex">{MenuPills()}</div>
        {hasSubmenu && MenuIcon()}
      </div>
      </Tooltip>
    );
  };
  
  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
        customItemRenderer={customItemRenderer}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Custom Trigger

```jsx
import { Icon, Heading, Collapsible, VerticalNav } from '@innovaccer/design-system';

() => {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'TODOs.Due',
  });

  const data = [
    {
      name: 'TODOs',
      label: 'TODOs',
      icon: 'assignment_ind',
      count: 31,
      subMenu: [
        {
          name: 'TODOs.Due',
          label: 'Due',
          count: 31
        },
        {
          name: 'TODOs.Completed',
          label: 'Completed',
          count: 0
        },
      ],
    },
    {
      name: 'Received',
      label: 'Received',
      count: 0
    },
    {
      name: 'Sent',
      label: 'Sent',
      count: 5
    },
  ];

  return (
    <div>
      <div className='d-flex align-items-center mb-3'>
        <Icon name="menu" className="cursor-pointer" onClick={() => setExpanded(!expanded) }></Icon>
        <Heading size='s' className="ml-4">My Worklist</Heading>
      </div>
      <Collapsible withTrigger={false} expanded={expanded} height="100vh">
        <VerticalNav menus={data} active={active} expanded={expanded} onClick={setActive} />
      </Collapsible>
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Custom Vertical Navigation

```jsx
import { Collapsible, DatePicker, VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'to_dos',
      label: 'To-dos',
      icon: 'check_circle_outline',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10
        },
        {
          name: 'to_dos.completed',
          label: 'Completed',
          count: 7
        },
      ]
    },
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received'
    },
    {
      name: 'sent',
      label: 'Sent',
      icon: 'call_made'
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports'
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <>
        {expanded && (
          <div className="mt-5 d-flex justify-content-center border-top">
          <DatePicker date={new Date()} size="small" />
          </div>
          )}
          <VerticalNav
            menus={data}
            expanded={expanded}
            active={active}
            onClick={setActive}
          />
        </>
      </Collapsible>
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Flat Edged Vertical Navigation

```jsx
import { Collapsible, VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      count: 10
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      count: 25,
      subMenu: [
        {
          name: 'profile.personal',
          label: 'Personal',
          count: 5
        },
        {
          name: 'profile.are_team',
          label: 'Care Team',
          count: 10
        },
        {
          name: 'profile.goals',
          label: 'Goals',
          count: 5
        },
        {
          name: 'profile.care_plans',
          label: 'Care Plans',
          count: 5
        }
      ]
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      subMenu: [
        {
          name: 'medical_records.allergies',
          label: 'Allergies'
        },
        {
          name: 'medical_records.conditions',
          label: 'Conditions'
        },
        {
          name: 'medical_records.immunizations',
          label: 'Immunizations'
        },
        {
          name: 'medical_records.lab_results',
          label: 'Lab Results'
        },
        {
          name: 'medical_records.medications',
          label: 'Medications'
        },
        {
          name: 'medical_records.procedures',
          label: 'Procedures'
        },
        {
          name: 'medical_records.vitals',
          label: 'Vitals'
        },
        {
          name: 'medical_records.smoking_history',
          label: 'medical_records.Smoking History'
        },
        {
          name: 'devices',
          label: 'Devices'
        }
      ]
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
    },
    {
      name: 'encounters',
      label: 'Encounters',
      icon: 'directions_walk',
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
    {
      name: 'find_care',
      label: 'Find Care',
      icon: 'search',
      subMenu: [
        {
          name: 'find_care.providers',
          label: 'Providers'
        },
        {
          name: 'find_care.pharmacies',
          label: 'Pharmacies'
        },
      ]
    },
    {
      name: 'connected_applications',
      label: 'Connected Applications',
      icon: 'extension'
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'medical_records.allergies'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-100">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={onClickHandler}
        />
      </Collapsible>
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Grouping

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'customer_information',
      label: 'Customer Information',
      group: 'General'
    },
    {
      name: 'organizational_structure',
      label: 'Organizational Structure',
      group: 'General'
    },
    {
      name: 'contacts',
      label: 'Contacts',
      group: 'General',
    },
    {
      name: 'empi',
      label: 'EMPI',
      group: 'Platform',
    },
    {
      name: 'data_exchange',
      label: 'Data Exchange',
      group: 'Platform',
      subMenu: [
        {
          name: 'data_exchange.reports',
          label: 'Reports'
        },
        {
          name: 'data_exchange.destinations',
          label: 'Destinations'
        },
        {
          name: 'data_exchange.validation',
          label: 'Validation'
        },
      ]
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
      group: 'Platform',
    },
    {
      name: 'pipelines',
      label: 'Pipelines',
      group: 'Apps',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'data_exchange.reports'
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Hoverable Vertical Navigation

```jsx
import { Collapsible, VerticalNav, Heading, Card, Table } from '@innovaccer/design-system';

() => {
  const tableData = [
    {
        "firstName": "Brooke",
        "lastName": "Heeran",
        "email": "bheeran0@altervista.org",
        "gender": "Female",
        "status": "Failed"
    },
    {
        "firstName": "Frazer",
        "lastName": "Cathro",
        "email": "fcathro1@ucla.edu",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Lemmie",
        "lastName": "Ciric",
        "email": {
            "title": "lciric2@dmoz.org",
            "metaList": [
                "First",
                "Second"
            ]
        },
        "gender": "Male",
        "status": "Completed"
    },
    {
        "firstName": "Randy",
        "lastName": "Boatwright",
        "email": "rboatwright3@arstechnica.com",
        "status": "Completed",
        "gender": "Male"
    },
    {
        "firstName": "Rolando",
        "lastName": "Cyples",
        "email": "rcyples4@biglobe.ne.jp",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Lem",
        "lastName": "Males",
        "email": "lmales5@admin.ch",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Sayres",
        "lastName": "Adelberg",
        "email": "sadelberg6@uol.com.br",
        "gender": "Male",
        "status": "Completed"
    },
    {
        "firstName": "Murray",
        "lastName": "Bravington",
        "email": "mbravington7@drupal.org",
        "gender": "Male",
        "status": "Failed"
    },
    {
        "firstName": "Jena",
        "lastName": "Swatheridge",
        "email": "jswatheridge8@npr.org",
        "gender": "Female",
        "status": "Failed"
    },
    {
        "firstName": "Annabel",
        "lastName": "Nelsey",
        "email": "anelsey9@google.com",
        "gender": "Female",
        "status": "Completed"
    }
];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '40%',
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      filters: [
        { label: 'A-G', value: 'a-g' },
        { label: 'H-R', value: 'h-r' },
        { label: 'S-Z', value: 's-z' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          switch (filter) {
            case 'a-g':
              if (a.firstName[0].toLowerCase() >= 'a' && a.firstName[0].toLowerCase() <= 'g') return true;
              break;
            case 'h-r':
              if (a.firstName[0].toLowerCase() >= 'h' && a.firstName[0].toLowerCase() <= 'r') return true;
              break;
            case 's-z':
              if (a.firstName[0].toLowerCase() >= 's' && a.firstName[0].toLowerCase() <= 'z') return true;
              break;
          }
        }
        return false;
      },
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.gender.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
  ];

  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management Policies',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-100">
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={data}
          active={active}
          expanded={expanded}
          onClick={setActive}
        />
      </Collapsible>
      <div className="ml-6 d-flex flex-column">
        <Heading className="my-5">Assessments</Heading>
        <Card className="h-100 overflow-hidden">
          <Table
            data={tableData}
            schema={schema}
            withHeader={true}
            withCheckbox={true}
            headerOptions={{
              withSearch: true
            }}
            onSearch={(currData, searchTerm) => {
              return currData.filter(d =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase())
                || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            withPagination={true}
            pageSize={5}
          />
        </Card>
      </div>
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Label Overflow Behaviour

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management Timeline Protocol',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol Management Guidelines',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health Precautions Template',
      icon: 'beenhere'
    },
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });
  
  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}   
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Non Collapsible Vertical Navigation

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'practice',
      label: 'Practice',
    },
    {
      name: 'users',
      label: 'Users',
    },
    {
      name: 'copayment',
      label: 'Copayment',
    },
    {
      name: 'subscription',
      label: 'Subscription',
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'users'
  });

  return (
    <div className="bg-secondary-lightest pb-12">
      <VerticalNav
        menus={data}
        active={active}
        expanded={true}
        onClick={setActive}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Round Edged Vertical Navigation

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {

  const primaryNavdata = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const secondaryNavdata = [
    {
      name: '11/12/20',
      label: '11 Dec, 2020',
    },
    {
      name: '17/11/20',
      label: '17 Nov, 2020',
    },
    {
      name: '07/11/20',
      label: '7 Nov, 2020',
    },
    {
      name: '09/10/20',
      label: '9 Oct, 2020',
    },
    {
      name: '23/08/20',
      label: '23 Aug, 2020',
    },
  ];

  const [primaryActive, setPrimaryActive] = React.useState({
    name: 'care_management.timeline'
  });

  const [secondaryActive, setSecondaryActive] = React.useState({
    name: '11/12/20'
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-100">
      <VerticalNav
        menus={primaryNavdata}
        active={primaryActive}
        onClick={setPrimaryActive}
      />
      <VerticalNav
        menus={secondaryNavdata}
        active={secondaryActive}
        rounded={true}
        className="mt-10 ml-5"
        onClick={setSecondaryActive}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Secondary Vertical Navigation

```jsx
import { VerticalNav, Heading, Card } from '@innovaccer/design-system';

() => {

  const primaryNavdata = [
    {
      name: 'clinical_data',
      label: 'Clinical Data',
      icon: 'assignment_ind'
    },
    {
      name: 'care_management',
      label: 'Care Management',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'people'
        },
        {
          name: 'care_management.care_protocol',
          label: 'Care Protocol',
          icon: 'fact_check'
        },
        {
          name: 'care_management.assessments',
          label: 'Assessments',
          icon: 'assessment'
        },
        {
          name: 'care_management.tasks',
          label: 'Tasks',
          icon: 'alarm'
        },
        {
          name: 'care_management.goals',
          label: 'Goals',
          icon: 'golf_course'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'accessibility_new'
        },
        {
          name: 'care_management.medical_adherence',
          label: 'Medical Adherence',
          icon: 'local_pharmacy'
        },
        {
          name: 'care_management.community_resources',
          label: 'Community Resources',
          icon: 'businesses'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite'
    },
    {
      name: 'preventive_health',
      label: 'Preventive Health',
      icon: 'beenhere'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'receipt'
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'account_circle'
    },
    {
      name: 'manual_entry',
      label: 'Manual Entry',
      icon: 'edit'
    },
    {
      name: 'patient_notes',
      label: 'Patient Notes',
      icon: 'note_add'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    },
  ];

  const secondaryNavdata = [
    {
      name: '19/01/20',
      label: '19 Jan, 2020',
      group: 'Completed'
    },
    {
      name: '16/01/20',
      label: '16 Jan, 2020',
      group: 'Completed'
    },
    {
      name: '11/11/20',
      label: '11 Nov, 2020',
      group: 'Ongoing'
    },
    {
      name: '17/11/20',
      label: '17 Nov, 2020',
      group: 'Ongoing'
    },
    {
      name: '07/11/20',
      label: '7 Nov, 2020',
      group: 'Ongoing'
    },
    {
      name: '09/10/20',
      label: '9 Oct, 2020',
      group: 'Ongoing'
    },
    {
      name: '23/08/20',
      label: '23 Aug, 2020',
      group: 'Ongoing'
    },
  ];

  const [primaryActive, setPrimaryActive] = React.useState({
    name: 'care_management.timeline'
  });

  const [secondaryActive, setSecondaryActive] = React.useState({
    name: '19/01/20'
  });

  return (
    <div className="d-flex bg-secondary-lightest vh-100">
      <VerticalNav
        menus={primaryNavdata}
        active={primaryActive}
        onClick={setPrimaryActive}
      />
      <div className="w-100 ml-6">
        <Heading className="my-5">Assessments</Heading>
        <Card shadow="none pb-12">
          <VerticalNav
            menus={secondaryNavdata}
            active={secondaryActive}
            onClick={setSecondaryActive}
          />
        </Card>
      </div>
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Variants Rounded

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360'
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle'
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });
  const [expanded, setExpanded] = React.useState(false);

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        rounded={true}
        onClick={onClickHandler}
      />
    </div>
  );
}
```


#### Components VerticalNav VerticalNav Variants Section

```jsx
import { VerticalNav } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
      group: 'Section 1'
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      group: 'Section 2',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      group: 'Section 2',
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      group: 'Section 2',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt',
      group: 'Section 3'
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'account_circle',
      group: 'Section 3'
    },
    {
      name: 'manula_entry',
      label: 'Manual Entry',
      icon: 'border_color',
      group: 'Section 3'
    },
    {
      name: 'documents',
      label: 'Documents',
      icon: 'assignment',
      group: 'Section 3'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={onClickHandler}
        hoverable={false}
      />
    </div>
  );
}
```