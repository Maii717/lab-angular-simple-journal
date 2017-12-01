import { Routes } from '@angular/router';

import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { EntryListComponent } from './entry-list/entry-list.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: 'phone/:id', component: EntryDetailsComponent },
    { path: '**', redirectTo: '' }
];
