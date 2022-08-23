import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Input } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { deleteUser, getUser, getUsers } from "../../api/user";


const SignupAdmin = () => {
    interface DataType {
        id: number;
        name: string;
        email: string;
        password: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            filterDropdown: ({setSelectedKeys, selectedKeys,confirm}) => {
                return (<Input autoFocus placeholder="text" 
                value={selectedKeys[0]}
                onChange={(e)=>{
                    setSelectedKeys(e.target.value?[e.target.value]:[])
                }}
                onPressEnter={() => {
                confirm()
                }}
                    onBlur={() => {
                        confirm()
                     }}></Input>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value,record)=>{
                return record.name.toLowerCase().includes(value.toString());
            },
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <IconAdmin>
                    <div><DeleteOutlined onClick={() => onRemove(record.id)} /></div>
                    <div className=""><Link to={`/admin/user/edit/${record.id}`}><EditOutlined /></Link></div>
                </IconAdmin>
            ),
        },
    ];
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers()
                setDataTable(data.data)
            } catch (err) {

            }
        }

        fetchData()
    }, [])
    const onRemove = async (id: any) => {
        if (window.confirm("ban muon chua chu")) {
            await deleteUser(id)
            console.log(id);
            setDataTable(dataTable.filter((item: any) => item.id !== id))

        }
    }
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/user/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const IconAdmin = styled.div`
    display: flex;
    justify-content:space-between;
`

export default SignupAdmin