import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

const FeedHeader = () => {
    return (
        <>
            <HStack bgColor={'white'} w={'full'} border={'1px solid #E6E9F0'} borderRadius={'sm'}>
                <Button size={'lg'} w={'32'} fontSize={'sm'} textTransform={'uppercase'} leftIcon={<AiOutlineLeft />} variant={'ghost'} borderRight={'1px solid #E6E9F0'} borderRadius={'none'} _hover={{}} _focus={{}} _active={{}} >News Feed</Button>
                <Text fontWeight={'semibold'} fontSize={'sm'}>Post</Text>
            </HStack>
        </>
    )
}

export default FeedHeader