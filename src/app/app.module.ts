import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsService } from './forms.service';
import { ClassComponent } from './class/class.component';
import { PipesPipe } from './pipes.pipe';
import { FilterPipe } from './filter.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { TrainerComponent } from './trainer/tariner.component';
import { AddeditstudentComponent } from './student/addeditstudent/addeditstudent.component';



const route: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'class', component: ClassComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'student', component: StudentComponent },
  { path: 'trainer', component: TrainerComponent },
   {path: 'addeditstudent', component: AddeditstudentComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: '**', redirectTo: '/signin' }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ClassComponent,
    PipesPipe,
    FilterPipe,
    OrderbyPipe,
    DashboardComponent,
    StudentComponent,
    TrainerComponent,  
   AddeditstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // FormsModule,
    // RouterModule.forRoot(route)
    RouterModule.forRoot(route)
  ],
  // providers: [],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
