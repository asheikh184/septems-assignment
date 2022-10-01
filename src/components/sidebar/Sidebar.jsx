import { Button, Img, Stack, } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import GeneralTabs from './GeneralTabs'
import FavouritesTabs from './FavouritesTabs'
import ExploreTabs from './ExploreTabs'
import '../../utils/Stylesheet.css'

const Sidebar = () => {
    return (
        <>
            {/* Sidebar navigation */}
            <Stack display={{ base: 'none', lg: 'inherit' }} minW={'fit-content'} w={"20%"} h={'full'} px={'6'} py={'2'} bgColor={'white'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>
                <Img src={logo} objectFit={'cover'} h={'24'} />
                <Button leftIcon={<AiOutlineHome />} minH={'10'} color={'white'} bgColor={'#426CFF'} borderRadius={'md'} _hover={{ bgColor: '#3354c9' }}>Home</Button>
                <Stack className='example' overflow={'auto'}>
                    <GeneralTabs />
                    <FavouritesTabs />
                    <ExploreTabs />
                </Stack>
            </Stack>
        </>
    )
}

export default Sidebar