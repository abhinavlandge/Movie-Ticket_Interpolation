import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  movieName = "Spiderman No Way Home";
  avltickets = 104



 cancel(){
   this.avltickets = this.avltickets + 1 ;
  
   console.log("available tickets : ", this.avltickets)
  
 }


 book(){
   this.avltickets = this.avltickets - 1 ;
   console.log("available tickets : ", this.avltickets)
  
 }



}
