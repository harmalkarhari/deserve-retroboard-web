import 'styled-components';
import { RxAdhereThemeProps } from '../app/theme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends RxAdhereThemeProps {}
}
