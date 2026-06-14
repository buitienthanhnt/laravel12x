import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
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
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
createCategory.url = (options?: RouteQueryOptions) => {
    return createCategory.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
createCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createCategory.url(options),
    method: 'get',
})
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
createCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createCategory.url(options),
    method: 'head',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
    const createCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: createCategory.url(options),
        method: 'get',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
        createCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: createCategory.url(options),
            method: 'get',
        })
            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::createCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
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
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::storeCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:28
 * @route '/adminhtml/category/store'
 */
export const storeCategory = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory.url(options),
    method: 'post',
})

storeCategory.definition = {
    methods: ["post"],
    url: '/adminhtml/category/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::storeCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:28
 * @route '/adminhtml/category/store'
 */
storeCategory.url = (options?: RouteQueryOptions) => {
    return storeCategory.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::storeCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:28
 * @route '/adminhtml/category/store'
 */
storeCategory.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory.url(options),
    method: 'post',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::storeCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:28
 * @route '/adminhtml/category/store'
 */
    const storeCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeCategory.url(options),
        method: 'post',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::storeCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:28
 * @route '/adminhtml/category/store'
 */
        storeCategoryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeCategory.url(options),
            method: 'post',
        })
    
    storeCategory.form = storeCategoryForm
const CategoryAdminController = { createCategory, storeCategory }

export default CategoryAdminController