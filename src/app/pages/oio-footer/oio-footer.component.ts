import { Component, OnInit, Sanitizer } from '@angular/core';

class SocialMedia {
  name: string;
  widget: string;
  class: string;
  img: string;
}

@Component({
  selector: 'oio-footer',
  templateUrl: './oio-footer.component.html',
  styleUrls: ['./oio-footer.component.scss']
})
export class OioFooterComponent implements OnInit {
  sanitizer: Sanitizer;
  socialMedias: Array<SocialMedia> = [
    { 
      name: 'Facebook', 
      class: 'facebook',
      img: '../../../assets/img/facebook.png',
      widget: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
    },
    { 
      name: 'Twitter',
      class: 'twitter',
      img: '../../../assets/img/twitter.png',
      widget: '<a class="twitter-timeline" href="https://twitter.com/octoberisover" data-width="500px" data-height="500px">Tweets by @octoberisover</a>'
    },
    { 
      name: 'Instagram',
      class: 'instagram',
      img: '../../../assets/img/instagram.png',
      widget: '<script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/3a46ac9d6f4e51e4b1357224a97e9dab.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>'
    }
  ];

  constructor(sanitizer: Sanitizer) { 
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
  }

  onClick(event, name: string) {
    console.log(name);
  }
}
