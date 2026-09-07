
import { register } from 'swiper/element/bundle';
register();
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonButtons, IonButton, IonIcon,
  IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard,
  IonCardContent, IonTabBar, IonTabButton, IonLabel
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  menuOutline, notificationsOutline, gridOutline, receiptOutline,
  documentAttachOutline, listOutline, documentTextOutline,
  peopleOutline, settingsOutline, barChartOutline, cartOutline,
  refreshCircleOutline, helpCircleOutline, home, cardOutline, giftOutline
} from 'ionicons/icons';

interface BannerItem {
  title: string;
  desc: string;
  btnText: string;
  bgGradient: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Wajib ditambahkan agar tag <swiper-container> dikenali
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonButtons, IonButton, IonIcon,
    IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard,
    IonCardContent, IonTabBar, IonTabButton, IonLabel
  ]
})
export class DashboardPage implements OnInit {

  // Data 2 Banner
  banners: BannerItem[] = [
    {
      title: 'Ringkasan PM',
      desc: 'Set up payment & transaction in the world smoothly.',
      btnText: 'GET STARTED',
      bgGradient: 'linear-gradient(135deg, #00b4db 0%, #0083b0 50%, #1a237e 100%)',
      icon: 'card-outline'
    },
    {
      title: 'Special Promo Voucher 50%',
      desc: 'Get discount on your next wholesale purchase today!',
      btnText: 'CLAIM VOUCHER',
      bgGradient: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
      icon: 'gift-outline'
    }
  ];

  mainMenus = [
    { title: 'Product', icon: 'grid-outline', routerLink: 'pm' },
    { title: 'Purchase', icon: 'receipt-outline' },
    { title: 'Sales', icon: 'document-attach-outline' },
    { title: 'Voucher', icon: 'list-outline' },
    { title: 'Quotation', icon: 'document-text-outline' },
    { title: 'Users', icon: 'people-outline' },
    { title: 'Settings', icon: 'settings-outline' },
    { title: 'Reports', icon: 'bar-chart-outline' },
    { title: 'Pos Sale', icon: 'cart-outline' }
  ];

  constructor() {
    addIcons({
      menuOutline, notificationsOutline, gridOutline, receiptOutline,
      documentAttachOutline, listOutline, documentTextOutline,
      peopleOutline, settingsOutline, barChartOutline, cartOutline,
      refreshCircleOutline, helpCircleOutline, home, cardOutline, giftOutline
    });
  }

  ngOnInit() { }
}