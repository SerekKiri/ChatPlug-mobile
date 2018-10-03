import * as React from 'react'
import styled from 'styled-components/native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'

import reducer from './reducer'
import ThreadListContainer from '../../containers/ThreadListContainer'
import Thread from '../../types/Thread';

export default class ThreadConnectionsScreen extends React.Component<any>{
  static navigationOptions = ({ navigation }) => ({
    title: 'Threads',
     headerTitleStyle : {
       textAlign: 'center',
      },
        headerStyle:{
            backgroundColor:'white',
        },
    });
  render() {
    return (
      <View>
        <ThreadListContainer openThread={(thread: Thread) => this.props.navigation.navigate('ChatScreen', { threadName: thread.connectionName, threadId: thread.id })}/>
      </View>
    )
  }
}

const View = styled.View`
      background-color: #fff;
      padding: 3px;
      justify-content: flex-start;
      flex: 1;
`

const Button = styled.Text`
    margin-top: 6px;
    display: flex;
    width: 80px;
    height: 40px;
    border-radius: 4px;
    padding: 9px;
    text-align: center;
    background-color: #0386F4;
    color: #fff;
`;