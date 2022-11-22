import { useEffect, useState } from 'react'
import { getContent } from '../contentful'


export default function useContent(slug) {
    const promise = getContent(slug)
    const [content, setContent] = useState(null) 
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        promise.then(result => {
            setContent(result)
            setLoading(false)
        })
    }, [isLoading])

    return [content, isLoading]
}