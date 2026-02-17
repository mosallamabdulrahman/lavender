
import { SiteConfig, NavItem } from '../types';

export const siteConfig: SiteConfig = {
  name: 'استوديو لافندر',
  slogan: 'توثيق أرقى اللحظات والفعاليات في الكويت',
  email: 'hello@lavenderstudios.kw',
  phone: '+965 6900 3952',
  address: 'شرق، شارع جابر المبارك، مدينة الكويت، الكويت',
  socials: {
    instagram: 'https://instagram.com/lavenderstudios.kw',
    twitter: 'https://twitter.com/lavenderkw',
    linkedin: 'https://linkedin.com/company/lavender-studios-kuwait',
  },
};

export const navItems: NavItem[] = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'أعمالنا', path: '/work' },
  { label: 'الباقات', path: '/packages' },
  { label: 'المدونة', path: '/blog' },
  { label: 'اتصل بنا', path: '/contact' },
];
