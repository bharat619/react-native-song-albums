// Import the library
import React from 'react';
import { Text, View } from 'react-native';
import propTypes from 'prop-types';
// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};

// Make the component available to other parts of the application
export default Header;
Header.propTypes = {
  headerText: propTypes.string
};
