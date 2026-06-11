
const blockPrefix = '/adminhtml/block';

const AkhoUrl = {
  block: {
    manage: blockPrefix,
    create: `${blockPrefix}/create`,
    update: `${blockPrefix}/update`,
    delete: (id: number | string) => `${blockPrefix}/delete/${id}`,
    addItem: `${blockPrefix}/add-item`,
    deleteItem: (id: number) => `${blockPrefix}/delete-item/${id}`
  }
};

export default AkhoUrl;