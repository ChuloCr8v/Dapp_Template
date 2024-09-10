import React, { ReactNode } from 'react';
import { Button, Dropdown, MenuProps, Table, Tag } from 'antd';
// import Survey from '../../views/projects/Survey';
import { SurveyData } from './SurveyData';
import DataTable from '../Global/DataTable';
import { CheckCircleOutlined, CloseCircleOutlined, CloudUploadOutlined, DeleteOutlined, ExclamationCircleOutlined, EyeOutlined, UserAddOutlined, UserSwitchOutlined } from '@ant-design/icons';

export interface DataType {
  key: string;
  customerName: string;
  serviceAddress: string;
  serviceType: string;
  requestType: string;
  manager: string;
  bandwidth: string;
  region: string;
  state: string;
  longitude: string;
  latitude: string;
  sla: string;
  due: string;
  status: string;
  
}

const Itemlabel = (props: { label: string; icon: ReactNode, onlick: () => void }) => {
  return (
    <div onClick={onclick} className="flex items-center space-x-2">
      <div className="text-md">{props.icon}</div>
      <span className="text-[12px] ">{props.label}</span>
    </div>
  );
};

const items: MenuProps['items'] = [
        {
          key: 1,
          label: <Itemlabel label={'Accept Report'} icon={<CheckCircleOutlined/>} />,
          // onClick: () => showModal('Edit Details', '/path/to/edit-icon.svg'),
        },
        {
          key: 2,
          label: (
            <Itemlabel label={'Reject Report'} icon={<CloseCircleOutlined />} />
          ),
          // onClick: (e) => {
          //   showModal('Assign Device', '/assign.svg'), e.stopPropagaton();
          // },
        },

        // {
        //   key: 3,
        //   label: (
        //     <Itemlabel
        //       label={'Upload Receipt'}
        //       icon={<CloudUploadOutlined/>}
        //     />
        //   ),
        //   // onClick: () => showModal('Report Fault', '/reportFault.svg'),
        // },
        // {
        //   key: 4,
        //   label: <Itemlabel label={'Assign Survey'} icon={<DeleteOutlined />} />,
        //   // onClick: () => showModal('Delete', '/delete.svg'),
        // },
    
        //   {
        //   key: 5,
        //   label: (
        //     <Itemlabel
        //       label={'Reassign'}
        //       icon={<UserSwitchOutlined/>}
        //     />
        //   ),
        //   // onClick: () => showModal('Report Fault', '/reportFault.svg'),
        // },
        // {
        //   key: 6,
        //   label: (
        //     <Itemlabel
        //       label={'Reject Survey'}
        //       icon={<CloseCircleOutlined />}
        //     />
        //   ),
        //   // onClick: () => showModal('Report Fault', '/reportFault.svg'),
        // },
        // {
        //   key: 5,
        //   label: (
        //     <Itemlabel
        //       label={'Delete'}
        //       icon={<DeleteOutlined/>}
        //     />
        //   ),
        //   // onClick: () => showModal('Report Fault', '/reportFault.svg'),
        // },
      ];


export const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    width: 50,

  },
  {
    title: 'Name',
    dataIndex: ['customerName', 'bandwidth'],
    key: 'customerName',
    width: 300,
    render: (_, text: []) => <div>
      <p className='text-[13px]'>{text.customerName}</p>
      <p className='text-[11px] text-[#595959]'>{text.bandwidth}</p>
    </div>
  },
  {
    title: 'Date',
    dataIndex: 'serviceType',
    key: 'serviceType',
    width: 250,
  },
    {
    title: 'Status',
    dataIndex: ['status', 'manager'],
    key: 'serviceAddress',
    width: 250,
    render: (_, text:any) => <div>
    <Tag className='rounded-2xl text-[11px] font-semibold bg-[#FDF7DD] text-[#B9A325] border-[#B9A325]'>1 of 8 Pending</Tag>
    </div>
  },
  {
    title: 'Last Aaction',
    dataIndex: ['sla', 'due'],
    key: 'requestType',
    width: 200,
    render: (_, text: []) => <div>
    <p>Uploaded a minute ago</p>
  </div>
  },
  // {
  //   title: 'Manager',
  //   dataIndex: 'manager',
  //   key: 'manager',
  // },
  // {
  //   title: 'Bandwidth',
  //   dataIndex: 'bandwidth',
  //   key: 'bandwidth',
  // },
  // {
  //     title: 'Region',
  //     dataIndex: 'region',
  //     key: 'region',
  // },
  // {
  //   title: 'State',
  //   dataIndex: 'state',
  //   key: 'state',
  // },
  // {
  //   title: 'Status',
  //   dataIndex: 'longitude',
  //   key: 'longitude',
  // },
  {
    title: 'Action',
    dataIndex: 'latitude',
    key: 'latitude', 
    width: 150,
    render: () =>  <Dropdown trigger={['click']} menu={{ items }}>
    <Button onClick={(e) => e.stopPropagation()}>Action</Button>
  </Dropdown>
  },
];

const ReportsTable: React.FC = () => {
  return <DataTable data={SurveyData} columns={columns} />;
};

export default ReportsTable;
