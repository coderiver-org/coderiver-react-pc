import { AnyAction, Dispatch, Reducer } from 'redux';
import { History } from 'history';


export interface ReducersMapObject<T> {
  [key: string]: (api: ReducerPayload<T>) => T;
}

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;
export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
export type EffectWithType = [Effect, { type: EffectType }];
export type Subscription = (api: SubscriptionAPI, done: Function) => void;
export type ReducersMapObjectWithEnhancer<T> = [ReducersMapObject<T>, ReducerEnhancer];

export interface ReducerEnhancer {
  (reducer: Reducer<any>): void;
}

export interface EffectsCommandMap {
  put: <A extends AnyAction>(action: A) => any;
  call: Function;
  select: Function;
  take: Function;
  cancel: Function;

  [key: string]: any;
}

export interface MyReducer<T> extends AnyAction {
  // type: string;
  // payload?: object;
}

export interface ReducerPayload<T> {
  state: T;
  action: MyReducer<T>;
}

export interface EffectsPayload<T> {
  callback: Function;
  payload: T;
}

export interface EffectsMapObject<T> {
  [key: string]: (payload: EffectsPayload<T>, saga: EffectsCommandMap) => void;
}

export interface SubscriptionAPI {
  history: History;
  dispatch: Dispatch<any>;
}

export interface SubscriptionsMapObject {
  [key: string]: Subscription;
}

export interface Model<T = any> {
  namespace: string;
  state?: T;
  reducers?: ReducersMapObject<T> | ReducersMapObjectWithEnhancer<T> | any;
  effects?: EffectsMapObject<T> | EffectWithType;
  subscriptions?: SubscriptionsMapObject;
}
