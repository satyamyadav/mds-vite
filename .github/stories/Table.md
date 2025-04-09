# Table

Tables are used for arranging information in a tabular format by laying out resource items, displaying data heavily based on numbers, or a list of homogenous items in their simplest form.

### Code Examples

#### Components Table All

This example demonstrates a basic table with data and schema definitions.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'bheeran0@altervista.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'fcathro1@ucla.edu',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: {
        title: 'lciric2@dmoz.org',
        metaList: ['First', 'Second'],
      },
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      status: 'Completed',
      gender: 'Male',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lem',
      lastName: 'Males',
      email: 'lmales5@admin.ch',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Sayres',
      lastName: 'Adelberg',
      email: 'sadelberg6@uol.com.br',
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Murray',
      lastName: 'Bravington',
      email: 'mbravington7@drupal.org',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Jena',
      lastName: 'Swatheridge',
      email: 'jswatheridge8@npr.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Annabel',
      lastName: 'Nelsey',
      email: 'anelsey9@google.com',
      gender: 'Female',
      status: 'Completed',
    },
  ];

  const schema = [
    {
      name: 'firstName',
      displayName: 'Name',
      cellType: 'AVATAR_WITH_TEXT',
      width: '25%',
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
    },
    {
      name: 'email',
      displayName: 'Email',
      width: '25%',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '25%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '25%',
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          data={data}
          schema={schema}
        />
      </Card>
    </div>
  );
}
```

#### Components Table Alignment

This example shows how to align table cells vertically.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      id: '89092830',
      priority: 'Urgent',
      providerDetails: {
        title: 'Dr. John Doe',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Brooklyn Simmons',
        metaList: ['Male', '12/12/2020'],
      },
    },
    {
      id: '89092834',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jenny Wilson',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Theresa Webb',
        metaList: ['Male', '12/12/2020'],
      },
    },
    {
      id: '89092124',
      priority: 'Urgent',
      providerDetails: {
        title: 'Devon Lane',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Behavioral health',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Dianne Russell',
        metaList: ['Male', '01/08/2020'],
      },
    },
    {
      id: '87329072',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jerome Bell',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['Phone/Email'],
      },
      patientDetails: {
        title: 'Floyd Miles',
        metaList: ['Male', '09/08/2020'],
      },
    },
    {
      id: '89092855',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jenny Wilson',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['Phone/Email'],
      },
      patientDetails: {
        title: 'Albert Flores',
        metaList: ['Male', '06/12/1997'],
      },
    },
  ];

  const schema = [
    {
      name: 'patientDetails',
      displayName: 'Name',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'id',
      displayName: 'ID',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'providerDetails',
      displayName: 'Provider',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'sourceDetails',
      displayName: 'Type & source',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'priority',
      displayName: 'Priority',
      width: '20%',
      verticalAlign: 'top',
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          data={data}
          schema={schema}
        />
      </Card>
    </div>
  );
}
```

#### Async Table

This example demonstrates how to handle asynchronous data fetching and pagination in a table.

```jsx
import { Icon, GridCell, Button, Card, Table } from '@innovaccer/design-system';

() => {
  const translateData = (schema, data) => {
    let newData = data;

    if (schema.translate) {
      const translatedData = schema.translate(data);
      newData = {
        ...newData,
        [schema.name]: typeof translatedData === 'object' ? {
          ...newData[schema.name],
          ...translatedData
        } : translatedData
      };
    }
    if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

    return newData;
  }

  const filterData = (schema, data, filterList) => {
    let filteredData = data;
    if (filterList) {
      Object.keys(filterList).forEach(schemaName => {
        const filters = filterList[schemaName];
        const sIndex = schema.findIndex(s => s.name === schemaName);
        const { onFilterChange } = schema[sIndex];
        if (filters.length && onFilterChange) {
          filteredData = filteredData.filter(d => onFilterChange(d, filters));
        }
      });
    }

    return filteredData;
  };

  const sortData = (schema, data, sortingList) => {
    const sortedData = [...data];
    sortingList.forEach(l => {
      const sIndex = schema.findIndex(s => s.name === l.name);
      if (sIndex !== -1) {
        const defaultComparator = (a, b) => {
          const aData = translateData(schema[sIndex], a);
          const bData = translateData(schema[sIndex], b);
          return aData[l.name].title.localeCompare(bData[l.name].title);
        };

        const {
          comparator = defaultComparator
        } = schema[sIndex];

        sortedData.sort(comparator);
        if (l.type === 'desc') sortedData.reverse();
      }
    });

    return sortedData;
  };

  const paginateData = (data, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    return paginatedData;
  };

  const data = [
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
  const [formattedData, setFormattedData] = React.useState(data);

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
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
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="events" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  const fetchData = (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;

    const onSearch = (d, searchTerm = '') => {
      return (
        d.firstName.toLowerCase().match(searchTerm.toLowerCase())
        || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
      );

      return true;
    }

    const filteredData = filterData(schema, data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);
    setFormattedData(sortedData);

    if (page && pageSize) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            searchTerm,
            schema,
            count: sortedData.length,
            data: slicedData,
          });
        }, 2000);
      });
    }

    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          schema,
          count: sortedData.length,
          data: sortedData,
        });
      }, 2000);
    });
  }

  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }

  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  const selectionActionRenderer = (selectedData, selectAll) => {
    console.log('selectedData in output', selectedData, 'selectAll', selectAll);
    return (
      <div className="d-flex align-items-center">
        <Button size="tiny" className="mr-4">Delete</Button>
        <Button size="tiny">Export</Button>
      </div>
    )
  }

  return (
    <div>
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withHeader={true}
          uniqueColumnName="firstName"
          headerOptions={{
            selectionActionRenderer,
            withSearch: true,
            globalActionRenderer : globalActionTrigger,
            allowSelectAll: true,
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select: - rowIndex: ${ rowIndex } selected: ${ selected } selectedList: ${ JSON.stringify(selectedList) } selectAll: ${ selectAll } `)}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

```

#### Custom Body Cell Renderer

This example shows how to create a custom cell renderer for table body cells.

```jsx
import { PlaceholderParagraph, EditableInput, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
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
    tooltip: true,
    separator: true,
    translate: (a) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.lastName,
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
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    resizable: true,
    cellRenderer: (props) => {
      const { loading } = props;

      if (loading) return <PlaceholderParagraph length="medium" />;

      const [weight, setWeight] = React.useState('');

      const onChangeWeight = (value) => {
        setWeight(value);
      };

      return <EditableInput placeholder="Add Weight" value={weight} onChange={onChangeWeight} size="tiny" />;
    },
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 250,
    resizable: true,
    sorting: false,
    cellType: 'WITH_META_LIST',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 180,
    resizable: true,
    comparator: (a, b) => a.gender.localeCompare(b.gender),
    cellType: 'STATUS_HINT',
    translate: (a) => ({
      title: a.gender,
      statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
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
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    resizable: true,
    align: 'center',
    cellType: 'ICON',
    translate: () => ({
      icon: 'events',
    }),
  },
];


  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  return (
    <div
      className="vh-50"
    >
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)}
          withPagination={true}
          pageSize={4}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

```

#### Custom Header Cell Renderer

This example demonstrates how to create a custom header cell renderer.

```jsx
import { Icon, Badge, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      claim_id: 'Q10000101',
      claim_type: 'Professional',
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Brooke',
      lastName: 'Heeran',
    },
    {
      claim_id: 'Q10000102',
      claim_type: "Professional",
      plan_name: "MSSP Track 1",
      insurance_name: "Medicare",
      first_dos: "03/24/2020",
      last_dos: "04/30/2020",
      firstName: 'Frazer',
      lastName: 'Cathro',
    },
    {
      claim_id: 'Q10000103',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/16/2020",
      last_dos: "05/30/2020",
      firstName: 'Lemmie',
      lastName: 'Ciric',
    },
    {
      claim_id: 'Q10000104',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "12/27/2020",
      last_dos: "12/30/2020",
      firstName: 'Randy',
      lastName: 'Boatwright',
    },
    {
      claim_id: 'Q10000105',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/04/2020",
      last_dos: "05/28/2020",
      firstName: 'Rolando',
      lastName: 'Cyples',
    },
    {
      claim_id: 'Q10000106',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "01/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Lem',
      lastName: 'Males',
    },
    {
      claim_id: 'Q10000107',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/30/2020",
      last_dos: "04/30/2020",
      firstName: 'Sayres',
      lastName: 'Adelberg',
    },
    {
      claim_id: 'Q10000108',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "02/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Murray',
      lastName: 'Bravington',
    },
    {
      claim_id: 'Q10000109',
      claim_type: "Institutional",
      plan_name: "MSSP Track 5",
      insurance_name: "Medicare",
      first_dos: "03/17/2020",
      last_dos: "03/30/2020",
      firstName: 'Carin',
      lastName: 'Robiou',
    },
    {
      claim_id: 'Q100001010',
      claim_type: "Institutional",
      plan_name: "MSSP Track 6",
      insurance_name: "Medicare",
      first_dos: "09/27/2020",
      last_dos: "12/27/2020",
      firstName: 'Brina',
      lastName: 'Pirie',
    }
  ];

  const schema = [
    {
      name: 'claim_id',
      displayName: 'Claim Id',
      width: '12%',
      separator: true,
    },
    {
      name: 'claim_type',
      displayName: 'Claim Type',
      width: '15%',
      separator: true,
      cellType: "DEFAULT",
      headerCellRenderer: () => {
        return (
          <>
            <Icon name="info" />
            <Badge>Custom Header</Badge>
          </>
        )
      },
    },
    {
      name: 'insurance_name',
      displayName: 'Insurance Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'plan_name',
      displayName: 'Plan Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'first_dos',
      displayName: 'First Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'last_dos',
      displayName: 'Last Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'provider_name',
      displayName: 'Provider Name',
      separator: true,
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
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
    },
  ];

  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  return (
      <Card className="overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          showMenu={false}
          separator={true}
          data={data}
          schema={schema}
          withHeader={true}
          pageSize={5}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
  );
}
```

#### Error State In Table

This example shows how to handle error states in a table.

```jsx
import { EmptyState, Button, Card, Table } from '@innovaccer/design-system';

