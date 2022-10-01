import { Stack } from '@chakra-ui/react'
import React from 'react'
import FeedHeader from './FeedHeader'
import ImagePost from './posts/ImagePost'
import Image from '../../assets/images/Imagepost.jpg'
import '../../utils/Stylesheet.css'
import StatusPost from './posts/StatusPost'


const FeedContent = () => {
    return (
        <Stack w={'full'} h={'full'}>
            <FeedHeader />
            <Stack className='example' overflow={'auto'} pb={'12'}>
                {/* <ImagePost userImage={'https://bit.ly/kent-c-dodds'} userName={'Sarah Hogan'} postTime={'2h'} image={Image} caption={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} /> */}
                <ImagePost userImage={'https://bit.ly/kent-c-dodds'} userName={'Sarah Hogan'} postTime={'2h'} image={Image} caption={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
                <StatusPost />
            </Stack>
        </Stack>
    )
}

export default FeedContent