import autobind from 'react-pitaya/lib/helper/autobind'
import {Listener} from 'react-pitaya/lib/helper/listener'


export class Controller extends Listener {
  visible: boolean

  @autobind
  switchVisible(visible: boolean){
    this.visible = visible
    this.dispatchSubscribers()
  }
}

export default Controller
