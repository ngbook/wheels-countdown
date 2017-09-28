import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from './wheel/wheel.component';
import { WheelsComponent } from './wheels.component';
import { RangeModule } from '../range';

@NgModule({
    imports: [
        CommonModule,
        RangeModule,
    ],
    exports: [
        WheelComponent,
        WheelsComponent,
    ],
    declarations: [
        WheelComponent,
        WheelsComponent,
    ]
})
export class WheelsModule { }
