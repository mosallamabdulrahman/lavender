import { WorkItem } from '../types';
import { base } from '../src/utils/base';

export const portfolioItems: WorkItem[] = [
  {
    id: '2',
    title: 'تنسيق قاعة الراية الفاخرة',
    category: 'Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'إطلالة أبراج الكويت ليلاً',
    category: 'Event',
    imageUrl: base + 'assets/images/tour.jpg',
  },
  {
    id: '5',
    title: 'مجلس استقبال كبار الشخصيات',
    category: 'Wedding',
    imageUrl: base + 'assets/images/2.jpg',
  },
  {
    id: '6',
    title: 'تصوير ساعات رولكس الفاخرة',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'مهرجان التراث البحري',
    category: 'Event',
    imageUrl: base + 'assets/images/work.jpg',
  },
  {
    id: '9',
    title: 'مخيمات بر المطلاع الثقافية',
    category: 'Event',
    imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'استوديو الإضاءة الدرامي',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '12',
    title: 'قاعة احتفال ملكية بإضاءة ذهبية',
    category: 'Wedding',
    imageUrl: base + 'assets/images/oo.webp',
  },
];
