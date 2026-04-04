import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import bam from './bam'
import dem from './dem'
/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/agame',
} satisfies RouteDefinition<["get","head"]>

/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see packages/thanhnt/agameglobal/src/routes/web.php:7
* @route '/agame'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

const agameglobal = {
    home: Object.assign(home, home),
    bam: Object.assign(bam, bam),
    dem: Object.assign(dem, dem),
}

export default agameglobal