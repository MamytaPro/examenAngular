import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { TimeLineComponentComponent } from './time-line-component/time-line-component.component';
import { AcceuilComponentComponent } from './acceuil-component/acceuil-component.component';

const routes: Routes = [
 { path:'',component:AcceuilComponentComponent   },
 { path:'chat',component:ChatComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
