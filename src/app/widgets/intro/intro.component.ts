import { Component } from '@angular/core';
@Component({
  selector: 'nes-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  features = [
    {
      title: 'INVEST',
      description:
        'Our journey begins with a simple and secure investment in carefully selected real estate properties. Our team of experts, including a seasoned lawyer in Spain, ensures that every investment is meticulously structured for your peace of mind.',
      imageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
    },
    {
      title: 'EARN',
      description: 'With your investment, you\'re not just a spectator; you\'re an active participant. Through long-term renting, you can enjoy periodic income that steadily flows into your account, allowing you to reap the benefits of your investment.',
      imageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
    },
    {
      title: 'OWN',
      description: 'The dream of property ownership becomes a reality. As an investor, you have the opportunity to become a proud owner of these exquisite properties, securing your financial future while basking in the beauty of Spain Island',
      imageUrl:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
    },
  ];
}
