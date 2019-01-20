import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.artistNameTitleStyle}>
          <Text style={styles.artistNameTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  artistNameTitleStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  artistNameTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: 300
  }
};

export default AlbumDetails;
