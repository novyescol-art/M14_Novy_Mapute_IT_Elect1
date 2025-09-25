import React from 'react';
import { SafeAreaView } from 'react-native';
import CommentApp from './CommentApp';
import MessengerApp from './MessengerApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <MessengerApp/>
    <CommentApp/>
    </SafeAreaView>
  );
}