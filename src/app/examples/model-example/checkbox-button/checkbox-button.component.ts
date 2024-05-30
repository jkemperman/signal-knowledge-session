import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
} from '@angular/core';

@Component({
  selector: 'app-checkbox-button',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-button.component.html',
  styleUrl: './checkbox-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxButtonComponent {
  checked = model(false);
  buttonText = computed(() => (this.checked() ? 'Checked' : 'Unchecked'));

  toggleChecked() {
    this.checked.update((checked) => !checked);
  }
}
