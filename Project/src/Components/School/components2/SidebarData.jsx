import React from 'react';
import { FaBars, FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome, AiOutlineClose } from 'react-icons/ai'
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Home',
        path: '/student-details/home',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Report',
        path: '/student-details/report',
        icon: <IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Mark Section',
        path: '/student-details/testMark',
        icon: <FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/student-details/team',
        icon: <IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/student-details/messages',
        icon: <FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/student-details/support',
        icon: <IoMdHelpCircle />,
        cName: 'nav-text'
    }


]