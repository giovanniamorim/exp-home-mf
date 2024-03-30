import { Component } from '@angular/core';
import { assetUrl } from "src/single-spa/asset-url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
// Works great with single-spa
public imageUrl = assetUrl("appcliente.webp");
  
}
