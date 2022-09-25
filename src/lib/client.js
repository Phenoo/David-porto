import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'bt7i8an7',
    dataset: 'production',
    apiVersion: '2022-09-24',
    useCdn: true,
    token: process.env.REACT_PUBLIC_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
}