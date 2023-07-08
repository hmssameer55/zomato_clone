import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'

export default function Offers () {
  const [offers, setOffers] = React.useState([])

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Category"]{
                ...,
            }
            `
      )
      .then(data => setOffers(data))
      .catch(console.error)
  }, [])

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className='flex-row items-center space-x-2 mt-2 px-3'>
        {offers.map(item => (
          <View className='bg-gray-200 p-2 rounded-lg' key={item._id}>
            <Image
              className='rounded-lg'
              source={{ uri: urlFor(item.image).url() }}
              style={{ width: 100, height: 100 }}
            />
            <Text className='text-center text-sm font-bold'>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
