import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
export const blockList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blockList.url(options),
    method: 'get',
})

blockList.definition = {
    methods: ["get","head"],
    url: '/test/resize-div',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
blockList.url = (options?: RouteQueryOptions) => {
    return blockList.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
blockList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blockList.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
blockList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blockList.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
const blockListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blockList.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
blockListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blockList.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::blockList
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:20
* @route '/test/resize-div'
*/
blockListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blockList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

blockList.form = blockListForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:30
* @route '/test/add-block'
*/
export const addBlock = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addBlock.url(options),
    method: 'post',
})

addBlock.definition = {
    methods: ["post"],
    url: '/test/add-block',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:30
* @route '/test/add-block'
*/
addBlock.url = (options?: RouteQueryOptions) => {
    return addBlock.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:30
* @route '/test/add-block'
*/
addBlock.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addBlock.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:30
* @route '/test/add-block'
*/
const addBlockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addBlock.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:30
* @route '/test/add-block'
*/
addBlockForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addBlock.url(options),
    method: 'post',
})

addBlock.form = addBlockForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:46
* @route '/test/delete-block/{id}'
*/
export const deleteBlock = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteBlock.url(args, options),
    method: 'delete',
})

deleteBlock.definition = {
    methods: ["delete"],
    url: '/test/delete-block/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:46
* @route '/test/delete-block/{id}'
*/
deleteBlock.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteBlock.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:46
* @route '/test/delete-block/{id}'
*/
deleteBlock.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteBlock.url(args, options),
    method: 'delete',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:46
* @route '/test/delete-block/{id}'
*/
const deleteBlockForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteBlock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:46
* @route '/test/delete-block/{id}'
*/
deleteBlockForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteBlock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteBlock.form = deleteBlockForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::updateBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:52
* @route '/test/update-block'
*/
export const updateBlock = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateBlock.url(options),
    method: 'put',
})

updateBlock.definition = {
    methods: ["put"],
    url: '/test/update-block',
} satisfies RouteDefinition<["put"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::updateBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:52
* @route '/test/update-block'
*/
updateBlock.url = (options?: RouteQueryOptions) => {
    return updateBlock.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::updateBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:52
* @route '/test/update-block'
*/
updateBlock.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateBlock.url(options),
    method: 'put',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::updateBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:52
* @route '/test/update-block'
*/
const updateBlockForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateBlock.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::updateBlock
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:52
* @route '/test/update-block'
*/
updateBlockForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateBlock.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateBlock.form = updateBlockForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:70
* @route '/test/add-block-item'
*/
export const addBlockItem = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addBlockItem.url(options),
    method: 'post',
})

addBlockItem.definition = {
    methods: ["post"],
    url: '/test/add-block-item',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:70
* @route '/test/add-block-item'
*/
addBlockItem.url = (options?: RouteQueryOptions) => {
    return addBlockItem.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:70
* @route '/test/add-block-item'
*/
addBlockItem.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addBlockItem.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:70
* @route '/test/add-block-item'
*/
const addBlockItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addBlockItem.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::addBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:70
* @route '/test/add-block-item'
*/
addBlockItemForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addBlockItem.url(options),
    method: 'post',
})

addBlockItem.form = addBlockItemForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:80
* @route '/test/delete-block-item/{id}'
*/
export const deleteBlockItem = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteBlockItem.url(args, options),
    method: 'delete',
})

deleteBlockItem.definition = {
    methods: ["delete"],
    url: '/test/delete-block-item/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:80
* @route '/test/delete-block-item/{id}'
*/
deleteBlockItem.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteBlockItem.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:80
* @route '/test/delete-block-item/{id}'
*/
deleteBlockItem.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteBlockItem.url(args, options),
    method: 'delete',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:80
* @route '/test/delete-block-item/{id}'
*/
const deleteBlockItemForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteBlockItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::deleteBlockItem
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:80
* @route '/test/delete-block-item/{id}'
*/
deleteBlockItemForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteBlockItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteBlockItem.form = deleteBlockItemForm

const BlockAdminController = { blockList, addBlock, deleteBlock, updateBlock, addBlockItem, deleteBlockItem }

export default BlockAdminController