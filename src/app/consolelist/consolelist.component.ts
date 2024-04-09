import { Component} from '@angular/core';
import { style, transition, trigger, animate, state} from '@angular/animations';

@Component({
  selector: 'app-consolelist',
  templateUrl: './consolelist.component.html',
  styleUrls: ['./consolelist.component.scss'],
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
export class ConsolelistComponent{
  consoles = [
    {
      name: 'PlayStation 5',
      image: 'https://png.pngtree.com/background/20230610/original/pngtree-new-playstation-console-sitting-on-a-black-surface-picture-image_3023466.jpg'
    },
    {
      name: 'Pc Gamer',
      image: 'https://falabella.scene7.com/is/image/FalabellaCO/gsc_123236618_3610304_1?wid=800&hei=800&qlt=70'
    },
    {
      name: 'Xbox Series X',
      image: 'https://i.blogs.es/d13089/xbox2/450_1000.jpeg'
    },
    {
      name: 'PlayStation 4',
      image: 'https://png.pngtree.com/background/20230525/original/pngtree-black-playstation-series-playstation-4-standing-on-a-dark-surface-picture-image_2733861.jpg'
    },
    {
      name: 'Nintendo Switch',
      image: 'https://i.pinimg.com/736x/6a/78/24/6a7824ee020fa0d9e6933aa3e4ffc226.jpg'
    },
    {
      name: 'Xbox Series S',
      image: 'https://assets.xboxservices.com/assets/3b/25/3b258e75-be22-4f8a-91ef-5c46a8b8286e.jpg?n=3987150_Super-Hero-1400_1920x1080.jpg'
    },
    {
      name: 'Xbox One',
      image: 'https://png.pngtree.com/background/20230519/original/pngtree-black-xbox-one-is-sitting-in-front-of-a-table-picture-image_2668211.jpg'
    },
    {
      name: 'X Box 360',
      image: 'https://c8.alamy.com/compes/b40rpm/xbox-360-video-game-controller-por-microsoft-sobre-un-fondo-negro-b40rpm.jpg'
    },
    {
      name: 'PlayStation 3',
      image: 'https://s0.smartresize.com/wallpaper/865/460/HD-wallpaper-ps3-coolness-darkness-game-playstation-3-console.jpg'
    },
    {
      name: 'PlayStation 2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PS2-Fat-Console-Set.png/1200px-PS2-Fat-Console-Set.png'
    },
    {
      name: 'Play Station Portable (PSP)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Psp-1000.jpg/1200px-Psp-1000.jpg'
    },
    {
      name: 'PS vita',
      image: 'https://http2.mlstatic.com/D_NQ_NP_629010-MCO48637162997_122021-O.webp'
    },
    {
      name: 'Play Station Portable Go (PSP Go)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PSPGo_-_Piano_Black.png/1200px-PSPGo_-_Piano_Black.png'
    },
    {
      name: 'Play Station',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1200px-PSX-Console-wController.png'
    },
    {
      name: 'Xbox',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Xbox-Console-wDuke-L.jpg'
    },
    {
      name: 'PlayStation VR',
      image: 'https://gmedia.playstation.com/is/image/SIEPDC/psvr-product-thumbnail-01-en-14sep21?$facebook$'
    },
    {
      name: 'Wii',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Wii_console.png/1200px-Wii_console.png'
    },
    {
      name: 'Wii U',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/800px-Wii_U_Console_and_Gamepad.png'
    },
    {
      name: 'Nintendo 3DS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nintendo-3DS-AquaOpen.png/1200px-Nintendo-3DS-AquaOpen.png'
    },
  ]
}
