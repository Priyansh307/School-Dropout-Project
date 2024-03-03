

import React from 'react';
import { FaBars, FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome, AiOutlineClose } from 'react-icons/ai'
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Report',
        path: '/report',
        icon: <IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle />,
        cName: 'nav-text'
    }


]