import { Component } from '@angular/core';
import { faAngleRight, faAngleLeft, faCopyright, faAngleDoubleRight, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rightIcon = faAngleRight;
  leftIcon = faAngleLeft;
  doublerightIcon = faAngleDoubleRight;
  copyIcon = faCopyright;
  locationArrow = faLocationArrow;

  flowerList = [
    {
      imgUrl: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Tulips-min-300x200.jpg',
      name: 'Lorum ipsum dolor',
      desc: 'Orciinterdum condimenterdum nullamcorper elit nam curabitur laoreet met praesenean et iaculum.',
    },
    {
      imgUrl: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Dahlias-min-300x200.jpg',
      name: 'Lorum ipsum dolor',
      desc: 'Orciinterdum condimenterdum nullamcorper elit nam curabitur laoreet met praesenean et iaculum.',
    },
    {
      imgUrl: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Marigolds-min-300x170.jpg',
      name: 'Lorum ipsum dolor',
      desc: 'Orciinterdum condimenterdum nullamcorper elit nam curabitur laoreet met praesenean et iaculum.',
    },
  ];
}
