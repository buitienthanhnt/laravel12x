import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Akho\Manage::manage
 * @see app/Http/Controllers/Akho/Manage.php:27
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
 * @see app/Http/Controllers/Akho/Manage.php:27
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
 * @see app/Http/Controllers/Akho/Manage.php:27
 * @route '/akho/manage/{id?}'
 */
manage.get = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Akho\Manage::manage
 * @see app/Http/Controllers/Akho/Manage.php:27
 * @route '/akho/manage/{id?}'
 */
manage.head = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Akho\Manage::manage
 * @see app/Http/Controllers/Akho/Manage.php:27
 * @route '/akho/manage/{id?}'
 */
    const manageForm = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: manage.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Akho\Manage::manage
 * @see app/Http/Controllers/Akho/Manage.php:27
 * @route '/akho/manage/{id?}'
 */
        manageForm.get = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: manage.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Akho\Manage::manage
 * @see app/Http/Controllers/Akho/Manage.php:27
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
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/akho/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Akho\Manage::create
 * @see app/Http/Controllers/Akho/Manage.php:35
 * @route '/akho/register'
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
/**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:47
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
 * @see app/Http/Controllers/Akho/Manage.php:47
 * @route '/akho/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:47
 * @route '/akho/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:47
 * @route '/akho/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Akho\Manage::store
 * @see app/Http/Controllers/Akho/Manage.php:47
 * @route '/akho/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const Manage = { manage, create, store }

export default Manage