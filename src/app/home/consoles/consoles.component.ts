import { Component} from '@angular/core';
import { style, transition, trigger, animate, state} from '@angular/animations';
@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss'],
  // animations: [
  //   trigger('enterState', [
  //     state('void', style({
  //       transform: 'translateX(-100%)',
  //       opacity: 0
  //     })),
  //     transition(':enter', [
  //       animate(900, style({
  //         transform: 'translateX(0)',
  //         opacity: 1
  //       }))
  //     ])
  //   ])
  // ]
})
export class ConsolesComponent{

  consoles = [
    {
      name: 'PlayStation 5',
      description: 'The PlayStation 5 is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020.',
      image: 'https://png.pngtree.com/background/20230610/original/pngtree-new-playstation-console-sitting-on-a-black-surface-picture-image_3023466.jpg'
    },
    {
      name: 'Xbox Series X',
      description: 'The Xbox Series X and Series S are home video game consoles developed by Microsoft. They were both released on November 10, 2020 as the fourth generation of the Xbox console family, succeeding the Xbox One family.',
      image: 'https://i.blogs.es/d13089/xbox2/450_1000.jpeg'
    },
    {
      name: 'PlayStation 4',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://png.pngtree.com/background/20230525/original/pngtree-black-playstation-series-playstation-4-standing-on-a-dark-surface-picture-image_2733861.jpg'
    },
    {
      name: 'Nintendo Switch',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://i.pinimg.com/736x/6a/78/24/6a7824ee020fa0d9e6933aa3e4ffc226.jpg'
    },
    {
      name: 'Xbox Series S',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://assets.xboxservices.com/assets/3b/25/3b258e75-be22-4f8a-91ef-5c46a8b8286e.jpg?n=3987150_Super-Hero-1400_1920x1080.jpg'
    },
    {
      name: 'Xbox One',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://png.pngtree.com/background/20230519/original/pngtree-black-xbox-one-is-sitting-in-front-of-a-table-picture-image_2668211.jpg'
    },
    {
      name: 'X Box 360',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://c8.alamy.com/compes/b40rpm/xbox-360-video-game-controller-por-microsoft-sobre-un-fondo-negro-b40rpm.jpg'
    },
    {
      name: 'PlayStation 3',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://s0.smartresize.com/wallpaper/865/460/HD-wallpaper-ps3-coolness-darkness-game-playstation-3-console.jpg'
    },
    {
      name: 'PlayStation 2',
      description: 'The Nintendo Switch is a video game console developed by Nintendo, released worldwide in most regions on March 3, 2017. It is a hybrid console that can be used as a home console and portable device.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PS2-Fat-Console-Set.png/1200px-PS2-Fat-Console-Set.png'
    }
  ]
}
