//import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex';

import { IMergedState } from './store/interfaces';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IMergedState>;
  }
}
