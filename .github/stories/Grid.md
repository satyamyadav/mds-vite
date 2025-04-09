# Grid



### Code Examples

#### Components Grid All

```jsx
import { Card, Grid } from '@innovaccer/design-system';

() => {
  const applyLoaderSchema = true;

  const loading = false;

  const error = false;

  const applySchema = true;

  const applyData = true;

  const totalRecords = data.length;

  const type = 'resource';

  const size = 'comfortable';

  const draggable = true;

  const nestedRows = false;

  const withCheckbox = false;

  const showMenu = true;

  const withPagination = false;

  const page = 1;

  const pageSize = 12;

  const headCellTooltip = false;

  const separator = false;

  return (
    <div className="Grid-outerWrapper">
      <Card className="h-100 overflow-hidden">
        <Grid
          schema={applySchema ? schema : undefined}
          data={applyData ? data : undefined}
          loading={loading}
          error={error}
          errorTemplate={errorTemplate}
          totalRecords={totalRecords}
          withCheckbox={withCheckbox}
          showMenu={showMenu}
          type={type}
          size={size}
          headCellTooltip={headCellTooltip}
          separator={separator}
          draggable={draggable}
          nestedRows={nestedRows}
          nestedRowRenderer={nestedRowRenderer}
          withPagination={withPagination}
          page={page}
          pageSize={pageSize}
          loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
          onRowClick={(rowData, rowIndex) =>
            action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
          }
          onSelect={(rowIndex, selected) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected}`)()}
          onSelectAll={(selected, selectedAll) => {
            action(`on-select:- selected: ${selected} selectedAll: ${selectedAll}`)();
          }}
          sortingList={[{ name: 'name', type: 'desc' }]}
          filterList={{
            name: ['h-r', 's-z'],
          }}
        />
      </Card>
    </div>
  );
}
```


#### Grid In Modal

```jsx
import { Button, Modal, Grid, Text } from '@innovaccer/design-system';

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const onClose = () => {
    setOpen(!open);
  };
  const gridData = [
    {
      fullname: 'Wadsworth Seden',
      gender: 'Male',
    },
    {
      fullname: 'Jakie Hapke',
      gender: 'Male',
    },
    {
      fullname: 'Louella Veneur',
      gender: 'Female',
    },
  ];
  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Patients',
        }}
        footer={
          <React.Fragment>
            <Button>Cancel</Button>
            <Button className="ml-4">Next</Button>
          </React.Fragment>
        }
        seperator={true}
      >
        <Grid
          data-test="modal-in-grid"
          totalRecords={5}
          pageSize={5}
          schema={[
            {
              name: 'fullName',
              displayName: 'Name',
              width: '50%',
              cellRenderer: ({ data }) => {
                return (
                  <div className="w-100">
                    <Text className="d-block">{data.fullname}</Text>
                    <Text className="d-block" size="small" appearance="subtle">
                      {data.fullname}
                    </Text>
                  </div>
                );
              },
            },
            {
              name: 'gender',
              displayName: 'Gender',
              width: '50%',
              cellRenderer: ({ data }) => {
                return (
                  <div className="w-100">
                    <Text className="d-block">{data.gender}</Text>
                    <Text className="d-block" size="small" appearance="subtle">
                      {data.gender}
                    </Text>
                  </div>
                );
              },
            },
          ]}
          data={gridData}
          showHead={true}
          showMenu={false}
          loading={false}
        />
      </Modal>
    </div>
  );
}
```


#### Components Grid Variants Grid Loading State

```jsx
import { Grid } from '@innovaccer/design-system';

() => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '50%'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '50%'
    }
  ];

  return (
    <Grid
      totalRecords={10}
      pageSize={5}
      schema={schema}
      loading={true}
    />
  );
}

```