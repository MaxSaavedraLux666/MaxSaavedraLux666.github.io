import { Injectable, signal } from '@angular/core';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}

  public chatItems = signal<ChatItem[]>([
    {
      profileName: 'Juanca Iwasaki',
      profileImage:
        'https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/03/17/000942245W.jpg',
      message: [
        {
          message: 'Jaze, ¿cómo estás?',
          time: '11:00 a. m.',
          isMe: true,
        },
        {
          message: 'Hola, me encuentro bien, tuve una grabación hoy',
          time: '11:01 a. m.',
          isMe: false,
        },
        {
          message: 'Y tendré una gira de conciertos mañana',
          time: '11:01 a. m.',
          isMe: false,
        },
        {
          message: '¡Qué bien! Te deseo mucha suerte',
          time: '11:01 a. m.',
          isMe: true,
        },
        {
          message: 'Gracias, nos vemos luego',
          time: '11:01 a. m.',
          isMe: false,
        },
      ],
      status: 'Ausente',
    },
    {
      profileName: 'Charlie Parra',
      profileImage:
        'https://www.filarmonia.org/image.axd?picture=2016%2f2%2fDSCN5556+-+web.JPG',
      message: [
        {
          message: 'Hola Charlie, ¿cómo estás?',
          time: '05:00 a. m.',
          isMe: true,
        },
        {
          message: 'Hola, me encuentro bien, gracias por preguntar',
          time: '10:01 a. m.',
          isMe: false,
        },
        {
          message: '¿En qué puedo ayudarte?',
          time: '10:01 a. m.',
          isMe: false,
        },
        {
          message: 'Tengo un problema con mi guitarra',
          time: '10:01 a. m.',
          isMe: true,
        },
        {
          message: '¿Qué problema tienes?',
          time: '10:01 a. m.',
          isMe: false,
        },
        {
          message: 'No suena como antes',
          time: '10:01 a. m.',
          isMe: true,
        },
        {
          message: '¿Has probado con otro cable?',
          time: '10:01 a. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
    {
      profileName: 'Alexis Texas',
      profileImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRAt9N6wLM5QO2kkbhB5mkOnf5mZZFaU19Q&s',
      message: [
        {
          message: 'Hi Texas, how are you?',
          time: '10:00 a. m.',
          isMe: true,
        },
        {
          message: 'Hi, I am fine, thank you for asking',
          time: '10:01 a. m.',
          isMe: false,
        },
        {
          message: 'You know the last video you uploaded was great',
          time: '10:02 a. m.',
          isMe: false,
        },
        {
          message: 'Thank you, I am glad you liked it',
          time: '10:03 a. m.',
          isMe: true,
        },
        {
          message: 'I will be waiting for the next one',
          time: '10:04 a. m.',
          isMe: false,
        },
      ],
      status: 'Desconectado',
    },
    {
      profileName: 'Andrés Grillo',
      profileImage:
        'https://scontent.flim7-1.fna.fbcdn.net/v/t1.6435-9/70760816_2526661937380531_5665255098297614336_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0327a3&_nc_ohc=1mN7C5DAAHYQ7kNvgEH_SnC&_nc_ht=scontent.flim7-1.fna&oh=00_AYDfE1V1Tis9mjtynPI_KdwwX5MLq4oBSE7qLGhUahGWmw&oe=66AE2FF8',
      message: [
        {
          message: 'Hola Grillo, ¿cómo estás?',
          time: '03:43 p. m.',
          isMe: true,
        },
        {
          message: 'Hola, no me hables así, ¿qué necesitas?',
          time: '03:44 p. m.',
          isMe: false,
        },
        {
          message: 'No necesito nada, solo quería que seas mi amigo',
          time: '03:45 p. m.',
          isMe: true,
        },
        {
          message: 'Entiendelo, no quiero ser tu amigo',
          time: '03:46 p. m.',
          isMe: false,
        },
        {
          message: 'Está bien, lo entiendo',
          time: '03:47 p. m.',
          isMe: true,
        },
        {
          message: 'Café marrón: café oscuro como la vida',
          time: '03:48 p. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
    {
      profileName: 'Francisca Aronsson',
      profileImage:
        'https://e.rpp-noticias.io/xlarge/2024/06/26/295229_1603097.webp',
      message: [
        {
          message: 'Pecas, ¿cómo estás?',
          time: '06:45 a. m.',
          isMe: true,
        },
        {
          message: 'Hola, estoy probando la aplicación, ¿y tú?',
          time: '06:46 a. m.',
          isMe: false,
        },
        {
          message: 'Igual, ¿qué tal te parece?',
          time: '06:47 a. m.',
          isMe: false,
        },
        {
          message: 'Me parece muy buena, ¿a ti?',
          time: '06:48 a. m.',
          isMe: true,
        },
        {
          message: 'Me parece igual',
          time: '06:49 a. m.',
          isMe: false,
        },
        {
          message: '¿Quieres hacer una llamada de prueba?',
          time: '06:50 a. m.',
          isMe: true,
        },
        {
          message: 'Claro, ¿a qué hora?',
          time: '06:51 a. m.',
          isMe: false,
        },
      ],
      status: 'En llamada',
    },
    {
      profileName: 'Andy Merino',
      profileImage:
        'https://pbs.twimg.com/media/GHoLv0PWsAAm6CB?format=jpg&name=large',
      message: [
        {
          message: 'Zein, ¿cómo estás?',
          time: '11:34 a. m.',
          isMe: true,
        },
        {
          message:
            'Muy bien mi neto, en estados unidos la estoy pasando muy bien',
          time: '11:35 a. m.',
          isMe: false,
        },
        {
          message: 'Me alegro mucho por ti, espero que te vaya bien',
          time: '11:36 a. m.',
          isMe: true,
        },
        {
          message: 'Gracias, nos vemos luego',
          time: '11:37 a. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
    {
      profileName: 'Luciana Ysuche',
      profileImage:
        'https://i.ytimg.com/vi/WUedSQSyARU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCKcnrrN3Ivs1j1LOvPMql6ew8wTQ',
      message: [
        {
          message: 'Lucianeka, fuiste al pride?',
          time: '10:30 a. m.',
          isMe: true,
        },
        {
          message: 'No, no pude ir, pero me hubiera gustado',
          time: '10:31 a. m.',
          isMe: false,
        },
        {
          message: 'Fue muy divertido, deberías ir la próxima vez',
          time: '10:32 a. m.',
          isMe: true,
        },
        {
          message: 'Lo tomaré en cuenta, gracias por la invitación',
          time: '10:33 a. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
    {
      profileName: 'Darren Jason Watkins',
      profileImage:
        'https://i.namu.wiki/i/-nL9wSpejxeGrLevN0aeN4z3GaE6RA5XEV3e2KB8PWbEEg4zPjzQM29-CxUFuUOejxu7cw0ptKaXrOj_tWeZiA.webp',
      message: [
        {
          message: 'You are a great person',
          time: '04:00 p. m.',
          isMe: true,
        },
        {
          message: 'Thank you, you are a great person too',
          time: '04:01 p. m.',
          isMe: false,
        },
        {
          message: 'I am glad to hear that',
          time: '04:02 p. m.',
          isMe: true,
        },
        {
          message: 'I am glad to hear that too',
          time: '04:03 p. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
    {
      profileName: 'George Kusunoki Miller',
      profileImage:
        'https://scontent.flim7-1.fna.fbcdn.net/v/t39.30808-1/310063955_199586345765925_4243720735949008870_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=1G7WG7qgJlEQ7kNvgHZDjoR&_nc_ht=scontent.flim7-1.fna&oh=00_AYBk9LmInHMKtN4uHPioAqF-8zvph4C_lxv8l6VPJTTArQ&oe=668C9B58',
      message: [
        {
          message: 'Hi, how are you?',
          time: '02:00 a. m.',
          isMe: true,
        },
        {
          message: 'Hi, I am fine, thank you for asking',
          time: '02:01 a. m.',
          isMe: false,
        },
        {
          message: 'How can I help you?',
          time: '02:02 a. m.',
          isMe: false,
        },
        {
          message: 'I need help with my audio base',
          time: '02:03 a. m.',
          isMe: true,
        },
        {
          message: 'I will help you with that',
          time: '02:04 a. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
  ]);
}
