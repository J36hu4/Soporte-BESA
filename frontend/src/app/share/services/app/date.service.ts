import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LocaleService {
    private currentLocale: string = 'es';

    get locale(): string {
        return this.currentLocale;
    }

    setLocale(locale: string) {
        this.currentLocale = locale;
    }
}
