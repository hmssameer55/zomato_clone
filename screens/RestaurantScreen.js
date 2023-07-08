import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'
import { Ionicons } from '@expo/vector-icons'
import DishRow from '../components/DishRow'
import FloatingBasketCard from '../components/FloatingBasketCard'

export default function RestaurantScreen ({ navigation, route }) {
  const { name, shortDescription, image, type, rating, address, dishes, id } =
    route.params.data

  const restaurantId = id

  return (
    <>
      <FloatingBasketCard />
      <ScrollView className='pb-5'>
        <View className='relative'>
          <Image
            source={{ uri: urlFor(image).url() }}
            className='w-full h-64  bg-gray-200'
          />
          <TouchableOpacity className='absolute top-12 left-5 bg-white rounded-full p-1'>
            <Ionicons
              onPress={() => navigation.goBack()}
              name='arrow-back'
              size={24}
              color='#00ccbb'
            />
          </TouchableOpacity>
        </View>
        <View className='px-4 py-3 bg-white'>
          <Text className='text-xl font-bold'>{name}</Text>

          <View className='flex-row items-center justify-start gap-x-4 mt-1'>
            <View className='flex-row items-center justify-items-start space-x-1'>
              <Ionicons name='star' size={16} color='#00ccbb' />
              <Text className='text-xs text-green-500'>{rating}</Text>
              <Text className='text-xs text-green-500'>
                {rating > 3 ? '(100+)' : '(0)'}
              </Text>
            </View>
            <View className='flex-row items-center justify-items-start'>
              <Ionicons name='location' size={16} color='gray' />
              <Text className='text-xs text-gray-400'> Nearby </Text>
              <Text className='text-xs text-gray-400'>{address} - </Text>
              <Text className='text-xs text-gray-400'>1.5 km</Text>
            </View>
          </View>
          <Text className='text-sm text-gray-400 mt-2'>{shortDescription}</Text>
        </View>

        <View className='px-3 pt-3 pb-32'>
          <Text className='text-xl font-bold mb-1'>Menu</Text>
          {dishes?.map((dish, index) => (
            <DishRow
              key={index}
              id={dish._id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
              restaurantId={restaurantId}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}
