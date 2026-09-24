/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_PORTAL_PIN_HASH?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
