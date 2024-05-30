# Kennissessie signals in Angular 17.3+

## Introductie

### Wat zijn signals?

A signal is a wrapper around a value that can notify interested consumers when that value changes.

Signals can be mutable, computed based on other signals' values, and changes to them can be hooked into to trigger any side effect.

### Waarom signals?

#### Better change detection

There are two change detection strategies in Angular: Default and OnPush.

Default works like this:
- Change detection is triggered (any input changes, any async browser event is triggered)
- Angular visits _EVERY_ rendered component
- Angular checks if the expressions in the components template have changed
- Any changed components are rerendered

OnPush works like this:
- Change detection is triggered (any input changes, any async browser event is triggered)
- Angular _only_ visits components that triggered change detection
- Angular checks if any attributes on the component have changed with `===`
- Any changed components are rerendered

There are some downsides:

- Only async events that are patched by zone.js are supported. E.g. fetch, setTimeout and MutationObserver work, but IndexedDb does not.
- Both stra
- Default strategy always works, but is very inefficient for large applications

## Signals in vogelvlucht

### signal

### input (en output)

### model

## RxJS interop

- toSignal en toObservable
- outputFromObservable

## Immutability

- Waarom belangrijk
- [...rest] en {...rest}
- Muteren met Immer


## Extras

Signal queries (viewChild, viewChildren, contentChild, contentChildren)
