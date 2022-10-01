import { Button } from '@chakra-ui/react'
import React from 'react'

const ColoredReactions = ({ Icon, Value, bgColor }) => {
    return (
        <Button leftIcon={Icon} m={{ base: '2 !important' }} minW={'20'} bgColor={bgColor} size={'sm'} color={'gray'} _hover={{}} _active={{}} _focus={{}}>{Value}</Button>
    )
}

export default ColoredReactions