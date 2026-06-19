import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
*/
export const createCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createCategory.url(options),
    method: 'get',
})

createCategory.definition = {
    methods: ["get","head"],
    url: '/adminhtml/category/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
*/
createCategory.url = (options?: RouteQueryOptions) => {
    return createCategory.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
*/
createCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createCategory.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
*/
createCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createCategory.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
*/
const createCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createCategory.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
*/
createCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createCategory.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:27
* @route '/adminhtml/category/create'
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
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
export const categoryList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryList.url(options),
    method: 'get',
})

categoryList.definition = {
    methods: ["get","head"],
    url: '/adminhtml/category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
categoryList.url = (options?: RouteQueryOptions) => {
    return categoryList.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
categoryList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoryList.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
categoryList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoryList.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
const categoryListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoryList.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
categoryListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoryList.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::categoryList
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:20
* @route '/adminhtml/category'
*/
categoryListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoryList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categoryList.form = categoryListForm

const CategoryAdminController = { createCategory, categoryList }

export default CategoryAdminController