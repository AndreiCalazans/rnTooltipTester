import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
/* import { */
/*   createBottomTabNavigator, */
/*   createStackNavigator, */
/*   createAppContainer, */
/*   HeaderMode, */
/* } from 'react-navigation'; */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tooltip from 'rn-tooltip';

const BasicExample = () => {
  return (
    <View>
      <Tooltip popover={<Text>Info Three</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    </View>
  );
};

const RowOfTooltips = () => {
  return (
    <View style={styles.row}>
      <BasicExample />
      <BasicExample />
      <BasicExample />
    </View>
  );
};

const MakeScreen = name => () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name}</Text>
  </View>
);

const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={{ width: 80 }}>
        <Tooltip popover={<Text>Something goes here</Text>}>
          <Text>A Tooltip!</Text>
        </Tooltip>
      </View>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator backBehavior="none">
      <Tab.Screen name="FirstScreen" component={MakeScreen('First')} />
      <Tab.Screen name="SecondScreen" component={MakeScreen('Second')} />
    </Tab.Navigator>
  );
}

const InsideScrollExample = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.allOverContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.row, { alignItems: 'stretch', marginTop: 50 }]}>
          <Tooltip
            highlightColor="blue"
            height={250}
            withOverlay
            popover={
              <Text>
                Note that the tooltip wraps the parent View. This is because it takes the
                measurement from the parent. Also it's not smart enought to grow based on the size
                of the text, you have to imperatively add width and height
              </Text>
            }
          >
            <Text>Big Text</Text>
          </Tooltip>
          <View>
            <Tooltip highlightColor="yellow" popover={<Text>Info Two</Text>}>
              <Text>Smaller parent</Text>
            </Tooltip>
          </View>
          <View>
            <Tooltip popover={<Text>Info Three</Text>}>
              <Text>Press me</Text>
            </Tooltip>
          </View>
        </View>
        <View style={{ width: 100, backgroundColor: 'red' }}>
          <Tooltip overlayColor="lightpink" withOverlay popover={<Text>Info Three</Text>}>
            <Text>With overlay</Text>
          </Tooltip>
        </View>
        <RowOfTooltips />
        <RowOfTooltips />
        <RowOfTooltips />
        <RowOfTooltips />
        <RowOfTooltips />
        <RowOfTooltips />
        <RowOfTooltips />
      </ScrollView>
      <View style={styles.goBack}>
        <Button title="Go Back" onPress={() => navigation.goBack(null)} />
      </View>
    </SafeAreaView>
  );
};

const AllOver = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.allOverContainer}>
      <View style={{ height: 100, justifyContent: 'center', width: 100 }}>
        <Tooltip
          width="80%"
          highlightColor="yellow"
          popover={<Text>Width as percent was broken before</Text>}
        >
          <Text>Width as percent</Text>
        </Tooltip>
      </View>
      <View style={[styles.row, { alignItems: 'stretch' }]}>
        <Tooltip
          highlightColor="blue"
          height={250}
          withOverlay
          popover={
            <Text>
              Note that the tooltip wraps the parent View. This is because it takes the measurement
              from the parent. Also it's not smart enought to grow based on the size of the text,
              you have to imperatively add width and height
            </Text>
          }
        >
          <Text>Big Text</Text>
        </Tooltip>
        <View>
          <Tooltip highlightColor="yellow" popover={<Text>Info Two</Text>}>
            <Text>Smaller parent</Text>
          </Tooltip>
        </View>
        <BasicExample />
      </View>
      <View style={styles.row}>
        <View>
          <Tooltip
            toggleWrapperProps={{
              hitSlop: {
                top: 40,
                left: 20,
                bottom: 40,
                right: 20,
              },
            }}
            overlayColor="lightpink"
            withOverlay
            popover={<Text>Info Three</Text>}
          >
            <Text>Improve hit slop example</Text>
          </Tooltip>
        </View>

        <View>
          <Tooltip
            height={200}
            width={300}
            popover={
              <ScrollView style={{ width: 300, height: 200 }}>
                <View onStartShouldSetResponder={() => true}>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia
                    tenetur tempora quibusdam cupiditate non architecto deserunt amet, ipsam fuga
                    quae maxime suscipit dignissimos, dicta minus sit commodi eius quod.
                  </Text>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia
                    tenetur tempora quibusdam cupiditate non architecto deserunt amet, ipsam fuga
                    quae maxime suscipit dignissimos, dicta minus sit commodi eius quod.
                  </Text>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia
                    tenetur tempora quibusdam cupiditate non architecto deserunt amet, ipsam fuga
                    quae maxime suscipit dignissimos, dicta minus sit commodi eius quod.
                  </Text>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia
                    tenetur tempora quibusdam cupiditate non architecto deserunt amet, ipsam fuga
                    quae maxime suscipit dignissimos, dicta minus sit commodi eius quod.
                  </Text>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia
                    tenetur tempora quibusdam cupiditate non architecto deserunt amet, ipsam fuga
                    quae maxime suscipit dignissimos, dicta minus sit commodi eius quod.
                  </Text>
                </View>
              </ScrollView>
            }
          >
            <Text>Large text with scroll</Text>
          </Tooltip>
        </View>
      </View>
      <RowOfTooltips />
      <Button title="Go Back" onPress={() => navigation.goBack(null)} />
    </SafeAreaView>
  );
};

const Showcase = ({ title, description, onPress }) => {
  return (
    <View style={styles.showcaseBox}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <React.Fragment>
          <Text style={styles.showcaseTitle}>{title}</Text>
          <Text style={styles.showcaseDescription}>{description}</Text>
        </React.Fragment>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Tooltip Showcase App</Text>
      <Showcase
        onPress={() => navigation.navigate('InScroll')}
        title="Inside ScrollView"
        description="Example displaying how the tooltip behaves inside a scrollview."
      />
      <Showcase
        onPress={() => navigation.navigate('Tabs')}
        title="With Tabs"
        description="rn-tooltip usage inside tab screens, in the bottom tab and header."
      />
      <Showcase
        onPress={() => navigation.navigate('AllOver')}
        title="All Directions"
        description="In this example we render multiple tooltips in different places to display how it behaves"
      />
    </ScrollView>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InScroll" component={InsideScrollExample} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="AllOver" component={AllOver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 90,
    backgroundColor: 'yellow',
  },
  allOverContainer: {
    margin: 20,
    flexGrow: 1,
  },
  row: {
    alignItems: 'center',
    height: 150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showcaseBox: {
    alignItems: 'center',
    margin: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  showcaseTitle: {
    fontSize: 18,
  },
  showcaseDescription: {
    fontSize: 14,
    color: '#333',
  },
  title: {
    fontSize: 28,
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
