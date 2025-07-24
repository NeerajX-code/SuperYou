// ✅ CORRECT: pass the icon as a reference, not JSX
import { House, Store, BookUser, MessageCircleQuestionMark } from "lucide-react";

export const navLinks = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Shop', to: '/shop', icon: Store },
  { label: 'About', to: '/about', icon: BookUser },
  { label: 'FAQ', to: '/faq', icon: MessageCircleQuestionMark },
];
