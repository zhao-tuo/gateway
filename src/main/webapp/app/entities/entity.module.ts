import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { GatewayCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { GatewayLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { GatewayDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { GatewayTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { GatewayEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { GatewayJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { GatewayJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GatewayRegionMySuffixModule,
        GatewayCountryMySuffixModule,
        GatewayLocationMySuffixModule,
        GatewayDepartmentMySuffixModule,
        GatewayTaskMySuffixModule,
        GatewayEmployeeMySuffixModule,
        GatewayJobMySuffixModule,
        GatewayJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntityModule {}
