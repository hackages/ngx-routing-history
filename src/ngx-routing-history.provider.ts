import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable()
export class NgxRoutingHistoryProvider {
  private history = [];

  constructor(private router: Router) {}

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.history = [...this.history, urlAfterRedirects];
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getUrlByIndex(index: number) {
    return this.history[index];
  }

  public getCurrentUrl(): string {
    return this.getUrlByIndex(this.history.length - 1);
  }

  public getPreviousUrl(): string {
    return this.getUrlByIndex(this.history.length - 2);
  }

  public go(url: string) {
    this.router.navigate([url]);
  }

  public back(
    {
      url,
      defaultRoute
    }: {
      url?: string;
      defaultRoute?: string;
    } = {url: this.getPreviousUrl()}
  ) {
    if (url || defaultRoute) {
      this.router.navigate([url || defaultRoute]);
      this.history = this.history.slice(0, this.history.lastIndexOf(url));
    }
  }
}
