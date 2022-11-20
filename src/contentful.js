const client = require('contentful').createClient({
    space: 'wz1fit8x1666',
    accessToken: 'MYN03qokpkVPScdgWwonr6OFW-JiRwRrmBIndwE6VL0'
})

const getContent = () => client.getEntries().then(response => response.items)
 

export { getContent };