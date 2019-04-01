import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less']
})
export class RatingComponent implements OnInit {

  constructor() { }
    @Input() rating:string;
    @Output() feedBack= new EventEmitter();
    blahblah="";

    onChangeOfBlah(){
      this.blahblah="hihi";
    }
  ngOnInit() {
      console.log(this.rating);
      if(this.rating==='1'){
          this.feedBack.emit('poor');
      }
      
  }

}
