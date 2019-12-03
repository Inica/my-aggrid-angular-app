import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [
        MatButtonModule,
        MatRippleModule,
        MatIconModule,
        MatInputModule
    ]
})
export class MaterialModule { }
