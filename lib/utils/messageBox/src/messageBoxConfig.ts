interface BasicMessageConfig {
  title: string;
  message: string;
  confirmBtnText: string;
}

interface AlertMessageConfig extends BasicMessageConfig {
  callback: (action?: string) => any;
}

interface ConfirmMessageConfig extends BasicMessageConfig {
  cancelBtnText: string;
  resolve: (action: string) => any;
  reject: (action: string) => any;
}

interface PromptMessageConfig extends ConfirmMessageConfig {
  resolve: (value: string) => any;
}

export {
  AlertMessageConfig,
  ConfirmMessageConfig,
  PromptMessageConfig,
};

