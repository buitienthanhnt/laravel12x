import Frontend from './Frontend'
import Adminhtml from './Adminhtml'
import AmuaController from './AmuaController'

const Controllers = {
    Frontend: Object.assign(Frontend, Frontend),
    Adminhtml: Object.assign(Adminhtml, Adminhtml),
    AmuaController: Object.assign(AmuaController, AmuaController),
}

export default Controllers