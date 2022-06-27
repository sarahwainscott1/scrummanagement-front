import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TeammemberListComponent } from './teammembers/teammember-list/teammember-list.component';
import { TeammemberCreateComponent } from './teammembers/teammember-create/teammember-create.component';
import { TeammemberEditComponent } from './teammembers/teammember-edit/teammember-edit.component';
import { TeammemberDetailComponent } from './teammembers/teammember-detail/teammember-detail.component';
import { MenuComponent } from './misc/menu/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './teammembers/login/login.component';
import { ListComponent } from './coaching/list/list.component';
import { DetailComponent } from './coaching/detail/detail.component';
import { EditComponent } from './coaching/edit/edit.component';
import { CreateComponent } from './coaching/coach-create/create.component';
import { TeammemberCoachingComponent } from './teammembers/teammember-coaching/teammember-coaching.component';
import { StrengthlistCreateComponent } from './strengthlist/strengthlist-create/strengthlist-create.component';
import { StrengthlistEditComponent } from './strengthlist/strengthlist-edit/strengthlist-edit.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
import { TeamChangeComponent } from './team/team-change/team-change.component';
import { TeamlistCreateComponent } from './teamlist/teamlist-create/teamlist-create.component';
import { TeamlistEditComponent } from './teamlist/teamlist-edit/teamlist-edit.component';
import { MyteamDetailComponent } from './team/myteam-detail/myteam-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { StoryCreateComponent } from './story/story-create/story-create.component';
import { StoryEditComponent } from './story/story-edit/story-edit.component';
import { SprintCreateComponent } from './sprint/sprint-create/sprint-create.component';
import { SprintEditComponent } from './sprint/sprint-edit/sprint-edit.component';
import { SprintListComponent } from './sprint/sprint-list/sprint-list.component';
import { SprintDetailComponent } from './sprint/sprint-detail/sprint-detail.component';
import { StoryListComponent } from './story/story-list/story-list.component';
import { StoryDetailComponent } from './story/story-detail/story-detail.component';
import { SprintListEditComponent } from './sprintList/sprint-list-edit/sprint-list-edit.component';
import { SprintListCreateComponent } from './sprintList/sprint-list-create/sprint-list-create.component';
import { MysprintDetailComponent } from './sprint/mysprint-detail/mysprint-detail.component';
import { DailyscrumCreateComponent } from './dailyscrum/dailyscrum-create/dailyscrum-create.component';
import { DailyscrumDetailComponent } from './dailyscrum/dailyscrum-detail/dailyscrum-detail.component';
import { DailyscrumEditComponent } from './dailyscrum/dailyscrum-edit/dailyscrum-edit.component';
import { DailyscrumListComponent } from './dailyscrum/dailyscrum-list/dailyscrum-list.component';
import { SortPipe } from './misc/pipes/sort.pipe';
import { TeamSearchPipe } from './misc/pipes/team-search.pipe';
import { TeamlistSearchPipe } from './misc/pipes/teamlist-search.pipe';
import { ProductlistSearchPipe } from './misc/pipes/productlist-search.pipe';
import { DailyscrumSearchPipe } from './misc/pipes/dailyscrum-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeammemberListComponent,
    TeammemberCreateComponent,
    TeammemberEditComponent,
    TeammemberDetailComponent,
    MenuComponent,
    LoginComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    CreateComponent,
    TeammemberCoachingComponent,
    StrengthlistCreateComponent,
    StrengthlistEditComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamCreateComponent,
    TeamChangeComponent,
    TeamlistCreateComponent,
    TeamlistEditComponent,
    MyteamDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    StoryCreateComponent,
    StoryEditComponent,
    SprintCreateComponent,
    SprintEditComponent,
    SprintListComponent,
    SprintDetailComponent,
    StoryListComponent,
    StoryDetailComponent,
    SprintListEditComponent,
    SprintListCreateComponent,
    MysprintDetailComponent,
    DailyscrumCreateComponent,
    DailyscrumDetailComponent,
    DailyscrumEditComponent,
    DailyscrumListComponent,
    SortPipe,
    TeamSearchPipe,
    TeamlistSearchPipe,
    ProductlistSearchPipe,
    DailyscrumSearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
