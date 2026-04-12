import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
export const show = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/akho/product/{alias}.html',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
show.url = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { alias: args }
    }

    if (Array.isArray(args)) {
        args = {
            alias: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        alias: args.alias,
    }

    return show.definition.url
            .replace('{alias}', parsedArgs.alias.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
show.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
show.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
const showForm = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
showForm.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:67
* @route '/akho/product/{alias}.html'
*/
showForm.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const product = {
    show: Object.assign(show, show),
}

export default product