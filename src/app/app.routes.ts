import { Routes } from '@angular/router';
import { ComputedExampleComponent } from './examples/computed-example/computed-example.component';
import { SignalExampleComponent } from './examples/signal-example/signal-example.component';
import { SignalMutationExampleComponent } from './examples/signal-mutation-example/signal-mutation-example.component';
import { ObservableToSignalExampleComponent } from './examples/observable-to-signal-example/observable-to-signal-example.component';
import { SignalToObservableExampleComponent } from './examples/signal-to-observable-example/signal-to-observable-example.component';
import { InputExampleComponent } from './examples/input-example/input-example.component';
import { OutputExampleComponent } from './examples/output-example/output-example.component';
import { ModelExampleComponent } from './examples/model-example/model-example.component';
import { ExamplesComponent } from './examples/examples.component';
import { EffectExampleComponent } from './examples/effect-example/effect-example.component';
import { OutputFromObservableExampleComponent } from './examples/output-from-observable-example/output-from-observable-example.component';

export const exampleRoutes = [
  {
    title: 'Simple signal',
    path: 'signal',
    component: SignalExampleComponent,
  },
  {
    title: 'Computed signal',
    path: 'computed',
    component: ComputedExampleComponent,
  },
  {
    title: 'Mutating signals',
    path: 'signal-mutation',
    component: SignalMutationExampleComponent,
  },
  {
    title: 'Effects',
    path: 'effect',
    component: EffectExampleComponent,
  },
  {
    title: 'Observable to Signal',
    path: 'observable-to-signal',
    component: ObservableToSignalExampleComponent,
  },
  {
    title: 'Signal to Observable',
    path: 'signal-to-observable',
    component: SignalToObservableExampleComponent,
  },
  {
    title: 'Input',
    path: 'input-example',
    component: InputExampleComponent,
  },
  {
    title: 'Output',
    path: 'output-example',
    component: OutputExampleComponent,
  },
  {
    title: 'Output from observable',
    path: 'output-from-observable-example',
    component: OutputFromObservableExampleComponent,
  },
  {
    title: 'Model',
    path: 'model-example',
    component: ModelExampleComponent,
  },
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/examples',
    pathMatch: 'full',
  },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: exampleRoutes,
  },
];
