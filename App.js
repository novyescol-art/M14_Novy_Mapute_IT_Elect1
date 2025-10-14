import React from "react";
import { KeyboardAvoidingView, Platform,Image,ScrollView } from "react-native";
import ChatBubble from "./BubbleChat";
import CommentSect from "./CommentSect";

export default function App() {
  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
    
      <ChatBubble/>
      <CommentSect/>
    </KeyboardAvoidingView>
  
  );
}