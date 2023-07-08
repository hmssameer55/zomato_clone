import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import FeaturedRestaurantCard from './FeaturedCard'
import sanityClient from '../sanity'

export default function FeaturedSections ({ id, title, subTitle }) {
  const [featured, setFeatured] = React.useState([])

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Featured" && _id == "${id}"]{
        ...,
        Restaurants[]->{
          ...,
          dishes[]->{
            ...,
          },
          type->{
            ...,
          }
        }
      } [0]
      `,
        { id }
      )
      .then(data => setFeatured(data))
      .catch(console.error)
  }, [])

  return (
    <View className='px-4 mt-3 pb-2'>
      <View className='flex-row items-center justify-between'>
        <View>
          <Text className='text-xl font-bold'>{title}</Text>
          <Text className='text-sm text-gray-400'>{subTitle}</Text>
        </View>
        <View>
          <Ionicons name='arrow-forward' size={30} color='#00ccbb' />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mt-2'
      >
        {featured.Restaurants?.map(item => (
          <FeaturedRestaurantCard
            key={item._id}
            id={item._id}
            name={item.name}
            shortDescription={item.shortDescription}
            image={item.image}
            type={item.type}
            rating={item.rating}
            distance={item.distance}
            address={item.address}
            dishes={item.dishes}
            lat={item.lat}
            lng={item.lng}
          />
        ))}
      </ScrollView>
    </View>
  )
}
