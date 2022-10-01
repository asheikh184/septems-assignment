import { FiFlag, FiEdit, FiHeart } from 'react-icons/fi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsCalendar } from 'react-icons/bs'
import { RiExchangeDollarLine, RiMovieLine } from 'react-icons/ri'
import { Icon } from '@iconify/react';
import { AiOutlineHeart } from 'react-icons/ai'
import { CgFeed, CgProfile } from 'react-icons/cg'
import { FiMessageSquare, FiSettings } from 'react-icons/fi'
import { ImManWoman } from 'react-icons/im'

export const exploreData = [
    {
        "Button": "Pages",
        "Icon": <FiFlag color='#426CFF' />
    },
    {
        "Button": "Clubs",
        "Icon": <HiOutlineUserGroup color='#426CFF' />
    }, {
        "Button": "Parties",
        "Icon": <Icon icon="bx:party" color="#426cff" />
    }, {
        "Button": "Events",
        "Icon": <BsCalendar color='#426CFF' />
    },
    {
        "Button": "Television",
        "Icon": <RiMovieLine color='#426CFF' />
    }, {
        "Button": "Funding",
        "Icon": <RiExchangeDollarLine color='#426CFF' />
    }, {
        "Button": "Market",
        "Icon": <Icon icon="bi:shop" color="#426cff" />
    }, {
        "Button": "Blogs",
        "Icon": <Icon icon="fluent:form-24-regular" color="#426cff" />
    }, {
        "Button": "Forums",
        "Icon": <Icon icon="mdi-light:forum" color="#426cff" />
    }, {
        "Button": "Jobs",
        "Icon": <Icon icon="emojione-monotone:clutch-bag" color="#426cff" />
    },
]

export const favouritesData = [
    {
        "Button": "Favourites",
        "Icon": <AiOutlineHeart color='#426CFF' />
    },
    {
        "Button": "News Feed",
        "Icon": <CgFeed color='#426CFF' />
    }, {
        "Button": "My Articles",
        "Icon": <FiEdit color='#426CFF' />
    },
]

export const generalData = [
    {
        "Button": "Profile",
        "Icon": <CgProfile color='#426CFF' />
    },
    {
        "Button": "Message",
        "Icon": <FiMessageSquare color='#426CFF' />
    }, {
        "Button": "Settings",
        "Icon": <FiSettings color='#426CFF' />
    }, {
        "Button": "Friends",
        "Icon": <ImManWoman color='#426CFF' />
    },
]


export const infoSectionData = [
    {
        "TabValue": "20",
        "TabName": "Friends"
    },
    {
        "TabValue": "32",
        "TabName": "Followers"
    }, {
        "TabValue": "1.9k",
        "TabName": "Following"
    },
]