() => {
  // import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

  const schema = [
  {
    name: 'name',
    displayName: 'Name',
    width: '40%',
    resizable: true,
    tooltip: true,
    separator: true,
    translate: (a) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.lastName,
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
    width: 250,
    resizable: true,
    sorting: false,
    cellType: 'WITH_META_LIST',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 180,
    resizable: true,
    comparator: (a, b) => a.gender.localeCompare(b.gender),
    cellType: 'STATUS_HINT',
    translate: (a) => ({
      title: a.gender,
      statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
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
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    resizable: true,
    align: 'center',
    cellType: 'ICON',
    translate: () => ({
      icon: 'events',
    }),
  }
];

  const errorTemplate = () => {
    return (
      <EmptyState>
        <EmptyState.Image src={"static/media/404-nothing-here-3.2871b1b3.svg"}></EmptyState.Image>
        <EmptyState.Title>Failed to load data</EmptyState.Title>
        <EmptyState.Description>
          We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
    );
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table data={[]} schema={schema} error={true} errorTemplate={errorTemplate} />
      </Card>
    </div>
  );
}
```

#### Nested Table With Nested Cards

This example demonstrates how to create nested tables with nested cards.

```jsx
import { Button, CardSubdued, Row, Column, Text, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      "firstName": "Brooke",
      "lastName": "Heeran",
      lastRun: "Yesterday 3:14 PM",
      "name": "Risk Analysis",
      "type": "Batch Execution",
      status: "Failed",
      statusType: "Error",
      errorCode: 2204,
      className: "File not found",
      errorMessage: "Cannot fetch files"

    },
    {
      "firstName": "Frazer",
      "lastName": "Cathro",
      lastRun: "Yesterday 11:15 AM",
      "name": "Quality",
      "type": "Batch Execution",
      status: "Completed",
      statusType: "Done",
      className: "Executed",
    },
    {
      "firstName": "Lemmie",
      "lastName": "Ciric",
      lastRun: "Yesterday 9:17 PM",
      "name": "Claims",
      "type": "Test Function",
      status: "Completed",
      statusType: "Done",
      className: "Executed",
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      lastRun: 'Yesterday 4:26 PM',
      name: 'Risk Analysis',
      type: 'Batch Execution',
      status: 'Completed',
      statusType: 'Done',
      className: 'Executed',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      lastRun: 'Yesterday 7:34 AM',
      name: 'Quality',
      type: 'Test Function',
      status: 'Failed',
      statusType: 'Error',
      errorCode: 2204,
      className: 'File not found',
      errorMessage: 'Cannot fetch files',
    },
  ];

  const schema = [
    {
      name: 'lastRun',
      displayName: 'Last Run',
      width: '25%',
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '15%',
    },
    {
      name: 'type',
      displayName: 'Type',
      width: '20%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Failed') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Failed', value: 'failed' },
        { label: 'Completed', value: 'completed' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: 'user',
      displayName: 'User',
      width: '20%',
      translate: a => ({
        title: `${a.lastName}, ${a.firstName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
  ];

  const onDataExport = (data) => {
    console.log('Exporting data', data);
  };

  const globalActionTrigger = (data) => {
    return (
      <div className="d-flex">
        <Button onClick={() => onDataExport(data)}>Export</Button>
        <Button className="ml-4" appearance="primary" onClick={() => onDataExport(data)}>
          Add to simulation
        </Button>
      </div>
    );
  };

  const nestedRowRenderer = (props) => {
    const {
      data,
      rowIndex
    } = props;
    if(rowIndex % 2){
      return false;
    }
    return (
      <CardSubdued className="mb-4 mt-3 mr-4 ml-9">
        <Row>
          <Column size={2}>
            <Text weight="medium">Type</Text> <br />
            <Text weight="medium">Error code</Text> <br />
            <Text weight="medium">Class name</Text> <br />
            <Text weight="medium">Error message</Text>
          </Column>
          <Column>
            <Text>{props.data.type}</Text> <br />
            <Text>{props.data.errorCode}</Text> <br />
            <Text>{props.data.className}</Text> <br />
            <Text>{props.data.errorMessage}</Text>
          </Column>
        </Row>
      </CardSubdued>
    );
  }

  return (
    <Card className="overflow-hidden">
      <Table
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false,
          globalActionRenderer : globalActionTrigger
        }}
        separator={false}
        showMenu={false}
        nestedRows={true}
        filterPosition="HEADER"
        nestedRowRenderer={nestedRowRenderer}
        filterList={{
          status: ['failed', 'completed']
        }}
      />
    </Card>
  );
}
```

#### Pinned Columns in Table

This example shows how to pin columns in a table.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      s_no: 1,
      empi: "P087636",
      first_name: "Joy",
      last_name: "Lawson",
      dob: "01/12/1982",
      gender: 'Female',
      facility: 'Charity Medical Clinic'
    },
    {
      s_no: 2,
      empi: "P087637",
      first_name: "Hannah",
      last_name: "Pop",
      dob: "01/11/1982",
      gender: 'Female',
      facility: 'Bancroft Medical Clinic'
    },
    {
      s_no: 3,
      empi: "P087638",
      first_name: "Lisa",
      last_name: "Sanchez",
      dob: "02/12/1981",
      gender: 'Female',
      facility: 'Lullaby Medical Clinic'
    },
    {
      s_no: 4,
      empi: "P087639",
      first_name: "Kathy",
      last_name: "Powell",
      dob: "01/10/1972",
      gender: 'Female',
      facility: 'Charity Medical Clinic'
    },
    {
      s_no: 5 ,
      empi: "P087631",
      first_name: "Dennis",
      last_name: "Lane",
      dob: "01/10/1982",
      gender: 'Male',
      facility: 'Lullaby Medical Clinic'
    },
  ];

  const schema = [
    {
      name: 's_no',
      displayName: 'S.no.',
      width: '5%',
      sorting: false,
      pinned: 'left'
    },
    {
      name: 'empi',
      displayName: 'EMPI',
      width: '10%',
      sorting: false,
      pinned: 'left'
    },
    {
      name: 'first_name',
      displayName: 'First Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'last_name',
      displayName: 'Last Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'dob',
      displayName: 'DOB',
      width: '20%',
      sorting: false
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '20%',
      sorting: false
    },
    {
      name: 'facility',
      displayName: 'Facility',
      sorting: false
    },
  ];

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="compressed"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: false
          }}
          withPagination={false}
        />
      </Card>
  );
}
```

#### Selection Behavior in Table

This example demonstrates how to handle selection behavior in a table.

```jsx
import { Icon, GridCell, Card, Table } from '@innovaccer/design-system';

