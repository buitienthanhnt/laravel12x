import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/akho/cate/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:47
* @route '/akho/cate/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

const category = {
    create: Object.assign(create, create),
}

export default category