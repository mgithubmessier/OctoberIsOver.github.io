export class SocialMedia {
    name: string;
    widget: string;
    class: string;
    img: string;
  }

export class SocialMediasConstant {
    static socialMedias: Array<SocialMedia> = [
    { 
      name: 'Facebook', 
      class: 'facebook',
      img: '../../../assets/img/facebook.png',
      widget: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOctoberIsOver%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=775864105922907" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
    },
    { 
      name: 'Twitter',
      class: 'twitter',
      img: '../../../assets/img/twitter.png',
      widget: `<ng4-twitter-timeline [dataSrc]="{sourceType: 'profile',screenName: 'octoberisover'}" [opts]="{width: '500', height: '500'}"></ng4-twitter-timeline>`
    },
    { 
      name: 'Instagram',
      class: 'instagram',
      img: '../../../assets/img/instagram.png',
      widget: '<script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/3a46ac9d6f4e51e4b1357224a97e9dab.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>'
    }
  ];
}