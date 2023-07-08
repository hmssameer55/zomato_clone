import React from 'react'
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectSelectedRestaurant } from '../store/redux/reducers/basketSlice'

export default function DeliveryScreen () {
  const navigation = useNavigation()
  const selectedRestaurant = useSelector(selectSelectedRestaurant)

  React.useEffect(() => {
    const backAction = () => {
      navigation.navigate('Basket')
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => {
      backHandler.remove()
    }
  }, [navigation])

  return (
    <View className='flex-1 bg-[#00ccbb]'>
      <SafeAreaView>
        <View className='flex-row items-center justify-between px-5 py-2'>
          <Ionicons
            name='arrow-back'
            size={30}
            color='white'
            onPress={() => navigation.navigate('Basket')}
          />
          <Text className='text-xl font-bold text-white'>Delivery</Text>
        </View>
        <View className='bg-white mx-5 my-2 rounded-md p-4 z-10 shadow-md'>
          <View className='flex-row justify-between '>
            <View className='w-3/4'>
              <Text className='text-lg font-bold text-gray-400'>
                Estimated delivery
              </Text>
              <Text className='text-3xl font-bold mt-1'>40-50 Minutes</Text>
              <View className='mt-3'>
                <Progress.Bar
                  width={200}
                  color='#00ccbb'
                  indeterminate={true}
                />
              </View>
            </View>
            <View className='w-1/4'>
              <Image
                source={{ uri: 'https://links.papareact.com/fls' }}
                className='h-20 w-20'
              />
            </View>
          </View>
          <Text className='text-xs text-gray-500 mt-3'>
            Your Order from {selectedRestaurant?.name} is on the way
          </Text>
        </View>

        <MapView
          provider='google'
          className='h-full w-full -mt-10'
          initialRegion={{
            latitude: selectedRestaurant?.lat,
            longitude: selectedRestaurant?.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
          mapType='mutedStandard'
        >
          <Marker
            coordinate={{
              latitude: selectedRestaurant?.lat,
              longitude: selectedRestaurant?.lng
            }}
            identifier='origin'
            pinColor='#00ccbb'
            title={selectedRestaurant?.name}
            description={selectedRestaurant?.shortDescription}
          />
        </MapView>
      </SafeAreaView>

      <SafeAreaView className='flex-1 absolute bottom-0 w-full'>
        <View className=' bg-white shadow-md py-2 px-5 flex-row justify-between items-center'>
          <View className='flex-row items-center'>
            <Image
              source={{ uri: 'https://links.papareact.com/wru' }}
              className='h-10 w-10 rounded-full'
            />
            <View className='ml-3'>
              <Text className='text-lg font-bold'>Your Rider</Text>
              <Text className='text-sm text-gray-500'>40 Minutes Away</Text>
            </View>
          </View>
          <View className='flex-row items-center'>
            <Text className='text-lg font-bold mr-2 text-gray-500'>Call</Text>
            <Ionicons name='call' size={20} color='#00ccbb' />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}