() => {
  const translateData = (schema, data) => {
    let newData = data;

    if (schema.translate) {
      const translatedData = schema.translate(data);
      newData = {
        ...newData,
        [schema.name]: typeof translatedData === 'object' ? {
          ...newData[schema.name],
          ...translatedData
        } : translatedData
      };
    }
    if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

    return newData;
  }

  const filterData = (schema, data, filterList) => {
    let filteredData = data;
    if (filterList) {
      Object.keys(filterList).forEach(schemaName => {
        const filters = filterList[schemaName];
        const sIndex = schema.findIndex(s => s.name === schemaName);
        const { onFilterChange } = schema[sIndex];
        if (filters.length && onFilterChange) {
          filteredData = filteredData.filter(d => onFilterChange(d, filters));
        }
      });
    }

    return filteredData;
  };

  const sortData = (schema, data, sortingList) => {
    const sortedData = [...data];
    sortingList.forEach(l => {
      const sIndex = schema.findIndex(s => s.name === l.name);
      if (sIndex !== -1) {
        const defaultComparator = (a, b) => {
          const aData = translateData(schema[sIndex], a);
          const bData = translateData(schema[sIndex], b);
          return aData[l.name].title.localeCompare(bData[l.name].title);
        };

        const {
          comparator = defaultComparator
        } = schema[sIndex];

        sortedData.sort(comparator);
        if (l.type === 'desc') sortedData.reverse();
      }
    });

    return sortedData;
  };

  const paginateData = (data, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    return paginatedData;
  };

  const data = [
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
  const [formattedData, setFormattedData] = React.useState(data);

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
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
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="events" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  const fetchData = (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;

    const onSearch = (d, searchTerm = '') => {
      return (
        d.firstName.toLowerCase().match(searchTerm.toLowerCase())
        || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
      );

      return true;
    }

    const filteredData = filterData(schema, data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);
    setFormattedData(sortedData);

    if (page && pageSize) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            searchTerm,
            schema,
            count: sortedData.length,
            data: slicedData,
          });
        }, 2000);
      });
    }

    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          schema,
          count: sortedData.length,
          data: sortedData,
        });
      }, 2000);
    });
  }

  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  return (
    <div>
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withHeader={true}
          uniqueColumnName="firstName"
          headerOptions={{
            withSearch: true,
            customSelectionLabel: 'user',
            allowSelectAll: true,
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select: - rowIndex: ${ rowIndex } selected: ${ selected } selectedList: ${ JSON.stringify(selectedList) } selectAll: ${ selectAll } `)}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

```

#### Table with Bulk Actions

This example shows how to handle bulk actions in a table.

```jsx
import { Icon, GridCell, Button, Card, Table } from '@innovaccer/design-system';

() => {
  const translateData = (schema, data) => {
    let newData = data;

    if (schema.translate) {
      const translatedData = schema.translate(data);
      newData = {
        ...newData,
        [schema.name]: typeof translatedData === 'object' ? {
          ...newData[schema.name],
          ...translatedData
        } : translatedData
      };
    }
    if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

    return newData;
  }

  const filterData = (schema, data, filterList) => {
    let filteredData = data;
    if (filterList) {
      Object.keys(filterList).forEach(schemaName => {
        const filters = filterList[schemaName];
        const sIndex = schema.findIndex(s => s.name === schemaName);
        const { onFilterChange } = schema[sIndex];
        if (filters.length && onFilterChange) {
          filteredData = filteredData.filter(d => onFilterChange(d, filters));
        }
      });
    }

    return filteredData;
  };

  const sortData = (schema, data, sortingList) => {
    const sortedData = [...data];
    sortingList.forEach(l => {
      const sIndex = schema.findIndex(s => s.name === l.name);
      if (sIndex !== -1) {
        const defaultComparator = (a, b) => {
          const aData = translateData(schema[sIndex], a);
          const bData = translateData(schema[sIndex], b);
          return aData[l.name].title.localeCompare(bData[l.name].title);
        };

        const {
          comparator = defaultComparator
        } = schema[sIndex];

        sortedData.sort(comparator);
        if (l.type === 'desc') sortedData.reverse();
      }
    });

    return sortedData;
  };

  const paginateData = (data, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    return paginatedData;
  };

  const data = [
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
  const [formattedData, setFormattedData] = React.useState(data);

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
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
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="events" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  const fetchData = (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;

    const onSearch = (d, searchTerm = '') => {
      return (
        d.firstName.toLowerCase().match(searchTerm.toLowerCase())
        || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
      );

      return true;
    }

    const filteredData = filterData(schema, data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);
    setFormattedData(sortedData);

    if (page && pageSize) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            searchTerm,
            schema,
            count: sortedData.length,
            data: slicedData,
          });
        }, 2000);
      });
    }

    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          schema,
          count: sortedData.length,
          data: sortedData,
        });
      }, 2000);
    });
  }

  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }

  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  const selectionActionRenderer = (selectedData, selectAll) => {
    console.log('selectedData in output', selectedData, 'selectAll', selectAll);
    return (
      <div className="d-flex align-items-center">
        <Button size="tiny" className="mr-4">Delete</Button>
        <Button size="tiny">Export</Button>
      </div>
    )
  }

  return (
    <div>
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withHeader={true}
          uniqueColumnName="firstName"
          headerOptions={{
            selectionActionRenderer,
            withSearch: true,
            customSelectionLabel: 'user',
            globalActionRenderer : globalActionTrigger,
            allowSelectAll: true,
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select: - rowIndex: ${ rowIndex } selected: ${ selected } selectedList: ${ JSON.stringify(selectedList) } selectAll: ${ selectAll } `)}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

```

#### Compressed Table

This example demonstrates a compressed table layout.

```jsx
import { Button, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: "Active",
      measures: 9,
      current_period: "March 2017 - Feb 2018",
      added_in: "March 2014",
    },
    {
      name: 'MSSP Track 1 Rural',
      status: "Active",
      measures: 9,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2015",
    },
    {
      name: 'MSSP Track 2',
      status: "Inactive",
      measures: 14,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2016",
    },
    {
      name: 'Aetna',
      status: "Active",
      measures: 20,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2019",
    },
    {
      name: 'BCBS',
      status: "Active",
      measures: 16,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2017",
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Inactive') ? 'default' : 'success'
      }),
      cellType: "STATUS_HINT",
      sorting: false
    },
    {
      name: 'measures',
      displayName: 'No. of Measures',
      width: '20%',
      comparator: (a, b) => {
        if (a.measures < b.measures) {
          return -1;
        } else if (a.measures === b.measures) {
          return 0;
        } else {
          return 1;
        }
      },
      sorting: true
    },
    {
      name: 'current_period',
      displayName: 'Current Period',
      width: '20%',
      sorting: false
    },
    {
      name: 'added_in',
      displayName: 'Added in',
      width: '20%',
      sorting: false
    },
  ];

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }
  
  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="compressed"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true,
            globalActionRenderer : globalActionTrigger
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={false}
        />
      </Card>
  );
}
```

#### Standard Table

This example shows a standard table layout.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: "Active",
      measures: "9",
      current_period: "March 2017 - Feb 2018",
      added_in: "March 2014",
    },
    {
      name: 'MSSP Track 1 Rural',
      status: "Active",
      measures: "9",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2015",
    },
    {
      name: 'MSSP Track 2',
      status: "Inactive",
      measures: "14",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2016",
    },
    {
      name: 'Aetna',
      status: "Active",
      measures: "20",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2019",
    },
    {
      name: 'BCBS',
      status: "Active",
      measures: "16",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2017",
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Inactive') ? 'default' : 'success'
      }),
      cellType: "STATUS_HINT",
      sorting: false
    },
    {
      name: 'measures',
      displayName: 'No. of Measures',
      width: '20%',
      sorting: false
    },
    {
      name: 'current_period',
      displayName: 'Current Period',
      width: '20%',
      sorting: false
    },
    {
      name: 'added_in',
      displayName: 'Added in',
      width: '20%',
      sorting: false
    },
  ];

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={false}
        />
      </Card>
  );
}
```

#### Tight Table

This example demonstrates a tight table layout.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: "Active",
      measures: "9",
      current_period: "March 2017 - Feb 2018",
      added_in: "March 2014",
    },
    {
      name: 'MSSP Track 1 Rural',
      status: "Active",
      measures: "9",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2015",
    },
    {
      name: 'MSSP Track 2',
      status: "Inactive",
      measures: "14",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2016",
    },
    {
      name: 'Aetna',
      status: "Active",
      measures: "20",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2019",
    },
    {
      name: 'BCBS',
      status: "Active",
      measures: "16",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2017",
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Inactive') ? 'default' : 'success'
      }),
      cellType: "STATUS_HINT",
      sorting: false
    },
    {
      name: 'measures',
      displayName: 'No. of Measures',
      width: '20%',
      sorting: false
    },
    {
      name: 'current_period',
      displayName: 'Current Period',
      width: '20%',
      sorting: false
    },
    {
      name: 'added_in',
      displayName: 'Added in',
      width: '20%',
      sorting: false
    },
  ];

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="tight"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={false}
        />
      </Card>
  );
}
```

#### States in Data table

This example shows how to handle different states in a data table.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      claim_id: 'Q10000101',
      claim_type: 'Professional',
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Brooke',
      lastName: 'Heeran',
      disabled: true,
    },
    {
      claim_id: 'Q10000102',
      claim_type: "Professional",
      plan_name: "MSSP Track 1",
      insurance_name: "Medicare",
      first_dos: "03/24/2020",
      last_dos: "04/30/2020",
      firstName: 'Frazer',
      lastName: 'Cathro',
    },
    {
      claim_id: 'Q10000103',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/16/2020",
      last_dos: "05/30/2020",
      firstName: 'Lemmie',
      lastName: 'Ciric',
      disabled: true,
    },
    {
      claim_id: 'Q10000104',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "12/27/2020",
      last_dos: "12/30/2020",
      firstName: 'Randy',
      lastName: 'Boatwright',
    },
    {
      claim_id: 'Q10000105',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/04/2020",
      last_dos: "05/28/2020",
      firstName: 'Rolando',
      lastName: 'Cyples',
    },
    {
      claim_id: 'Q10000106',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "01/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Lem',
      lastName: 'Males',
    },
    {
      claim_id: 'Q10000107',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/30/2020",
      last_dos: "04/30/2020",
      firstName: 'Sayres',
      lastName: 'Adelberg',
    },
    {
      claim_id: 'Q10000108',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "02/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Murray',
      lastName: 'Bravington',
    },
    {
      claim_id: 'Q10000109',
      claim_type: "Institutional",
      plan_name: "MSSP Track 5",
      insurance_name: "Medicare",
      first_dos: "03/17/2020",
      last_dos: "03/30/2020",
      firstName: 'Carin',
      lastName: 'Robiou',
    },
    {
      claim_id: 'Q100001010',
      claim_type: "Institutional",
      plan_name: "MSSP Track 6",
      insurance_name: "Medicare",
      first_dos: "09/27/2020",
      last_dos: "12/27/2020",
      firstName: 'Brina',
      lastName: 'Pirie',
    }
  ];

  const schema = [
    {
      name: 'claim_id',
      displayName: 'Claim Id',
      width: '12%',
      separator: true,
    },
    {
      name: 'claim_type',
      displayName: 'Claim Type',
      width: '15%',
      separator: true,
      cellType: "DEFAULT"
    },
    {
      name: 'insurance_name',
      displayName: 'Insurance Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'plan_name',
      displayName: 'Plan Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'first_dos',
      displayName: 'First Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'last_dos',
      displayName: 'Last Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'provider_name',
      displayName: 'Provider Name',
      separator: true,
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
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
    },
  ];

  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  return (
      <Card className="overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          showMenu={false}
          separator={true}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              || d.claim_id.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
  );
}
```

