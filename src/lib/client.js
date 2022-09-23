import { sanityClient } from "@sanity/client";

export default sanityClient({
    projectId: 'ravb06rw',
    dataset: 'production',
    apiVersion: '2022-09-18',
    useCdn: true,
    token: process.env.REACT_PUBLIC_SANITY_TOKEN,
});