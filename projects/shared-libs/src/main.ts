/*
 * Public API Surface of shared-libs
 */

export * from './state/core.actions';
export * from './state/core.effects';
export * from './state/core.reducer';
export * from './state/core.selectors';
export * from './state/state.module';

let _data: string;

export function setData(data: string): void {
    _data = data;
}

export function getData(): string {
    return _data;
}
