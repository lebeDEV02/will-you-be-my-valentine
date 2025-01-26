import {Component, inject, OnInit, signal, TemplateRef, ViewChild} from '@angular/core';
import {TuiAppearance, TuiButton, TuiDialogContext, TuiDialogService, TuiDialogSize, TuiTitle} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {TuiCheckbox, TuiConnected, TuiStepper} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import { TuiSurface} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {ChangeDetectionStrategy,} from '@angular/core';
import {TuiButtonClose} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
@Component({
  selector: 'app-date-configurator',
  imports: [
    TuiButton,
    TuiStepper,
    TuiConnected,
    FormsModule,
    TuiTitle,
    TuiButton,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiCheckbox,
    TuiAppearance,
  ],
  templateUrl: './date-configurator.component.html',
  styleUrl: './date-configurator.component.css'
})
export class DateConfiguratorComponent implements OnInit {
  private readonly dialogs = inject(TuiDialogService);

  @ViewChild('content', { static: true }) contentTemplate!: TemplateRef<any>;

  protected activeItemIndex = 0;

  isCafeSelected= false;
  areFlowersSelected= false;
  areAirpodsSelected = false;

  protected showDialog(
    content: PolymorpheusContent<TuiDialogContext>,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        size,
        closeable: false,
      })
      .subscribe();
  }

  ngOnInit(): void {
    this.showDialog(this.contentTemplate, 'fullscreen')
  }

  changeActiveItemIndex(value?: number): void {
    if (!value) {
      this.activeItemIndex += 1;
      return;
    }
      this.activeItemIndex = value;
  }
}
