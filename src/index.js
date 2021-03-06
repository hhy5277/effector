//@flow

/*
 * People assume that time is a strict progression of cause to effect,
 * but actually from a non-linear, non-subjective viewpoint - 
 * it's more like a big ball of wibbly wobbly time-y wimey stuff
 */

export {combine, sample} from './effector'

export type {Domain} from 'effector/domain'
export {createDomain} from 'effector/domain'

export type {Event} from 'effector/event'
export {createEvent, forward, fromObservable} from 'effector/event'

export type {Effect} from 'effector/effect'
export {createEffect} from 'effector/effect'

export type {Store} from 'effector/store'
export {
  createStore,
  createStoreObject,
  setStoreName,
  extract,
  createApi,
  restore,
  restoreEvent,
  restoreEffect,
  restoreObject,
  withProps,
} from 'effector/store'

export {
  Kind,
  isUnit,
  isStore,
  isEvent,
  isEffect,
  isDomain,
} from 'effector/stdlib'
export type {kind} from 'effector/stdlib'

export {default as invariant} from 'invariant'
export {default as warning} from 'warning'
export {version} from 'effector/flags'
