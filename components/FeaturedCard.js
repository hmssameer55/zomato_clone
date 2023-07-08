import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setSelectedRestaurant } from '../store/redux/reducers/basketSlice'

export default function FeaturedCard (props) {
  const { name, image, type, rating, distance, address, dishes, id, lat, lng } =
    props

  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant', { data: props })
        dispatch(setSelectedRestaurant(props))
      }}
      className='bg-gray-200 p-1.5 rounded-lg mr-2'
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        className='w-36 h-36 rounded-lg mx-auto'
      />

      <View className='w-20 text-center'>
        <Text className='text-xsm font-bold ml-1 mt-1 mx-auto  text-center w-36 h-9'>
          {name.toUpperCase()}
        </Text>
        <View className='flex-row items-center justify-items-start ml-1 mt-1 space-x-1'>
          <Ionicons name='star' size={16} color='gold' />
          <Text className='text-xs text-gray-400'>{rating}</Text>
          <Text className='text-xs text-gray-400'>
            {rating > 3 ? '(100+)' : '(0)'}
          </Text>
        </View>
        <View className='flex-row items-center justify-items-start ml-1 mt-1'>
          <Ionicons name='location' size={16} color='#00ccbb' />
          <Text className='text-xs text-gray-400'>{address} - </Text>
          <Text className='text-xs text-gray-400'>1.5 km</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
