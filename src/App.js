import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import NewsFeedHome from './screens/NewsFeedHome';
import { MessageContext } from './context/MessageContext'


function App() {
  return (
    // Theme Wrapper
    <ChakraProvider theme={theme}>
      {/* Context API wrapper*/}
      <MessageContext>
        <NewsFeedHome />
      </MessageContext>
    </ChakraProvider>
  );
}

export default App;
