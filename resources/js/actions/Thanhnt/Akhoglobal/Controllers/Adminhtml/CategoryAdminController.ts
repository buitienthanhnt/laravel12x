import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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

const CategoryAdminController = { storeCategory }

export default CategoryAdminController