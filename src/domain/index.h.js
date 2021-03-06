//@flow

import type {CompositeName} from '../compositeName'
import type {Subscription} from '../effector/index.h'
import type {Event} from 'effector/event'
import type {Effect} from 'effector/effect'
import type {Store, StoreConfig} from 'effector/store'
import type {kind} from 'effector/stdlib'

export type Domain = {
  /*:: +*/ id: string,
  onCreateEvent(hook: (newEvent: Event<any>) => any): Subscription,
  onCreateEffect(hook: (newEffect: Effect<any, any, any>) => any): Subscription,
  onCreateStore(hook: (newStore: Store<any>) => any): Subscription,
  onCreateDomain(hook: (newDomain: Domain) => any): Subscription,
  event<Payload>(name?: string): Event<Payload>,
  effect<Params, Done, Fail>(
    name?: string,
    config?: {handler?: (params: Params) => Promise<Done> | Done, ...},
  ): Effect<Params, Done, Fail>,
  domain(name?: string): Domain,
  store<State>(defaultState: State, config?: StoreConfig): Store<State>,
  compositeName: CompositeName,
  getType(): string,
  kind: kind,
}

export type DomainHooks = {
  domain: Event<Domain>,
  effect: Event<Effect<any, any, any>>,
  event: Event<Event<any>>,
  store: Event<Store<any>>,
}
