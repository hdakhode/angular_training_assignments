import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-directive-component',
  template:`
    <table>
       <tr>
         <td>
           <input type="radio" name="r" value="red" (click)="selectColor('red')"/> Red
         </td>
         <td>
           <input type="radio" name="r" value="yellow" (click)="selectColor('yellow')"/> Yellow
         </td>
         <td>
           <input type="radio" name="r" value="blue" (click)="selectColor('blue')"/> Blue
         </td>
       </tr>
    </table>
    <hr/>

    <div [setColor]='color'>
      The First Div
    </div>
    <br/>
    <div [setColor]='color'>
      The Second Div
    </div>
    <br/>
    <div [setColor]='color'>
      The Third Div
    </div>

  `

})
export class ColorDirectiveComponent implements OnInit {
  color: string;
  constructor() {
    this.color = '';
  }
  selectColor(c: string): void {
     this.color = c;
  }
  ngOnInit(): void { }
}
