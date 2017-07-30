
error TS2602: JSX element implicitly has type 'any' because the global type 'JSX.Element' does not exist.
----
https://stackoverflow.com/questions/37674017/error-ts2602-jsx-element-implicitly-has-type-any-because-the-global-type-jsx
# Location
tsc
# Reason
@types/react breaks with 2.4.1
# Solution
`typings install react`
```
+interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }
-class Component<P, S> extends ComponentLifecycle<P, S> {
+class Component<P, S> {
```
# Reason
expect string but JSX.Element was provided.
# Solution
```tsconfig.json
"noImplicitAny": false,
```

error TS2307: Cannot find module `@angular/core` and other `@angular` modules
----
# Location
tsc
# Reason
Typescript's module resolution
# Solution
```tsconfig.json 
"moduleResolution": "node",
```

incorrectly implements interface
----
# Location
tsc
# Description
```
node_modules/@angular/core/src/change_detection/differs/default_iterable_differ.d.ts(2,22): error TS2420: Class 'DefaultIterableDifferFactory' incorrectly implements interface 'IterableDifferFactory'.
  Types of property 'create' are incompatible.
    Type '<V>(trackByFn?: TrackByFunction<V> | undefined) => DefaultIterableDiffer<V>' is not assignable to type '{ <V>(trackByFn?: TrackByFunction<V> | undefined): IterableDiffer<V>; <V>(_cdr?: ChangeDetectorRe...'.
      Type 'DefaultIterableDiffer<any>' is not assignable to type 'IterableDiffer<any>'.
        Types of property 'diff' are incompatible.
```
https://github.com/angular/angular/issues/17863
# Reason 
angular/@core breaks with Typescript 2.4.1
# Solution
```tsconfig.json 
"skipLibCheck": true
```

Uncaught reflect-metadata shim is required when using class decorators
----
# Location
Browser
# Reason
 the main.js is loaded before the polyfills.js.
# Solution
`import 'core-js/es7/reflect';` before `main.ts`

Uncaught (in promise) Error: Angular requires Zone.js prolyfill.
# Location
Browser
----
# Solution
`import 'zone.js/dist/zone';` before `main.ts`

