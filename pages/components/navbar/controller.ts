import autobind from 'react-pitaya/lib/helper/autobind'
import {Listener} from 'react-pitaya/lib/helper/listener'

type NavbarMode = 'test'

export class Controller extends Listener {
  mode: NavbarMode
  visible: boolean

  @autobind
  switchMode(mode: NavbarMode){
    this.mode = mode
    this.dispatchSubscribers()
  }

  @autobind
  switchVisible(visible: boolean){
    this.visible = visible
    this.dispatchSubscribers()
  }
}

export default Controller
