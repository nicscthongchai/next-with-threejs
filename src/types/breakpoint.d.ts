declare type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

declare interface BreakpointState {
  width: number;
  height: number;
  currentBreakpoint: Breakpoint;
  breakpoints: Record<Breakpoint, boolean>;
  config: Record<Breakpoint, string>;
}
