import { MessageBoxConfig } from './messageBoxConfig';
import { MessageBoxType } from '../utils/config/neumorphic-type';
export class MessageBox {
  public topList: number[] = [0];
  public setMsg(config: MessageBoxConfig): void {
    // topList 用于储存每个 messageBox 的 top 属性，为局部的"全局变量"，必须
    this.generateMessageBox(config);
  }
  private generateMessageBox(config: MessageBoxConfig): void {
    const messageBox = this.generateElement('div', 'neumorphic-messagebox', config.type);
    const top = this.topList[this.topList.length - 1] + 55;
    this.topList.push(top);
    messageBox.style.top = `${top}px`;
    const message = this.generateElement('p', 'neumorphic-messagebox-text', config.type);
    message.appendChild(document.createTextNode(config.message));
    messageBox.appendChild(message);
    const body = document.body;
    body.appendChild(messageBox);
    setTimeout(() => {
      messageBox.style.transform = 'translate(-50%, 0)';
    }, 100);
    setTimeout(() => {
      messageBox.style.transform = 'translate(-50%, -100px)';
    }, config.styleTimeout);
    setTimeout(() => {
      body.removeChild(messageBox);
      this.topList.pop();
    }, config.removeTimeout);
  }

  private generateElement(element: string, className: string, type: MessageBoxType): HTMLElement {
    const ele =  document.createElement(element);
    if (element === 'p') {
      ele.className = `${className}-${type} ${className}`;
    } else {
      ele.className = className;
    }
    return ele;
  }

}
export default new MessageBox();
