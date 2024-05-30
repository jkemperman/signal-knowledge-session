import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CheckboxButtonComponent } from './checkbox-button/checkbox-button.component';

@Component({
  selector: 'app-model-example',
  standalone: true,
  templateUrl: './model-example.component.html',
  styleUrl: './model-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckboxButtonComponent],
})
export class ModelExampleComponent {
  showMessage = signal(false);
}
