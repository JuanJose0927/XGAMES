import { Component, OnInit } from '@angular/core';
import { ClotheslistserviceService } from '../service/clotheslistservice.service';
import { style, transition, trigger, animate, state} from '@angular/animations';

@Component({
  selector: 'app-clotheslist',
  templateUrl: './clotheslist.component.html',
  styleUrls: ['./clotheslist.component.scss'],
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
export class ClotheslistComponent implements OnInit{ 

  clotheslist: any[] = []  
  constructor(private clotheslistservice: ClotheslistserviceService) {}
  ngOnInit(): void {
    this.callClothes();
  }
  callClothes() {
    this.clotheslistservice.getGames().subscribe((data) => {
      this.clotheslist = data;
      console.log(this.clotheslist);
    });
  };

  clothesG = [
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
      name: 'Dress',
      price: '$ 200.000 COP',
      image: 'https://i.pinimg.com/236x/c0/ab/1f/c0ab1fbc91705bc96f268e59959ec07c.jpg'
    },
    {
      id: 3,
      name: 'Dress',
      price: '$ 200.000 COP',
      image: 'https://i.pinimg.com/736x/9c/5d/09/9c5d0905e1ff6ce8f46327caa678dbf7.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1d9xDklm9L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71E8rgbFUWL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'Baby',
      price: '$ 200.000 COP',
      image: 'https://i.etsystatic.com/22192421/r/il/09bb50/3107130206/il_570xN.3107130206_3yhw.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.abysm-internal.com/cdn/shop/products/anime-hoodie-street-outfit-japanese-streetwear-gamer-apparel-alternative-clothing-unisex-fox-or-kitsune-mask-red-and-blackabysm-internal-863669.jpg?v=1686685584'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/B14zf5cQ1wS._CLa%7C2140%2C2000%7C91GV5mGYuxL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'Hoddie',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/81oGi-mVVdL._AC_UY1000_.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/B14zf5cQ1wS._CLa%7C2140%2C2000%7CA1O9qEvkdkL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://ih1.redbubble.net/image.2297656123.6015/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/61oj3nhD4xL._AC_UY1100_.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/B1Wsm-8LxOS._CLa%7C2140%2C2000%7CB1A4ywco%2BIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91NP9FDL%2BEL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/71eIFtrljIL._AC_UY1000_.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1SD27Ye1zL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://m.media-amazon.com/images/I/61mQe7oQT7L._AC_UY1000_.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://i5.walmartimages.com/asr/6c90167e-3d8f-405b-a5ed-459688bb6744.65f15d244a5c365a7a4b07e4d6ac8b29.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://dragonballzfigures.com/wp-content/uploads/2023/05/7016-xdfqf0-300x300.jpg'
    },
    {
      id: 3,
      name: 'Skeleton',
      price: '$ 200.000 COP',
      image: 'https://dragonballclothing.com/wp-content/uploads/2023/06/Dragon-ball-piccolo-Tank-top.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://i.pinimg.com/474x/e5/c9/2a/e5c92ad37844dcb924d8eaf5204bd1c5.jpg'
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$ 200.000 COP',
      image: 'https://i5.walmartimages.com/seo/Pac-Man-Official-Pacman-Video-Game-Shirt-Namco-Atari-Official-T-Shirt_4c2bc2de-c4e0-43c6-a810-f8334b6834ff.388a29f0164d8bce539af74c2c61c9ce.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/BE/48/rBVaVF4Kd9aAB0mKAAE3Oz9WX8M388.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://i5.walmartimages.com/seo/Pokemon-Women-s-Pikachu-Blushing-Red-Cheeks-Skimmer-Pullover-Hoodie-XS_0b284b7d-e87f-43ad-8b96-d9b2c189c890.70cf4c84dd9b6ecd566a8bd1082705e1.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://i.ebayimg.com/thumbs/images/g/WQkAAOSwrlhkdRjT/s-l640.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.teesfashionstyle.com/wp-content/uploads/2017/07/GENGAR-Pokemon-Hoodie.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://www.hannaandersson.com/dw/image/v2/BBLM_PRD/on/demandware.static/-/Sites-master-catalog/default/dw524215a2/images/main/80802/80802_WS9_110_01.jpg?sw=369&q=90'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://cdn.europosters.eu/image/750/fashion/naruto-uzumaki-naruto-i124856.jpg'
    },
    {
      id: 3,
      name: 'Jacket',
      price: '$ 200.000 COP',
      image: 'https://media.kohlsimg.com/is/image/kohls/6425968?wid=240&hei=240&op_sharpen=1'
    },
  ]
}
