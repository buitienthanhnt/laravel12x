import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:35
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
* @see app/Http/Controllers/Akho/Manage.php:35
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
* @see app/Http/Controllers/Akho/Manage.php:35
* @route '/akho/manage/{id?}'
*/
manage.get = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:35
* @route '/akho/manage/{id?}'
*/
manage.head = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:35
* @route '/akho/manage/{id?}'
*/
const manageForm = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:35
* @route '/akho/manage/{id?}'
*/
manageForm.get = (args?: { id?: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::manage
* @see app/Http/Controllers/Akho/Manage.php:35
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
* @see app/Http/Controllers/Akho/Manage.php:43
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
* @see app/Http/Controllers/Akho/Manage.php:43
* @route '/akho/register'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:43
* @route '/akho/register'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:43
* @route '/akho/register'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:43
* @route '/akho/register'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:43
* @route '/akho/register'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::create
* @see app/Http/Controllers/Akho/Manage.php:43
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
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
export const createCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createCategory.url(options),
    method: 'get',
})

createCategory.definition = {
    methods: ["get","head"],
    url: '/akho/cate/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
createCategory.url = (options?: RouteQueryOptions) => {
    return createCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
createCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createCategory.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
createCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createCategory.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
const createCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createCategory.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
createCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createCategory.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::createCategory
* @see app/Http/Controllers/Akho/Manage.php:50
* @route '/akho/cate/create'
*/
createCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createCategory.form = createCategoryForm

/**
* @see \App\Http\Controllers\Akho\Manage::storeCategory
* @see app/Http/Controllers/Akho/Manage.php:57
* @route '/akho/cate/store'
*/
export const storeCategory = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory.url(options),
    method: 'post',
})

storeCategory.definition = {
    methods: ["post"],
    url: '/akho/cate/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Akho\Manage::storeCategory
* @see app/Http/Controllers/Akho/Manage.php:57
* @route '/akho/cate/store'
*/
storeCategory.url = (options?: RouteQueryOptions) => {
    return storeCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::storeCategory
* @see app/Http/Controllers/Akho/Manage.php:57
* @route '/akho/cate/store'
*/
storeCategory.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Akho\Manage::storeCategory
* @see app/Http/Controllers/Akho/Manage.php:57
* @route '/akho/cate/store'
*/
const storeCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategory.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Akho\Manage::storeCategory
* @see app/Http/Controllers/Akho/Manage.php:57
* @route '/akho/cate/store'
*/
storeCategoryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategory.url(options),
    method: 'post',
})

storeCategory.form = storeCategoryForm

/**
* @see \App\Http\Controllers\Akho\Manage::store
* @see app/Http/Controllers/Akho/Manage.php:82
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
* @see app/Http/Controllers/Akho/Manage.php:82
* @route '/akho/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Akho\Manage::store
* @see app/Http/Controllers/Akho/Manage.php:82
* @route '/akho/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Akho\Manage::store
* @see app/Http/Controllers/Akho/Manage.php:82
* @route '/akho/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Akho\Manage::store
* @see app/Http/Controllers/Akho/Manage.php:82
* @route '/akho/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:70
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
* @see app/Http/Controllers/Akho/Manage.php:70
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
* @see app/Http/Controllers/Akho/Manage.php:70
* @route '/akho/product/{alias}.html'
*/
show.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:70
* @route '/akho/product/{alias}.html'
*/
show.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:70
* @route '/akho/product/{alias}.html'
*/
const showForm = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:70
* @route '/akho/product/{alias}.html'
*/
showForm.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Akho\Manage::show
* @see app/Http/Controllers/Akho/Manage.php:70
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

const Manage = { manage, create, createCategory, storeCategory, store, show }

export default Manage