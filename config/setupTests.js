/**
 * setup ENV vars
 */
process.env.BASE_PATH = '/api';

export const entitlementsMock = {
  bundle1: {
    is_entitled: false,
    is_trial: false,
  },
  bundle2: {
    is_entitled: true,
    is_trial: false,
  },
};

export const getUserMock = {
  entitlements: { ...entitlementsMock },
  identity: { user: { is_org_admin: true } },
};

// mock insights instance
global.insights = {
  chrome: {
    auth: {
      getUser: () => new Promise((res) => res(getUserMock)),
    },
    appNavClick: () => Promise.resolve(),
    getUserPermissions: () => Promise.resolve([]),
    isBeta: () => true,
    appAction: () => {},
    appObjectId: () => {},
  },
};

Element.prototype.scrollTo = () => {};
