import { HStack } from '@chakra-ui/react'
import React from 'react'
import NewsFeed from '../components/newsFeed/NewsFeed'
import Sidebar from '../components/sidebar/Sidebar'

const NewsFeedHome = () => {
    return (
        <>
            {/* Home Page Wrapper */}
            <HStack h={'100vh'} bgColor={'#F1F2F6'} align={'start'} overflow={'hidden'}>
                <Sidebar />
                <NewsFeed />
            </HStack>
        </>
    )
}

export default NewsFeedHome