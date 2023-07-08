import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromBasket,
  selectBasket,
  selectBasketTotal,
  selectFilteredBasket,
  emptyBasket
} from '../store/redux/reducers/basketSlice'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'

export default function BasketScreen () {
  const basket = useSelector(selectBasket)
  const filteredBasket = useSelector(selectFilteredBasket)
  const total = useSelector(selectBasketTotal)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <SafeAreaView className='flex-1 mt-8'>
      <View className='flex-1 bg-gray-100'>
        <View className='flex flex-row items-center justify-between pl-5 pr-3 py-3 border-b-2 border-gray-200 z-50'>
          <Text className='text-2xl font-bold'>Basket</Text>
          <Ionicons
            name='close-circle'
            size={34}
            color='#00ccbb'
            onPress={navigation.goBack}
          />
        </View>

        <View className='flex-row items-center space-x-5 px-5 py-4 border-b-2 border-gray-200 bg-white mb-6'>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className='h-8 w-8 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1 text-base font-bold'>
            Deliver in 50-75 min's
          </Text>
          <TouchableOpacity>
            <Text className='text-[#00ccbb] text-base font-bold'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {filteredBasket?.map((item, index) => (
            <View
              key={index}
              className='flex-row items-center justify-between px-5 py-2.5 border-gray-200 bg-white'
            >
              <View className='flex-row items-center space-x-3'>
                <Text className='text-base font-bold text-[#00ccbb] pr-1'>
                  {item.quantity} x
                </Text>
                <Image
                  source={{
                    uri: urlFor(item.image).url()
                  }}
                  className='h-12 w-12 bg-gray-300 p-4 rounded-full'
                />
                <Text className='flex-1 text-base font-semibold'>
                  {item.name}
                </Text>
                <Text className='text-sm font-semibold text-gray-500'>
                  ₹ {item.price}
                </Text>
                <Text
                  onPress={() => dispatch(removeFromBasket(item.id))}
                  className='text-base font-semibold text-[#00ccbb]'
                >
                  Remove
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View className='px-5 py-3.5 bg-white space-y-1.5'>
          <View className='flex-row justify-between border-b-2 border-gray-200 pb-2'>
            <Text className='text-base font-semibold text-gray-400'>
              {' '}
              Subtotal
            </Text>
            <Text className='text-base font-semibold text-gray-400'>
              ₹ {total}
            </Text>
          </View>

          <View className='flex-row justify-between border-b-2 border-gray-200 pb-2'>
            <Text className='text-base font-semibold text-gray-400'>
              {' '}
              Delivery Fee
            </Text>
            <Text className='text-base font-semibold text-gray-400'>
              ₹ {total && 40}
            </Text>
          </View>

          <View className='flex-row justify-between mb-3'>
            <Text className='text-lg font-extrabold text-[#00ccbb]'>
              {' '}
              Total
            </Text>
            <Text className={`text-base font-extrabold ${!total && 'hidden'}`}>
              ₹ {total && total + 40}
            </Text>
          </View>

          <TouchableOpacity
            disabled={!total}
            className={`mx-5 bg-[#00ccbb] py-2 rounded-lg ${
              !total && 'opacity-50'
            }`}
            onPress={() => {
              navigation.navigate('Preparation')
              dispatch(emptyBasket())
            }}
          >
            <Text className='text-lg text-white font-extrabold px-2 rounded-md text-center'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
