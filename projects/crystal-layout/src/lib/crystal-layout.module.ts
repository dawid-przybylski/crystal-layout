import { NgModule  } from '@angular/core';
import { CrystalLayoutComponent } from './crystal-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ViewComponent } from './components/view/view.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CrystalLayoutComponent, HeaderComponent, ContentComponent, ViewComponent],
  imports: [BrowserModule 
  ],
  exports: [CrystalLayoutComponent]
})
export class CrystalLayoutModule { }
