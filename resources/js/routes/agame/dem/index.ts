import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
export const nguoc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nguoc.url(options),
    method: 'get',
})

nguoc.definition = {
    methods: ["get","head"],
    url: '/agame/dem-nguoc',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
nguoc.url = (options?: RouteQueryOptions) => {
    return nguoc.definition.url + queryParams(options)
}

/**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
nguoc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nguoc.url(options),
    method: 'get',
})
/**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
nguoc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: nguoc.url(options),
    method: 'head',
})

    /**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
    const nguocForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: nguoc.url(options),
        method: 'get',
    })

            /**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
        nguocForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nguoc.url(options),
            method: 'get',
        })
            /**
 * @see [serialized-closure]:2
 * @route '/agame/dem-nguoc'
 */
        nguocForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nguoc.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    nguoc.form = nguocForm
const dem = {
    nguoc: Object.assign(nguoc, nguoc),
}

export default dem