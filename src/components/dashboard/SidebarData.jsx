import React from 'react'
import { TbUser } from 'react-icons/tb'
import {BiDownArrow}from 'react-icons/bi'; 
import {BiUpArrow} from 'react-icons/bi';

export const SidebarData = [
    {
        title : 'Manage Users',
        icon : <TbUser />,
        iconClosed: <BiDownArrow />,
        iconOpened: <BiUpArrow />,
        subNav: [
            {
                title : 'Admin',
                path : '/Admin',
            },
            {
                title : 'Courier',
                path : '/Courier',
            },
            {
                title : 'User',
                path : '/User',
            },
        ]
    }
];
