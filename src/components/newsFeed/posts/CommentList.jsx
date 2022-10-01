import { Avatar, Button, Divider, HStack, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ContextProvider from '../../../context/MessageContext'

const CommentList = () => {
    const { message } = useContext(ContextProvider)
    return (
        <>
            {/* hide /show message container */}
            {message.length !== 0 ? (

                <Stack w={'full'} borderTop={"1px solid #E6E9F0"} bgColor={'white'} h={'auto'} pl={'14'} py={'6'} >
                    {/* map all comments */}
                    {message.map(mess => {
                        return (
                            <>

                                <HStack w={'60%'} align={'start'} bgColor={'#F5F6F8'} borderRadius={'lg'} p={"4"}>
                                    <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Text>{mess}</Text>
                                </HStack>
                                <HStack pl={'4'} h={'fit-content'}>
                                    <Button variant={'unstyled'} size={'sm'}>Like</Button>
                                    <Divider orientation='vertical' />
                                    <Button variant={'unstyled'} size={'sm'}>Reply</Button>
                                    <Divider orientation='vertical' />
                                    <Text>a minute ago</Text>
                                </HStack>
                            </>
                        )
                    })}

                </Stack >
            ) :
                ''

            }
        </>

    )
}

export default CommentList