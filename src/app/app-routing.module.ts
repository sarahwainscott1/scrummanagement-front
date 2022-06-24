import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./coaching/coach-create/create.component";
import { EditComponent } from "./coaching/edit/edit.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { MysprintDetailComponent } from "./sprint/mysprint-detail/mysprint-detail.component";
import { SprintCreateComponent } from "./sprint/sprint-create/sprint-create.component";
import { SprintDetailComponent } from "./sprint/sprint-detail/sprint-detail.component";
import { SprintEditComponent } from "./sprint/sprint-edit/sprint-edit.component";
import { SprintListCreateComponent } from "./sprintList/sprint-list-create/sprint-list-create.component";
import { SprintListEditComponent } from "./sprintList/sprint-list-edit/sprint-list-edit.component";
import { StoryCreateComponent } from "./story/story-create/story-create.component";
import { StoryEditComponent } from "./story/story-edit/story-edit.component";
import { StoryListComponent } from "./story/story-list/story-list.component";
import { StrengthlistCreateComponent } from "./strengthlist/strengthlist-create/strengthlist-create.component";
import { StrengthlistEditComponent } from "./strengthlist/strengthlist-edit/strengthlist-edit.component";
import { MyteamDetailComponent } from "./team/myteam-detail/myteam-detail.component";
import { TeamChangeComponent } from "./team/team-change/team-change.component";
import { TeamCreateComponent } from "./team/team-create/team-create.component";
import { TeamDetailComponent } from "./team/team-detail/team-detail.component";
import { TeamListComponent } from "./team/team-list/team-list.component";
import { TeamlistCreateComponent } from "./teamlist/teamlist-create/teamlist-create.component";
import { LoginComponent } from "./teammembers/login/login.component";
import { TeammemberCoachingComponent } from "./teammembers/teammember-coaching/teammember-coaching.component";
import { TeammemberCreateComponent } from "./teammembers/teammember-create/teammember-create.component";
import { TeammemberDetailComponent } from "./teammembers/teammember-detail/teammember-detail.component";
import { TeammemberEditComponent } from "./teammembers/teammember-edit/teammember-edit.component";
import { TeammemberListComponent } from "./teammembers/teammember-list/teammember-list.component";

const routes: Routes = [
    {path: "", redirectTo: "teammember/login", pathMatch:"full"},

    {path: "teammember/login", component: LoginComponent},
    
    {path: "team/list", component: TeamListComponent},
    {path: "team/create", component: TeamCreateComponent},
    {path: "team/edit/:id", component: TeamChangeComponent},
    {path: "team/detail/:id", component: TeamDetailComponent},

    {path: "myteam/:userid", component: MyteamDetailComponent},

    {path:"teammember/list", component: TeammemberListComponent},
    {path: "teammember/create", component: TeammemberCreateComponent},
    {path: "teammember/edit/:id", component: TeammemberEditComponent},
    {path: "teammember/detail/:id", component: TeammemberDetailComponent},
    {path: "teammember/coaching/:id", component: TeammemberCoachingComponent},

    {path: "teamlist/create", component: TeamlistCreateComponent},

    {path: "strengthlist/create/:id", component: StrengthlistCreateComponent},
    {path: "strengthlist/edit/:id", component: StrengthlistEditComponent},

    {path: "coach/create/:id", component: CreateComponent},

    {path: "product/list", component: ProductListComponent},
    {path: "product/create", component: ProductCreateComponent},
    {path: "product/edit/:id", component: ProductEditComponent},
    {path: "product/detail/:id", component: ProductDetailComponent},

    {path: "story/create/:id", component: StoryCreateComponent},
    {path: "story/edit/:id", component: StoryEditComponent},
    
    {path: "sprint/create/:id", component: SprintCreateComponent},
    {path: "sprint/detail/:id", component: SprintDetailComponent},
    {path: "sprint/edit/:id", component: SprintEditComponent},

    {path: "currentsprint/:id", component: MysprintDetailComponent},

    {path: "sprintList/create/:id", component: SprintListCreateComponent},
    {path: "sprintList/edit/:id", component: SprintListEditComponent},
    
    {path: "**", component: TeammemberListComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}