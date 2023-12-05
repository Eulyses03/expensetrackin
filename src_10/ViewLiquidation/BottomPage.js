import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigation, BottomNavigationItem} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

const BottomPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const items = [
    {
      icon: 'wallpaper',
      label: 'Wallpapers',
    },
    {
      icon: 'search',
      label: 'Search',
    },
    {
      icon: 'settings',
      label: 'Settings',
    },
  ];

  const handleTabPress = index => {
    setTabIndex(index);
  };

  return (
    <BottomNavigation
      type="fixed"
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 64,
        backgroundColor: '#1E90FF',
      }}>
      {items.map((item, index) => (
        <BottomNavigationItem
          key={index}
          icon={item.icon}
          label={item.label}
          selected={tabIndex === index}
          onPress={() => handleTabPress(index)}
        />
      ))}
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    paddingBottom: 20,
  },
});

export default BottomPage;
