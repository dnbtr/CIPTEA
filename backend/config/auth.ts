/**
 * Config source: https://git.io/JvyKy
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import { AuthConfig } from '@ioc:Adonis/Addons/Auth';

const authConfig: AuthConfig = {
  guard: 'web',
  list: {
    web: {
      driver: 'session',

      // provider.uids tem email e username para permitir login com qualquer um dos dois
      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['email', 'username'],
        model: () => import('App/Models/User'),
      },
    },
  },
};

export default authConfig;
