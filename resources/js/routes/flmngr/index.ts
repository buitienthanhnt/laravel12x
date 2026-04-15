import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see routes/web.php:60
* @route '/flmngr'
*/
export const api = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: api.url(options),
    method: 'post',
})

api.definition = {
    methods: ["post"],
    url: '/flmngr',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/web.php:60
* @route '/flmngr'
*/
api.url = (options?: RouteQueryOptions) => {
    return api.definition.url + queryParams(options)
}

/**
* @see routes/web.php:60
* @route '/flmngr'
*/
api.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: api.url(options),
    method: 'post',
})

/**
* @see routes/web.php:60
* @route '/flmngr'
*/
const apiForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: api.url(options),
    method: 'post',
})

/**
* @see routes/web.php:60
* @route '/flmngr'
*/
apiForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: api.url(options),
    method: 'post',
})

api.form = apiForm

const flmngr = {
    api: Object.assign(api, api),
}

export default flmngr