#### Disabled Row In Table

This example demonstrates how to disable specific rows in a table.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {

  const data = [
    {
      "firstName": "Brooke",
      "lastName": "Heeran",
      lastRun: "Yesterday 3:14 PM",
      "name": "Risk Analysis",
      "type": "Batch Execution",
      status: "Failed",
      statusType: "Error",
      errorCode: 2204,
      className: "File not found",
      errorMessage: "Cannot fetch files",
      disabled: true,
    },
    {
      "firstName": "Frazer",
      "lastName": "Cathro",
      lastRun: "Yesterday 11:15 AM",
      "name": "Quality",
      "type": "Batch Execution",
      status: "Completed",
      statusType: "Done",
      className: "Executed",
    },
    {
      "firstName": "Lemmie",
      "lastName": "Ciric",
      lastRun: "Yesterday 9:17 PM",
      "name": "Claims",
      "type": "Test Function",
      status: "Completed",
      statusType: "Done",
      className: "Executed",
      disabled: true,
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      lastRun: 'Yesterday 4:26 PM',
      name: 'Risk Analysis',
      type: 'Batch Execution',
      status: 'Completed',
      statusType: 'Done',
      className: 'Executed',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      lastRun: 'Yesterday 7:34 AM',
      name: 'Quality',
      type: 'Test Function',
      status: 'Failed',
      statusType: 'Error',
      errorCode: 2204,
      className: 'File not found',
      errorMessage: 'Cannot fetch files',
    },
  ];

  const schema = [
    {
      name: 'lastRun',
      displayName: 'Last Run',
      width: '25%',
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '15%',
    },
    {
      name: 'type',
      displayName: 'Type',
      width: '20%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Failed') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Failed', value: 'failed' },
        { label: 'Completed', value: 'completed' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: 'user',
      displayName: 'User',
      width: '20%',
      translate: a => ({
        title: `${a.lastName}, ${a.firstName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
  ];

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="compressed"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(record =>
              record.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)
          }
          withPagination={false}
        />
      </Card>
  );
}
```

#### Loading State in Table

This example shows how to handle loading states in a table.

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const loading = true;
  const pageSize = 5;
  const withCheckbox = true;

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          loading={loading}
          pageSize={pageSize}
          withCheckbox={withCheckbox}
          loaderSchema={loaderSchema}
          data={[]}
          schema={[]}
          showMenu={true}
          withHeader={true}
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
}
```

#### States in Resource Table

This example demonstrates how to handle different states in a resource table.

```jsx
import { Avatar, Menu, Text, Card, Table } from '@innovaccer/design-system';


() => {
  const data = [
    {
        "name": "Asthma Outreach",
        "firstName": "Brooke",
        "lastName": "Heeran",
        "status": "In Progress",
        "lastUpdated": "June 20, 2020",
        "recipients": 11846,
        "_selected": true
    },
    {
        "firstName": "Frazer",
        "lastName": "Cathro",
        "status": "Scheduled",
        "lastUpdated": "June 19, 2020",
        "name": "HbA1c Test due",
        "recipients": 12846
    },
    {
        "firstName": "Lemmie",
        "name": "ER Education",
        "lastName": "Ciric",
        "status": "Draft",
        "lastUpdated": "May 19, 2020",
        "recipients": 118467,
        "_selected": true
    },
    {
        "firstName": "Randy",
        "lastName": "Boatwright",
        "name": "Flu Vaccination",
        "status": "Failed",
        "lastUpdated": "March 19, 2020",
        "recipients": 10846
    },
    {
        "firstName": "Rolando",
        "lastName": "Cyples",
        "name": "Well-child Visit",
        "status": "In Progress",
        "lastUpdated": "April 19, 2020",
        "recipients": 11847
    },
    {
        "firstName": "Lem",
        "lastName": "Males",
        "name": "Annual wellness Visit",
        "status": "In Progress",
        "lastUpdated": "June 16, 2020",
        "recipients": 118100
    },
    {
        "firstName": "Sayres",
        "lastName": "Adelberg",
        "name": "Flu Vaccination",
        "status": "Draft",
        "lastUpdated": "Dec 19, 2020",
        "recipients": 11848
    },
    {
        "firstName": "Murray",
        "lastName": "Bravington",
        "name": "Well-child Visit",
        "status": "Draft",
        "lastUpdated": "April 19, 2020",
        "recipients": 11890
    }
];

  const statusAppearance = {
    'In Progress': 'info',
    'Scheduled': 'warning',
    'Draft': 'default',
    'Failed': 'alert'
  };

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      sorting: false,
      translate: a => ({
        title: a.name,
        metaList: [`${a.recipients} recipients`]
      }),
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      sorting: false,
      filters: [
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Draft', value: 'Draft' },
        { label: 'Failed', value: 'Failed' }
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status === filter) return true;
        }
        return false;
      },
      translate: a => {
        const status = a.status;
        return ({
          title: status,
          statusAppearance: statusAppearance[status]
        });
      }
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: '',
      sorting: false,
      width: '20%',
      cellRenderer: (props) => {
        const { data } = props;
        return (
          <div className="d-flex align-items-center justify-content-end flex-grow-1">
            <Avatar firstName={data.firstName} lastName={data.lastName} />
            <div className="ml-6">
              <Menu trigger={<Menu.Trigger appearance="transparent" />}>
                <Menu.List>
                  <Menu.Item>
                    <Text>Edit</Text>
                  </Menu.Item>
                  <Menu.Item>
                    <Text>Delete</Text>
                  </Menu.Item>
                </Menu.List>
              </Menu>
            </div>
          </div>
        );
      }
    }
  ];

  return (
    <Card className="overflow-hidden">
      <Table
        showMenu={false}
        type="resource"
        data={data}
        schema={schema}
        withHeader={true}
        withCheckbox={true}
        filterPosition="HEADER"
        onSelect={(rowIndex, selected, selectedList, selectAll) =>
          console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)
        }
        headerOptions={{
          withSearch: true
        }}
        filterList={{
          status: ['In Progress', 'Scheduled', 'Draft', 'Failed']
        }}
        onSearch={(currData, searchTerm) => {
          return currData.filter(d =>
            d.firstName.toLowerCase().match(searchTerm.toLowerCase())
            || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            || d.name.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        withPagination={true}
        paginationType="basic"
        pageSize={4}
        onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
      />
    </Card>
  );
};

```

#### Sync Table

This example shows how to create a synchronous table.

```jsx
import { Icon, GridCell, Button, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="events" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  const [error, setError] = React.useState(false);

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }

  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          error={error}
          data={data}
          schema={schema}
          withHeader={true}
          uniqueColumnName="email"
          headerOptions={{
            withSearch: true,
            globalActionRenderer : globalActionTrigger,
            allowSelectAll: true,
          }}
          onSearch={(currData, searchTerm) => {
            console.log('onsearch called', searchTerm);
            setError(!error);
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)}
          withPagination={true}
          pageSize={50}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

```

#### Toggle Option For Header Cell Menu

This example demonstrates how to toggle the header cell menu in a table.

```jsx
import { Row, Column, Heading, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
        "firstName": "Brooke",
        "lastName": "Heeran",
        "email": "bheeran0@altervista.org",
        "gender": "Female",
        "status": "Failed"
    },
    {
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
    },
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
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="events" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  const [error, setError] = React.useState(false);

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }

  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          error={error}
          data={data}
          schema={schema}
          withHeader={true}
          uniqueColumnName="email"
          headerOptions={{
            withSearch: true,
            globalActionRenderer : globalActionTrigger,
            allowSelectAll: true,
          }}
          onSearch={(currData, searchTerm) => {
            console.log('onsearch called', searchTerm);
            setError(!error);
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)}
          withPagination={true}
          pageSize={50}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

```


#### Toggle Option For Header Cell Menu

```jsx
import { Row, Column, Heading, Card, Table } from '@innovaccer/design-system';


() => {
  const data = [
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
    },
    {
        "firstName": "Carin",
        "lastName": "Robiou",
        "email": "crobioua@skype.com",
        "gender": "Female",
        "status": "Completed"
    },
    {
        "firstName": "Anson",
        "lastName": "Gamon",
        "email": "agamonb@economist.com",
        "gender": "Male"
    },
    {
        "firstName": "Brina",
        "lastName": "Pirie",
        "email": "bpiriec@stumbleupon.com",
        "gender": "Female"
    },
    {
        "firstName": "Hermy",
        "lastName": "Dyett",
        "email": "hdyettd@boston.com",
        "gender": "Male"
    },
    {
        "firstName": "Aime",
        "lastName": "von Hagt",
        "email": "avonhagte@nyu.edu",
        "gender": "Female"
    },
    {
        "firstName": "Gusti",
        "lastName": "Haycock",
        "email": "ghaycockf@virginia.edu",
        "gender": "Female"
    },
    {
        "firstName": "Mortimer",
        "lastName": "Kunneke",
        "email": "mkunnekeg@weather.com",
        "gender": "Male"
    },
    {
        "firstName": "Barnie",
        "lastName": "Pohls",
        "email": "bpohlsh@columbia.edu",
        "gender": "Male"
    },
    {
        "firstName": "Elliot",
        "lastName": "Nealey",
        "email": "enealeyi@cocolog-nifty.com",
        "gender": "Male"
    },
    {
        "firstName": "Allsun",
        "lastName": "Gong",
        "email": "agongj@discuz.net",
        "gender": "Female"
    },
    {
        "firstName": "Harwell",
        "lastName": "Kegan",
        "email": "hkegank@domainmarket.com",
        "gender": "Male"
    },
    {
        "firstName": "Gilles",
        "lastName": "Sandell",
        "email": "gsandelll@apache.org",
        "gender": "Male"
    },
    {
        "firstName": "Hilliard",
        "lastName": "Beamish",
        "email": "hbeamishm@shop-pro.jp",
        "gender": "Male"
    },
    {
        "firstName": "Charley",
        "lastName": "Kuschek",
        "email": "ckuschekn@dropbox.com",
        "gender": "Male"
    },
    {
        "firstName": "Danny",
        "lastName": "Churchin",
        "email": "dchurchino@bbc.co.uk",
        "gender": "Female"
    },
    {
        "firstName": "Ervin",
        "lastName": "Chatelain",
        "email": "echatelainp@mac.com",
        "gender": "Male"
    },
    {
        "firstName": "Milli",
        "lastName": "Joseph",
        "email": "mjosephq@merriam-webster.com",
        "gender": "Female"
    },
    {
        "firstName": "Greer",
        "lastName": "O'Doherty",
        "email": "godohertyr@homestead.com",
        "gender": "Female"
    },
    {
        "firstName": "Haroun",
        "lastName": "Martensen",
        "email": "hmartensens@skype.com",
        "gender": "Male"
    },
    {
        "firstName": "Desiree",
        "lastName": "Colwell",
        "email": "dcolwellt@businessinsider.com",
        "gender": "Female"
    },
    {
        "firstName": "Almeda",
        "lastName": "Jowsey",
        "email": "ajowseyu@ask.com",
        "gender": "Female"
    },
    {
        "firstName": "Cinderella",
        "lastName": "Dunnet",
        "email": "cdunnetv@mac.com",
        "gender": "Female"
    },
    {
        "firstName": "Hubert",
        "lastName": "Legion",
        "email": "hlegionw@ameblo.jp",
        "gender": "Male"
    },
    {
        "firstName": "Costa",
        "lastName": "Adamovsky",
        "email": "cadamovskyx@joomla.org",
        "gender": "Male"
    },
    {
        "firstName": "Kristan",
        "lastName": "Bielfeld",
        "email": "kbielfeldy@live.com",
        "gender": "Female"
    },
    {
        "firstName": "Sammy",
        "lastName": "Shermore",
        "email": "sshermorez@washington.edu",
        "gender": "Female"
    },
    {
        "firstName": "Kathi",
        "lastName": "Dowyer",
        "email": "kdowyer10@bluehost.com",
        "gender": "Female"
    },
    {
        "firstName": "Kennith",
        "lastName": "Whitehouse",
        "email": "kwhitehouse11@cornell.edu",
        "gender": "Male"
    },
    {
        "firstName": "Brianna",
        "lastName": "Garland",
        "email": "bgarland12@wikipedia.org",
        "gender": "Female"
    },
    {
        "firstName": "Cristobal",
        "lastName": "Mapholm",
        "email": "cmapholm13@constantcontact.com",
        "gender": "Male"
    },
    {
        "firstName": "Zia",
        "lastName": "Harrowing",
        "email": "zharrowing14@huffingtonpost.com",
        "gender": "Female"
    },
    {
        "firstName": "Zabrina",
        "lastName": "Gravener",
        "email": "zgravener15@ameblo.jp",
        "gender": "Female"
    },
    {
        "firstName": "Gregoor",
        "lastName": "Cruz",
        "email": "gcruz16@uol.com.br",
        "gender": "Male"
    },
    {
        "firstName": "Julita",
        "lastName": "Gemeau",
        "email": "jgemeau17@bandcamp.com",
        "gender": "Female"
    },
    {
        "firstName": "Gilbert",
        "lastName": "Sallier",
        "email": "gsallier18@dailymail.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Bride",
        "lastName": "Boniface",
        "email": "bboniface19@howstuffworks.com",
        "gender": "Female"
    },
    {
        "firstName": "Rodolph",
        "lastName": "Mattussevich",
        "email": "rmattussevich1a@nymag.com",
        "gender": "Male"
    },
    {
        "firstName": "Rowan",
        "lastName": "Rizon",
        "email": "rrizon1b@thetimes.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Avie",
        "lastName": "Nicolls",
        "email": "anicolls1c@nbcnews.com",
        "gender": "Female"
    },
    {
        "firstName": "Bram",
        "lastName": "Kleinhaut",
        "email": "bkleinhaut1d@imdb.com",
        "gender": "Male"
    },
    {
        "firstName": "Carmita",
        "lastName": "Costin",
        "email": "ccostin1e@hibu.com",
        "gender": "Female"
    },
    {
        "firstName": "Wash",
        "lastName": "Vannuchi",
        "email": "wvannuchi1f@japanpost.jp",
        "gender": "Male"
    },
    {
        "firstName": "Nikki",
        "lastName": "Faye",
        "email": "nfaye1g@feedburner.com",
        "gender": "Female"
    },
    {
        "firstName": "Aron",
        "lastName": "Scimonelli",
        "email": "ascimonelli1h@nationalgeographic.com",
        "gender": "Male"
    },
    {
        "firstName": "Smitty",
        "lastName": "Giacomello",
        "email": "sgiacomello1i@google.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Staci",
        "lastName": "D'Elias",
        "email": "sdelias1j@paginegialle.it",
        "gender": "Female"
    },
    {
        "firstName": "Radcliffe",
        "lastName": "Garbutt",
        "email": "rgarbutt1k@thetimes.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Maxwell",
        "lastName": "Krikorian",
        "email": "mkrikorian1l@ask.com",
        "gender": "Male"
    },
    {
        "firstName": "Dunstan",
        "lastName": "Chansonne",
        "email": "dchansonne1m@posterous.com",
        "gender": "Male"
    },
    {
        "firstName": "Isaak",
        "lastName": "Faherty",
        "email": "ifaherty1n@who.int",
        "gender": "Male"
    },
    {
        "firstName": "Sawyere",
        "lastName": "Ede",
        "email": "sede1o@drupal.org",
        "gender": "Male"
    },
    {
        "firstName": "Perren",
        "lastName": "Daddow",
        "email": "pdaddow1p@indiegogo.com",
        "gender": "Male"
    },
    {
        "firstName": "Brendis",
        "lastName": "Napier",
        "email": "bnapier1q@multiply.com",
        "gender": "Male"
    },
    {
        "firstName": "Francene",
        "lastName": "Godbold",
        "email": "fgodbold1r@joomla.org",
        "gender": "Female"
    },
    {
        "firstName": "Moll",
        "lastName": "Fludgate",
        "email": "mfludgate1s@who.int",
        "gender": "Female"
    },
    {
        "firstName": "Allayne",
        "lastName": "Medhurst",
        "email": "amedhurst1t@is.gd",
        "gender": "Male"
    },
    {
        "firstName": "Genvieve",
        "lastName": "Mellows",
        "email": "gmellows1u@stumbleupon.com",
        "gender": "Female"
    },
    {
        "firstName": "Rebe",
        "lastName": "Durnford",
        "email": "rdurnford1v@biglobe.ne.jp",
        "gender": "Female"
    },
    {
        "firstName": "Thalia",
        "lastName": "Joerning",
        "email": "tjoerning1w@netscape.com",
        "gender": "Female"
    },
    {
        "firstName": "Beckie",
        "lastName": "Lammin",
        "email": "blammin1x@gnu.org",
        "gender": "Female"
    },
    {
        "firstName": "Kassandra",
        "lastName": "Furney",
        "email": "kfurney1y@surveymonkey.com",
        "gender": "Female"
    },
    {
        "firstName": "Libbie",
        "lastName": "Gladyer",
        "email": "lgladyer1z@dropbox.com",
        "gender": "Female"
    },
    {
        "firstName": "Kai",
        "lastName": "Goldsbury",
        "email": "kgoldsbury20@census.gov",
        "gender": "Female"
    },
    {
        "firstName": "Arielle",
        "lastName": "De Bell",
        "email": "adebell21@addthis.com",
        "gender": "Female"
    },
    {
        "firstName": "Ellary",
        "lastName": "Warnock",
        "email": "ewarnock22@ted.com",
        "gender": "Male"
    },
    {
        "firstName": "Skelly",
        "lastName": "Blakes",
        "email": "sblakes23@reddit.com",
        "gender": "Male"
    },
    {
        "firstName": "Roanne",
        "lastName": "Stanyforth",
        "email": "rstanyforth24@com.com",
        "gender": "Female"
    },
    {
        "firstName": "Cash",
        "lastName": "Fettis",
        "email": "cfettis25@go.com",
        "gender": "Male"
    },
    {
        "firstName": "Farleigh",
        "lastName": "McDavid",
        "email": "fmcdavid26@sbwire.com",
        "gender": "Male"
    },
    {
        "firstName": "Holly",
        "lastName": "Barfford",
        "email": "hbarfford27@wsj.com",
        "gender": "Female"
    },
    {
        "firstName": "Hurley",
        "lastName": "Benaine",
        "email": "hbenaine28@sun.com",
        "gender": "Male"
    },
    {
        "firstName": "Maryjo",
        "lastName": "Gilhooly",
        "email": "mgilhooly29@tripod.com",
        "gender": "Female"
    },
    {
        "firstName": "Annis",
        "lastName": "Linkie",
        "email": "alinkie2a@wp.com",
        "gender": "Female"
    },
    {
        "firstName": "Mariel",
        "lastName": "Husher",
        "email": "mhusher2b@etsy.com",
        "gender": "Female"
    },
    {
        "firstName": "Niels",
        "lastName": "Klimontovich",
        "email": "nklimontovich2c@surveymonkey.com",
        "gender": "Male"
    },
    {
        "firstName": "Udall",
        "lastName": "Linfitt",
        "email": "ulinfitt2d@toplist.cz",
        "gender": "Male"
    },
    {
        "firstName": "Isidore",
        "lastName": "Kuhn",
        "email": "ikuhn2e@cdc.gov",
        "gender": "Male"
    },
    {
        "firstName": "Rosemonde",
        "lastName": "Kettle",
        "email": "rkettle2f@techcrunch.com",
        "gender": "Female"
    },
    {
        "firstName": "Cass",
        "lastName": "Boot",
        "email": "cboot2g@furl.net",
        "gender": "Male"
    },
    {
        "firstName": "Montague",
        "lastName": "Rossey",
        "email": "mrossey2h@goo.gl",
        "gender": "Male"
    },
    {
        "firstName": "Geno",
        "lastName": "Jenkyn",
        "email": "gjenkyn2i@opensource.org",
        "gender": "Male"
    },
    {
        "firstName": "Esdras",
        "lastName": "Skivington",
        "email": "eskivington2j@answers.com",
        "gender": "Male"
    },
    {
        "firstName": "Gabriello",
        "lastName": "Luce",
        "email": "gluce2k@nydailynews.com",
        "gender": "Male"
    },
    {
        "firstName": "Magdalene",
        "lastName": "Ilyunin",
        "email": "milyunin2l@prweb.com",
        "gender": "Female"
    },
    {
        "firstName": "Isidro",
        "lastName": "Fawson",
        "email": "ifawson2m@squidoo.com",
        "gender": "Male"
    },
    {
        "firstName": "Blinny",
        "lastName": "Palfrey",
        "email": "bpalfrey2n@networksolutions.com",
        "gender": "Female"
    },
    {
        "firstName": "Justen",
        "lastName": "Kordas",
        "email": "jkordas2o@symantec.com",
        "gender": "Male"
    },
    {
        "firstName": "Damien",
        "lastName": "Hallede",
        "email": "dhallede2p@unicef.org",
        "gender": "Male"
    },
    {
        "firstName": "Jaquelyn",
        "lastName": "Rockhall",
        "email": "jrockhall2q@vkontakte.ru",
        "gender": "Female"
    },
    {
        "firstName": "Garrek",
        "lastName": "Matignon",
        "email": "gmatignon2r@noaa.gov",
        "gender": "Male"
    }
];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
    },
  ];

  const values = [true, false];

  return (
    <div className="d-flex flex-wrap">
    <Row>
    {values.map((v, index) => (
      <Column size={5} key={index} className="ml-10">
        <Heading>{`showMenu: ${v}`}</Heading>
        <div className="vh-75">
          <Card className="h-100 overflow-hidden">
            <Table showMenu={v} data={data} schema={schema} />
          </Card>
        </div>
      </Column>
    ))}
  </Row>
    </div>
  );
};

