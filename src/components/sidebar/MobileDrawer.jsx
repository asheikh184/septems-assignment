import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Img, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/images/logo.png'
import ExploreTabs from './ExploreTabs'
import FavouritesTabs from './FavouritesTabs'
import GeneralTabs from './GeneralTabs'


const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Stack position={'absolute'} top={'1.7rem'} left={'6'} display={{ base: 'inherit', lg: 'none' }}>
            <IconButton ref={btnRef} size={'sm'} icon={<GiHamburgerMenu size={'1.7rem'} />} onClick={onOpen}>
                Open
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <Stack h={'full'}>
                            <Img src={logo} objectFit={'cover'} h={'28'} />
                            <Button leftIcon={<AiOutlineHome />} minH={'10'} color={'white'} bgColor={'#426CFF'} borderRadius={'md'} _hover={{ bgColor: '#3354c9' }}>Home</Button>
                            <Stack className='example' overflow={'auto'}>
                                <GeneralTabs />
                                <FavouritesTabs />
                                <ExploreTabs />
                            </Stack>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Stack>
    )
}

export default MobileDrawer