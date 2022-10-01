import { Button } from '@chakra-ui/react'
import React from 'react'

const NonColoredReactions = ({ Icon, count }) => {
    return (
        <>
            <Button leftIcon={Icon} w={'fit-content'} variant={'ghost'} fontSize={'sm'} color={'gray'}>{count}</Button>
        </>
    )
}

export default NonColoredReactions