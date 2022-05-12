import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'in-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InSelectComponent {
  @ViewChild(NgSelectComponent) wrappedComponent!: NgSelectComponent;
  @Input() items: any = [];

  selectedItem: any;
}

@NgModule({
  imports: [CommonModule, NgSelectModule, FormsModule],
  declarations: [InSelectComponent],
  exports: [InSelectComponent],
})
export class InSelectComponentModule {}