```


#### Toggle Option For Header Row

```jsx
import { Row, Column, Heading, Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
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
    },
    {
        "firstName": "Carin",
        "lastName": "Robiou",
        "email": "crobioua@skype.com",
        "gender": "Female",
        "status": "Completed"
    },
    {
        "firstName": "Anson",
        "lastName": "Gamon",
        "email": "agamonb@economist.com",
        "gender": "Male"
    },
    {
        "firstName": "Brina",
        "lastName": "Pirie",
        "email": "bpiriec@stumbleupon.com",
        "gender": "Female"
    },
    {
        "firstName": "Hermy",
        "lastName": "Dyett",
        "email": "hdyettd@boston.com",
        "gender": "Male"
    },
    {
        "firstName": "Aime",
        "lastName": "von Hagt",
        "email": "avonhagte@nyu.edu",
        "gender": "Female"
    },
    {
        "firstName": "Gusti",
        "lastName": "Haycock",
        "email": "ghaycockf@virginia.edu",
        "gender": "Female"
    },
    {
        "firstName": "Mortimer",
        "lastName": "Kunneke",
        "email": "mkunnekeg@weather.com",
        "gender": "Male"
    },
    {
        "firstName": "Barnie",
        "lastName": "Pohls",
        "email": "bpohlsh@columbia.edu",
        "gender": "Male"
    },
    {
        "firstName": "Elliot",
        "lastName": "Nealey",
        "email": "enealeyi@cocolog-nifty.com",
        "gender": "Male"
    },
    {
        "firstName": "Allsun",
        "lastName": "Gong",
        "email": "agongj@discuz.net",
        "gender": "Female"
    },
    {
        "firstName": "Harwell",
        "lastName": "Kegan",
        "email": "hkegank@domainmarket.com",
        "gender": "Male"
    },
    {
        "firstName": "Gilles",
        "lastName": "Sandell",
        "email": "gsandelll@apache.org",
        "gender": "Male"
    },
    {
        "firstName": "Hilliard",
        "lastName": "Beamish",
        "email": "hbeamishm@shop-pro.jp",
        "gender": "Male"
    },
    {
        "firstName": "Charley",
        "lastName": "Kuschek",
        "email": "ckuschekn@dropbox.com",
        "gender": "Male"
    },
    {
        "firstName": "Danny",
        "lastName": "Churchin",
        "email": "dchurchino@bbc.co.uk",
        "gender": "Female"
    },
    {
        "firstName": "Ervin",
        "lastName": "Chatelain",
        "email": "echatelainp@mac.com",
        "gender": "Male"
    },
    {
        "firstName": "Milli",
        "lastName": "Joseph",
        "email": "mjosephq@merriam-webster.com",
        "gender": "Female"
    },
    {
        "firstName": "Greer",
        "lastName": "O'Doherty",
        "email": "godohertyr@homestead.com",
        "gender": "Female"
    },
    {
        "firstName": "Haroun",
        "lastName": "Martensen",
        "email": "hmartensens@skype.com",
        "gender": "Male"
    },
    {
        "firstName": "Desiree",
        "lastName": "Colwell",
        "email": "dcolwellt@businessinsider.com",
        "gender": "Female"
    },
    {
        "firstName": "Almeda",
        "lastName": "Jowsey",
        "email": "ajowseyu@ask.com",
        "gender": "Female"
    },
    {
        "firstName": "Cinderella",
        "lastName": "Dunnet",
        "email": "cdunnetv@mac.com",
        "gender": "Female"
    },
    {
        "firstName": "Hubert",
        "lastName": "Legion",
        "email": "hlegionw@ameblo.jp",
        "gender": "Male"
    },
    {
        "firstName": "Costa",
        "lastName": "Adamovsky",
        "email": "cadamovskyx@joomla.org",
        "gender": "Male"
    },
    {
        "firstName": "Kristan",
        "lastName": "Bielfeld",
        "email": "kbielfeldy@live.com",
        "gender": "Female"
    },
    {
        "firstName": "Sammy",
        "lastName": "Shermore",
        "email": "sshermorez@washington.edu",
        "gender": "Female"
    },
    {
        "firstName": "Kathi",
        "lastName": "Dowyer",
        "email": "kdowyer10@bluehost.com",
        "gender": "Female"
    },
    {
        "firstName": "Kennith",
        "lastName": "Whitehouse",
        "email": "kwhitehouse11@cornell.edu",
        "gender": "Male"
    },
    {
        "firstName": "Brianna",
        "lastName": "Garland",
        "email": "bgarland12@wikipedia.org",
        "gender": "Female"
    },
    {
        "firstName": "Cristobal",
        "lastName": "Mapholm",
        "email": "cmapholm13@constantcontact.com",
        "gender": "Male"
    },
    {
        "firstName": "Zia",
        "lastName": "Harrowing",
        "email": "zharrowing14@huffingtonpost.com",
        "gender": "Female"
    },
    {
        "firstName": "Zabrina",
        "lastName": "Gravener",
        "email": "zgravener15@ameblo.jp",
        "gender": "Female"
    },
    {
        "firstName": "Gregoor",
        "lastName": "Cruz",
        "email": "gcruz16@uol.com.br",
        "gender": "Male"
    },
    {
        "firstName": "Julita",
        "lastName": "Gemeau",
        "email": "jgemeau17@bandcamp.com",
        "gender": "Female"
    },
    {
        "firstName": "Gilbert",
        "lastName": "Sallier",
        "email": "gsallier18@dailymail.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Bride",
        "lastName": "Boniface",
        "email": "bboniface19@howstuffworks.com",
        "gender": "Female"
    },
    {
        "firstName": "Rodolph",
        "lastName": "Mattussevich",
        "email": "rmattussevich1a@nymag.com",
        "gender": "Male"
    },
    {
        "firstName": "Rowan",
        "lastName": "Rizon",
        "email": "rrizon1b@thetimes.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Avie",
        "lastName": "Nicolls",
        "email": "anicolls1c@nbcnews.com",
        "gender": "Female"
    },
    {
        "firstName": "Bram",
        "lastName": "Kleinhaut",
        "email": "bkleinhaut1d@imdb.com",
        "gender": "Male"
    },
    {
        "firstName": "Carmita",
        "lastName": "Costin",
        "email": "ccostin1e@hibu.com",
        "gender": "Female"
    },
    {
        "firstName": "Wash",
        "lastName": "Vannuchi",
        "email": "wvannuchi1f@japanpost.jp",
        "gender": "Male"
    },
    {
        "firstName": "Nikki",
        "lastName": "Faye",
        "email": "nfaye1g@feedburner.com",
        "gender": "Female"
    },
    {
        "firstName": "Aron",
        "lastName": "Scimonelli",
        "email": "ascimonelli1h@nationalgeographic.com",
        "gender": "Male"
    },
    {
        "firstName": "Smitty",
        "lastName": "Giacomello",
        "email": "sgiacomello1i@google.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Staci",
        "lastName": "D'Elias",
        "email": "sdelias1j@paginegialle.it",
        "gender": "Female"
    },
    {
        "firstName": "Radcliffe",
        "lastName": "Garbutt",
        "email": "rgarbutt1k@thetimes.co.uk",
        "gender": "Male"
    },
    {
        "firstName": "Maxwell",
        "lastName": "Krikorian",
        "email": "mkrikorian1l@ask.com",
        "gender": "Male"
    },
    {
        "firstName": "Dunstan",
        "lastName": "Chansonne",
        "email": "dchansonne1m@posterous.com",
        "gender": "Male"
    },
    {
        "firstName": "Isaak",
        "lastName": "Faherty",
        "email": "ifaherty1n@who.int",
        "gender": "Male"
    },
    {
        "firstName": "Sawyere",
        "lastName": "Ede",
        "email": "sede1o@drupal.org",
        "gender": "Male"
    },
    {
        "firstName": "Perren",
        "lastName": "Daddow",
        "email": "pdaddow1p@indiegogo.com",
        "gender": "Male"
    },
    {
        "firstName": "Brendis",
        "lastName": "Napier",
        "email": "bnapier1q@multiply.com",
        "gender": "Male"
    },
    {
        "firstName": "Francene",
        "lastName": "Godbold",
        "email": "fgodbold1r@joomla.org",
        "gender": "Female"
    },
    {
        "firstName": "Moll",
        "lastName": "Fludgate",
        "email": "mfludgate1s@who.int",
        "gender": "Female"
    },
    {
        "firstName": "Allayne",
        "lastName": "Medhurst",
        "email": "amedhurst1t@is.gd",
        "gender": "Male"
    },
    {
        "firstName": "Genvieve",
        "lastName": "Mellows",
        "email": "gmellows1u@stumbleupon.com",
        "gender": "Female"
    },
    {
        "firstName": "Rebe",
        "lastName": "Durnford",
        "email": "rdurnford1v@biglobe.ne.jp",
        "gender": "Female"
    },
    {
        "firstName": "Thalia",
        "lastName": "Joerning",
        "email": "tjoerning1w@netscape.com",
        "gender": "Female"
    },
    {
        "firstName": "Beckie",
        "lastName": "Lammin",
        "email": "blammin1x@gnu.org",
        "gender": "Female"
    },
    {
        "firstName": "Kassandra",
        "lastName": "Furney",
        "email": "kfurney1y@surveymonkey.com",
        "gender": "Female"
    },
    {
        "firstName": "Libbie",
        "lastName": "Gladyer",
        "email": "lgladyer1z@dropbox.com",
        "gender": "Female"
    },
    {
        "firstName": "Kai",
        "lastName": "Goldsbury",
        "email": "kgoldsbury20@census.gov",
        "gender": "Female"
    },
    {
        "firstName": "Arielle",
        "lastName": "De Bell",
        "email": "adebell21@addthis.com",
        "gender": "Female"
    },
    {
        "firstName": "Ellary",
        "lastName": "Warnock",
        "email": "ewarnock22@ted.com",
        "gender": "Male"
    },
    {
        "firstName": "Skelly",
        "lastName": "Blakes",
        "email": "sblakes23@reddit.com",
        "gender": "Male"
    },
    {
        "firstName": "Roanne",
        "lastName": "Stanyforth",
        "email": "rstanyforth24@com.com",
        "gender": "Female"
    },
    {
        "firstName": "Cash",
        "lastName": "Fettis",
        "email": "cfettis25@go.com",
        "gender": "Male"
    },
    {
        "firstName": "Farleigh",
        "lastName": "McDavid",
        "email": "fmcdavid26@sbwire.com",
        "gender": "Male"
    },
    {
        "firstName": "Holly",
        "lastName": "Barfford",
        "email": "hbarfford27@wsj.com",
        "gender": "Female"
    },
    {
        "firstName": "Hurley",
        "lastName": "Benaine",
        "email": "hbenaine28@sun.com",
        "gender": "Male"
    },
    {
        "firstName": "Maryjo",
        "lastName": "Gilhooly",
        "email": "mgilhooly29@tripod.com",
        "gender": "Female"
    },
    {
        "firstName": "Annis",
        "lastName": "Linkie",
        "email": "alinkie2a@wp.com",
        "gender": "Female"
    },
    {
        "firstName": "Mariel",
        "lastName": "Husher",
        "email": "mhusher2b@etsy.com",
        "gender": "Female"
    },
    {
        "firstName": "Niels",
        "lastName": "Klimontovich",
        "email": "nklimontovich2c@surveymonkey.com",
        "gender": "Male"
    },
    {
        "firstName": "Udall",
        "lastName": "Linfitt",
        "email": "ulinfitt2d@toplist.cz",
        "gender": "Male"
    },
    {
        "firstName": "Isidore",
        "lastName": "Kuhn",
        "email": "ikuhn2e@cdc.gov",
        "gender": "Male"
    },
    {
        "firstName": "Rosemonde",
        "lastName": "Kettle",
        "email": "rkettle2f@techcrunch.com",
        "gender": "Female"
    },
    {
        "firstName": "Cass",
        "lastName": "Boot",
        "email": "cboot2g@furl.net",
        "gender": "Male"
    },
    {
        "firstName": "Montague",
        "lastName": "Rossey",
        "email": "mrossey2h@goo.gl",
        "gender": "Male"
    },
    {
        "firstName": "Geno",
        "lastName": "Jenkyn",
        "email": "gjenkyn2i@opensource.org",
        "gender": "Male"
    },
    {
        "firstName": "Esdras",
        "lastName": "Skivington",
        "email": "eskivington2j@answers.com",
        "gender": "Male"
    },
    {
        "firstName": "Gabriello",
        "lastName": "Luce",
        "email": "gluce2k@nydailynews.com",
        "gender": "Male"
    },
    {
        "firstName": "Magdalene",
        "lastName": "Ilyunin",
        "email": "milyunin2l@prweb.com",
        "gender": "Female"
    },
    {
        "firstName": "Isidro",
        "lastName": "Fawson",
        "email": "ifawson2m@squidoo.com",
        "gender": "Male"
    },
    {
        "firstName": "Blinny",
        "lastName": "Palfrey",
        "email": "bpalfrey2n@networksolutions.com",
        "gender": "Female"
    },
    {
        "firstName": "Justen",
        "lastName": "Kordas",
        "email": "jkordas2o@symantec.com",
        "gender": "Male"
    },
    {
        "firstName": "Damien",
        "lastName": "Hallede",
        "email": "dhallede2p@unicef.org",
        "gender": "Male"
    },
    {
        "firstName": "Jaquelyn",
        "lastName": "Rockhall",
        "email": "jrockhall2q@vkontakte.ru",
        "gender": "Female"
    },
    {
        "firstName": "Garrek",
        "lastName": "Matignon",
        "email": "gmatignon2r@noaa.gov",
        "gender": "Male"
    }
];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
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
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
  ];

  const values = [true, false];

  return (
    <div className="d-flex flex-wrap">
    <Row>
    {values.map((v, index) => (
      <Column key={index} size={5} className="ml-10">
        <Heading>{`showHead: ${v}`}</Heading>
        <div className="vh-75">
          <Card className="h-100 overflow-hidden">
            <Table showHead={v} data={data} schema={schema} />
          </Card>
        </div>
      </Column>
    ))}
  </Row>
    </div>
  );
};

