import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { GrowlModule } from "primeng/primeng";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { ModelOverlayQuorumComponent } from './model-overlay-quorum/model-overlay-quorum.component';
import { PopoverModule } from "ngx-popover";

import { MessageService } from '../../../service/message.service';
import { UtilityService } from '../../../service/utility.service';
import { EmailServerConfigurationComponent } from './email-server-configuration/email-server-configuration.component';
import { UploadLogPathComponent } from './upload-log-path/upload-log-path.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TooltipModule,
        GrowlModule,
        DialogModule,
        ButtonModule,
        FileUploadModule,
        MultiSelectModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        PopoverModule
    ],

    declarations: [HeaderComponent, ModelOverlayQuorumComponent, EmailServerConfigurationComponent, UploadLogPathComponent],
    exports: [HeaderComponent],
    providers: [MessageService, UtilityService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HeaderModule { }
