export class SocialMedia {
    name: string;
    class: string;
    img: string;
  }

export class SocialMediasConstant {
    static socialMedias: Array<SocialMedia> = [
    { 
      name: 'Facebook', 
      class: 'facebook',
      img: '../../../assets/img/facebook.png'
    },
    { 
      name: 'Twitter',
      class: 'twitter',
      img: '../../../assets/img/twitter.png'
    },
    { 
      name: 'Instagram',
      class: 'instagram',
      img: '../../../assets/img/instagram.png'
    }
  ];
}