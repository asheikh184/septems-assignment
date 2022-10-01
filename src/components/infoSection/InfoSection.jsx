import { Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { infoSectionData } from '../../utils/Data'

const InfoSection = () => {
    return (
        <>
            <HStack bgColor={'white'} w={{ base: 'full', sm: 'fit-content' }} p={'2'} h={'fit-content'} borderRadius={'sm'} margin={'0 !important'} ml={{ base: '0 !important', lg: '2 !important' }} mb={{ base: '2 !important', lg: '0 !important' }}>
                {infoSectionData.map(button => {
                    return (
                        <Stack as={Button} size={{ base: 'sm', lg: 'md' }} borderRadius={'md'} variant={'ghost'} _active={{ color: '#426CFF', bgColor: '#EDF0FF' }} _focus={{ color: '#426CFF', bgColor: '#EDF0FF' }} p={'6'} spacing={'0'}>
                            <Text fontWeight={'bold'}>{button.TabValue}</Text>
                            <Text fontSize={'sm'}>{button.TabName}</Text>
                        </Stack>
                    )
                })}
            </HStack>
        </>
    )
}

export default InfoSection