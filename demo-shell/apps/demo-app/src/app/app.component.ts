import {Component, Inject, OnInit} from '@angular/core';
import {I18NEXT_SERVICE, ITranslationService} from "angular-i18next";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {VersionModel} from "@demo-shell/model/demo";

@Component({
  selector: 'demo-shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  language = 'en';
  version?: Observable<string>;

  constructor(
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });
    this.version = this.httpClient.get<VersionModel>('/api/version').pipe(map((versionModel) => versionModel.version));
  }

  toggleLanguage() {
    const lang = this.language === 'de' ? 'en' : 'de';
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then(() => {
        this.updateState(lang);
        document.location.reload();
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }
}
