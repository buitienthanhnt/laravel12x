import Frontend from './Frontend'
import Adminhtml from './Adminhtml'

const Controllers = {
    Frontend: Object.assign(Frontend, Frontend),
    Adminhtml: Object.assign(Adminhtml, Adminhtml),
}

export default Controllers