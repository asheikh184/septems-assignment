import { Avatar, HStack, Stack, Text, chakra, Icon, Divider, Img } from '@chakra-ui/react'
import React from 'react'
import { BsFillPeopleFill, BsThreeDots } from 'react-icons/bs'
import { FiHeart, FiMessageSquare, FiShare } from 'react-icons/fi'
import { BiRepost } from 'react-icons/bi'
import ColoredReactions from './ColoredReactions'
import CommentSection from './CommentSection'
import CommentList from './CommentList'

const ImagePost = ({ userImage, userName, postTime, caption, image }) => {
    return (
        <Stack w={'full'} bgColor={'white'} py={'4'} px={'4'} borderRadius={'sm'} border={'1px solid #E6E9F0'}>
            <HStack w={'full'} align={'start'}>
                <Stack w={'32'} align={'center'}>
                    <Avatar size={{ base: 'md', lg: 'xl' }} name='Dan Abrahmov' src={userImage} />
                </Stack>
                <Stack w={'full'} borderLeft={'1px solid #E6E9F0'} pl={"2"} h={"100%"}>
                    <HStack fontSize={'sm'} justify={'space-between'}>
                        <Stack spacing={{ base: '-1', md: '2' }} direction={{ base: 'column', md: 'row' }}>
                            <Text fontWeight={'bold'} fontSize={{ base: 'xs', md: 'md' }}>{userName}</Text>
                            <HStack>
                                <Text color={'gray.400'} fontSize={{ base: 'xs', md: 'md' }}>added an image <chakra.span color={'#80808087'}>{postTime}</chakra.span > </Text>
                                <BsFillPeopleFill color='gray' size={'0.8rem'} />
                            </HStack>
                        </Stack>
                        <BsThreeDots color='gray' />
                    </HStack>
                    <Text noOfLines={2} w={'90%'}>{caption}</Text>
                    <Text color={'#426cff'} fontWeight={'semibold'} mt={'-1 !important'}>more</Text>
                    <Img src={image} h={'72'} objectFit={'cover'} borderRadius={'xl'} />
                    <HStack flexWrap={'wrap'}>
                        <ColoredReactions Icon={<FiHeart color='#F62380' />} bgColor={'#FDE9F2'} Value={'8,893'} />
                        <ColoredReactions Icon={<FiMessageSquare color='#426CFF' />} bgColor={'#EBF1FF'} Value={'100k'} />
                        <ColoredReactions Icon={<BiRepost color='#2FC089' size={'1.4rem'} />} bgColor={'#EAF9F4'} Value={'867'} />
                        <ColoredReactions Icon={<FiShare color='#426CFF' />} bgColor={'#EBF1FF'} Value={'487'} />
                    </HStack>
                </Stack>
            </HStack>
            <CommentList />
            <CommentSection />
        </Stack>
    )
}

export default ImagePost