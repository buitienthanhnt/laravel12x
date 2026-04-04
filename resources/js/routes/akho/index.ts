import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
export const manage = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/akho/manage/{id?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
manage.url = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "id",
    ])

    const parsedArgs = {
        id: args?.id,
    }

    return manage.definition.url
            .replace('{id?}', parsedArgs.id?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
manage.get = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
manage.head = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
const manageForm = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
manageForm.get = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:16
* @route '/akho/manage/{id?}'
*/
manageForm.head = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manage.form = manageForm

/**
* @see \App\Http\Controllers\Akho\Manage::register
* @see app/Http/Controllers/Akho/Manage.php:32
* @route '/akho/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/akho/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Akho\Manage::register
* @see app/Http/Controllers/Akho/Manage.php:32
* @route '/akho/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::register
* @see app/Http/Controllers/Akho/Manage.php:32
* @route '/akho/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Akho\Manage::register
* @see app/Http/Controllers/Akho/Manage.php:32
* @route '/akho/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Akho\Manage::register
* @see app/Http/Controllers/Akho/Manage.php:32
* @route '/akho/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

const akho = {
    manage: Object.assign(manage, manage),
    register: Object.assign(register, register),
}

export default akho