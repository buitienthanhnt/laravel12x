
const blockPrefix = '/adminhtml/block';
const productPrefix = '/adminhtml/product';
const categoryPrefix = '/adminhtml/category';

/**
 * define all url for akho global network module here, so that we can easily manage and change them in the future
 * the url was not define with router name so they not appear in route list action and controller auto build
 */
const AkhoUrl = {
  block: {
    manage: blockPrefix,
    create: `${blockPrefix}/create`,
    update: `${blockPrefix}/update`,
    delete: (id: number | string) => `${blockPrefix}/delete/${id}`,
    addItem: `${blockPrefix}/add-item`,
    deleteItem: (id: number) => `${blockPrefix}/delete-item/${id}`
  },
  product: {
    manage: {
      method: 'get',
      action: productPrefix,
    },
    create: {
      method: 'get',
      action: productPrefix + '/create',
    },
    store: {
      method: 'post',
      action: productPrefix + '/store',
    }
  },
  category: {
    manage: {
      method: 'get',
      action: categoryPrefix,
    },
    create: {
      method: 'get',
      action: categoryPrefix + '/create',
    },
    store: {
      method: 'post',
      action: categoryPrefix + '/store',
    },
    detail: {
      method: 'get',
      action: (id: number | string) => `${categoryPrefix}/${id}.htm`,
    },
  },
};

export default AkhoUrl;
