import { Button, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { favouritesData } from '../../utils/Data'


const FavouritesTabs = () => {
    
    return (
        <Stack spacing={'1'}>
            <Text textTransform={'uppercase'} color={'gray.400'} fontWeight={'semibold'} fontSize={'sm'}>Favourites</Text>
            <Tabs orientation='vertical' variant={'unstyled'} >
                <TabList w={'full'}>
                    {favouritesData.map(elements => {
                        return (
                            <Tab as={Button} leftIcon={elements.Icon} bgColor={'inherit'} justifyContent={'start'} _hover={{ bgColor: 'inherit' }} _active={{ color: '#426CFF', bgColor: '#EDF0FF' }} _focus={{ color: '#426CFF', bgColor: '#EDF0FF', borderLeftRadius: 'none', borderLeft: '4px solid #426CFF' }} >{elements.Button}</Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </Stack>
    )
}

export default FavouritesTabs