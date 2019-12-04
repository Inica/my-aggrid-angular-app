import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    exports: [
        MatButtonModule,
        MatRippleModule,
        MatIconModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
