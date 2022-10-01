import { Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import InfoSection from '../infoSection/InfoSection'
import MobileDrawer from '../sidebar/MobileDrawer'
import FeedContent from './FeedContent'


const NewsFeed = () => {
    return (
        <>
            <Stack w={'full'} align={'center'} margin={'0 !Important'} px={'2'} h={'full'} py={'4'} position={'relative'}>
                <MobileDrawer />
                <Heading textTransform={'uppercase'} h={'full'} fontFamily={'Russo One'}>news feed</Heading>
                <Stack spacing={'10'} align={{ base: 'center', lg: 'start' }} w={'full'} h={{ base: '70%', lg: 'full' }} className={"test"} display={'flex'} flexDirection={{ base: 'column-reverse', lg: 'row' }}>
                    <FeedContent />
                    <InfoSection />
                </Stack>
            </Stack>
        </>
    )
}

export default NewsFeed