import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Input } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { deleteCate, getCategories } from "../../../api/categories";


const CategoryAdminPage = () => {
    interface DataType {
        id: number;
        name: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Tên danh mục',
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
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <IconAdmin>
                    <div><DeleteOutlined onClick={() => onRemove(record.id)} /></div>
                    <div className=""><Link to={`/admin/categories/edit/${record.id}`}><EditOutlined /></Link></div>
                </IconAdmin>
            ),
        },
    ];
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories()
                setDataTable(data.data)
            } catch (err) {
               
            }
        }

        fetchData()
    }, [])
    const onRemove = async (id: any) => {
        if (window.confirm("ban muon chua chu")) {
            await deleteCate(id)
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
                <Link to="/admin/categories/add">
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

export default CategoryAdminPage