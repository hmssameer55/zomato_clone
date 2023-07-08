import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TextInput, Image } from 'react-native'

export default function Header () {
  return (
    <View className='mt-10 bg-gray-200 p-4'>
      <View className='flex-row items-center justify-between'>
        <View className='flex-row items-center space-x-3'>
          <Image
            source={require('../assets/hms.png')}
            style={{ width: 40, height: 40 }}
            className='rounded-full'
          />
          <View className='flex'>
            <Text className='text-s text-gray-400 font-bold'>Deliver Now</Text>
            <Text className='text-lg font-bold'>
              Current Location
              <Ionicons name='chevron-down' size={22} color='black' />
            </Text>
          </View>
        </View>
        <View>
          <Ionicons name='person-outline' size={26} color='#00ccbb' />
        </View>
      </View>
      <View className='flex-row items-center justify-between mt-3 space-x-2'>
        <View className='flex-1 flex-row items-center space-x-2 bg-gray-300 p-1'>
          <Ionicons name='search' size={24} color='black' />
          <TextInput placeholder='Search for restaurants, cuisine or a dish' />
        </View>
        <View>
          <Ionicons name='filter' size={24} color='#00ccbb' />
        </View>
      </View>
    </View>
  )
}
