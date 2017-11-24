import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { TwitterTimelineService } from './twitter-timeline.service';
@Component({
  selector: 'twitter-timeline',
  template: '',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements AfterViewInit {
  @Input() dataSrc: object;
  @Input() opts: object;
  constructor(private element: ElementRef,private twitterTimelineService : TwitterTimelineService) { }

  ngAfterViewInit()
  {
    //MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
    this.twitterTimelineService.LoadScript().subscribe 
    (
      //SUCCESS, WE HAVE TWITTER WIDGETS JS FILE LOADED...
      twttr =>
      {
        let nativeElement = this.element.nativeElement;

        window['twttr'].widgets.createTimeline(this.dataSrc, nativeElement, this.opts).then
        (
          function success(embed) 
          {
            console.log('Created tweet widget: ', embed);
          } 
        ).catch
        (
          function creationError(message) 
          {
            console.log('Could not create widget: ', message);
          }
        );
      },

      //ERROR
      err =>
      {
        console.log('****  ERROR LOADING TWITTER WIDGET', err);
      },
      
      //COMPLETE
      () =>
      {
      }
    );
  }
}