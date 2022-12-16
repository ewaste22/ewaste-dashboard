import React from 'react'
import { TbUser } from 'react-icons/tb'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title : 'Manage Users',
        icon : <TbUser />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title : 'Admin',
                path : '/users/admin',
            },
            {
                title : 'Courier',
                path : '/users/courier',
            },
            {
                title : 'User',
                path : '/users/user',
            },
        ]
    }
];
