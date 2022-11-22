import { contentful } from './config';
const client = require('contentful').createClient({
    space: contentful.space,
    accessToken: contentful.token
})
const getContent = () => client.getEntries().then(response => response.items)

export { getContent };