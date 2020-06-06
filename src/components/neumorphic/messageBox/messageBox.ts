import { MessageBoxConfig } from './messageBoxConfig';
import { MessageBoxType } from '../utils/config/neumorphic-type';
class MessageBox {

  public root: HTMLElement = this.generateElement('div', 'neumorphic-messagebox');
  public topList: number[] = [];
  constructor() {
    this.root.style.display = 'inline';
    this.root.style.height = '0';
    document.body.appendChild(this.root);

  }
  public send(config: MessageBoxConfig): void {
    // topList 用于储存每个 messageBox 的 top 属性，为局部的"全局变量"，必须
    this.generateMessageBox(config);
  }
  private generateMessageBox(config: MessageBoxConfig): void {
    const messageBox = this.generateElement('div', '', config.type as MessageBoxType);
    this.topList.push(1);
    const message = this.generateElement('p', 'neumorphic-messagebox-text', config.type as MessageBoxType);
    message.appendChild(document.createTextNode(config.message));
    messageBox.appendChild(message);
    this.root.appendChild(messageBox);

    setTimeout(() => {
      messageBox.style.transform = 'translate(50%, -100px)';
    }, config.styleTimeout);
    setTimeout(() => {
      this.root.removeChild(messageBox);
      this.topList.pop();
    }, config.removeTimeout);
  }

  private generateElement(element: string, className: string, type?: MessageBoxType): HTMLElement {
    const ele =  document.createElement(element);
    if (className && element === 'p') {
      ele.className = `${className}-${type} ${className}`;
    } else if (className) {
      ele.className = className;
    }
    return ele;
  }

}
export default new MessageBox();
