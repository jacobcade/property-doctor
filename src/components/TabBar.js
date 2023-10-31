import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

import { StyleSheet } from 'react-native';

function TabBar ({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { icon } = route.params;
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, height:80, alignItems: 'center', backgroundColor: '#008CC7', justifyContent: 'center'}} //borderTopRightRadius: 30, borderTopLeftRadius: 30
            >
              <Icon name={icon} style={styles.icon}  fill={isFocused ? '#025E85' : '#FFFFFF'} />
              
              
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  export default TabBar;

  const styles = StyleSheet.create({
    icon: {
      width: 36,
      height: 36,
      
    },
  });