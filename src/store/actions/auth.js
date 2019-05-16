/**
 * @format
 * @flow
 */
import type { Action } from '@/types/store';

import { TRY_AUTH } from '@/store/actions/actionTypes';

export const tryAuth = (authData: Object): Action => {
  return {
    type: TRY_AUTH,
    authData,
  };
};
