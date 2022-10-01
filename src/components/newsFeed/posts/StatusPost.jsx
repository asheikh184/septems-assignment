import { Avatar, HStack, Stack, Text, chakra, Divider } from '@chakra-ui/react'
import React from 'react'
import { BiRepost } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FiGlobe, FiHeart, FiMessageSquare, FiShare } from 'react-icons/fi'
import CommentList from './CommentList'
import CommentSection from './CommentSection'
import NonColoredReactions from './NonColoredReactions'

const StatusPost = () => {
    return (
        <Stack bgColor={'white'} p={'4'}>
            <HStack align={'start'} justify={"space-between"}>
                <HStack>
                    <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Stack spacing={'-1'}>
                        <HStack>
                            <Text fontWeight={'bold'}>User name</Text>
                            <Text color={'gray.400'}>replying to <chakra.span color={'#80808087'}>2h</chakra.span > </Text>
                            <FiGlobe color='gray' />
                        </HStack>
                        <Text color={'#426cff'} fontWeight={'semibold'}>@userName</Text>
                    </Stack>
                </HStack>
                <BsThreeDots color='gray' />
            </HStack>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus necessitatibus ex qui
                voluptates expedita hic, tenetur perspiciatis dolor est nam! Dolores blanditiis odio delectus
                provident inventore dicta incidunt perferendis nam?
            </Text>
            <Divider />
            <HStack>
                <NonColoredReactions Icon={<FiHeart />} count={"8,893"} />
                <NonColoredReactions Icon={<FiMessageSquare />} count={"456"} />
                <NonColoredReactions Icon={<BiRepost size={'1.4rem'} />} count={"867"} />
                <NonColoredReactions Icon={<FiShare />} count={"483"} />
            </HStack>
            <CommentList />
            <CommentSection />
        </Stack>
    )
}

export default StatusPost