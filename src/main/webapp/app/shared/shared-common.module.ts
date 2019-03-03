import { NgModule } from '@angular/core';

import { MusicRoadSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MusicRoadSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MusicRoadSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MusicRoadSharedCommonModule {}
