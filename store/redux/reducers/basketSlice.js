import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    selectedRestaurant: null
  },
  reducers: {
    addToBasket: (state, action) => {
      const itemId = action.payload.id
      const index = state.basket.findIndex(item => item.id === itemId)
      if (index >= 0) {
        state.basket[index].quantity++
      } else {
        state.basket = [...state.basket, { ...action.payload, quantity: 1 }]
      }
    },
    removeFromBasket: (state, action) => {
      if (state.basket.length === 0) return alert('Basket is empty')

      const itemId = action.payload
      const itemIndex = state.basket.findIndex(item => item.id === itemId)

      let modifiedBasket = [...state.basket]

      if (itemIndex >= 0) {
        if (modifiedBasket[itemIndex].quantity > 1) {
          modifiedBasket[itemIndex].quantity--
        } else {
          modifiedBasket.splice(itemIndex, 1)
        }
        state.basket = modifiedBasket
      } else {
        alert(`Can't remove dish as it is not in the basket`)
      }
    },
    emptyBasket: state => {
      const selectedRestaurantId = state.selectedRestaurant?.id

      state.basket = state.basket.filter(
        item => item.restaurantId !== selectedRestaurantId
      )
    },
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload
    }
  }
})

export const {
  addToBasket,
  removeFromBasket,
  setSelectedRestaurant,
  emptyBasket
} = basketSlice.actions

export const selectBasket = state => state.basket.basket
export const selectSelectedRestaurant = state => state.basket.selectedRestaurant

export const selectBasketWithId = (state, id) => {
  return state.basket.basket.find(item => item.id === id)
}

export const selectFilteredBasket = state => {
  return state.basket.basket.filter(
    item => item.restaurantId === state.basket.selectedRestaurant?.id
  )
}

export const selectBasketTotal = state => {
  const selectedRestaurant = state.basket.selectedRestaurant
  const basket = state.basket.basket

  const filteredBasket = basket.filter(
    item => item.restaurantId == selectedRestaurant.id
  )

  return filteredBasket.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

export default basketSlice.reducer
