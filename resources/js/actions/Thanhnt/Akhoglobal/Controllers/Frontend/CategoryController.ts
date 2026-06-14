import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
export const detailCategory = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailCategory.url(args, options),
    method: 'get',
})

detailCategory.definition = {
    methods: ["get","head"],
    url: '/akho/{id}.htm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
detailCategory.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return detailCategory.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
detailCategory.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailCategory.url(args, options),
    method: 'get',
})
/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
detailCategory.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detailCategory.url(args, options),
    method: 'head',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
    const detailCategoryForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: detailCategory.url(args, options),
        method: 'get',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
        detailCategoryForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: detailCategory.url(args, options),
            method: 'get',
        })
            /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::detailCategory
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/CategoryController.php:22
 * @route '/akho/{id}.htm'
 */
        detailCategoryForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: detailCategory.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    detailCategory.form = detailCategoryForm
const CategoryController = { detailCategory }

export default CategoryController