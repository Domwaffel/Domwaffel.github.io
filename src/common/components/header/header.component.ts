import {Component, OnDestroy} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {Subscription} from 'rxjs';
import {SECTIONS} from "../items/items";
import {AppLogo} from '../logo/app-logo.component';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
	  MatButtonModule,
	  RouterLink,
	  RouterLinkActive,
	  AppLogo,
	  NgTemplateOutlet,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnDestroy{
	private subscriptions = new Subscription();
	skipLinkHref: string | null | undefined;
	skipLinkHidden = true;
	
	get sections() {
		return SECTIONS;
	}
	
	get sectionKeys() {
		return SECTIONS_KEYS;
	}
	
	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
