import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import FloatingButton from '~/components/FloatingButton';
import styles from './Messages.style';
import ContentInputModal from '~/components/Modal/ContentInputModal';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '~/utils/parseContentData';
import MessageCard from '~/components/Card/MessageCard';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    console.log(contentObject);
    database().ref('messages/').push(contentObject);
  };
  const handleBegen = item => {
    database()
      .ref(`messages/${item.id}/`)
      .update({ dislike: item.dislike + 1 });
  };

  const renderContent = ({ item }) => (
    <MessageCard message={item} onBegen={() => handleBegen(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
