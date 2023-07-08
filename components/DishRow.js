import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToBasket,
  removeFromBasket,
  selectBasketWithId
} from '../store/redux/reducers/basketSlice'

export default function DishRow ({
  id,
  name,
  description,
  price,
  image,
  restaurantId
}) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const basketItem = useSelector(state => selectBasketWithId(state, id))

  const item = {
    id,
    name,
    description,
    price,
    image,
    restaurantId
  }

  const [isPressed, setIsPressed] = React.useState(false)

  function handleAddAndRemove (type) {
    switch (type) {
      case 'add':
        dispatch(addToBasket(item))
        break
      case 'remove':
        dispatch(removeFromBasket(id))
        break
      default:
        break
    }
  }

  return (
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      <View
        className={`flex-row items-center justify-start mt-3 p-3 pb-2 bg-white ${
          isPressed && 'rounded-t-lg border-b-0'
        }`}
      >
        <View className='flex-1'>
          <Text className='text-lg font-bold'>{name}</Text>
          <Text className='text-sm text-gray-400 w-4/5'>{description}</Text>
          <Text className='text-sm text-gray-400 mt-2'>₹ {price}.00 Rs</Text>
        </View>
        <Image
          source={{ uri: urlFor(image).url() }}
          className='w-24 h-24 rounded-lg'
        />
      </View>

      {/* This is the part that will be shown when the user presses the card for quantity increment and decrement */}
      {isPressed && (
        <View className='flex-row items-center justify-items-start bg-white rounded-b-lg px-3 py-1.5'>
          <Ionicons
            name='remove-circle'
            size={35}
            color={`${basketItem?.quantity ? '#00ccbb' : 'gray'}`}
            onPress={() => handleAddAndRemove('remove')}
          />
          <Text className='text-lg font-bold mx-2'>
            {' '}
            {basketItem?.quantity || 0}{' '}
          </Text>
          <Ionicons
            name='add-circle'
            size={35}
            color='#00ccbb'
            onPress={() => handleAddAndRemove('add')}
          />
        </View>
      )}
    </TouchableOpacity>
  )
}
