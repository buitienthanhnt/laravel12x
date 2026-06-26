export const adminPrefix = '/adminhtml';
export const amuaAdminPrefix = '/adminhtml/amua';
export const productPrefix = `${adminPrefix}/product`;
export const categoryPrefix = `${adminPrefix}/category`;

const AmuaUrl = {
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
}

export default AmuaUrl;