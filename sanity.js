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