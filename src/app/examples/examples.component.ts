import { ChangeDetectionStrategy, Component } from '@angular/core';
import { exampleRoutes } from '../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesComponent {
  routes = exampleRoutes;
}
