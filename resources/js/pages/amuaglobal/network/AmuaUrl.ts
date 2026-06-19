export const adminPrefix = '/adminhtml';
export const amuaAdminPrefix = '/adminhtml/amua';

const AmuaUrl = {
  category: {
    create: {
      method: 'get',
      action: `${adminPrefix}/category/create`,
    },
    store: {
      method: 'post',
      action: `${adminPrefix}/category/store`,
    },
  }
}

export default AmuaUrl;