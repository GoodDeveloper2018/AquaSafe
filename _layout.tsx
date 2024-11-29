import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './index';  // Make sure to import from the correct file
import PurifyingWater from './PurifyingWater'; 
import WaterAnalyzer from './WaterAnalyzer';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Home');  // Track the selected tab

  // Render the appropriate screen based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 'Home':
        return <HomeScreen />;
      case 'How To Purify Water':
        return <PurifyingWater />;
      case 'Testing Water':
        return <WaterAnalyzer />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Main Content Area */}
      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Home')}
          style={[styles.navItem, selectedTab === 'Home' && styles.activeTab]}>
          <Text style={[styles.navText, selectedTab === 'Home' && styles.activeText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('How To Purify Water')}
          style={[styles.navItem, selectedTab === 'How To Purify Water' && styles.activeTab]}>
          <Text style={[styles.navText, selectedTab === 'How To Purify Water' && styles.activeText]}>How To Purify Water</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Testing Water')}
          style={[styles.navItem, selectedTab === 'Testing Water' && styles.activeTab]}>
          <Text style={[styles.navText, selectedTab === 'Testing Water' && styles.activeText]}>Testing Water</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
  },
  activeText: {
    color: 'blue',
  },
});

export default App;
