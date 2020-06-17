import { generateElement } from '../../utils/ts/func';

import {
    AlertMessageConfig,
    ConfirmMessageConfig,
    PromptMessageConfig,
} from './messageBoxConfig';

export class MessageBox {
    // 单例模式
    public static getInstance() {
      if (!MessageBox.instance) {
        MessageBox.instance = new MessageBox();
      }
      return MessageBox.instance;
    }
    private static instance: MessageBox;
    // 元素标签
    private messageWrapper: HTMLElement = generateElement('div', 'neumorphic-message-wrapper');
    private layer: HTMLElement = generateElement('div', 'neumorphic-message-layer');
    private messageContent: HTMLElement = generateElement('div', 'neumorphic-message-content');
    private messageHeader: HTMLElement = generateElement('div', 'neumorphic-message-header');
    private messageBody: HTMLElement = generateElement('div', 'neumorphic-message-body');
    private messageBtnWrapper: HTMLElement = generateElement('div', 'neumorphic-message-btn');
    private confirmBtn: HTMLElement = generateElement('button', 'neumorphic-btn');
    private cancelBtn: HTMLElement = generateElement('button', 'neumorphic-btn');

    public alert(message?: Record<string, any>) {
      const DEFAULT_MESSAGE_CONFIG = {
        title: 'Default Title',
        message: 'Default Message',
        confirmBtnText: '确认',
        callback: () => (void 0),
      };
      this.generateAlertMessage(Object.assign(DEFAULT_MESSAGE_CONFIG, message) as AlertMessageConfig);
    }
    public confirm(message?: Record<string, any>) {
      const DEFAULT_MESSAGE_CONFIG = {
        title: 'Default Title',
        message: 'Default Message',
        confirmBtnText: '确认',
        cancelBtnText: '取消',
        resolve: () => (void 0),
        reject: () => (void 0),
      };
      this.generateConfirmMessage(Object.assign(DEFAULT_MESSAGE_CONFIG, message) as ConfirmMessageConfig);
    }
    public prompt(message?: Record<string, any>) {
      const DEFAULT_MESSAGE_CONFIG = {
        title: 'Default Title',
        message: 'Default Message',
        confirmBtnText: '确认',
        cancelBtnText: '取消',
        resolve: () => (void 0),
        reject: () => (void 0),
      };
      this.generatePromptMessage(Object.assign(DEFAULT_MESSAGE_CONFIG, message) as PromptMessageConfig);
    }
    private destroy() {
      // 按钮组销毁，防止干扰
      this.messageBtnWrapper.innerHTML = '';
      this.messageBody.innerHTML = '';
      document.body.removeChild(this.messageWrapper);
      document.body.removeChild(this.layer);
    }
    private generateAlertMessage(message: AlertMessageConfig) {

      // 事件挂载
      this.confirmBtn.onclick = () => {
        message.callback('confirm');
        this.destroy();
        // 滑轮解锁
        document.body.style.overflow = 'auto';
      };
      // 挂载
      this.messageHeader.innerHTML = message.title;
      this.messageBody.innerHTML = message.message;
      this.confirmBtn.innerHTML = message.confirmBtnText;
      this.confirmBtn.style.padding = '12px 40px';
      this.confirmBtn.style.color = 'var(--second-color)';
      this.messageBtnWrapper.appendChild(this.confirmBtn);
      this.messageContent.appendChild(this.messageHeader);
      this.messageContent.appendChild(this.messageBody);
      this.messageContent.appendChild(this.messageBtnWrapper);

      this.messageWrapper.appendChild(this.messageContent);
      document.body.appendChild(this.messageWrapper);
      document.body.appendChild(this.layer);
      // 锁定滑轮
      document.body.style.overflow = 'hidden';

    }
    private generateConfirmMessage(message: ConfirmMessageConfig) {
      // confirm 事件挂载
      this.confirmBtn.onclick = () => {
        this.destroy();
        // 滑轮解锁
        document.body.style.overflow = 'auto';
        message.resolve('confirm');
      };
      // cancel 事件挂载
      this.cancelBtn.onclick = () => {
        this.destroy();
        // 滑轮解锁
        document.body.style.overflow = 'auto';
        message.reject('cancel');
      };
      // 挂载
      this.messageHeader.innerHTML = message.title;
      this.messageBody.innerHTML = message.message;
      this.confirmBtn.innerHTML = message.confirmBtnText;
      this.confirmBtn.style.padding = '12px 40px';
      this.confirmBtn.style.color = 'var(--second-color)';
      this.cancelBtn.innerHTML = message.cancelBtnText;
      this.cancelBtn.style.padding = '12px 40px';
      this.cancelBtn.style.color = 'var(--error-color)';
      this.messageBtnWrapper.appendChild(this.cancelBtn);
      this.messageBtnWrapper.appendChild(this.confirmBtn);
      this.messageContent.appendChild(this.messageHeader);
      this.messageContent.appendChild(this.messageBody);
      this.messageContent.appendChild(this.messageBtnWrapper);

      this.messageWrapper.appendChild(this.messageContent);
      document.body.appendChild(this.messageWrapper);
      document.body.appendChild(this.layer);
      // 锁定滑轮
      document.body.style.overflow = 'hidden';
    }
    private generatePromptMessage(message: PromptMessageConfig) {
      const messageBodyText = generateElement('p');
      const messageInput = generateElement('input', 'neumorphic-input') as HTMLInputElement;
      const confirmEvent = () => {
        message.resolve(messageInput.value);
        // 滑轮解锁
        document.body.style.overflow = 'auto';
        this.destroy();
      };
      messageInput.addEventListener('keydown', (event) => {
        // tslint:disable-next-line:no-unused-expression
        event.code === 'Enter' ? confirmEvent() : () => (messageInput.focus());
      });
      // confirm 事件挂载
      this.confirmBtn.onclick = confirmEvent;
      // cancel 事件挂载
      this.cancelBtn.onclick = () => {
        this.destroy();
        // 滑轮解锁
        document.body.style.overflow = 'auto';
        message.reject('cancel');
      };
      // 窗口一弹出 input 获取焦点
      this.messageWrapper.onmouseenter = () => {
        messageInput.focus();
      };
      // 挂载
      this.messageHeader.innerHTML = message.title;
      messageBodyText.innerHTML = message.message;
      messageInput.style.width = '330px';
      this.messageBody.appendChild(messageBodyText);
      this.messageBody.appendChild(messageInput);

      this.confirmBtn.innerHTML = message.confirmBtnText;
      this.confirmBtn.style.padding = '12px 40px';
      this.confirmBtn.style.color = 'var(--second-color)';
      this.cancelBtn.innerHTML = message.cancelBtnText;
      this.cancelBtn.style.padding = '12px 40px';
      this.cancelBtn.style.color = 'var(--error-color)';
      this.messageBtnWrapper.appendChild(this.cancelBtn);
      this.messageBtnWrapper.appendChild(this.confirmBtn);
      this.messageContent.appendChild(this.messageHeader);
      this.messageContent.appendChild(this.messageBody);
      this.messageContent.appendChild(this.messageBtnWrapper);

      this.messageWrapper.appendChild(this.messageContent);
      document.body.appendChild(this.messageWrapper);
      document.body.appendChild(this.layer);
      // 锁定滑轮
      document.body.style.overflow = 'hidden';
    }


}
export default MessageBox.getInstance();
