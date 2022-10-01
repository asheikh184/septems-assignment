import { Avatar, Button, HStack, IconButton, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { BsCardImage } from 'react-icons/bs'
import { VscSmiley } from 'react-icons/vsc'
import ContextProvider from '../../../context/MessageContext'


const CommentSection = () => {
    const { setMessage } = useContext(ContextProvider)
    const [value, setValue] = useState()
    const handleMessage = (e) => {
        setValue(e.target.value);
    }
    console.log(value)
    return (
        <HStack >
            <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <InputGroup border={'1px solid #F5F6F8'} borderRadius={'lg'} bgColor={'#F5F6F8'}>
                <Input type='text' onChange={(e) => handleMessage(e)} placeholder='Add your reply' _placeholder={{ fontWeight: 'semibold' }} border={'none !important'} _hover={{}} _focus={{ border: 'none !important' }} _active={{ border: 'none !important' }} _focusVisible={{}} />
                <InputRightAddon children={<BsCardImage color='gray' size={'1.2rem'} />} px="1" bgColor={'inherit'} border={'none !important'} />
                <InputRightAddon children={<Icon icon="foundation:graph-pie" color="gray" fontSize={'1.2rem'} />} px="1" bgColor={'inherit'} border={'none !important'} />
                <InputRightAddon children={<VscSmiley color='gray' size={'1.2rem'} />} pl="1" bgColor={'inherit'} border={'none !important'} />
            </InputGroup>
            <IconButton icon={<AiOutlineSend color='white' size={'1.2rem'} />} borderRadius={'full'} bgColor={'#426cff'} size={'md'} onClick={() => setMessage(prevState => [...prevState, value])} />
        </HStack>
    )
}

export default CommentSection