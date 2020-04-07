

export interface CurrencyProps {
  amount: number;
  currency: string;
  locale?: string;
}

export interface RelativeTimeProps {
  date: string;
  locale?: string;
}

export interface DurationProps {
  length: number;
  locale?: string;
}


export interface DatePrettyProps {
  date?: string;
  format?: 'l' | 'll' | 'lll' | string;
  locale?: string;
}
