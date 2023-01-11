import React from 'react';
import {StyleSheet, ScrollView, Image, Dimensions, Text} from 'react-native';
import news_banner_data from '../../news_banner_data.json';
const BannerScroll = (props)  =>{
    
    return(
    
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              {
                news_banner_data.map
                  (
                    bannerNews => <Image style={styles.banner_image}
                      source={{ uri: bannerNews.imageUrl }}
                      key={bannerNews.id}
                    />
                  )
              }
            </ScrollView>

    )
}


const styles = StyleSheet.create({
    banner_image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
      },
  })

export default BannerScroll;