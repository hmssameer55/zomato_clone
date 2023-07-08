import React from 'react'
import { FlatList, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/Header'
import Offers from '../components/Offers'
import FeaturedRows from '../components/FeaturedSections'
import sanityClient from '../sanity'

export default function HomeScreen ({ navigation }) {
  const [featured, setFeatured] = React.useState([])
  // console.log('featured: ', featured)

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Featured"]{
      ...,
      Restaurants[]->{
        ...,
        dishes[]->,
      }
    }`
      )
      .then(data => setFeatured(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <ScrollView>
        {/* categories section */}
        <Offers />
        {/* featured section */}
        {featured.reverse().map(item => (
          <FeaturedRows
            key={item._id}
            id={item._id}
            title={item.name}
            subTitle={item.shortDescription}
            restaurants={item.Restaurants}
          />
        ))}
      </ScrollView>
    </>
  )
}
