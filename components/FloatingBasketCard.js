import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectBasketTotal,
  selectBasket,
  selectFilteredBasket
} from '../store/redux/reducers/basketSlice'
import { useNavigation } from '@react-navigation/native'

export default function FloatingBasketCard () {
  const basket = useSelector(selectBasket)
  const filteredBasket = useSelector(selectFilteredBasket)
  const total = useSelector(selectBasketTotal)
  const navigation = useNavigation()

  return (
    <>
      {basket.length > 0 && filteredBasket.length > 0 && (
        <View className='absolute bottom-4 z-50 w-full shadow-md'>
          <TouchableOpacity
            onPress={() => navigation.navigate('Basket')}
            className='mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center justify-between'
          >
            <Text className='text-lg text-white font-extrabold bg-[#01a296]  px-2 rounded-md'>
              {filteredBasket.length}
            </Text>
            <Text className='text-lg text-white font-extrabold'>
              View Basket
            </Text>
            <Text className='text-lg text-white font-extrabold'>
              ₹ {total}.00 Rs
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}
