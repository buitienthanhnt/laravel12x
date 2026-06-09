import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import category from './category'
import product from './product'
/**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/akho/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Akho\Manage::register
 * @see app/Http/Controllers/Akho/Manage.php:46
 * @route '/akho/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:98
 * @route '/akho/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/akho/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:98
 * @route '/akho/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:98
 * @route '/akho/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:98
 * @route '/akho/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:98
 * @route '/akho/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const akho = {
    register: Object.assign(register, register),
category: Object.assign(category, category),
store: Object.assign(store, store),
product: Object.assign(product, product),
}

export default akho