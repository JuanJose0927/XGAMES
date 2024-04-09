import { Component } from '@angular/core';
import { style, transition, trigger, animate, state} from '@angular/animations';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(900, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ClothesComponent {

  clothes = [
    {
      id: 1,
      name: 'T-shirt',
      price: '$ 100.000',
      image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91rdemnACUL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 1,
      name: 'T-shirt',
      price: '$ 100.000',
      image: 'https://ih1.redbubble.net/image.5037570197.8516/ssrco,slim_fit_t_shirt,womens,101010:01c5ca27c6,front,square_product,600x600.jpg'
    },
    {
      id: 1,
      name: 'T-shirt',
      price: '$ 100.000',
      image: 'https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C81SXD2E6OGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 1,
      name: 'T-shirt',
      price: '$ 100.000',
      image: 'https://m.media-amazon.com/images/I/A1Y9pR+xLfL._CLa%7C2140%2C2000%7C71GbJo9AZGL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png'
    },
    {
      id: 1,
      name: 'T-shirt',
      price: '$ 100.000',
      image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81ID4PSHAtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 2,
      name: 'Pants',
      price: '$ 150.000 COP',
      image: 'https://m.media-amazon.com/images/I/61iDgVDkkYL._AC_UY1000_.jpg'
    },
    {
      id: 2,
      name: 'Pants',
      price: '$ 150.000 COP',
      image: 'https://i.ebayimg.com/images/g/YSMAAOSwvUdg3KwU/s-l1600.jpg'
    },
    {
      id: 2,
      name: 'Pants',
      price: '$ 150.000 COP',
      image: 'https://m.media-amazon.com/images/I/513tGUw-DbL._AC_UY1000_.jpg'
    },
    {
      id: 2,
      name: 'Pants',
      price: '$ 150.000 COP',
      image: 'https://m.media-amazon.com/images/I/61QTZksHyFL._AC_UY1000_.jpg'
    },
    {
      id: 2,
      name: 'Pants',
      price: '$ 150.000 COP',
      image: 'https://static.lefties.com/9/photos2/2023/I/0/3/p/5048/751/073/5048751073_2_1_1.jpg?t=1692021612483'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.akquire.ca/wp-content/uploads/2017/11/faintjacketfront.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://i5.walmartimages.com/seo/Bzdaisy-Friday-Night-Funkin-T-shirt-Pants-Set-Trendy-Gaming-Theme-Clothing-Kids-Stylish-Comfortable-Design-Ideal-Children-Aged-4-10-Perfect-Outfit-Ca_c9221ade-aa79-4938-bcd3-f96304db0ec7.7d88203e7d910b977b21e0b3a98bf0f8.jpeg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.gap.com/webcontent/0053/902/432/cn53902432.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.gapcanada.ca/webcontent/0052/479/412/cn52479412.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://i0.wp.com/www.cyberpunkjacket.com/wp-content/uploads/2023/12/Cyberpunk-2077-Premium-Hooded-Samurai-Gaming-Red-Leather-Jacket-3.webp?fit=1140%2C1126&ssl=1'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://media.karousell.com/media/photos/products/2020/9/7/call_of_duty_garena_gaming_jac_1599476644_950bd4a7.jpg'
    }
  ]
}
