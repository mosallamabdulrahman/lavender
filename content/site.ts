
import { SiteConfig, NavItem } from '../types';

export const siteConfig: SiteConfig = {
  name: 'استوديو لافندر',
  slogan: 'توثيق أرقى اللحظات والفعاليات في الكويت',
  email: 'hello@lavenderstudios.kw',
  phone: '+965 2200 1100',
  address: 'شرق، شارع جابر المبارك، مدينة الكويت، الكويت',
  socials: {
    instagram: 'https://instagram.com/lavenderstudios.kw',
    twitter: 'https://twitter.com/lavenderkw',
    linkedin: 'https://linkedin.com/company/lavender-studios-kuwait',
  },
};

export const navItems: NavItem[] = [
  { label: 'الرئيسية', path: '/' },
  { label: 'أعمالنا', path: '/work' },
  { label: 'من نحن', path: '/about' },
  { label: 'المدونة', path: '/blog' },
  { label: 'اتصل بنا', path: '/contact' },
];
