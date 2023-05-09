/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import colors from './theme/colors.json';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({title, children}: SectionProps): JSX.Element {
  return (
    <View className="mt-8 px-2 bg-yellow">
      <Text
        style={{backgroundColor: colors.tahiti[500]}}
        className="text-2xl text-black dark:text-white">
        {title}
      </Text>
      <Text>{children}</Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Section title="Tailwind CSS">
          <Text className="text-2xl">
            Welcome to testing out Tailwind CSS styling
          </Text>
        </Section>
        <View className="bg-white dark:bg-black">
          <Section title="Headers">
            <View className="flex-row">
              <Text className="text-lg">L text</Text>
              <Text className="text-xl">XL text</Text>
              <Text className="text-2xl">2XL text</Text>
            </View>
          </Section>
          <Section title="Buttons">
            <TouchableOpacity
              className="rounded-full p-2 py-8"
              style={{backgroundColor: colors.tahiti[100]}}>
              <Button title="rounded" />
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-lg p-2"
              style={{backgroundColor: colors.tahiti[100]}}>
              <Button title="semi rounded" />
            </TouchableOpacity>

            <TouchableOpacity
              className="p-4"
              style={{backgroundColor: colors.tahiti[100]}}>
              <Button title="rectangular" />
            </TouchableOpacity>

            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Section>
          <Section title="Paragraphs">
            <Text className="text-xs">XS text</Text>
            <Text className="text-sm	">S text</Text>
            <Text className="text-base">M text</Text>
          </Section>
          <Section title="Flex">
            <View className="flex-row space-x-2.5">
              <View
                className="p-1"
                style={{backgroundColor: colors.tahiti[100]}}>
                <Button title="1" />
              </View>
              <View
                className="p-1"
                style={{backgroundColor: colors.tahiti[100]}}>
                <Button title="2" />
              </View>
              <View
                className="p-1"
                style={{backgroundColor: colors.tahiti[100]}}>
                <Button title="3" />
              </View>
            </View>
            <View className="flex-row-reverse space-x-2.5">
              <View
                className="p-1"
                style={{backgroundColor: colors.tahiti[100]}}>
                <Button title="1" />
              </View>
              <View
                className="p-1"
                style={{backgroundColor: colors.tahiti[100]}}>
                <Button title="2" />
              </View>
              <View
                className="p-1"
                style={{backgroundColor: colors.tahiti[100]}}>
                <Button title="3" />
              </View>
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
