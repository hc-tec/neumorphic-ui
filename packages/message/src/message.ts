import { MessageBoxConfig } from './messageConfig';
import { MessageBoxType } from '../../utils/config/neumorphic-type';
class Message {
  // 单例模式
  public static getInstance() {
    if (!Message.instance) {
      Message.instance = new Message();
    }
    return Message.instance;
  }
  private static instance: Message;
  public root: HTMLElement = this.generateElement('div', 'neumorphic-messagebox');
  private topList: number[] = [];
  constructor() {
    this.root.style.display = 'inline';
    this.root.style.height = '0';
    document.body.appendChild(this.root);
  }
  public send(config: Record<string, any>): void {
    // 默认配置
    const DEFAULT_MESSAGE_CONFIG = {
      message: 'Default Message',
      type: 'info',
      styleTimeout: 2000,
      removeTimeout: 3000,
    };
    this.generateMessageBox(Object.assign(DEFAULT_MESSAGE_CONFIG, config) as MessageBoxConfig);
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
export default Message.getInstance();
