import React from 'react';
import { SafeAreaView } from 'react-native';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';
import CommentApp from './CommentApp';
import MessengerApp from './MessengerApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ColorChangerApp/>
      <CounterApp/>
     <MessengerApp/>
    <CommentApp/>
    </SafeAreaView>
  );
}