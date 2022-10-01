import { Button, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { exploreData } from '../../utils/Data'

const ExploreTabs = () => {
    
    return (
        <Stack >
            <Text textTransform={'uppercase'} color={'gray.400'} fontWeight={'semibold'} fontSize={'sm'}>Explore</Text>
            <Tabs orientation='vertical' variant={'unstyled'}>
                <TabList w={'full'}>
                    {exploreData.map(element => {
                        return (
                            <Tab as={Button} leftIcon={element.Icon} bgColor={'inherit'} justifyContent={'start'} _hover={{ bgColor: 'inherit' }} _active={{ color: '#426CFF', bgColor: '#EDF0FF' }} _focus={{ color: '#426CFF', bgColor: '#EDF0FF', borderLeftRadius: 'none', borderLeft: '4px solid #426CFF' }} >{element.Button}</Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </Stack>
    )
}

export default ExploreTabs