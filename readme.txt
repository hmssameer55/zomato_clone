1. npx create-expo-app zomato_clone

2. npx expo start

// tailwind 

3. https://www.nativewind.dev/quick-starts/expo

4. yarn add nativewind  yarn add --dev tailwindcss

5. Run npx tailwindcss init to create a tailwind.config.js file in the root of your project.

6. Add the following to your tailwind.config.js file:
. /** @type {import('tailwindcss').Config} */
export const content = [
  './screens/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
  './App.js'
]
export const theme = {
  extend: {}
}
export const plugins = []

7.Add the Babel plugin
Modify your babel.config.js

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};

8. install tailwind intellisense css extension for vscode to get intellisense for tailwind classes

// end of tailwind

// navigation

npm install @react-navigation/native 

npm install @react-navigation/native-stack

npx expo install react-native-screens react-native-safe-area-context

// end of navigation





////////////////////////////////// Sanity /////////////////////////////////

1.( npm install --save @sanity/client @sanity/image-url  )  in our project root folder not inside sanity bisque-mongoose

2.cd sanity bisque-mongoose and hit npm run dev or sanity start to start the sanity studio in localhost:3333

3.inside schemas folder create new schema's for restaurant, food, category, order, user, cart, address, payment and you can also visually see the fields in localhost:3333

4.inside schemas folder in index.ts export all the schemas from it

5.create a sanity.js file in the root folder (not inside bisque-mongoose) and add the following

6. Find the projectId and dataset from the sanity studio and add it to the sanity.js file and also allow cors
 in the sanity studio from api settings add the following url http://localhost:3000 or http://localhost:19006 or whatever port you are using for your expo project

//sample sanity.js file
import {createClient} from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: "zq5ymugd",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
}

const client = createClient(config)

const builder = imageUrlBuilder(config)

export const urlFor = (source) => {
    return builder.image(source)
}

export default client

6. import the sanity client in the screens and use it to fetch the data from sanity

7. You can deploy the sanity studio to the web by running sanity deploy in the sanity studio folder (bisque-mongoose)

8. fetch data from sanity in the screens or components like this 

//sample code
  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Featured"]{
      ...,
      Restaurants[]->{
        ...,
        dishes[]->,
      }
    }`
      )
      .then(data => setFeatured(data))
      .catch(console.error)
  }, [])

//This is Groq query language similar to graphql and you can use it to fetch data from sanity and store it inside the state to use it in the screens
  

////////////////////////////////// end of sanity //////////////////////////////





////////////////////// Redux toolkit //////////////////////

1. npm install @reduxjs/toolkit react-redux

2. create a store folder in the root of the project and create a store.js file inside it

3. In App.js wrap the whole app inside the Provider component and pass the store as a prop to it

4. create a slice folder inside the store folder and create a slice for each state you want to manage

5. import the slices in the store.js file and add it to the configureStore function

6. import the slice in the screens and use it to dispatch actions and use the useSelector hook to get the state from the store ans useDispacth hook to dispatch actions


/////////////////////////// end of redux toolkit ////////////////////////


///////////////////////// Animations ////////////////////////////////
















//////////////// end of Animations ////////////////////////////////





///////////////// map /////////////////////////

1. npx expo install react-native-maps











