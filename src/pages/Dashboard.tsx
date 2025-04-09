import React, { useState } from 'react';
import { Table, Spinner, Text } from '@innovaccer/design-system';
import axios from 'axios';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
}

interface TableResponse {
  data: User[];
  totalCount: number;
  page: number;
  pageSize: number;
}

const Dashboard = () => {
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (options: { page?: number; pageSize?: number; searchTerm?: string }) => {
    try {
      setError(null);
      const { page = 1, pageSize = 5, searchTerm } = options;
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
        ...(searchTerm && { search: searchTerm })
      });
      
      const response = await axios.get<TableResponse>(`/api/users?${params}`);
      return {
        data: response.data.data,
        count: response.data.totalCount,
        searchTerm: searchTerm,
        schema: schema
      };
    } catch (err) {
      setError('Failed to fetch users');
      throw err;
    }
  };

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 200,
      cellRenderer: (props: any) => {
        const { data } = props;
        return `${data.firstName} ${data.lastName}`;
      }
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 250
    },
    {
      name: 'role',
      displayName: 'Role',
      width: 100
    },
    {
      name: 'status',
      displayName: 'Status',
      width: 100
    }
  ];

  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <Text appearance="destructive">{error}</Text>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Table
        schema={schema}
        data={[]}
        fetchData={fetchData}
        loading={false}
        withHeader={true}
        headerOptions={{
          withSearch: true
        }}
        withPagination={true}
        pageSize={5}
        onPageChange={(newPage) => console.log(`Page changed to ${newPage}`)}
      />
    </div>
  );
};

export default Dashboard; 