```


#### Data table

```jsx
import { Card, Table } from '@innovaccer/design-system';

() => {
  const data = [
    {
      claim_id: 'Q10000101',
      claim_type: 'Professional',
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Brooke',
      lastName: 'Heeran',
    },
    {
      claim_id: 'Q10000102',
      claim_type: "Professional",
      plan_name: "MSSP Track 1",
      insurance_name: "Medicare",
      first_dos: "03/24/2020",
      last_dos: "04/30/2020",
      firstName: 'Frazer',
      lastName: 'Cathro',
    },
    {
      claim_id: 'Q10000103',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/16/2020",
      last_dos: "05/30/2020",
      firstName: 'Lemmie',
      lastName: 'Ciric',
    },
    {
      claim_id: 'Q10000104',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "12/27/2020",
      last_dos: "12/30/2020",
      firstName: 'Randy',
      lastName: 'Boatwright',
    },
    {
      claim_id: 'Q10000105',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "05/04/2020",
      last_dos: "05/28/2020",
      firstName: 'Rolando',
      lastName: 'Cyples',
    },
    {
      claim_id: 'Q10000106',
      claim_type: "Institutional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "01/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Lem',
      lastName: 'Males',
    },
    {
      claim_id: 'Q10000107',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "03/30/2020",
      last_dos: "04/30/2020",
      firstName: 'Sayres',
      lastName: 'Adelberg',
    },
    {
      claim_id: 'Q10000108',
      claim_type: "Professional",
      plan_name: "MSSP Track 3",
      insurance_name: "Medicare",
      first_dos: "02/27/2020",
      last_dos: "03/30/2020",
      firstName: 'Murray',
      lastName: 'Bravington',
    },
    {
      claim_id: 'Q10000109',
      claim_type: "Institutional",
      plan_name: "MSSP Track 5",
      insurance_name: "Medicare",
      first_dos: "03/17/2020",
      last_dos: "03/30/2020",
      firstName: 'Carin',
      lastName: 'Robiou',
    },
    {
      claim_id: 'Q100001010',
      claim_type: "Institutional",
      plan_name: "MSSP Track 6",
      insurance_name: "Medicare",
      first_dos: "09/27/2020",
      last_dos: "12/27/2020",
      firstName: 'Brina',
      lastName: 'Pirie',
    }
  ];

  const schema = [
    {
      name: 'claim_id',
      displayName: 'Claim Id',
      width: '12%',
      separator: true,
    },
    {
      name: 'claim_type',
      displayName: 'Claim Type',
      width: '15%',
      separator: true,
      cellType: "DEFAULT"
    },
    {
      name: 'insurance_name',
      displayName: 'Insurance Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'plan_name',
      displayName: 'Plan Name',
      width: '15%',
      separator: true,
    },
    {
      name: 'first_dos',
      displayName: 'First Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'last_dos',
      displayName: 'Last Date of Service',
      width: '18%',
      separator: true,
    },
    {
      name: 'provider_name',
      displayName: 'Provider Name',
      separator: true,
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
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
    },
  ];

  const loaderSchema = [
    {
        "name": "name",
        "displayName": "Name",
        "width": "40%",
        "resizable": true,
        "tooltip": true,
        "separator": true,
        "filters": [
            {
                "label": "A-G",
                "value": "a-g"
            },
            {
                "label": "H-R",
                "value": "h-r"
            },
            {
                "label": "S-Z",
                "value": "s-z"
            }
        ],
        "cellType": "AVATAR_WITH_TEXT"
    },
    {
        "name": "email",
        "displayName": "Email",
        "width": 250,
        "resizable": true,
        "sorting": false,
        "cellType": "WITH_META_LIST"
    },
    {
        "name": "gender",
        "displayName": "Gender",
        "width": 180,
        "resizable": true,
        "cellType": "STATUS_HINT",
        "filters": [
            {
                "label": "Male",
                "value": "male"
            },
            {
                "label": "Female",
                "value": "female"
            }
        ]
    },
    {
        "name": "icon",
        "displayName": "Icon",
        "width": 100,
        "resizable": true,
        "align": "center",
        "cellType": "ICON"
    },
    {
        "name": "customCell",
        "displayName": "Custom Cell",
        "width": 200,
        "resizable": true,
        "cellType": "WITH_META_LIST"
    }
];

  return (
      <Card className="overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          showMenu={false}
          separator={true}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
              || d.claim_id.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
  );
}
```


#### Resource Table

```jsx
import { Avatar, Menu, Text, Card, Table } from '@innovaccer/design-system';


