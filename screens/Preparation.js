import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

export default function Preparation () {
  const navigation = useNavigation()

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 3000)
  }, [])

  return (
    <View className='flex-1 bg-[#00ccbb] justify-center items-center'>
      <SafeAreaView>
        <Animatable.Image
          animation='slideInUp'
          easing='ease-out'
          iterationCount={1}
          source={require('../assets/cooking.gif')}
          className='h-96 w-96'
        />
        <Animatable.Text
          animation='slideInUp'
          easing='ease-out'
          delay={500}
          iterationCount={1}
          className='px-5 my-10 text-lg font-bold text-white text-center'
        >
          Waiting for Restaurant to accept your order...
        </Animatable.Text>
        <Animatable.View
          animation='slideInUp'
          easing='ease-out'
          delay={1000}
          iterationCount={1}
          className='flex-row items-center justify-center space-x-2'
        >
          <Progress.Circle
            size={45}
            indeterminate={true}
            color='#fff'
            borderWidth={2}
          />
        </Animatable.View>
      </SafeAreaView>
    </View>
  )
}
