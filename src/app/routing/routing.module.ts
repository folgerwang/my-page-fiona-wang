import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { ThirdComponent } from "../third/third.component";
import { FourthComponent } from "../fourth/fourth.component";

const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "about", component: SecondComponent },
  { path: "Hobbies", component: ThirdComponent },
  { path: "Special thanks to...", component: FourthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class RoutingModule {}
