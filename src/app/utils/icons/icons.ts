import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Injectable({
    providedIn: 'root',
  })
export class Icons {
  static readonly COFFEE: IconDefinition = faCoffee;
  static readonly USER: IconDefinition = faUser;
  static readonly HOME: IconDefinition = faHome;
  static readonly SETTINGS: IconDefinition = faCog;
  static readonly HEART: IconDefinition = faHeart;
  static readonly STAR: IconDefinition = faStar;
}
