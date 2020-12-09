import { AppRouteProps } from '@ice/stark/lib/AppRoute';

export interface IAppRouter {
  ErrorComponent?: React.ComponentType;
  LoadingComponent?: React.ComponentType;
  NotFoundComponent?: React.ComponentType;
  shouldAssetsRemove?: (
    assetUrl?: string,
    element?: HTMLElement | HTMLLinkElement | HTMLStyleElement | HTMLScriptElement,
  ) => boolean;
}

export interface IGetApps {
  (): AppRouteProps[] | Promise<AppRouteProps[]>;
}