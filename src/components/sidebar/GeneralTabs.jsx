import { Button, Tab, TabList, Tabs } from '@chakra-ui/react'
import React from 'react'
import { generalData } from '../../utils/Data'


const GeneralTabs = () => {

    return (
        <>
            <Tabs orientation='vertical' variant={'unstyled'} >
                <TabList w={'full'}>
                    {generalData.map(element => {
                        return (
                            <Tab as={Button} leftIcon={element.Icon} bgColor={'inherit'} justifyContent={'start'} _hover={{ bgColor: 'inherit' }} _active={{ color: '#426CFF', bgColor: '#EDF0FF' }} _focus={{ color: '#426CFF', bgColor: '#EDF0FF', borderLeftRadius: 'none', borderLeft: '4px solid #426CFF' }} >{element.Button}</Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </>
    )
}

export default GeneralTabs