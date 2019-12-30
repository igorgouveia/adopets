import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule, NzSpinModule, NzAlertModule, NzButtonModule, NzResultModule } from 'ng-zorro-antd';

@NgModule({
    imports: [SearchRoutingModule, FormsModule, NzGridModule, NzPaginationModule, CommonModule, NzResultModule, NzCardModule, NzDropDownModule, NzSpinModule, NzAlertModule, NzButtonModule],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})
export class SearchModule {

}
