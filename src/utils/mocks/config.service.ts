const mockedConfigService = {
  get(key: string) {
    switch (key) {
      case 'JWT_EXPRIRATION_TIME':
        return '86400';
    }
  },
};

export default mockedConfigService;
