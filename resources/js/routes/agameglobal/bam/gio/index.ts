import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
export const don = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: don.url(options),
    method: 'get',
})

don.definition = {
    methods: ["get","head"],
    url: '/agame/bam-gio-don',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
don.url = (options?: RouteQueryOptions) => {
    return don.definition.url + queryParams(options)
}

/**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
don.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: don.url(options),
    method: 'get',
})
/**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
don.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: don.url(options),
    method: 'head',
})

    /**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
    const donForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: don.url(options),
        method: 'get',
    })

            /**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
        donForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: don.url(options),
            method: 'get',
        })
            /**
 * @see [serialized-closure]:2
 * @route '/agame/bam-gio-don'
 */
        donForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: don.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    don.form = donForm
const gio = {
    don: Object.assign(don, don),
}

export default gio