() => {
  const data = [
    {
        "name": "Asthma Outreach",
        "firstName": "Brooke",
        "lastName": "Heeran",
        "status": "In Progress",
        "lastUpdated": "June 20, 2020",
        "recipients": 11846
    },
    {
        "firstName": "Frazer",
        "lastName": "Cathro",
        "status": "Scheduled",
        "lastUpdated": "June 19, 2020",
        "name": "HbA1c Test due",
        "recipients": 12846
    },
    {
        "firstName": "Lemmie",
        "name": "ER Education",
        "lastName": "Ciric",
        "status": "Draft",
        "lastUpdated": "May 19, 2020",
        "recipients": 118467
    },
    {
        "firstName": "Randy",
        "lastName": "Boatwright",
        "name": "Flu Vaccination",
        "status": "Failed",
        "lastUpdated": "March 19, 2020",
        "recipients": 10846
    },
    {
        "firstName": "Rolando",
        "lastName": "Cyples",
        "name": "Well-child Visit",
        "status": "In Progress",
        "lastUpdated": "April 19, 2020",
        "recipients": 11847
    },
    {
        "firstName": "Lem",
        "lastName": "Males",
        "name": "Annual wellness Visit",
        "status": "In Progress",
        "lastUpdated": "June 16, 2020",
        "recipients": 118100
    },
    {
        "firstName": "Sayres",
        "lastName": "Adelberg",
        "name": "Flu Vaccination",
        "status": "Draft",
        "lastUpdated": "Dec 19, 2020",
        "recipients": 11848
    },
    {
        "firstName": "Murray",
        "lastName": "Bravington",
        "name": "Well-child Visit",
        "status": "Draft",
        "lastUpdated": "April 19, 2020",
        "recipients": 11890
    }
];

  const statusAppearance = {
    'In Progress': 'info',
    'Scheduled': 'warning',
    'Draft': 'default',
    'Failed': 'alert'
  };

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      sorting: false,
      translate: a => ({
        title: a.name,
        metaList: [`${a.recipients} recipients`]
      }),
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      sorting: false,
      filters: [
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Draft', value: 'Draft' },
        { label: 'Failed', value: 'Failed' }
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status === filter) return true;
        }
        return false;
      },
      translate: a => {
        const status = a.status;
        return ({
          title: status,
          statusAppearance: statusAppearance[status]
        });
      }
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: '',
      sorting: false,
      width: '20%',
      cellRenderer: (props) => {
        const { data } = props;
        return (
          <div className="d-flex align-items-center justify-content-end flex-grow-1">
            <Avatar firstName={data.firstName} lastName={data.lastName} />
            <div className="ml-6">
              <Menu trigger={<Menu.Trigger appearance="transparent" />}>
                <Menu.List>
                  <Menu.Item>
                    <Text>Edit</Text>
                  </Menu.Item>
                  <Menu.Item>
                    <Text>Delete</Text>
                  </Menu.Item>
                </Menu.List>
              </Menu>
            </div>
          </div>
        );
      }
    }
  ];

  return (
    <Card className="overflow-hidden">
      <Table
        showMenu={false}
        type="resource"
        data={data}
        schema={schema}
        withHeader={true}
        filterPosition="HEADER"
        onSelect={(rowIndex, selected, selectedList, selectAll) =>
          console.log(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)
        }
        headerOptions={{
          withSearch: true
        }}
        filterList={{
          status: ['In Progress', 'Scheduled', 'Draft', 'Failed']
        }}
        onSearch={(currData, searchTerm) => {
          return currData.filter(d =>
            d.firstName.toLowerCase().match(searchTerm.toLowerCase())
            || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            || d.name.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        withPagination={true}
        paginationType="basic"
        pageSize={4}
        onPageChange={newPage => console.log(`on-page-change:- ${newPage}`)}
      />
    </Card>
  );
};

```