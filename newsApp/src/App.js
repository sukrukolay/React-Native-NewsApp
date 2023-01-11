import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet, ScrollView, Text, Image, Dimensions } from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
// import news_banner_data from './news_banner_data.json';
import BannerScroll from './components/BannerScroll';
const App = () => {

  const renderNews = ({ item }) => <NewsCard news={item} />

  return (
    <SafeAreaView style={styles.container}>
    
      
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {
          news_banner_data.map
            (
              bannerNews => <Image style={styles.banner_image}
                source={{ uri: bannerNews.imageUrl }}
                key={bannerNews.id}
              />
            )
        }
      </ScrollView> */}

      <Text style = {styles.headerText}>News</Text>

      <FlatList
        ListHeaderComponent= // FlatList aşağıya kayınca üst taraftaki ScrollView kaybolması için (sabit kalması istenirse üstte yorum satırındaki gibi kullanılır
        { 
          () =>
          (
            <BannerScroll  /> // alttaki ScrollView yapısını custom component haline getirdim.
            // <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            //   {
            //     news_banner_data.map
            //       (
            //         bannerNews => <Image style={styles.banner_image}
            //           source={{ uri: bannerNews.imageUrl }}
            //           key={bannerNews.id}
            //         />
            //       )
            //   }
            // </ScrollView>
          )
        }

        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  // banner_image: {
  //   height: Dimensions.get('window').height / 5,
  //   width: Dimensions.get('window').width / 2,
  // },
  headerText: {
      fontSize: 50,
      fontWeight: 'bold',
  },
})
export default App;