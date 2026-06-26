import Frontend from './Frontend'
import AmuaController from './AmuaController'
import Adminhtml from './Adminhtml'

const Controllers = {
    Frontend: Object.assign(Frontend, Frontend),
    AmuaController: Object.assign(AmuaController, AmuaController),
    Adminhtml: Object.assign(Adminhtml, Adminhtml),
}

export default Controllers