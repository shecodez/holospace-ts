declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare var process: {
  env: {
    NODE_ENV: string;
  };
};
